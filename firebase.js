// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGFPyxIenzeylN3idQpssC5249okaGHjk",
  authDomain: "cloudmessagingnuxt.firebaseapp.com",
  projectId: "cloudmessagingnuxt",
  storageBucket: "cloudmessagingnuxt.appspot.com",
  messagingSenderId: "54627203764",
  appId: "1:54627203764:web:677521d3491086b6d135e1",
  measurementId: "G-T4ZE7SLYEL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);