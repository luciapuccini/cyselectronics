import React from 'react';
import { Col, Container } from 'react-bootstrap';
import styled from 'styled-components';

import partners from '../assets/partners.png';
import { secondaryOrange } from '../styles/colors';

const Company = () => (
  <Col>
    <br />
    <h2>Company</h2>
    <hr />
    <h4>
      C&S Controles y Sistemas was founded in 1991, with the mission of
      performing ​​Industrial Electronics designs and developments.
    </h4>
    <div>
      Our business values are set around serving our customer with full
      dedication, achieving their trust and work with them to solve their
      specific needs. We believe that our personal attention and daily work
      strengthen this trust and persists throughout the years. C&S’s main
      business is set in industrial electronics, in over 20 years, we have
      worked to increase our expertise in design, development, and maintenance
      of industrial electronic equipment. For this reason, our reliability and
      experience are two key pillars to our growth and our customers.
    </div>
    <br />

    <Container style={{flexDirection:'column'}}>
    <PartnersHeader>
      These are some of the companies that trusted and continue to trust us
    </PartnersHeader>
    <PartnersImg src={partners} alt="partners" />
    </Container>
  </Col>
);

export default Company;

const PartnersImg = styled.img`
  height: auto;
  width: 50vw;
`;

const PartnersHeader = styled.h5`
color:${secondaryOrange};
font-weight:500
`