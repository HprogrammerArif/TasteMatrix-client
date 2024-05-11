// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJoMMU0mzKmXmXsGbyDQnRATCUcnm3xJo",
  authDomain: "tastematrix.firebaseapp.com",
  projectId: "tastematrix",
  storageBucket: "tastematrix.appspot.com",
  messagingSenderId: "933186519403",
  appId: "1:933186519403:web:70044070478b66d28b0c2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
