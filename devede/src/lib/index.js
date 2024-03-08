// place files you want to import through the `$lib` alias in this folder
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, collection, } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKqartjUi_WKh0OwVovvZe4eMkkLayCG0",
  authDomain: "devede-c50a4.firebaseapp.com",
  projectId: "devede-c50a4",
  storageBucket: "devede-c50a4.appspot.com",
  messagingSenderId: "83707558735",
  appId: "1:83707558735:web:c9167fcdc7a7d18aab633a",
  measurementId: "G-5B37RG02NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

// Get a list of cities from your database
async function getMovies(db) {
  const movieList = collection(db, 'movies');

  return movieList;
}



const movies = [
  [
    {
      genre: "action",
      relesedate: "21/4/2024",
      titel: "Cat",
      watched: false
    },
    {
      genre: "drama",
      relesedate: "24/1/2024",
      titel: "dog",
      watched: false
    },
    {
      genre: "kids",
      relesedate: "24/12/2023",
      titel: "Santa",
      watched: false
    }



  ]
]