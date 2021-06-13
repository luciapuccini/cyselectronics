import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Col, Nav } from 'react-bootstrap';

import Product from './Product';
import { primaryGreen } from '../styles/colors';

function Protection() {
const {pathname} =useLocation()
const isRotor = pathname.includes('rotor')

  return (
    <Col>
    <br/>
      <h2>Protection</h2>
      <Nav variant="tabs" defaultActiveKey={isRotor? 1:0} className="justify-content-end">
        <NavItem>
          <Nav.Link eventKey={0}  href='/products/protection/pemcc'>
            PEMCC
          </Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link eventKey={1}  href='/products/protection/rotor'>
            Rotor
          </Nav.Link>
        </NavItem>
      </Nav>
      { isRotor ?<Product product="rotor"/>: <Product product='pemcc'/>  }
    </Col>
  );
}

export default Protection;

const NavItem = styled(Nav.Item)`
  .nav-link {
    color: black;
  }

  .active {
    color: ${primaryGreen} !important;
    font-weight: 500;
  }
`;
