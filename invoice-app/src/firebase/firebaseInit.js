import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();