import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCsSL1lW-n_kGeHA1ywz7yMzwaRVJ_EPjY",
  authDomain: "house-marketplace-app-b3575.firebaseapp.com",
  projectId: "house-marketplace-app-b3575",
  storageBucket: "house-marketplace-app-b3575.appspot.com",
  messagingSenderId: "239385286688",
  appId: "1:239385286688:web:b6aded440c4397ed334445"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()