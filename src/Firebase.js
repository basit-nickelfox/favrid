import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "IzaSyD5Iy-QLs5r0S05NGsTMyXkPaqp5JCO2aI",
  authDomain: "myorg-b23a5.firebaseapp.com",
  databaseURL: "https://myorg-b23a5.firebaseio.com",
  projectId: "myorg-b23a5",
  storageBucket: "myorg-b23a5.appspot.com",
  messagingSenderId: "911471972623",
  appId: "1:911471972623:web:f864a064de9c1958"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
