import { initializeApp } from 'firebase/app';

// Use your accounts config

const firebaseConfig = {
    apiKey: "AIzaSyBeT6OI08eC_yoGXMGGossefv0-cX1YDCU",
    authDomain: "bt3103-amri.firebaseapp.com",
    projectId: "bt3103-amri",
    storageBucket: "bt3103-amri.appspot.com",
    messagingSenderId: "992683348535",
    appId: "1:992683348535:web:6913dff9be64e3c49265b2",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;



