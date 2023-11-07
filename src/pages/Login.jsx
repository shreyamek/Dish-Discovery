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
                <label htmlFor="username" className="sideText">Username: </label>
                <input  value={username} onChange={(e) => setusername(e.target.value)} type = "username"/>
                </div>
                <br></br>
                <div className="input1"></div>
                <label htmlFor="password" className="sideText">Password: </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type = "password" />
            </form>
            <br></br>
            <div className="buttonClass">
            <button>Forgot password</button>
            </div>
            <div className="buttonClass">
              <Link to="/Home" className="sideText">Log In</Link>
              </div>
            <div className="buttonClass">
            <Link to="/Register" className="sideText">Don't have an account? Sign up!</Link>
            </div> 
            </div>
            </div>
    )
}
export default Login
