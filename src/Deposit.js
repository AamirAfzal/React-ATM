import Navbar from "./CustomNavbar";
import { Card, Button, Form } from "react-bootstrap";
import React, { useState,useEffect } from "react";

export default function Deposit() {
  const [balance, setBalance] = useState(0);
  const [deposit, setDeposit] = useState(0);

  useEffect(() =>   {
    var existingBalance = localStorage.getItem("balance");
    if (existingBalance == null) {
      setBalance(0);
    } else {
        console.log(existingBalance)
      setBalance(parseInt(existingBalance));
    }
  }
);


  const onSubmit = () => {
    var existingBalance = localStorage.getItem("balance");

    if (existingBalance == null) {
      localStorage.setItem("balance", deposit);
      setDeposit(0);
      alert("Deposit Added Successfully");
    } else {
      var a = parseInt(existingBalance);

      var newdeposit = parseInt(deposit);

      existingBalance = a + newdeposit;

      localStorage.setItem("balance", existingBalance);
      setDeposit(0);
      alert("Deposit Added Successfully");
    }
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ marginLeft: "20px" }}>Deposit</h1>
      <br></br>
      <Card style={{ width: "22rem", marginLeft: "20px" }}>
        <Card.Body>
          <Card.Title>Balance</Card.Title>
          <Card.Text>
            <strong>{balance}</strong>
          </Card.Text>
          <Form>
            <Form.Group controlId="formBasicNumber">
              <Form.Label>Deposit Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Amount"
                min="0"
                value={deposit}
                onChange={(e) => setDeposit(e.target.value)}
              />
            </Form.Group>

            {deposit == 0 ? (
              <Button variant="primary" disabled onClick={onSubmit}>
                Add Deposit
              </Button>
            ) : (
              <Button variant="primary" onClick={onSubmit}>
                Add Deposit
              </Button>
            )}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
