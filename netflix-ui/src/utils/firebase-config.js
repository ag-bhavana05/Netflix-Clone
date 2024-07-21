import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCR5WHc8WdP5LVU2tixRO_Gp4kF8p1dszw",
  authDomain: "react-netflix-clone-80e4c.firebaseapp.com",
  projectId: "react-netflix-clone-80e4c",
  storageBucket: "react-netflix-clone-80e4c.appspot.com",
  messagingSenderId: "241592638908",
  appId: "1:241592638908:web:d6aa977ef2f861b3c51fb9",
  measurementId: "G-GNH292419T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);