import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1u9YMqY_fG-C4xCq62hAPiRQMFK7Nt18",
  authDomain: "blinddate-381513.firebaseapp.com",
  projectId: "blinddate-381513",
  storageBucket: "blinddate-381513.appspot.com",
  messagingSenderId: "802932977941",
  appId: "1:802932977941:web:710b86663c664be865791c",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const _auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const storage = firebase.storage();
export const db = firebase.firestore();
