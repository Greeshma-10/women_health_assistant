'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // useRouter for redirection
import { Button, TextField, Box, Typography } from '@mui/material';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '/firebase'; // Adjust the Firebase import path

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter(); // For redirection

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Signed in:', userCredential.user);
      router.push('/'); // Redirect to index.js after sign-in
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Signed up:', userCredential.user);
      router.push('/'); // Redirect to index.js after sign-up
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google sign-in successful:', result.user);
      router.push('/'); // Redirect to index.js after Google sign-in
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async () => {
    if (isSignUp) {
      await handleSignUp();
    } else {
      await handleSignIn();
    }
  };

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', paddingBottom: '20px' }} // Adjust minHeight and padding
      id="background"
    >
      <Typography
        variant="h4"
        style={{ color: 'black', fontSize: '1.5rem', fontFamily: 'Times New Roman', fontWeight: '900' }}
        gutterBottom
      >
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ backgroundColor: '#FAF9F6', color: 'black', width: 400 }}
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ backgroundColor: '#FAF9F6', color: 'black', width: 400 }}
        margin="normal"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          backgroundColor: '#008080',
          color: 'white',
          width: 400,
          margin: '10px 0',
        }}
      >
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </Button>
      <Button
        variant="contained"
        onClick={handleGoogleSignIn}
        sx={{ marginTop: 2, backgroundColor: '#008080', color: 'white', width: 400 }}
      >
        Sign In with Google
      </Button>

      <Button
        variant="text"
        onClick={() => setIsSignUp(!isSignUp)}
        sx={{ marginTop: 2, color: '#008080' }}
      >
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </Button>
    </Box>
  );
}
