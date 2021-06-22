import React, { useState, useEffect } from "react";
import Navbar from "./CustomNavbar";
import { Card, Button, Form } from "react-bootstrap";

export default function Deposit() {
  const [balance, setBalance] = useState(0);
  const [withdraw, setWithdraw] = useState(0);

  useEffect(() => {
    var existingBalance = localStorage.getItem("balance");
    if (existingBalance == null) {
      setBalance(0);
    } else {
      console.log(existingBalance);
      setBalance(parseInt(existingBalance));
    }
  });


  const onSubmit = () => {

if (withdraw <= balance){
localStorage.setItem("balance", balance-withdraw);
setWithdraw(0);
alert("Amount Withdrawn Successfully");

} 
else{

    alert("Cannot Withdraw more than balance");


}
  };
  return (
    <div>
      <Navbar />
      <h1 style={{ marginLeft: "20px" }}>Withdraw</h1>
      <br></br>
      <Card style={{ width: "22rem", marginLeft: "20px" }}>
        <Card.Body>
          <Card.Title> Balance</Card.Title>
          <Card.Text>
            <strong>{balance}</strong>
          </Card.Text>
          <Form>
            <Form.Group controlId="formBasicNumber">
              <Form.Label>Withdraw Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Amount"
                value={withdraw}
                onChange={(e) => setWithdraw(e.target.value)}
                min="0"
              />
            </Form.Group>
            {withdraw == 0 ? (
              <Button variant="primary" disabled onClick={onSubmit}>
               WithDraw
              </Button>
            ) : (
              <Button variant="primary" onClick={onSubmit}>
               WithDraw
              </Button>
            )}

          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
