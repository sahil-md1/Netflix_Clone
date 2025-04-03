// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTqxlPuOEeakuY2aVEOWiG0deV2ZR4DQE",
  authDomain: "netflix-clone-acc69.firebaseapp.com",
  projectId: "netflix-clone-acc69",
  storageBucket: "netflix-clone-acc69.firebasestorage.app",
  messagingSenderId: "321404492521",
  appId: "1:321404492521:web:f0b3772b07cab0bd17ee78",
  measurementId: "G-Y9Y4MDT2G6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
