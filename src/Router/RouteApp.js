import React,{Fragment} from 'react';
import {
 Switch,
 Route,
} from "react-router-dom";
import HomePage from '../Components/AllPages/HomePage';
import MenuPage from '../Components/AllPages/MenuPage'
import AboutPage from '../Components/AllPages/AboutPage'
import ContactPage from '../Components/AllPages/ContactPage'


const RouteApp = () => {
 return (
  <Fragment>
   <Switch>
<Route exact path="/" component={HomePage}/>

<Route exact path="/Menu" component={MenuPage}/>
<Route exact path="/About" component={AboutPage}/>
<Route exact path="/Contact" component={ContactPage}/>

   </Switch>
  </Fragment>
 );
};

export default RouteApp;