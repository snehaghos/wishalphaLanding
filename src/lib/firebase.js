// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJO_Edax_N0_yJ5LelGDbOWD-gKgZHdQQ",
  authDomain: "wishalpha-views.firebaseapp.com",
  projectId: "wishalpha-views",
  storageBucket: "wishalpha-views.firebasestorage.app",
  messagingSenderId: "318727720754",
  appId: "1:318727720754:web:5c44599497a53f9fa3912b",
  measurementId: "G-XCWD4SDX7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);