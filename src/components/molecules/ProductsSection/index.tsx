import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import { primaryGreen } from '../../../styles/colors';
import ProductCard from '../../atoms/ProductCard';

const ProductsSection = () => {
  return (
    <MainCol>
      <h2>Our Products</h2>
      <p style={{fontSize:"20px",margin:"2vw", fontWeight:500}}>
        Our expertise providing service to the steelmaking industry allows us to
        make top state of the art sensing solutions, automatic control, real
        time quality control, equipment protection, among others.
      </p>
      <Section>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Section>
    </MainCol>
  );
};

export default ProductsSection;

const MainCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
  padding-top: 5vh;
  background-color: ${primaryGreen};
  color: #f0f0f0;
`;

const Section = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 599px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
