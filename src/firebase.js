// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVq1nFSKegNOtuZdfNuhRhvjw4k-PVmtk",
  authDomain: "facebook-messenger-clone-5572a.firebaseapp.com",
  projectId: "facebook-messenger-clone-5572a",
  storageBucket: "facebook-messenger-clone-5572a.appspot.com",
  messagingSenderId: "11298961770",
  appId: "1:11298961770:web:0d12f97e86c2bcb2a44d13",
  measurementId: "G-B1C44X9TX2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;
