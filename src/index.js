// == Import : npm
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import 'semantic-ui-css/semantic.min.css';
import reportWebVitals from './reportWebVitals';

// == Import : local
// Composants
import App from './components/App';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/browser-github-repo">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);


reportWebVitals();