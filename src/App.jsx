import {Navbar} from './components/Navbar';
import './App.css';
import Home from "./pages/Home";
import Feed from './pages/Feed';
import {SavedRecipes} from './pages/SavedRecipes';
import { Profile } from './pages/Profile';
import { AddRecipes } from './pages/AddRecipes';
import {Route, Routes, Link} from "react-router-dom";
import RecipeDetail from './pages/Recipe';
import { Settings } from './pages/Settings';
import { About } from './pages/About';
import background from './BackgroundImage.png';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
        <div className="App-header" style={{backgroundImage: `url(${background})`}}>
        </div>
        <header className="App-header">
          <Navbar/>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/feed" element={<Feed/>}/>
              <Route path="/savedrecipes" element={<SavedRecipes/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/settings" element={<Settings/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/addrecipes" element={<AddRecipes/>}/>
              <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
            </Routes>
        </header>
      </div>
  );
}

export default App;
/*      <div className="bg" style={{backgroundImage: `url(${background})`}}>
      <div className="mainTitle"> Dish Discovery </div>
      <div className="sideText"> Make cooking hassle-free. </div>
      <br></br>
      <div className="smallLogo">
      <img width={100} height={100} src={logo} alt="Logo" />
      </div>
      <br></br>
      </div>
      
      
      
      
      
      <div className="mainTitle"> Dish Discovery </div>
          <div className="sideText"> Make cooking hassle-free. </div>
          <br></br>
          <div className="smallLogo">
            <img width={130} height={130} src={logo} alt="Logo" />
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
              <div className="input1">
                <label htmlFor="password">Password: </label>
                <input  value={pass} onChange={(e) => setPass(e.target.value)} type = "password"/>
              </div>
            </form>
            <br></br>
            <div className="buttonClass">
              <button>Forgot password?</button>
            </div>
            <br></br>
            <div className="buttonClass">
              <Link to="/Register">Don't have an account? Sign up!</Link>
          </div>*/