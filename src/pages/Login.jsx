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
import {Center} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
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
    const [visible, setVisible] = useState(true);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            nav('/Home');
        }).catch((error) => {
            console.log(error);
            setError('Authentication failed. Please check your email or password.');
        })
    }
    return(
         <div className="App-header" style={{backgroundImage: `url(${background})`}}>
          <div className="mainTitle"> Dish Discovery </div>
          <div className="sideText"> Make cooking hassle-free. </div>
          <Center>
          <div className="smallLogo">
             <img styles={size} width={160} height={160} src={logo} alt="Logo" />
              </div>
              </Center>
              <div className="container1"style={{backgroundColor: "C6D8A1", opacity: 50}}>
              <div className="smallTitle"> Welcome Back! </div>
            <form onSubmit={handleSubmit}>
            <div className="input1">
                <label htmlFor="email" className="sideText"> Email: </label>
                <input className="medium-text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder="myemail@gmail.com"/>
                </div>
                <div className="input1"></div>
                <label htmlFor="password" className="sideText">Password: </label>
                <input className="medium-text" id="password" value={password} onChange={(e) => setPass(e.target.value)} type = {visible ? "text" : "password"} placeholder="******"/>
                <IconButton
                aria-label={visible ? 'Hide' : 'Show'}
                colorScheme='black'
                icon={visible ? <ViewIcon  /> : <ViewOffIcon />}
                onClick={() => setVisible(!visible)}
                />
                <div></div>
                {error && <p className="medium-text" style={{ color: 'red' }}>{error}</p>}
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