import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAt0T99k_hZVDideEH7ce8jL9Heu1QMm-0",
    authDomain: "sgt-react.firebaseapp.com",
    databaseURL: "https://sgt-react.firebaseio.com",
    projectId: "sgt-react",
    storageBucket: "sgt-react.appspot.com",
    messagingSenderId: "1010787247312"
};
firebase.initializeApp(config);

const database = firebase.database();
export default database