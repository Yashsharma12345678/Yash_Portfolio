import { initializeApp, getApp , getApps} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjZ3f3bLVvFZHeyP7bePoZyjnYLGX4JYc",
  authDomain: "myportfolio-3ee51.firebaseapp.com",
  projectId: "myportfolio-3ee51",
  storageBucket: "myportfolio-3ee51.appspot.com",
  messagingSenderId: "263152979494",
  appId: "1:263152979494:web:08ed8d13f1e0361b8ce0e7",
  measurementId: "G-8TY5SYRSLY"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig):getApp();
const db = getFirestore();
const storage = getStorage();

export { app,db,storage};