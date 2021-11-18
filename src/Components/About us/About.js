import React, { Fragment } from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import AboutPizza from "../Assets/img/pizza.jpg"
const About = () => {
 return (
  <Fragment>
   <div className="Main__About__Us">
   <Container>
   <Row>
   <Col lg={6} md={12} sm={12}>
<h3 className="About__Us1">About Us
</h3>
<h2  className="About__Us2">
WELCOME TO<br></br>
MAESTRO PIZZINI
</h2>
<p  className="About__Us3 mt-4">Investigationes demonstraverunt lectores legere me lius<br></br>
quod ii legunt saepius. Claritas est etiam processus dynaus,<br></br>
quise sequitur mutationem consuetudium lectorum.</p>
<button className='DEMOBTn mt-4'>
Read More</button>
</Col> 

<Col lg={6} md={12} sm={12}>
 <img className="About__Image" src={AboutPizza} alt=""></img>
</Col> 
   </Row>
   </Container>
   </div>
 
  </Fragment>
 );
};

export default About;