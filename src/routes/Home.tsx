import styled from 'styled-components';

import LocationMap from '../components/atoms/Map';
import ProductsSection from '../components/molecules/ProductsSection';
import Carousel from '../components/organisms/Carousel';
import { usePageTitle } from '../hooks/usePageTitle';

const Home = () => {
  usePageTitle(undefined, {
    en: 'Industrial electronics design, development, and maintenance since 1991.',
    es: 'Diseño, desarrollo y mantenimiento de electrónica industrial desde 1991.',
  });
  return (
    <>
      <Carousel />
      <Hero className="bg-grid">
        <Title>C&S Controles y Sistemas</Title>
        <Lede>
          We complement existing technologies with our own developments,
          aligned with the specific needs of the client, providing solutions
          to problems that have no reception in traditional suppliers.
        </Lede>
      </Hero>
      <ProductsSection />
      <LocationMap />
    </>
  );
};

export default Home;

const Hero = styled.section`
  padding: clamp(3rem, 6vw, 5rem) 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  color: var(--foreground);
  margin: 0 0 1rem;
`;

const Lede = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1.125rem);
  color: var(--muted-foreground);
  max-width: 680px;
  line-height: 1.7;
  text-wrap: pretty;
  margin: 0;
`;
