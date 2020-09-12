// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiYqpA2Xf0n22JNTr_gXsrUPFU64kP_zs",
  authDomain: "e-commerce-2fdd5.firebaseapp.com",
  databaseURL: "https://e-commerce-2fdd5.firebaseio.com",
  projectId: "e-commerce-2fdd5",
  storageBucket: "e-commerce-2fdd5.appspot.com",
  messagingSenderId: "529839296872",
  appId: "1:529839296872:web:a9c66be0ca5d1db3b606dd",
  measurementId: "G-VBT5F6SKJT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
