// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxvAu6nX-DE-urG1Xf-BUmhUImxiiBAGw",
  authDomain: "furniturerenting.firebaseapp.com",
  projectId: "furniturerenting",
  storageBucket: "furniturerenting.appspot.com",
  messagingSenderId: "871699468707",
  appId: "1:871699468707:web:eef9dd442ef5506e934a16",
  measurementId: "G-4EZT328SGB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default { app };
