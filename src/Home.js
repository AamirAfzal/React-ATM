import React from 'react'
import Navbar from "./CustomNavbar"
import { Card, Button } from "react-bootstrap";

import Bank from './bank.png';

export default function Account() {
    return (
        <div>
            <Navbar />

            <br>
            </br>
            <Card style={{ width: '24rem', marginLeft: "20px" }}>
                <Card.Body>
                    <Card.Title>WELCOME TO THE BANK</Card.Title>
                    <Card.Text>
                        For all your banking needs
                    </Card.Text>
                    <br>
                    </br>
                    <Card.Img variant="top" src={Bank} />
                </Card.Body>
            </Card>
        </div>
    )
}
