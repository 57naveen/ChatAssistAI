// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBWJ6efk0CSjakp8rJ1mOJzGmgni6j3Xg",
  authDomain: "chatassistai-56ce1.firebaseapp.com",
  projectId: "chatassistai-56ce1",
  storageBucket: "chatassistai-56ce1.firebasestorage.app",
  messagingSenderId: "906009037521",
  appId: "1:906009037521:web:2769eafbf54e4d496b13f0",
  measurementId: "G-S89W7Z4E2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);