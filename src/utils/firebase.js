// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxx8lB01AdFx6VOzncO0CjLVEuBt5BmGM",
  authDomain: "netflixgpt-dbac2.firebaseapp.com",
  projectId: "netflixgpt-dbac2",
  storageBucket: "netflixgpt-dbac2.appspot.com",
  messagingSenderId: "399040475386",
  appId: "1:399040475386:web:fdb4e3dfcc80f680a85943",
  measurementId: "G-625DYGJDZK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
