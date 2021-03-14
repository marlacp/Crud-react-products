import firebase from 'firebase';
import 'firebase/firestore';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCYw93Zb2ixOvkQ-joyNPG0rICHUYA_JSs",
    authDomain: "product-crud-react.firebaseapp.com",
    projectId: "product-crud-react",
    storageBucket: "product-crud-react.appspot.com",
    messagingSenderId: "360313064214",
    appId: "1:360313064214:web:8829dd89cbf9f9a5bede37"
  };
  // Initialize Firebase
  const fb= firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore() ;