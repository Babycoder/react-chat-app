// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth} from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAntc4vbQYus2LuHX7Lz4fLiejaMxhoHpY",
  authDomain: "chat-app-93e2e.firebaseapp.com",
  projectId: "chat-app-93e2e",
  storageBucket: "chat-app-93e2e.appspot.com",
  messagingSenderId: "313606693499",
  appId: "1:313606693499:web:6b598bcb1f1555124df8de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);