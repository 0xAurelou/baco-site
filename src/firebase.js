import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAcaDvi2L30Xu20PvaQDUh_eIjKlASzjKY",
    authDomain: "baco-mail.firebaseapp.com",
    databaseURL: "https://baco-mail.firebaseio.com",
    projectId: "baco-mail",
    storageBucket: "baco-mail.appspot.com",
    messagingSenderId: "222452349837",
    appId: "1:222452349837:web:219aa9113d35ba3c205bc4",
    measurementId: "G-GW50MYBL7H"

};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;
