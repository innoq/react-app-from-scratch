import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';


const wrapper = document.getElementById('App');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
