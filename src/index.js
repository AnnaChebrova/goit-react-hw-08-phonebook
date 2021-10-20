import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';


import 'modern-normalize/modern-normalize.css';



ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>

    </Provider>


  </React.StrictMode>,
  document.getElementById('root')
);


// eslint config prettier