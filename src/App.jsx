import {Navbar} from './components/Navbar';
import './App.css';
import Home from "./pages/Home";
import {Feed} from './pages/Feed';
import {SavedRecipes} from './pages/SavedRecipes';
import { Profile } from './pages/Profile';
import { AddRecipes } from './pages/AddRecipes';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/savedrecipes" element={<SavedRecipes/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/addrecipes" element={<AddRecipes/>}/>
          </Routes>
      </header>
      
    </div>
  );
}

export default App;
