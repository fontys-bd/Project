import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Put these in an env file (Properly! -> .mjs destructuring)
const firebaseConfig = {
  apiKey: "AIzaSyC1u9YMqY_fG-C4xCq62hAPiRQMFK7Nt18",
  authDomain: "blinddate-381513.firebaseapp.com",
  projectId: "blinddate-381513",
  storageBucket: "blinddate-381513.appspot.com",
  messagingSenderId: "802932977941",
  appId: "1:802932977941:web:710b86663c664be865791c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
