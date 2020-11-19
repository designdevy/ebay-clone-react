import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDhJBAWHW31SKfGri0vlBOWJbx-1RQ_K7k",
    authDomain: "shop-ec201.firebaseapp.com",
    databaseURL: "https://shop-ec201.firebaseio.com",
    projectId: "shop-ec201",
    storageBucket: "shop-ec201.appspot.com",
    messagingSenderId: "989671942443",
    appId: "1:989671942443:web:8893ebc15eeda29be67d6e",
    measurementId: "G-XDM54Z8YDM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };