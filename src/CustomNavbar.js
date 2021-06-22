import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./CustomNavbar.css"

const renderTooltipAccount = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    This is the account page. You can create an account. You can also add another account.
  </Tooltip>
);
const renderTooltipDeposit = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    This is the deposit page. You can Deposit you money. You can also check your balance.
  </Tooltip>
);
const renderTooltipWithdraw = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    This is the withdraw page. You can Withdraw you money. You can also check your balance.
  </Tooltip>
);
const renderTooltipData = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    This is the all data page. You can see all your data.
  </Tooltip>
);

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">

      <Navbar.Brand href="/">Bad Bank</Navbar.Brand>
      <Nav className="mr-auto" style={{ paddingLeft: '70%' }}>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltipAccount}
        >
          <Nav.Link href="/account">Create Account</Nav.Link>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltipDeposit}
        >
          <Nav.Link href="/deposit">Deposit</Nav.Link>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltipWithdraw}
        >
          <Nav.Link href="/withdraw">Withdraw</Nav.Link>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltipData}
        >
          <Nav.Link href="/data">All Data</Nav.Link>
        </OverlayTrigger>
      </Nav>
    </Navbar >
  )
}
export default CustomNavbar
