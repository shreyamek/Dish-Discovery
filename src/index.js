import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RecipeProvider } from './pages/RecipeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(
  <React.StrictMode>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);