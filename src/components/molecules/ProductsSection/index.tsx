import styled from 'styled-components';

import { primaryGreen } from '../../../styles/colors';
import ProductCard from '../../atoms/ProductCard';

const ProductsSection = () => {
  return (
    <MainCol>
      <h2>Our Products</h2>
      <Description>
        Our expertise providing service to the steelmaking industry allows us to
        make top state of the art sensing solutions, automatic control, real
        time quality control, equipment protection, among others.
      </Description>
      <Section>
        <ProductCard name='magnaposi'/>
        <ProductCard name='pemcc'/>
        <ProductCard name='rotor'/>
      </Section>
    </MainCol>
  );
};

export default ProductsSection;

const MainCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
  padding-top: 5vh;
  background-color: ${primaryGreen};
  color: #f0f0f0;

  h2 {
    font-size: 2rem;
    @media (max-width: 599px) {
      font-size: 1.5rem;
    }
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  max-width: 700px;
  text-align: center;
  margin: 1rem 1.5rem 2rem;
  line-height: 1.6;

  @media (max-width: 599px) {
    font-size: 1rem;
    margin: 0.75rem 1.25rem 1.5rem;
  }
`;

const Section = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1.5rem;
  padding: 0 1.5rem;
  margin-bottom: 5vh;
  box-sizing: border-box;

  @media (max-width: 599px) {
    flex-direction: column;
    align-items: stretch;
    padding: 0 1rem;
    gap: 1rem;
  }
`;
