import Navbar from './components/Navbar';
import background from './BackgroundImage.png';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <header className="App-header">
        <Navbar/>
      </header>
      <div className="mainTitle"> Dish Discovery </div>
      <div> Make cooking hassle-free. </div>
      <div className="search-bar"> <input type="text" placeholder="Search for a Recipe..." /> <button> Search </button> </div>
    </div>
  );
}

export default App;
