// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNAavEitvUJWqc_TmgIxp5qbn-U76o9-k",
  authDomain: "success-track-9ed75.firebaseapp.com",
  projectId: "success-track-9ed75",
  storageBucket: "success-track-9ed75.firebasestorage.app",
  messagingSenderId: "96419767078",
  appId: "1:96419767078:web:feb92595a99104a24117e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;