import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyCMYXTTzU2bvLNyG05PtxgFBPKRxfkt2hc",
  authDomain: "shop-1cc63.firebaseapp.com",
  projectId: "shop-1cc63",
  storageBucket: "shop-1cc63.appspot.com",
  messagingSenderId: "322649637277",
  appId: "1:322649637277:web:2679cb34abc806769f2f74",
  measurementId: "G-L466BE06GG"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

const auth = firebase.auth();

export{ db, auth };
  