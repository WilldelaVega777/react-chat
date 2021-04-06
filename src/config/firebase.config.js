import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyARr2yP84jC3u-jo7gQLpyrM-jui-6xe_g",
    authDomain: "wv-discord.firebaseapp.com",
    projectId: "wv-discord",
    storageBucket: "wv-discord.appspot.com",
    messagingSenderId: "724410665099",
    appId: "1:724410665099:web:662269841f9106a6276c8e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;
