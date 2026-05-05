import styled from 'styled-components';

import ProductCard from '../../atoms/ProductCard';

const ProductsSection = () => {
  return (
    <Section id="products">
      <Inner>
        <Title>Our Products</Title>
        <Description>
          Our expertise providing service to the steelmaking industry allows us
          to make top state of the art sensing solutions, automatic control,
          real time quality control, equipment protection, among others.
        </Description>
        <Cards>
          <ProductCard name="magnaposi" />
          <ProductCard name="pemcc" />
          <ProductCard name="rotor" />
        </Cards>
      </Inner>
    </Section>
  );
};

export default ProductsSection;

const Section = styled.section`
  background: var(--accent);
  padding: clamp(3rem, 6vw, 5rem) 2rem;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--accent-foreground);
  margin: 0 0 1rem;
`;

const Description = styled.p`
  font-size: clamp(0.875rem, 1.3vw, 1.05rem);
  color: rgba(255, 255, 255, 0.75);
  max-width: 640px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
  text-wrap: pretty;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;
