import React,{ Fragment } from 'react';
import Navigation from '../Navigation/Navigation';
import '../Style.css/Style.css'
const Home = () => {
 return (
  <Fragment>
   <div className="banner">
<Navigation/>
<div className="Banner__content">
<div className="Banner__Main__content">
   
   <div className="Banner__text">
 <h3>Pizza Delivery
</h3>
<h1>MAESTRO <br></br>PIZINNI
</h1>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing<br></br> elit, sed diam nonummy nibh euismod ut laoreet<br></br> dolore magna.
</p>
<button className='DEMOBTn'>
DELIVERY NOW
</button>
</div>
 

</div>

</div>


   </div>



  </Fragment>
 );
};

export default Home;