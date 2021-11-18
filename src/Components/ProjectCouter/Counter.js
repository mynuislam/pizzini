import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import ReactVisibilitySensor from "react-visibility-sensor";

class Counter extends Component {
 render() {
  return (
   <Fragment>
       <Container fluid='true' className="Counter__Div">
    <Row>
     <Col >
     <div className="Counter__text">
     <CountUp start={0} end={120}>
  {({ countUpRef, start }) => (


<ReactVisibilitySensor onChange={start} delayedCall={true} >
<span ref={countUpRef} />    
</ReactVisibilitySensor>
   
   

  )}
</CountUp>


<p>Awesome Employees</p>
     </div>

     </Col>
     <Col >
     <div  className="Counter__text">
      
     <CountUp start={0} end={58}>
  {({ countUpRef, start }) => (


<ReactVisibilitySensor onChange={start} delayedCall={true} >
<span ref={countUpRef} />    
</ReactVisibilitySensor>
   
   

  )}
</CountUp>

      <p>Pizza Types</p>
     </div>


     </Col>   
       <Col  >
       <div className="Counter__text">
       <CountUp start={0} end={1468}>
  {({ countUpRef, start }) => (


<ReactVisibilitySensor onChange={start} delayedCall={true} >
<span ref={countUpRef} />    
</ReactVisibilitySensor>
   
   

  )}
</CountUp>

<p>Satisfied Clients</p>
       </div>


     </Col>
     <Col >
     <div className="Counter__text">
     <CountUp start={0} end={2031}>
  {({ countUpRef, start }) => (


<ReactVisibilitySensor onChange={start} delayedCall={true} >
<span ref={countUpRef} />    
</ReactVisibilitySensor>
   
   

  )}
</CountUp>

<p>Delivery</p>
     </div>


     </Col>
    </Row>
   </Container>

   </Fragment>
  );
 }
}

export default Counter;