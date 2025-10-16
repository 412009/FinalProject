import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC00hMOp5Eee7WXdEb9_gYP4al6po0k9mk",
  authDomain: "alex-31824.firebaseapp.com",
  projectId: "alex-31824",
  storageBucket: "alex-31824.firebasestorage.app",
  messagingSenderId: "994237004243",
  appId: "1:994237004243:web:69998db7b909f1e48f9726",
  measurementId: "G-DQXHTFK44J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);