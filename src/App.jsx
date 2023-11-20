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
import Searched from './pages/Searched';
import { ChakraProvider } from '@chakra-ui/react';
import { RecipeProvider } from './pages/RecipeContext';

function App() {
  return (
    <RecipeProvider>
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
              <Route path="/searched/:search" element={<Searched/>} />
            </Routes>
        </header>
      </div>
      </RecipeProvider>
  );
}

export default App;