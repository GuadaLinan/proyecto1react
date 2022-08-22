import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA1M0fe9AXtxwNMCYQNNWF80m2m7BPFy4s",
  authDomain: "backendapprjs.firebaseapp.com",
  projectId: "backendapprjs",
  storageBucket: "backendapprjs.appspot.com",
  messagingSenderId: "44967228976",
  appId: "1:44967228976:web:2906abea490936d2e41ff5"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)