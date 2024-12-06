import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDadxHQZzIKzzdv1QJGpgGLZhv5Do8jyNk",
  authDomain: "firstproject-24fe9.firebaseapp.com",
  projectId: "firstproject-24fe9",
  storageBucket: "firstproject-24fe9.firebasestorage.app",
  messagingSenderId: "570499959338",
  appId: "1:570499959338:web:c64e8bb3500920d4f15153",
  measurementId: "G-D83K05MLMD"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);