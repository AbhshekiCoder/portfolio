// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYHATqUkXFGCpAREH2-7rnaahnRewVkW4",
  authDomain: "portfolio-f133c.firebaseapp.com",
  databaseURL: "https://portfolio-f133c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-f133c",
  storageBucket: "portfolio-f133c.appspot.com",
  messagingSenderId: "1083037956769",
  appId: "1:1083037956769:web:746a39c45d402036bf0ee0",
  measurementId: "G-487Z726N7M"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 export default app;
 export const storage = getStorage(app);
 