import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCun6b8vNJjI9fimD4PLq7O6R70xKEWK-A",
  authDomain: "catch-of-the-day-adrien.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-adrien.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
