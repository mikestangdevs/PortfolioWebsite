// Import the functions from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5UgUG3kn7OHYRkOMaxNv1WxYOETvHsHQ",
  authDomain: "itsmikestang.firebaseapp.com",
  projectId: "itsmikestang",
  storageBucket: "itsmikestang.appspot.com",
  messagingSenderId: "703521344182",
  appId: "1:703521344182:web:d575ccb83ab82d710e7417",
  measurementId: "G-960FNJRZEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);