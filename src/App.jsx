import {Navbar} from './components/Navbar';
import './App.css';
import Home from "./pages/Home";
import Feed from './pages/Feed';
import {SavedRecipes} from './pages/SavedRecipes';
import { Profile } from './pages/Profile';
import { AddRecipes } from './pages/AddRecipes';
import {Route, Routes} from "react-router-dom";
import RecipeDetail from './pages/Recipe';
import { Settings } from './pages/Settings';
import { About } from './pages/About';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
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
