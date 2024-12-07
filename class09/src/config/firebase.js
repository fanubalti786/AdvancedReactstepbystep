import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyB2f3jVJnJpcewP6d609xlT19zwkGsdFMY",
  authDomain: "dummy-dev-a7945.firebaseapp.com",
  projectId: "dummy-dev-a7945",
  storageBucket: "dummy-dev-a7945.firebasestorage.app",
  messagingSenderId: "931628685936",
  appId: "1:931628685936:web:b51283a284d9b57359b2b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)