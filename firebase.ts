import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Analytics, getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "next-dmtims-website.firebaseapp.com",
  projectId: "next-dmtims-website",
  storageBucket: "next-dmtims-website.appspot.com",
  messagingSenderId: "359267790433",
  appId: "1:359267790433:web:97e7c0d83b7ce120494420",
  measurementId: ""
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

let analytics: Analytics;

if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}


export { app, db, analytics, storage }
