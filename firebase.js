// Import the functions you need from the SDKs you need
import { initializeApp ,getApps } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider} from 'firebase/auth';

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



// Initialize Firebase Authentication and get a reference to the service
let app;
if (!initializeApp.length) {
    app = initializeApp(firebaseConfig);
} else {
    app = initializeApp(firebaseConfig, 'chatbot'); // Provide a unique name if initializing multiple apps
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export default app;
export { auth, googleProvider };