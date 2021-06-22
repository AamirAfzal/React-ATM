import React from 'react'
import Navbar from "./CustomNavbar"
import { Card, Button, Form } from "react-bootstrap";

export default function Account() {
    return (
        <div>
            <Navbar />
            <h1 style={{ marginLeft: "20px" }}>Create Account</h1>
            <br>
            </br>
            <Card style={{ width: '22rem', marginLeft: "20px" }}>
                <Card.Body>

                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                            Create Account
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
