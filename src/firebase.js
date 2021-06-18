import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAE2yixuRc-q5MVU3gEc9gKK-hImztWm7o",
  authDomain: "fbclone-d5a6b.firebaseapp.com",
  projectId: "fbclone-d5a6b",
  storageBucket: "fbclone-d5a6b.appspot.com",
  messagingSenderId: "569977741219",
  appId: "1:569977741219:web:88cf2115c027a751840416",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const storage = app.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
