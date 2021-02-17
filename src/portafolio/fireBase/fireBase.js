import firebase from 'firebase/app'
import 'firebase/firebase-firestore';
var firebaseConfig = {
    apiKey: "AIzaSyCBYZIncQF0HAyGsDpiviqTKL4MJdI1axU",
    authDomain: "portafolio-79c14.firebaseapp.com",
    projectId: "portafolio-79c14",
    storageBucket: "portafolio-79c14.appspot.com",
    messagingSenderId: "592874059825",
    appId: "1:592874059825:web:80187fc693a3a064313d10",
    measurementId: "G-RZNNVRDTRD"
  };
  // Initialize Firebase
const fb=firebase.initializeApp(firebaseConfig);

const db=fb.firestore()
export default db 

 