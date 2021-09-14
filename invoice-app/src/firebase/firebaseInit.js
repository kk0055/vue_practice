import { initializeApp } from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuilXikLxvLN3VvGYbzFf74NoxrBo0_E8",
  authDomain: "invoice-app-dc4c0.firebaseapp.com",
  projectId: "invoice-app-dc4c0",
  storageBucket: "invoice-app-dc4c0.appspot.com",
  messagingSenderId: "736377652282",
  appId: "1:736377652282:web:8f2af9e0eb1ebccdc16103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);