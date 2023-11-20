//Preethika Somarapu
import React, {useState} from "react";
import background from '../BackgroundImage.png';
import Home from "./Home";
import { useNavigate, Link} from "react-router-dom";
import './Login.css'
import logo from '../logo1.png';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
import {Center, IconButton} from '@chakra-ui/react'
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
    const history = useNavigate();
    //takes in the user's email
    const [email, setEmail] = useState('');
    //takes in the user's password
    const [password, setPass] = useState('');
    const [visible, setVisible] = useState(true);
    const [error, setError] = useState(null);

    //for the buttons
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            history('/Home');
        }).catch((error) => {
            console.log(error);
            setError('There is already a user associated with this email, please log in!');
        })
    }
    return(
        //Sign up page with buttons that's able to switch between logging in and signing up depending on the user's needs
        <div className="App-header" style={{backgroundImage: `url(${background})`}}>
            <div className="mainTitle"> Dish Discovery </div>
          <div className="sideText"> Make cooking hassle-free. </div>
          <br></br>
          <Center>
          <div className="smallLogo">
             <img styles={size} width={160} height={160} src={logo} alt="Logo" />
                </div>
                </Center>
          <div className ="container1" style={{backgroundColor: "C6D8A1", opacity: 50}}> 
          <div className="smallTitle"> Welcome To Dish Discovery! </div>
          <form onSubmit={handleSubmit}>
          <div className="input1">
                <label htmlFor="email" className="sideText">Enter your email: </label>
                <input className="medium-text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder="myemail@gmail.com"/>
                </div>
                <div className="input1">
                <label htmlFor="password" className="sideText">Password: </label>
                <input className="medium-text" id="password" value={password} onChange={(e) => setPass(e.target.value)} type = {visible ? "text" : "password"} placeholder="******"/>
                <IconButton
                aria-label={visible ? 'Hide' : 'Show'}
                colorScheme='black'
                icon={visible ? <ViewIcon  /> : <ViewOffIcon  />}
                onClick={() => setVisible(!visible)}
                />
                <div className="small-text"> A password must have at least 6 characters</div>
                </div>
                <div></div>
                {error && <p className="medium-text" style={{ color: 'red' }}>{error}</p>}
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