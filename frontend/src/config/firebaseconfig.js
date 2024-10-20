// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq4ruaQTUwBwdMNdS44Hmba-u8QCIoX48",
  authDomain: "brain-bridges.firebaseapp.com",
  projectId: "brain-bridges",
  storageBucket: "brain-bridges.appspot.com",
  messagingSenderId: "211638674213",
  appId: "1:211638674213:web:d14a1a35edd74bf61b70cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const provider= new GoogleAuthProvider();
 export {auth,provider};