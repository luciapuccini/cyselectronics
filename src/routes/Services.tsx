import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

import electronic from '../assets/electronics.png';
import { green200, primaryGreen } from '../styles/colors';

const Services = () => (
  <Col>
    <br />
    <h2>Services</h2>
    <hr />
    <img
      src={electronic}
      alt="services"
      style={{ height: '40vh', width: '100%', objectFit: 'cover' }}
    />
    <hr />
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
);
export default Services;

const Header = styled.h3`
  color: ${primaryGreen};
`;
