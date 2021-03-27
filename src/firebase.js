import firebase from "firebase";
import "firebase/storage";

const config = {
 apiKey: "AIzaSyDQA06nEyN0elKu7Megt8oK_ReGk6COc64",
    authDomain: "profile-website-3cadb.firebaseapp.com",
    databaseURL: "https://profile-website-3cadb-default-rtdb.firebaseio.com",
    projectId: "profile-website-3cadb",
    storageBucket: "profile-website-3cadb.appspot.com",
    messagingSenderId: "262767592287",
    appId: "1:262767592287:web:d918c5074248332d4a6cea",
    measurementId: "G-SKV8BQYVEP"

};

firebase.initializeApp(config);
export default firebase;



