import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'


firebase.initializeApp({
  apiKey: "AIzaSyB4sIO2q0fxlmKQ5vGNOQeZ_dBG4WCNJu8",
  authDomain: "project-dmitriy-kanashevich.firebaseapp.com",
  projectId: "project-dmitriy-kanashevich",
  storageBucket: "project-dmitriy-kanashevich.appspot.com",
  messagingSenderId: "270223533946",
  appId: "1:270223533946:web:cbe95e050e61a2989558c3"
}
);
export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage();
export { firestore, storage }

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
