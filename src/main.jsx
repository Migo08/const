import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import { ConstructorApp } from './ConstructorApp';
import './styles.css'
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <ConstructorApp />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
)
