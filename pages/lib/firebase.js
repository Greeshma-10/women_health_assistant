// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBARGK0YrWeHbVzUsxf1e_G6CUqSeP-Y9Y",
  authDomain: "women-health-assitance.firebaseapp.com",
  projectId: "women-health-assitance",
  storageBucket: "women-health-assitance.appspot.com",
  messagingSenderId: "718628456069",
  appId: "1:718628456069:web:4d004aefcfdf2e1c38cbec"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };