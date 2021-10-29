import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='light'
        variant='light'
        sticky='top'
      >
        <Container fluid>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Nav fill variant='tabs' defaultActiveKey='/home'>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav.Item>
                <Nav.Link href='/home'>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-1'>About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-2'>Staff</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='disabled'>Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='disabled'>Contact Us</Nav.Link>
              </Nav.Item>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
