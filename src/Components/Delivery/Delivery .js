import React, {Fragment} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Delivery  = () => {
 return (
  <Fragment>
       <div className="Delivery ">
       <Container fluid={true}>
    <Row>
<Col  className=" p-0 Delivery__bg"  lg={12} md={12} sm={12}>
<div className="Delivey__text">
<h3 className="Delivey__text1">Free Delivery With</h3>
<h1 className="Delivey__text2">PIZZA OF THE DAY</h1>
<h3 className="Delivey__text3">Only 8.99 USD</h3>
<button className='DEMOBTn'>
CALL NOW
</button>
</div>
     </Col>
    </Row>
   </Container>
       </div>
  
  </Fragment>
 );
};
export default Delivery;