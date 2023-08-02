// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCACwwPC8QVzY66VZkj6kEfdl2DyqCxQgY',
  authDomain: 'toxed-development.firebaseapp.com',
  projectId: 'toxed-development',
  storageBucket: 'toxed-development.appspot.com',
  messagingSenderId: '210237269229',
  appId: '1:210237269229:web:2d5ba66e25376db113d8e4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default auth;
