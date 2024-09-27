import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Service from './components/service';
import About from './components/about';
import Listing from './components/listing';
import Blog from './components/blog';
import Footer from './components/footer';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase.js';
import chatBot from './chatbot'; // Your chatbot component or logic

export default function Home() {
  const [user, setUser] = useState(null); // To store the signed-in user

  // Listen for the authentication state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null); // No user is signed in
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Sign out error:', error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Doclab - Home</title>
        <meta name="description" content="This is a medical HTML template made by codewithsadee" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="preload" href="/assets/images/hero-banner.png" />
        <link rel="preload" href="/assets/images/hero-bg.png" />
        <script src="/assets/js/script.js" defer></script>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>

      {/* Your other components like header, hero section, etc. */}

      <Service />
      <About />
      <Listing />
      <Blog />
      <Footer />

      {/* Floating chatbot icon */}
      <div className="chatbot-icon">
        <Image
          src="/assets/images/chatbot.jpg" // Replace with your chatbot icon image path
          width={70}
          height={70}
          alt="Chatbot"
          onClick={() => {
            // Add the logic to open chatbot interface
            chatBot.open();
          }}
        />
      </div>

      {/* Back to Top Button */}
      <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
        <ion-icon name="chevron-up"></ion-icon>
      </a>

      <style jsx>{`
        .chatbot-icon {
          position: fixed;
          bottom: 20px;
          left: 20px;
          cursor: pointer;
          z-index: 1000; /* Ensure it stays on top */
        }

        .chatbot-icon:hover {
          opacity: 0.8;
          transform: scale(1.05);
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
}
