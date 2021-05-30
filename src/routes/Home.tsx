import React from 'react';
import { Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import ProductsSection from '../components/molecules/ProductsSection';

import SplideCarousel from '../components/organisms/Carousel';
import { gray } from '../styles/colors';

const Home = () => (
  <Col style={{padding:0}}>
    <SplideCarousel />
    <MainCol>
      <MainHeader>C&S Controles y Sistemas</MainHeader>
      <MainDetail>
        We complement existing technologies with our own developments, aligned
        with the specific needs of the client, providing solutions to problems
        that have no reception in traditional suppliers.
      </MainDetail>
    </MainCol>
<ProductsSection/>
  </Col>
);

export default Home;

const MainCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
`;

const MainDetail = styled.h2`
  color: ${gray};
  font-size: 1.3em;
  margin: 2vh 2vw 2vh 2vw;
  text-align:center;
  line-height: 1.7;
`;

const MainHeader = styled.h1`
  color: ${gray};
`;
