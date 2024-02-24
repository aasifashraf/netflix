// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf5jgfnVEMR02nb1Ce8zbAer5mJr2eZPI",
  authDomain: "netflixmoviestream.firebaseapp.com",
  projectId: "netflixmoviestream",
  storageBucket: "netflixmoviestream.appspot.com",
  messagingSenderId: "191648041148",
  appId: "1:191648041148:web:fe38f074b4e6bb6bf5e8b9",
  measurementId: "G-H33NZMX5NM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
