import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFH_U8Mh3H0vfghm95h-5cU6F-Yc-b7Gk",
  authDomain: "scoby-70e23.firebaseapp.com",
  projectId: "scoby-70e23",
  storageBucket: "scoby-70e23.appspot.com",
  messagingSenderId: "694042151333",
  appId: "1:694042151333:web:122bd302fa6307ac25404c",
  measurementId: "G-W4332BZR9G",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
