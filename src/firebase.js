import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCa18r722edHEzmnjZAJiEoTrhpWnN-UpQ',
  authDomain: 'messenger-ecfb8.firebaseapp.com',
  databaseURL: 'https://messenger-ecfb8.firebaseio.com',
  projectId: 'messenger-ecfb8',
  storageBucket: 'messenger-ecfb8.appspot.com',
  messagingSenderId: '272183015103',
  appId: '1:272183015103:web:8acc52b4c847e38008b80a',
  measurementId: 'G-6WVP2MRCZV',
});

const db = firebaseApp.firestore();
export default db;
