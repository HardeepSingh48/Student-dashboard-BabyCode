// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyB4K2jgumR5TgEc4fm9gVf1mdt8xO5j6SA",
  authDomain: "babycodeassignment-22a86.firebaseapp.com",
  projectId: "babycodeassignment-22a86",
  storageBucket: "babycodeassignment-22a86.appspot.com", // fixed domain
  messagingSenderId: "545354628257",
  appId: "1:545354628257:web:8b1ee82b739bc2d19bc4e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
