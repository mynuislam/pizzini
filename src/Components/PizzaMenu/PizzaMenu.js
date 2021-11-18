import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import image from '../Assets/img/Sec4.jpg'
const PizzaMenu = () => {
 return (
  <Fragment>
         <div className="Pizza__Menu">

         <container>
    <Row>
     <Col lg={6} md={12} sm={12}>

      <img   src={image}alt="" srcset="" />

     </Col>
     <Col lg={6} md={12} sm={12}>
     <h3 className=" mb-3 About__Us1">The Pizza Menu</h3>
     <h1 className="mb-3 About__Us2">CHICAGO<br></br> THIN CRUST</h1>
     <p className="mt-4 About__Us3">
     Investigationes demonstraverunt lectores legere me lius<br></br>
quod ii legunt saepius. Claritas est etiam processus dynaus,<br></br>
quise sequitur mutationem consuetudium lectorum.
     </p>
     <button  className='DEMOBTn mt-4'>
VIEW MORE</button>
     </Col>
     </Row>
   </container>

         </div>
 
  </Fragment>
 );
};

export default PizzaMenu;