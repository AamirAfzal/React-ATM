import React, { useState, useEffect } from "react";
import Navbar from "./CustomNavbar";
import { Card, Table } from "react-bootstrap";

export default function Account() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    var existingUsers = JSON.parse(localStorage.getItem("users"));
    console.log(existingUsers);
    setusers(existingUsers);
  }, []);

  return (
    <div>
      <Navbar />
      <h1 style={{ marginLeft: "20px" }}>All Data</h1>
      <br></br>

      <Card style={{ width: "80%", marginLeft: "10%" }}>
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
              {users.map((index) => (
                <tr>
                  <td>{index.email}</td>
                  <td>{index.name}</td>
                  <td>{index.password}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}
