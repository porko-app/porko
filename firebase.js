// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Firebase configuration
  const firebaseConfig = {
    apiKey: "AAIzaSyChAofMIo_rp1hdtAlrYjnR4CggDqJnWGA",
    authDomain: "porko-app.firebaseapp.com",
    databaseURL: "https://porko-app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "porko-app",
    storageBucket: "porko-app.firebasestorage.app",
    messagingSenderId: "968129139984",
    appId: "1:968129139984:web:d079868e547a263733c195",
    measurementId: "G-3WLMV4DYHF"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

signInAnonymously(auth)
    .then(() => {
        if (window.location.hostname === "localhost") {
            console.log("User signed in anonymously");
        }
    })
    .catch((error) => {
        console.error("Error signing in anonymously:", error);
    });

export { database, auth };

import { setLogLevel } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

// Set Firebase log level to debug
setLogLevel("debug");