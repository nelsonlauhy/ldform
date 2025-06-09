// firebaseConfig.js
const firebaseConfig = {
  apiKey: "AIzaSyB6-I9oj4hti5rsxN-dMZQdzeoXTsKX0Xg",
  authDomain: "ldform.firebaseapp.com",
  projectId: "ldform",
  storageBucket: "ldform.firebasestorage.app",
  messagingSenderId: "342526487179",
  appId: "1:342526487179:web:bddee95d3bada6deac428e"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
