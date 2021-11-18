import React from 'react';
import './App.css';
import {
  BrowserRouter
} from "react-router-dom";

import RouteApp from './Router/RouteApp'
function App() {
  return(
<BrowserRouter>
<RouteApp/>
</BrowserRouter>
   
  ) ;
}

export default App;
