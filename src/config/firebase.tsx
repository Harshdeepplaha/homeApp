// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrxSMoy6CaPXnqaSjIJMSdRC16i0czys0",
  authDomain: "testauth-b3458.firebaseapp.com",
  projectId: "testauth-b3458",
  databaseURL: "https://testauth-b3458-default-rtdb.firebaseio.com/",

  storageBucket: "testauth-b3458.appspot.com",
  messagingSenderId: "1087168575778",
  appId: "1:1087168575778:web:05e399547b88523663cd7b"
};


// Initialize Firebase
let app;
if (firebase.getApps.length ===0){
    app =  firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.getApp(app)
}
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db =  getDatabase(app)

export  default firebase;