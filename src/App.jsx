import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import './style.scss'

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
