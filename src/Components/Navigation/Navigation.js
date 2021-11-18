import React,{Fragment} from 'react';
import {Container, Nav,Navbar  } from 'react-bootstrap';
import {

  NavLink,

} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Assets/img/logo.png'
const Navigation = () => {




 return (
  <Fragment>
   <div >

   <Navbar   expand='lg'  collapseOnSelect  bg="none" >
  <Container  >
  <Navbar.Brand href="#home"><img width="240vw" alt="" src={Logo}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">

</Nav>
    <Nav>
      <Nav.Link><NavLink className="Main__Nav " to="/">HOME</NavLink></Nav.Link>
      <Nav.Link><NavLink className="Main__Nav " to="/Menu">MENU</NavLink></Nav.Link>  
      <Nav.Link><NavLink   className="Main__Nav " to="/About">ABOUT</NavLink></Nav.Link>
      <Nav.Link><NavLink  className="Main__Nav " to="/Contact">CONTACT</NavLink></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


   </div>

  </Fragment>
 );
};

export default Navigation;