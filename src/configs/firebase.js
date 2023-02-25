
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC-8Z2UZsb-3-KHlIamTG__eav-A6DZ-ow",
  authDomain: "loginotp-32196.firebaseapp.com",
  projectId: "loginotp-32196",
  storageBucket: "loginotp-32196.appspot.com",
  messagingSenderId: "674984222725",
  appId: "1:674984222725:web:cb373985a2fdf909d53c6c",
  measurementId: "G-RS3DL8YXKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}