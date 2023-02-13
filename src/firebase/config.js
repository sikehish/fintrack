import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArMN5BeJ0gCJWaG3auenN2A8Jii4SCyB8",
  authDomain: "fintrk-98786.firebaseapp.com",
  projectId: "fintrk-98786",
  storageBucket: "fintrk-98786.appspot.com",
  messagingSenderId: "1019408768382",
  appId: "1:1019408768382:web:12854008794838c457672f",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
