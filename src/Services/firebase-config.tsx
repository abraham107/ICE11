// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHHKDZaW8F_c683QMyMoZyizDP46Aw00A",
  authDomain: "comp2112-f2022.firebaseapp.com",
  projectId: "comp2112-f2022",
  storageBucket: "comp2112-f2022.appspot.com",
  messagingSenderId: "907593635327",
  appId: "1:907593635327:web:ecdcdf3368edb85fe043ca",
  databaseURL: "https://comp2112-f2022-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
export const db = getDatabase(app);
