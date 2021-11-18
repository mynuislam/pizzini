import React,{Fragment} from 'react';
import '../Style.css/Style.css'
import Image1 from "../Assets/img/About-sec2.jpg"
import Image2 from "../Assets/img/About-sec2.1.jpg"

import { Container,Row,Col,Card} from 'react-bootstrap';
const About1 = () => {
 return (
  <Fragment>
    <div className="Main__About1">

    <Container fluid={true}>
<Row>
<Col className="About1">
     <div className="About1__div">
       <Row>
<Col lg={4} md={4} sm={6} className="About-Col">
<Card >
  <Card.Img variant="top" src= {Image1} />
  <Card.Body>
    <Card.Title className="Card-H1">PIZZA DELIVERY MENU</Card.Title>
    <Card.Text  className="Card-p">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <p>Read More ></p>
  </Card.Body>
</Card>
</Col>



<Col lg={4} md={4} sm={6}>
<Card >
  <Card.Img variant="top" src={Image2}/>
  <Card.Body>
    <Card.Title  className="Card-H1">
RESTAURANT EVENT NIGHT</Card.Title>
    <Card.Text className="Card-p">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <p>Read More ></p>
  </Card.Body>
</Card>
</Col>


<Col  lg={4} md={4} sm={12}>
 <br></br>
 <br></br>
 <br></br>
      <h3 className="About-Head1">The News</h3>
     <h1 className="About-Head2">OUR
<br></br>PROMOTIONS </h1>
     <p   className="About-p">
     Investigationes demonstraverunt lectores legere me lius
quod ii legunt saepius. Claritas est etiam processus dynaus
     </p>
     <button  className='DEMOBTn mt-4'>
VIEW MORE</button>
     </Col>
</Row>


</div>

</Col>

</Row>


   </Container>
    </div>
 
  </Fragment>
 );
};

export default About1;