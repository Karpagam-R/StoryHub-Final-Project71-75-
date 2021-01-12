import firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBmZ2gLq_xK27JrIpjEir6c4BHPFcGlhhs",
  authDomain: "storyhub-20109.firebaseapp.com",
  projectId: "storyhub-20109",
  storageBucket: "storyhub-20109.appspot.com",
  messagingSenderId: "966934567696",
  appId: "1:966934567696:web:638ee0f38e3cada2692395"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();