import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1pK4N9QhrpAEOZ2oq95xo6qR4mZhLc8s",
  authDomain: "laptop-shop-4a2eb.firebaseapp.com",
  projectId: "laptop-shop-4a2eb",
  storageBucket: "laptop-shop-4a2eb.appspot.com",
  messagingSenderId: "1080919856992",
  appId: "1:1080919856992:web:2fa58862ab7e3a2dad7005",
  measurementId: "G-JHYD3FRQ1D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()