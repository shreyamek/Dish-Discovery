import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider} from '@chakra-ui/react';
import { RecipeProvider } from './pages/RecipeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipeProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </RecipeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
