import React from 'react'
import Navbar from "./CustomNavbar"
import { Card, Table } from "react-bootstrap";

export default function Account() {
    return (
        <div>
            <Navbar />
            <h1 style={{ marginLeft: "20px" }}>All Data</h1>
            <br>
            </br>
            <Card style={{ width: '80%', marginLeft: "10%" }}>
                <Card.Body>

                    <Table striped bordered hover>
                        <thead>
                            <tr>

                                <th>Email</th>
                                <th>Name</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>zashanjson@fashon.com</td>
                                <td>Zeeshan</td>
                                <td>NFAK001</td>
                            </tr>
                            <tr>

                                <td>mtj@yhoo.com</td>
                                <td>Molana Tariq Jameel</td>
                                <td>MTJ001</td>
                            </tr>

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    )
}
