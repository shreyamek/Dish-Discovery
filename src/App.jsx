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
import { EditProfile } from './pages/EditProfile';
import Register from './pages/Register';
import Authenticate from './pages/Authenticate';
import AddAuth from './pages/AddAuth';
import ProfileAuth from './pages/ProfileAuth';
import Login from './pages/Login';
import Searched from './pages/Searched';
import { ChakraProvider } from '@chakra-ui/react';
import { RecipeProvider } from './pages/RecipeContext';
import { ProfileProvider } from './pages/ProfileContext';

function App() {
  return (
    <RecipeProvider>
      <ProfileProvider>
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
              <Route path="/profile" element={<ProfileAuth/>}/>
              <Route path="/settings" element={<Authenticate/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/editprofile" element={<EditProfile/>}/>
              <Route path="/addrecipes" element={<AddAuth/>}/>
              <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
              <Route path="/searched/:search" element={<Searched/>} />
            </Routes>
        </header>
      </div>
      </ProfileProvider>
      </RecipeProvider>
  );
}

export default App;