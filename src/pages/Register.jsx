//Preethika Somarapu
import React, {useState} from "react";
import background from '../BackgroundImage.png';
import './Login.css'
import logo from '../logo1.png';
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDrGK5gAZTQn8uGIH4fwPLpU8hVmU83UTY",
    authDomain: "dish-discovery-e2fe4.firebaseapp.com",
    projectId: "dish-discovery-e2fe4",
    storageBucket: "dish-discovery-e2fe4.appspot.com",
    messagingSenderId: "225883867893",
    appId: "1:225883867893:web:1cf70aeafba973dcbb13bc",
    measurementId: "G-2Q95Y8MLCE"
  };
  
  // Initialize Firebase
const fb = initializeApp(firebaseConfig);
const auth = getAuth();
//size variable for the logo

const size = {
    height: 30,
    width: 30
}

//the signup page for dish discovery
export const Register = (props) => {
    //takes in the user's email
    const [email, setEmail] = useState('');
    //takes in the user's password
    const [password, setPass] = useState('');

    //for the buttons
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }
    return(
        //Sign up page with buttons that's able to switch between logging in and signing up depending on the user's needs
        <div className="App-header" style={{backgroundImage: `url(${background})`}}>
            <div className="mainTitle"> Dish Discovery </div>
          <div className="sideText"> Make cooking hassle-free. </div>
          <br></br>
          <div className="smallLogo">
             <img styles={size} width={160} height={160} src={logo} alt="Logo" />
                </div>
          <div className ="container1" style={{backgroundColor: "C6D8A1", opacity: 50}}> 
          <div className="smallTitle"> Welcome To Dish Discovery! </div>
          <br></br>
          <form onSubmit={handleSubmit}>
          <div className="input1">
                <label htmlFor="email" className="sideText">Enter your email: </label>
                <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type = "email"/>
                </div>
                <br></br>
                <div className="input1">
                <label htmlFor="password" className="sideText">Password: </label>
                <input id="password" value={password} onChange={(e) => setPass(e.target.value)} type = "password" />
                </div>
                <div></div>
                <br></br>
                <button type="submit">Register</button>
            </form>
            <div className="buttonClass">
            <Link to="/Login" className="sideText">If you already have an account, log in!</Link>
            </div>
            </div>
            </div>
    )
}
export default Register
