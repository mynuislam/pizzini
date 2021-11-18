import React,{Fragment} from 'react';
import Allpagetop from '../Allpagetop/Allpagetop';
import Menu from '../Menu/Menu'
import Menu1 from '../Menu1/Menu1'
import Footer from '../Footer/Footer'
const MenuPage = () => {
 return (
  <Fragment>
   <Allpagetop tittle="Menu" pagetittle=" Menu "/>
      <Menu/>
<Menu1/>
<Footer/>
  </Fragment>
 );
};

export default MenuPage;