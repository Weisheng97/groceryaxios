import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAZlg9iTAO6UbmOkmEZocdn3i4d2wbzBAU",
  authDomain: "week-10-fe36a.firebaseapp.com",
  databaseURL: "https://week-10-fe36a.firebaseio.com",
  projectId: "week-10-fe36a",
  storageBucket: "week-10-fe36a.appspot.com",
  messagingSenderId: "609928081714",
  appId: "1:609928081714:web:ae71979839a149ba35672b",
  measurementId: "G-PBN8CNM18V"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;