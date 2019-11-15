import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyCy0z0bcLp4wFHOakaL6T7mziCcyfTQq0o",
    authDomain: "my-project-db-89344.firebaseapp.com",
    databaseURL: "https://my-project-db-89344.firebaseio.com",
    projectId: "my-project-db-89344",
    storageBucket: "my-project-db-89344.appspot.com",
    messagingSenderId: "487482984875",
    appId: "1:487482984875:web:d5e286fd56760c5826eaee",
    measurementId: "G-D8EPDX9XJK"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;