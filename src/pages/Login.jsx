//Preethika Somarapu
import React, {useState} from "react";
import background from '../BackgroundImage.png';
import {useNavigate} from "react-router-dom";
import logo from '../logo1.png';
import Home from "./Home";
import './Login.css'
import {Link} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


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
//size variable for the logo
const size = {
    height: 30,
    width: 30
}

const auth = getAuth();

//the login page for dish discovery
export const Login = (props) => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            nav('/Home');
        }).catch((error) => {
            console.log(error);
        })
    }
    return(
         <div className="App-header" style={{backgroundImage: `url(${background})`}}>
          <div className="mainTitle"> Dish Discovery </div>
          <div className="sideText"> Make cooking hassle-free. </div>
          <div className="smallLogo">
             <img styles={size} width={160} height={160} src={logo} alt="Logo" />
              </div>
              <div className="container1"style={{backgroundColor: "C6D8A1", opacity: 50}}>
              <div className="smallTitle"> Welcome Back! </div>
              <br></br>
            <form onSubmit={handleSubmit}>
            <div className="input1">
                <label htmlFor="email" className="sideText"> Email: </label>
                <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type = "email"/>
                </div>
                <br></br>
                <div className="input1"></div>
                <label htmlFor="password" className="sideText">Password: </label>
                <input id="password" value={password} onChange={(e) => setPass(e.target.value)} type = "password" />
                <div></div>
                <br></br>
                <button type="submit">Log In</button>
            </form>
            <div className="buttonClass">
            <Link to="/Register" className="sideText">Don't have an account? Sign up!</Link>
            </div> 
            </div>
            </div>
    )
}
export default Login
//<Link to="/Home" className="sideText">Log In</Link>