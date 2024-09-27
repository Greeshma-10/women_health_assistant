// app/api/chat.js
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { NextResponse } from 'next/server';

// Initialize Firebase Admin SDK
const app = initializeApp({
  credential: applicationDefault(),
});

const auth = getAuth(app);

<<<<<<< HEAD
export async function POST(req) {
=======
export default async function POST(req) {
>>>>>>> parent of 84ea840 (Revert "working on chatbot functionality")
  const authToken = req.headers.get('authorization')?.split('Bearer ')[1];

  if (!authToken) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const decodedToken = await auth.verifyIdToken(authToken);
    console.log('User ID:', decodedToken.uid);

    const { message } = await req.json();

    // Process the chat request (e.g., send to an AI service)
    const assistantResponse = `You said: ${message}`;

    return NextResponse.json({ message: assistantResponse });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
}