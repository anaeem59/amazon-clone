// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvpXga_C1fojO4wfw_AEIr_TnetPIvhWM",
  authDomain: "clone-75f08.firebaseapp.com",
  projectId: "clone-75f08",
  storageBucket: "clone-75f08.appspot.com",
  messagingSenderId: "632994505952",
  appId: "1:632994505952:web:437789e57749d253d5dc85",
  measurementId: "G-ZQJCSHW7E6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };