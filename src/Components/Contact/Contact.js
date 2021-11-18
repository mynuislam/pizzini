import React,{Fragment} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const Contact = () => {
 return (
  <Fragment>
    <div className="Main-order-Sec">



    <Container  fluid={true}>
<Row>
 <Col className="order__Sec p-0" lg={12} md={12} sm={12}>
<div className="Main__Contact__Content">


<div  className="Contact__Content">

<h3 className="About__Us1" >Quick Delivery</h3>
<h1 className="About__Us2">ORDER A<br></br>
PIZZA NOW</h1><br></br>
<p className="About__Us3">Investigationes demonstraverunt lectores legere me lius<br></br>
quod ii legunt saepius. Claritas est etiam processus.
</p><br></br>
<div className="Deliver__Form">
<Form>
 <Row>
  <Col>
  <Form.Group className="mb-3  " controlId="formBasicEmail">
    <Form.Control className="Allform" type="text" placeholder="Enter email" />
  </Form.Group>
  </Col>
  <Col>
  
  <Form.Group className="mb-3  " controlId="formBasicPassword">
    <Form.Control className="Allform" type="text" placeholder="Password" />
  </Form.Group>
  </Col>
 </Row>
 <Form.Group className="mb-3  " controlId="formBasicPassword">
    <Form.Control className="Allform" type="text" placeholder="Enter Street Adress" />
  </Form.Group>
  <Row>
  <Col>
  <Form.Group className="mb-3  " controlId="formBasicEmail">
    <Form.Control className="Allform" type="text" placeholder="Aprtment/Room" />
  </Form.Group>
  </Col>
  <Col>
  
  <Form.Group className="mb-3  " controlId="formBasicPassword">
    <Form.Control className="Allform" type="Number" placeholder="Phone Number" />
  </Form.Group>
  </Col>
 </Row>
 <Form.Group>
  <select  className="Select-1">
       <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

 </Form.Group>
 <Row>
  <Col>
    <Form.Control className="Allform" type="text" placeholder="Enter Number"/>
  </Col>

 </Row>
 <Row>

    <Col>
     <select className="Select-2">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    </select>
  </Col>
 </Row>

 <button className='Delivery__contact__Btn'>
CALL NOW
</button>
</Form>
</div>

</div>
</div>

</Col>
</Row>
</Container>
    </div>

  </Fragment>
 );
};

export default Contact;