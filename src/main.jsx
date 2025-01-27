// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

// Find the root element in the HTML
const container = document.getElementById('root');

// Create a root and render the app
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
