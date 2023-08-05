
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAzmB20NqaAhR1iAt0q4oI7C1lSvM5wx_o",
  authDomain: "house-marketplace-app-adfd3.firebaseapp.com",
  projectId: "house-marketplace-app-adfd3",
  storageBucket: "house-marketplace-app-adfd3.appspot.com",
  messagingSenderId: "1092866098284",
  appId: "1:1092866098284:web:60b3a4824a3f42fcc40449"
};
initializeApp(firebaseConfig)
export const db = getFirestore()

// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: 'AIzaSyDA8LVcBB6ZuFMGtZZLEh_veJ44WGrNRdE',
//   authDomain: 'house-marketplace-app-fb1d0.firebaseapp.com',
//   projectId: 'house-marketplace-app-fb1d0',
//   storageBucket: 'house-marketplace-app-fb1d0.appspot.com',
//   messagingSenderId: '832068369979',
//   appId: '1:832068369979:web:dce177da9bfc60a4b4e61e',
// }
// // Initialize Firebase
// initializeApp(firebaseConfig)
// export const db = getFirestore()