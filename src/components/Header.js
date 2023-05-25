import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiCart } from "react-icons/bi";
import {Link} from "react-router-dom"
import { AppConText } from "../AppConText";

export default function Header() {
    const {cart} = useContext(AppConText)
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Link to="/" >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Link to="/cart" className={`d-flex align-items-center`} >
              <BiCart  size="2rem" />
              <div style={{marginBottom:'15px'}}>
              {cart.length}
              </div>
             
              <span style={{marginLeft:'13px'}} >Cart</span>

            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
