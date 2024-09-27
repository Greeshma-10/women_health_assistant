'use client';

import { Box, Button, CircularProgress, Stack, TextField, Typography, Avatar, IconButton } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase.js';
import { styled } from '@mui/system';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


// Styled Components
const ChatContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FEE3E3', // Light Pink background
  padding: '20px',
  boxSizing: 'border-box',
}));

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: '#F08080', // Light Lavender
  borderRadius: '12px',
  padding: '10px',
  marginBottom: '10px',
  textAlign: 'center',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Softer shadow
  width: '100%',
  maxWidth: '300px',
}));

const ChatBox = styled(Stack)(({ theme }) => ({
  direction: 'column',
  width: '100%',
  maxWidth: '800px',
  height: '80vh',
  border: '1px solid #E4B8D4', // Soft Lavender border
  overflow: 'auto',
  padding: '20px',
  spacing: 3,
  backgroundColor: ' #F5F5F5', 
  borderRadius: '12px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)', // Softer shadow
}));

const MessageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: '10px',
  transition: 'all 0.3s ease-in-out',
}));

const AssistantMessage = styled(Box)(({ theme }) => ({
  backgroundColor: '#F08080', // Light Lavender for assistant messages
  color: '#FFFFFF',
  borderRadius: '16px',
  padding: '12px 16px',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)', // Softer shadow
  maxWidth: '80%',
  display: 'flex',
  alignItems: 'center', // Center items vertically
  position: 'relative', // Allow for absolute positioning of the icon
}));


const UserMessage = styled(Box)(({ theme }) => ({
  backgroundColor: '#F3A4A4', // Coral for user messages
  color: '#FFFFFF',
  borderRadius: '16px',
  padding: '12px 16px',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
  maxWidth: '80%',
  display: 'flex',
  alignItems: 'flex-start',
}));

const Timestamp = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  color: '#A3A3A3', // Light Gray for timestamps
  marginTop: '4px',
  marginLeft: '8px',
}));

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hi! I'm the med support assistant. How can I help you today?`,
      timestamp: new Date(),
    },
  ]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setIsLoading(true);
    const newMessage = { role: 'user', content: message, timestamp: new Date() };

    setMessages((prevMessages) => [
      ...prevMessages,
      newMessage,
      { role: 'assistant', content: '', timestamp: new Date() }, // Placeholder for loading
    ]);
    setMessage('');

    try {
      const response = await fetch('/api/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const assistantResponse =
        data.message ||
        "Apologies, I'm unable to process your request at this time.";

      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { role: 'assistant', content: assistantResponse.replace(/\*/g, ''), timestamp: new Date() },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: 'assistant',
          content: "I'm sorry, but I encountered an error. Please try again later.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };


  return (
    <ChatContainer>
      <Header>
        <Typography variant="h5" sx={{ color: 'white', marginBottom: '0px' }}>
          MAYA
        </Typography>
      </Header>

      <ChatBox>
        <Stack direction={'column'} spacing={2} flexGrow={2} overflow="auto" maxHeight="100%">
          {messages.map((msg, index) => (
            <MessageContainer
              key={index}
              justifyContent={msg.role === 'assistant' ? 'flex-start' : 'flex-end'}
              aria-label={`${msg.role === 'assistant' ? 'Assistant' : 'You'} message`}
            >
              {msg.role === 'assistant' && (
                <Avatar sx={{ bgcolor: '#F29898', marginRight: '8px', width: 24, height: 24 }}>A</Avatar>
              )}
              {msg.role === 'assistant' ? (
                <AssistantMessage>
                  <Typography variant="body1">
                    <strong>{msg.content.split('\n')[0]}</strong>
                    {msg.content.split('\n').slice(1).map((paragraph, index) => (
                      <p key={index} style={{ marginBottom: '20px' }}>{paragraph}</p>
                    ))}
                  </Typography>
                  {index !== 0 && ( // Check if it's not the first message
                  <IconButton
                  size="small"
                  sx={{ position: 'absolute', top: '10px', right: '10px', color: '#666666' }}
                  onClick={() => copyToClipboard(msg.content)}
                  aria-label="Copy message"
                  >
                  <ContentCopyIcon fontSize="small" />
                  </IconButton>
                  )}
                </AssistantMessage>
              ) : (
                <UserMessage>
                  <Typography variant="body1">{msg.content}</Typography>
                </UserMessage>
              )}

              <Timestamp>
                {msg.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                }).replace('AM', 'am').replace('PM', 'pm')}
              </Timestamp>
            </MessageContainer>
          ))}
          <div ref={messagesEndRef} />
        </Stack>

        <Stack direction={'row'} spacing={2} alignItems="center" sx={{ marginTop: '10px' }}>
          <TextField
            label="Type a message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            InputProps={{
              sx: {
                color: '#888888',
              },
            }}
            InputLabelProps={{
              sx: {
                color: '#666666',
              },
            }}
            sx={{
              bgcolor: '#F8D9E9', // Light Pink input background
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#F8D9E9',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#EAB8E4', // Soft Lavender border
                },
                '&:hover fieldset': {
                  borderColor: '#888888',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#EAB8E4',
                },
              },
            }}
            aria-label="Message input"
          />
          <Button
            variant="contained"
            onClick={sendMessage}
            disabled={isLoading}
            sx={{
              color: '#ffffff',
              bgcolor: '#F08080', // Coral button background
              '&:hover': {
                backgroundColor: '#F3A4A4',
              },
              transition: 'all 0.2s ease',
              padding: '10px 20px',
              borderRadius: '8px',
            }}
            aria-label="Send message"
          >
            {isLoading ? <CircularProgress size={24} sx={{ color: '#ffffff' }} /> : 'SEND'}
          </Button>
        </Stack>
      </ChatBox>
    </ChatContainer>
  );
}
