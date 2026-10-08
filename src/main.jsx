/*
  main.jsx — the React entry point. Owns mounting and the router wrapper only.
  Does NOT own layout, routes, or app-level chrome; that lives in App.jsx.
*/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

/* Arms the scroll-reveal initial states in index.css. Without JS this class
   never lands, so [data-reveal] content stays visible — see index.css. */
document.documentElement.classList.add('js');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);