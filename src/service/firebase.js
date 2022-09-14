// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Your-API-KEY-HERE",
  authDomain: "formation-api-firebase.firebaseapp.com",
  databaseURL: "https://formation-api-firebase-default-rtdb.firebaseio.com/",
  projectId: "formation-api-firebase",
  storageBucket: "formation-api-firebase.appspot.com",
  messagingSenderId: "1013843866004",
  appId: "1:1013843866004:web:0862131cbdfe345bdc9f81",
  measurementId: "G-5VH9HLTQF6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase();

export default db;
