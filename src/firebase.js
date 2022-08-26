// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCPzsHa7dPqQXMBxkhpXqatR7b4L8MmBo",
  authDomain: "fir-auth-16310.firebaseapp.com",
  projectId: "fir-auth-16310",
  storageBucket: "fir-auth-16310.appspot.com",
  messagingSenderId: "954776115877",
  appId: "1:954776115877:web:820d1afafa8e0052878b4c",
  measurementId: "G-0EJLE6JSFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
// const analytics = getAnalytics(app);