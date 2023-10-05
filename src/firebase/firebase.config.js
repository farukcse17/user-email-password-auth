// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAABgx433aSb3qUukkffNJ6WsF7fQ8nIRo",
  authDomain: "email-user-password-auth-e8456.firebaseapp.com",
  projectId: "email-user-password-auth-e8456",
  storageBucket: "email-user-password-auth-e8456.appspot.com",
  messagingSenderId: "204525886401",
  appId: "1:204525886401:web:e4d3cd30739d5d7c0eed40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;