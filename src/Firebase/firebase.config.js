import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvr2gMDDEVjXdb6XTM6OZtWC8VEYUkTJA",
  authDomain: "ashabuljannat55.firebaseapp.com",
  databaseURL: "https://ashabuljannat55.firebaseio.com",
  projectId: "ashabuljannat55",
  storageBucket: "ashabuljannat55.appspot.com",
  messagingSenderId: "483632580811",
  appId: "1:483632580811:web:0fe7dfa30743b19d87334e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
