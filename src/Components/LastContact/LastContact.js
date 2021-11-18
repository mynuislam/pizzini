import React,{Fragment} from 'react';
import { Container,Row,Col,Form} from 'react-bootstrap';
const LastContact = () => {
 return (
<Fragment>
 <div className="LastContact">



<Container>
<Row>
<Col>
<h3 className="About-Head1 text-center LastContactH1">Take a Message</h3>
<h1 className="About-Head3 text-center">
WE CARE ABOUT<br></br>
YOUR OPINION
</h1>

</Col>
</Row>
<Row>
<Col>
<Form>
 <Row>
 <Col>  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control className="LastContactComment1 LastContact__Font" type="text" placeholder="First Name" />

  </Form.Group></Col>
 <Col>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control className="LastContactComment1 LastContact__Font" type="text" placeholder="Last Name" />
  </Form.Group></Col>
  <Col>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control className="LastContactComment1 LastContact__Font" type="text" placeholder="Subject" />
  </Form.Group></Col>

</Row>

<Row>
 <Col>
<Form.Group className="mb-3 LastContactComment" controlId="formBasicPassword">
  <Form.Control
      as="textarea" 
      className="LastContactComment" 
      placeholder="Leave a comment here"
      style={{ height: '14.641288433382138vw' }}
    />

  </Form.Group>
  </Col>
</Row>


<Row>
 <Col lg={12} md={12} sm={12}>
<button className="ContactUsBtn">Send Message</button>


  </Col>
</Row>


</Form>
</Col>

</Row>
</Container>
</div>

</Fragment>
 );
};
export default LastContact;