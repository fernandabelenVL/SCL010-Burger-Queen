import firebase from 'firebase/app';
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyDSIwPvdOsXTRC2OaUewTYCVCQtWAydU7U",
    authDomain: "burger-queens.firebaseapp.com",
    databaseURL: "https://burger-queens.firebaseio.com",
    projectId: "burger-queens",
    storageBucket: "burger-queens.appspot.com",
    messagingSenderId: "303576408225",
    appId: "1:303576408225:web:ceb0bf0f7aa612094290e0"
    
});

let db = firebase.firestore();
db.settings({timestampsInSnapshots:true});

export default db;