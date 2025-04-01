// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "autozone-alberta.firebaseapp.com",
  projectId: "autozone-alberta",
  storageBucket: "autozone-alberta.firebasestorage.app",
  messagingSenderId: "1094532093693",
  appId: "1:1094532093693:web:6ccae1f380b12f519d9094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);