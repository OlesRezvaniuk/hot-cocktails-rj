// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrJXGSdINosoIWdxONQIoZMt9Pxb_RjQg",
  authDomain: "drink-it-b302f.firebaseapp.com",
  projectId: "drink-it-b302f",
  storageBucket: "drink-it-b302f.appspot.com",
  messagingSenderId: "818764158266",
  appId: "1:818764158266:web:9e972f65ce6fecb8caec03",
  measurementId: "G-52XMF19KE9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const exportFirebase = { auth, storage, db, analytics };

export default exportFirebase;
