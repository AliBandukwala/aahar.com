import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDRx4ZDFjTsbIMQAveUb4qNPuhwERUXL64",
    authDomain: "dietrixweb.firebaseapp.com",
    databaseURL: "https://dietrixweb.firebaseio.com",
    projectId: "dietrixweb",
    storageBucket: "",
    messagingSenderId: "218820329080",
    appId: "1:218820329080:web:02e3d28068e41632"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;