import React,{Fragment} from 'react';
import Allpagetop from '../Allpagetop/Allpagetop';
import LastContact from '../LastContact/LastContact'
import Footer from '../Footer/Footer'
const ContactPage = () => {
 return (
  <Fragment>
      <Allpagetop tittle="Contact" pagetittle="Contact Us"/>

   <LastContact/>
   <Footer/>
  </Fragment>
 );
};

export default ContactPage;