import styled from 'styled-components';

import LocationMap from '../components/atoms/Map';
import TrustedBySection from '../components/molecules/TrustedBySection';
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
      {/* <Hero className="bg-grid">
        <Title>C&S Controles y Sistemas</Title>
        <Lede>
          We complement existing technologies with our own developments,
          aligned with the specific needs of the client, providing solutions
          to problems that have no reception in traditional suppliers.
        </Lede>
      </Hero> */}
      <TrustedBySection />
      {/* <LocationMap /> */}
    </>
  );
};

export default Home;

const Hero = styled.section`
  padding: clamp(3rem, 6vw, 5rem) var(--space-8);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: var(--font-weight-bold);
  color: var(--foreground);
  margin: 0 0 var(--space-4);
`;

const Lede = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1.125rem);
  color: var(--muted-foreground);
  max-width: 680px;
  line-height: var(--line-loose);
  text-wrap: pretty;
  margin: 0;
`;
