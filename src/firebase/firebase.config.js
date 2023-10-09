// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBobtwXLYgIK_xDtmHJz01n8qUf77cbsNc",
  authDomain: "wedding-event-management-683b3.firebaseapp.com",
  projectId: "wedding-event-management-683b3",
  storageBucket: "wedding-event-management-683b3.appspot.com",
  messagingSenderId: "1023889994335",
  appId: "1:1023889994335:web:6dbd33eec42ace2c1261ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default app;