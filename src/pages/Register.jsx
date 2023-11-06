//Preethika Somarapu
import React, {useState} from "react";
import background from '../BackgroundImage.png';
import './Register.css'
import logo from '../logo1.png';
import { Link } from "react-router-dom";


//size variable for the logo
const size = {
    height: 30,
    width: 30
}
//the signup page for dish discovery
export const Register = (props) => {
    //takes in the username
    const [username, setusername] = useState('');
    //takes in the user's email
    const [email, setEmail] = useState('');
    //takes in the user's password
    const [pass, setPass] = useState('');

    //for the buttons
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(pass);
        console.log(email)
    }
    return(
        //Sign up page with buttons that's able to switch between logging in and signing up depending on the user's needs
        <div className="bg" style={{backgroundImage: `url(${background})`}}>
            <div className="mainTitle"> Dish Discovery </div>
          <div className="sideText"> Make cooking hassle-free. </div>
          <br></br>
          <div className="smallLogo">
             <img styles={size} width={100} height={100} src={logo} alt="Logo" />
                </div>
              <br></br>
              <br></br>
          <div className ="container" style={{backgroundColor: "C6D8A1", opacity: 50}}> 
          <div className="smallTitle"> Welcome To Dish Discovery! </div>
            <br></br>
          <form onSubmit={handleSubmit}>
          <div className="input1">
                <label htmlFor="email">Enter your email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type = "Email"/>
                </div>
                <br></br>
                <div className="input1">
                <label htmlFor="username">Username: </label>
                <input value={username} onChange={(e) => setusername(e.target.value)} type = "username" />
                </div>
                <br></br>
                <div className="input1">
                <label htmlFor="password">Password: </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type = "password" />
                </div>
            </form>
            <br></br>
            <div className="buttonClass">
            <button onClick={() => props.onFormSwitch('login')}> If you already have an account, log in!</button>
            </div>
            </div>
            </div>
    )
}
export default Register
