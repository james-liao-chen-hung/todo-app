import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCPfCivLzy1lEDQdJnibxFUH_7VRhXRGx4",
    authDomain: "todo-app-24fb9.firebaseapp.com",
    databaseURL: "https://todo-app-24fb9.firebaseio.com",
    projectId: "todo-app-24fb9",
    storageBucket: "todo-app-24fb9.appspot.com",
    messagingSenderId: "715726991864",
    appId: "1:715726991864:web:e818ad68d29c08167e660d",
    measurementId: "G-Y2D0G90QBL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
  
const db = firebaseApp.firestore();

export default db;