import React,{Fragment} from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const Footer = () => {
 return (
  <Fragment>
   <div className='Main__Footer'> 
   <div className='Main__Footer1'>

<Container >
<Row  className="Footer">
<Col lg={6} md={12} sm={12}>
<h1 className="Footer__h1">About us</h1>
<p className="Footer__p">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Eodem modo typi, qui nunc nobis videntur. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Investigationes demonstraverunt lectores.</p>
<p className="Footer__p"><b>Monday to Saturday</b>: 9.00 am to 9.00 pm</p>
<p className="Footer__p"><b>Sunday</b>: 10.00 am to 6.00 pm</p>
</Col>

<Col lg={2} md={12} sm={12}>
<h1 className="Footer__h1">
Quick Links
</h1>
<p className="Footer__p">
Need help?Contact us<br></br>

Our latest news<br></br>

About us page<br></br>

Table booking<br></br>

Fast delivery

</p>

</Col>
<Col lg={2} md={12} sm={12}>
<h1 className="Footer__h1">
Recepies
</h1>
<p className="Footer__p">
Pizza Biscuit Bake<br></br>

Pizza Margeritta<br></br>

Pizza Prosciutto<br></br>

Pizza Low Carb<br></br>

Pizza Del Sole
</p>

</Col>
<Col lg={2} md={12} sm={12}>
<h1 className="Footer__h1">Contact us
</h1>
<p className="Footer__p">
<i class="fas fa-phone-alt"></i> (+40) 74 0920 2288<br></br>

</p>
<p className="Footer__p">
<i class="fas fa-envelope"></i> mynul@gmail.com<br></br>
</p>

<p className="Footer__p">
<i class="fas fa-map-marker-alt"></i> New York 11673<br></br>
</p>
<div><i class="fab fa-facebook-f Social__Footer1"></i>
<i class="fab fa-google-plus-g Social__Footer"></i>
<i class="fab fa-instagram Social__Footer"></i></div>
</Col>
</Row>
</Container>

</div>
<hr className="Footer__hr"></hr>
<p className="Footer__CopyRight text-center">Copyright by ModelTheme. All Rights Reserved.</p>
   </div>
   
  </Fragment>
 );
};
export default Footer;