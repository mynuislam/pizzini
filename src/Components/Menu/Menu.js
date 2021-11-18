import React,{Fragment} from 'react';
import Image1 from '../Assets/img/pizza1.png'
import Image2 from '../Assets/img/pizza2.png'
import Image3 from '../Assets/img/pizza3.png'
import Image4 from '../Assets/img/pizza4.png'
import Image5 from '../Assets/img/pizza5.png'
import Image6 from '../Assets/img/pizza6.png'

import {Container,Row,Col} from 'react-bootstrap'
const Menu = () => {
 return (
  <Fragment>
<div className="Menu">
<div className="Menu__Margin">
<Container>
<Row >
<Col>

<Row >
<Col className=" text-center mb-5 mt-5 Menu__middle" lg={12} md={12} sm={12}>
 <h3>
 Pizza Menu
 </h3>
 <h1>
 WELCOME TO<br></br>
MAESTRO PIZZINI
 </h1>

</Col>

</Row>

<Row >
<Col lg={2} md={2} sm={2} >
  <div> <img  className="MenuImg" src={Image1} alt=""></img></div>

</Col>
<Col lg={8} md={8} sm={8}>
 
<h1 className="Menu__middle__H1">Low Carb Pizza</h1>
<p className="Menu__middle__p">
Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis<br></br> venenatis at eros sed egestas. Mauris rutrum quam risus,vel hendrerit<br></br>  dui tempor in.</p>
</Col>
<Col lg={2} md={2} sm={2}>

<p className="Menu__middle__p1">$34</p>
</Col>

</Row>
<Row>
<Col lg={2} md={2} sm={2}>
<img className="MenuImg" src={Image2} alt=""></img>

</Col>
<Col lg={8} md={8} sm={8}>
 
<h1 className="Menu__middle__H1">Low Carb Pizza</h1>
<p className="Menu__middle__p">

Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis <br></br>venenatis at eros sed egestas. Mauris rutrum quam risus, vel <br></br> dui tempor in.</p>
</Col>
<Col lg={2} md={2} sm={2}>
<p className="Menu__middle__p1">$25</p>
</Col>

</Row><Row>
<Col lg={2} md={2} sm={2}>
<img className="MenuImg" src={Image3} alt=""></img>

</Col>
<Col lg={8} md={8} sm={8}>
 
<h1 className="Menu__middle__H1">Low Carb Pizza</h1>
<p className="Menu__middle__p">
Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis <br></br>venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit <br></br>dui tempor in.</p>
</Col>
<Col lg={2} md={2} sm={2}>
<p className="Menu__middle__p1">$49</p>
</Col>

</Row><Row>
<Col lg={2} md={2} sm={2}>
<img className="MenuImg"src={Image4} alt=""></img>

</Col>
<Col lg={8} md={8} sm={8}>
 
<h1 className="Menu__middle__H1">Low Carb Pizza</h1>
<p className="Menu__middle__p">
Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis <br></br>venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit<br></br> dui tempor in.</p>
</Col>
<Col lg={2} md={2} sm={2}>

<p className="Menu__middle__p1">$39</p>
</Col>

</Row><Row>
<Col lg={2} md={2} sm={2}>
<img className="MenuImg" src={Image5} alt=""></img>

</Col>
<Col lg={8} md={8} sm={8}>
 
<h1 className="Menu__middle__H1">Low Carb Pizza</h1>
<p className="Menu__middle__p">
Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis<br></br> venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit <br></br>dui tempor in.</p>
</Col>
<Col lg={2} md={2} sm={2}>
 <p className="Menu__middle__p1">$19
</p>

</Col>

</Row>
<Row>
<Col lg={2} md={2} sm={2}>
<img className="MenuImg" src={Image6} alt=""></img>

</Col>
<Col lg={8} md={8} sm={8}>
 
<h1 className="Menu__middle__H1">Low Carb Pizza</h1>
<p className="Menu__middle__p">
Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis <br></br>venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit <br></br>dui tempor in.</p>
</Col>
<Col lg={2} md={2} sm={2}>
<p className="Menu__middle__p1">$9</p>

 </Col>


</Row>

</Col>


</Row>
   
</Container>
</div>

</div>

  </Fragment>
 );
};

export default Menu;

