import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyBIe8HH3AGJhbJX5hhReo7tmDPqrjanjFE",
    authDomain: "react-payment-form.firebaseapp.com",
    projectId: "react-payment-form",
    storageBucket: "react-payment-form.appspot.com",
    messagingSenderId: "459474688424",
    appId: "1:459474688424:web:2a798cbe1146bd544a659d",
    measurementId: "G-QNLBLKF7NR",
});

const db = firebase.firestore();
export default db;
