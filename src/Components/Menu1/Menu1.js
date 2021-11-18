import React,{Fragment} from 'react';
import Image1 from '../Assets/img/pizza1.png'
import Image2 from '../Assets/img/pizza2.png'
import Image3 from '../Assets/img/pizza3.png'
import Image4 from '../Assets/img/pizza4.png'
import Image5 from '../Assets/img/pizza5.png'
import Image6 from '../Assets/img/pizza6.png'
import {Container,Row,Col} from 'react-bootstrap'
const Menu1 = () => {
  return (
    <Fragment>
      <Container>
        <Row className=" mt-5 mb-5">
        <Col>
<h3 className="Main-Head1">Pizza Menu</h3>
<h1  className="Main-Head2">WELCOME TO<br></br>
MAESTRO PIZZINI</h1>

</Col>
        </Row>
      <Row>

<Col lg={4} md={4} sm={12}>
<img className="Menu1Img"  src={Image1} alt=""></img>
<h1 className="Menu1__h1">Pizza Margeritta</h1>
<p className="Menu1__p">Nullam nibh sem, imperdiet ultrices<br></br> commodo a, vulputate vel ligula. Duis <br></br>venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui <br></br>tempor in.
</p>
<p  className=" text-center">$39</p>
</Col>
<Col lg={4} md={4} sm={12}>
<img className="Menu1Img"   src={Image2} alt=""></img>
<h1 className="Menu1__h1">Pizza Margeritta</h1>
<p className="Menu1__p">Nullam nibh sem, imperdiet ultrices<br></br> commodo a, vulputate vel ligula. Duis <br></br>venenatis at eros sed egestas. Mauris rutrumquam risus, vel hendrerit dui<br></br> tempor in.
</p>
<p  className=" text-center">$39</p>

</Col><Col lg={4} md={4} sm={12}>
<img className="Menu1Img"    src={Image3} alt=""></img>
<h1 className="Menu1__h1">Pizza Margeritta</h1>
<p className="Menu1__p">Nullam nibh sem, imperdiet ultrices<br></br> commodo a, vulputate vel ligula. Duis <br></br>venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui<br></br> tempor in.
</p>
<p  className=" text-center">$39</p>
</Col>
       </Row> 
       <Row>
<Col lg={4} md={4} sm={12}>
<img className="Menu1Img"    src={Image4} alt=""></img>
<h1 className="Menu1__h1">Pizza Margeritta</h1>
<p className="Menu1__p">Nullam nibh sem, imperdiet ultrices<br></br> commodo a, vulputate vel ligula. Duis <br></br>venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui<br></br> tempor in.
</p>
<p  className=" text-center">$39</p>
</Col>
<Col lg={4} md={4} sm={12}>
<img className="Menu1Img"    src={Image5} alt=""></img>
<h1 className="Menu1__h1">Pizza Margeritta</h1>
<p className="Menu1__p">Nullam nibh sem, imperdiet ultrices<br></br> commodo a, vulputate vel ligula. Duis <br></br>venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui<br></br> tempor in.
</p>
<p  className=" text-center">$39</p>
</Col><Col lg={4} md={4} sm={12}>
<img className="Menu1Img"    src={Image6} alt=""></img>
<h1 className="Menu1__h1">Pizza Margeritta</h1>
<p className="Menu1__p">Nullam nibh sem, imperdiet ultrices<br></br>
 commodo a, vulputate vel ligula. Duis <br></br>venenatis at eros sed egestas. Mauris   rutrum quam risus, vel hendrerit dui<br></br> tempor in.
</p>
<p className=" text-center">$39</p>
</Col>
 </Row> 
</Container>
    </Fragment>
  );
};

export default Menu1;