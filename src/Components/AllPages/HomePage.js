import React,{Fragment} from 'react';
import Home from '../Home/Home'
import About from "../About us/About"
import Delivery from '../Delivery/Delivery '
import PizzaMenu from '../PizzaMenu/PizzaMenu'
import Counter from '../ProjectCouter/Counter'
import Contact from '../Contact/Contact'
import Menu from '../Menu/Menu'
import Menu1 from '../Menu1/Menu1'
import Footer from '../Footer/Footer'
const HomePage = () => {
 return (
  <Fragment>
   <Home tittle="Home" />
  <About/>
<Delivery/>
<PizzaMenu/>
<Counter/>
<Contact/>
<Menu/>
<Menu1/>
<Footer/>
  </Fragment>
 );
};

export default HomePage;