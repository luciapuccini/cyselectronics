import styled from 'styled-components';
import LocationMap from '../components/atoms/Map';
import ProductsSection from '../components/molecules/ProductsSection';
import SplideCarousel from '../components/organisms/Carousel';
import { usePageTitle } from '../hooks/usePageTitle';
import { gray } from '../styles/colors';

const Home = () => {
  usePageTitle(undefined, {
    en: 'Industrial electronics design, development, and maintenance since 1991.',
    es: 'Diseño, desarrollo y mantenimiento de electrónica industrial desde 1991.',
  });
  return (
    <div style={{ padding: 0, marginBottom: '-0.8rem' }}>
      <SplideCarousel />
      <MainCol>
        <MainHeader>C&S Controles y Sistemas</MainHeader>
        <MainDetail>
          We complement existing technologies with our own developments, aligned
          with the specific needs of the client, providing solutions to problems
          that have no reception in traditional suppliers.
        </MainDetail>
      </MainCol>
      <ProductsSection />
      <LocationMap />
    </div>
  );
};

export default Home;

const MainCol = styled.div`
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
  text-align: center;
  line-height: 1.7;
`;

const MainHeader = styled.h1`
  color: ${gray};
`;
