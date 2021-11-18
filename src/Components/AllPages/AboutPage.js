import React,{Fragment} from 'react';
import PizzaMenu from '../PizzaMenu/PizzaMenu'
import About1 from '../About1/About1'
import Footer from '../Footer/Footer'
import Allpagetop from '../Allpagetop/Allpagetop';
const AboutPage = () => {
 return (
  <Fragment>
   <Allpagetop tittle="About" pagetittle="About Us"/>
   <PizzaMenu/>
   <About1/>
   <Footer/>
  </Fragment>
 );
};

export default AboutPage;