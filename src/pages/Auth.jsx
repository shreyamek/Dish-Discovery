import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDrGK5gAZTQn8uGIH4fwPLpU8hVmU83UTY",
    authDomain: "dish-discovery-e2fe4.firebaseapp.com",
    projectId: "dish-discovery-e2fe4",
    storageBucket: "dish-discovery-e2fe4.appspot.com",
    messagingSenderId: "225883867893",
    appId: "1:225883867893:web:1cf70aeafba973dcbb13bc",
    measurementId: "G-2Q95Y8MLCE"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };