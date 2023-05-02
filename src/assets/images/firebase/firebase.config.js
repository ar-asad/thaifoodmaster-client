// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

};

// const firebaseConfig = {
//     apiKey: "AIzaSyCLtr6NpsUfSUtRu_6upZ35ZMMC2IODSM8",
//     authDomain: "thaifoodmaster-302a1.firebaseapp.com",
//     projectId: "thaifoodmaster-302a1",
//     storageBucket: "thaifoodmaster-302a1.appspot.com",
//     messagingSenderId: "971792564410",
//     appId: "1:971792564410:web:da1a8a6264f2f332ac0283"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;