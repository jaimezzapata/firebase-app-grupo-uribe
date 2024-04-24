import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFfnYHCPNR4oztB_u7X2JfBAWUJA4L_PU",
  authDomain: "gestion-app-back-jazv2304.firebaseapp.com",
  projectId: "gestion-app-back-jazv2304",
  storageBucket: "gestion-app-back-jazv2304.appspot.com",
  messagingSenderId: "439187688818",
  appId: "1:439187688818:web:0d83468ec8b370dc88e1eb",
};
const app = initializeApp(firebaseConfig);
export const initDatabase = getFirestore(app);
export const initStorage = getStorage(app);
export const initAuth = getAuth(app);
