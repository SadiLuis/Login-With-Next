import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcCSo1ud7urLXEsVXVstzWkVp-tZcvSfo",
  authDomain: "login-nextjs-59ecd.firebaseapp.com",
  projectId: "login-nextjs-59ecd",
  storageBucket: "login-nextjs-59ecd.appspot.com",
  messagingSenderId: "69951563614",
  appId: "1:69951563614:web:1caf10b6c0add843edd1cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)