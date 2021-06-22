import React, { useState } from "react";
import Navbar from "./CustomNavbar";
import { Card, Button, Form } from "react-bootstrap";

export default function Account() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState("Create Account");

  

  const onSubmit = () => {
    if (name == "") {
      alert("Name cant be empty");
    } else if (email == "") {
      alert("Email cant be empty");
    } else if (password == "") {
      alert("Password cant be empty");


    } else {

        var existingUsers = JSON.parse(localStorage.getItem("users"));
        if(existingUsers == null) existingUsers = [];
    

        var user = {"name": name, "password": password, "email": email};

        existingUsers.push(user);

        localStorage.setItem("users", JSON.stringify(existingUsers));
      setName("");
      setPassword("");
      setEmail("");
      setCheck("Add Another Account")
      alert("Account Created Successfully")


    }
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ marginLeft: "20px" }}>Create Account</h1>
      <br></br>
      <Card style={{ width: "22rem", marginLeft: "20px" }}>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {name == "" || email == "" || password == "" ? (
              <Button variant="primary" disabled onClick={onSubmit}>
                 {check}
              </Button>
            ) : (

              <Button variant="primary"  onClick={onSubmit}>
               {check}
              </Button>
            )}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
