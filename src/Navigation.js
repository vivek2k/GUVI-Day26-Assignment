import React from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
        <div className="App">
            <Nav className="justify-content-center" activeKey="/home">

        <Nav.Item>
          <Nav.Link href="/fsd">Full Stack Development</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/cs">Cyber Security</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="ds" >
            Data Science    
          </Nav.Link>
        </Nav.Item>
      </Nav>
        <hr></hr>
        </div>
      );
};

export default Navigation;