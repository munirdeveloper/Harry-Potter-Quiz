// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDY4KZIfsvqPXjAMWk3MEo_aq5ysVy3C0Q",
  authDomain: "harry-potter-990b2.firebaseapp.com",
  projectId: "harry-potter-990b2",
  storageBucket: "harry-potter-990b2.appspot.com",
  messagingSenderId: "20621248788",
  appId: "1:20621248788:web:b2a4f130c4ee39f7cc1a01",
  measurementId: "G-9NEEWQFSYZ",
  databaseURL: "https://harry-potter-990b2-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);