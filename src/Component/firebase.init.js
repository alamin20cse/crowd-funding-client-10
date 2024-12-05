// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnc1Y5F0ImainCmVyLeAG6BMLFm2Y8uYI",
  authDomain: "crowd-funding-client-68e23.firebaseapp.com",
  projectId: "crowd-funding-client-68e23",
  storageBucket: "crowd-funding-client-68e23.firebasestorage.app",
  messagingSenderId: "292786070997",
  appId: "1:292786070997:web:a2c1335aea28a6db2d895c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);