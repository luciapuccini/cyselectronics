import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

import electronic from '../assets/electronics.png';
import repair from '../assets/repair.jpeg';
import { green200, primaryGreen } from '../styles/colors';

const Services = () => (
  <Col>
    <br />
    <h2>Services</h2>
    <hr />
    <Row>

    <Col sm={1} md={5} lg={5} >
    <img
      src={repair}
      alt="services"
      style={{  objectFit: 'cover',
      width:"100%",
      height: "100%" }}
    />
    </Col>

    <Col sm={1} md={7} lg={7} >
    <Header>Engineering</Header>
    <p>
      Our product engineering process includes conceptualization, requirements,
      specification, architecture design, hardware development, testing,
      documentation and reverse engineering.
    </p>
    <ul>
      <li>Electromechanical Development requirements</li>
      <li>Mechanical and electrical developments architecture</li>
      <li>Electronic boards system and architecture</li>
      <li>Designs testing and verification</li>
      <li>Reverse Engineering</li>
    </ul>

    <Header>Electronic</Header>
    <p>
      Service development, manufacture and repair of electronic and
      electromechanical products from concept to turnkey supply is available.
    </p>
    <ul>
      <li>Development and manufacture of spare parts and solutions</li>
      <li>Technical assistance</li>
      <li>
        Repair of industrial electronic control and power multibrand equipment
      </li>
    </ul>

    <Header>Steelmakers</Header>
    <p>
      Our expertise in this market has been perfected over the years having made
      unique sensing system related engineering, automatic control, quality
      control, real-time, operational safety, etc. For example:
    </p>
    <b>Pickling Lines</b>
    <ul>
      <li>Catenary measurement system</li>
    </ul>

    <b>Coke Plant:</b>
    <ul>
      <li>Infrared positioning system for coking ovens.</li>
    </ul>
    </Col>
    </Row>
  </Col>
);
export default Services;

const Header = styled.h3`
  color: ${primaryGreen};
`;
