import React from 'react'
import Navbar from "./CustomNavbar"
import { Card, Button, Form } from "react-bootstrap";

export default function Deposit() {
    return (
        <div>
            <Navbar />
            <h1 style={{ marginLeft: "20px" }}>Deposit</h1>
            <br>
            </br>
            <Card style={{ width: '22rem', marginLeft: "20px" }}>
                <Card.Body>
                    <Card.Title>Balance</Card.Title>
                    <Card.Text>
                        <strong>5000.00</strong>
                    </Card.Text>
                    <Form>
                        <Form.Group controlId="formBasicNumber">
                            <Form.Label>Deposit Amount</Form.Label>
                            <Form.Control type="number" placeholder="Enter Amount"
                                min="0" />
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                            Deposit
                        </Button>
                    </Form>
                </Card.Body>

            </Card>
        </div>
    )
}
