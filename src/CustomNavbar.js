import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./CustomNavbar.css"

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Bad Bank</Navbar.Brand>
      <Nav className="mr-auto" style={{ paddingLeft: '70%' }}>
        <Nav.Link href="#account">Create Account</Nav.Link>
        <Nav.Link href="#features">Deposit</Nav.Link>
        <Nav.Link href="#pricing">Withdraw</Nav.Link>
        <Nav.Link href="#pricing">All Data</Nav.Link>
      </Nav>

    </Navbar>
  )
}
export default CustomNavbar
