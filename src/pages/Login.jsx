//Preethika Somarapu
import React, {useState} from "react";
import background from '../BackgroundImage.png';
import {useNavigate} from "react-router-dom";
import logo from '../logo1.png';
import Home from "./Home";
import './Login.css'
import { Link} from "react-router-dom";

//size variable for the logo
const size = {
    height: 30,
    width: 30
}

//the login page for dish discovery
export const Login = (props) => {
    const [username, setusername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(pass);
    }
    return(
         <div className="bg" style={{backgroundImage: `url(${background})`}}>
          <div className="mainTitle"> Dish Discovery </div>
          <div className="sideText"> Make cooking hassle-free. </div>
          <br></br>
          <div className="smallLogo">
             <img styles={size} width={100} height={100} src={logo} alt="Logo" />
              </div>
              <br></br>
              <div className="container"style={{backgroundColor: "C6D8A1", opacity: 50}}>
              <div className="smallTitle"> Welcome Back! </div>
                <br></br>
                <div className="buttonClass">
              <Link to="/home1">Log In</Link>
              </div>
              <br></br>
            <form onSubmit={handleSubmit}>
            <div className="input1">
                <label htmlFor="username">Username: </label>
                <input  value={username} onChange={(e) => setusername(e.target.value)} type = "username"/>
                </div>
                <br></br>
                <div className="input1"></div>
                <label htmlFor="password">Password: </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type = "password" />
            </form>
            <br></br>
            <div className="buttonClass">
            <button>Forgot password</button>
            </div>
            <br></br>
            <div className="buttonClass">
            <button onClick={() => props.onFormSwitch('register')}> Don't have an account? Sign up!</button>
            </div>
            </div>
            </div>
    )
}
export default Login
