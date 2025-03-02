// Import Firebase SDK and necessary services
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
    // Your Firebase configuration goes here
    apiKey: "AIzaSyCYr-v_PO32BboQ1wuitM_t-cvtCyhASXU",
    authDomain: "clinic-ms-e112f.firebaseapp.com",
    projectId: "clinic-ms-e112f",
    storageBucket: "clinic-ms-e112f.appspot.com",
    messagingSenderId: "527483927965",
    appId: "1:527483927965:web:3193e21a26bb6b1dca8374",
  };

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
