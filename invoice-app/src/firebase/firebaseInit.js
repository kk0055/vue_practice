import firebase from "firebase/app";
import  "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuilXikLxvLN3VvGYbzFf74NoxrBo0_E8",
  authDomain: "invoice-app-dc4c0.firebaseapp.com",
  projectId: "invoice-app-dc4c0",
  storageBucket: "invoice-app-dc4c0.appspot.com",
  messagingSenderId: "736377652282",
  appId: "1:736377652282:web:8f2af9e0eb1ebccdc16103"
};

const firebaseAPp = firebase.initializeApp(firebaseConfig);

export default firebaseAPp.firestore();