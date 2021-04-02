
import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDDR0aeUWQrPbMroa605uEgjVRGuq3c0ho",
    authDomain: "vue-firebase-55049.firebaseapp.com",
    projectId: "vue-firebase-55049",
    storageBucket: "vue-firebase-55049.appspot.com",
    messagingSenderId: "630458146387",
    appId: "1:630458146387:web:09c37863ae129cf6cff0a6"
};

//init firebase
firebase.initializeApp(firebaseConfig)
// init filestore service
var db = firebase.firestore();
const timestamp=firebase.firestore.FieldValue.serverTimestamp


export { db ,timestamp}