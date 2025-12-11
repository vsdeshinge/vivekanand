// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDq-aASeAoe8LiBo8BSDnq4Iz_S9O8r2p0",
  authDomain: "maharshistudio-e9391.firebaseapp.com",
  databaseURL: "https://maharshistudio-e9391-default-rtdb.firebaseio.com",
  projectId: "maharshistudio-e9391",
  storageBucket: "maharshistudio-e9391.firebasestorage.app",
  messagingSenderId: "413896281800",
  appId: "1:413896281800:web:bdbd4ad001310519f55ffd",
  measurementId: "G-ZQERPV1LQ6",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
