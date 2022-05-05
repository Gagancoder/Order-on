import firebase from 'firebase';
//require('@firebase/firestore');
var firebaseConfig = {
  apiKey: "AIzaSyCIe9MvVTp40r1uoggNfioOEvj5kBvc2F8",
  authDomain: "order-on-storage.firebaseapp.com",
  databaseURL: "https://order-on-storage-default-rtdb.firebaseio.com",
  projectId: "order-on-storage",
  storageBucket: "order-on-storage.appspot.com",
  messagingSenderId: "494921097268",
  appId: "1:494921097268:web:58078ec215c304756e2a61"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()