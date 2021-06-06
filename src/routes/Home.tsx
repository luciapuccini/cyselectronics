import React from 'react';
import { Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import ProductsSection from '../components/molecules/ProductsSection';

import SplideCarousel from '../components/organisms/Carousel';
import { gray } from '../styles/colors';

const Home = () => (
  <Col style={{ padding: 0, marginBottom:"-0.8rem" }}>
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
    <ContactOverflow>
      <H3Divider>CONTACT US</H3Divider>
      <p>
        <b>Phone:</b> +54-336-4426734
      </p>
      <p>
        <b>E-mail:</b> info@controlesysistemas.com.ar
      </p>
      San Nicolás, Buenos Aires, Argentina.
    </ContactOverflow>
    <iframe
      title="google map cys"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26665.2008965253!2d-60.24076986293017!3d-33.341027880805335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7679b30478e45%3A0x705b2ead1a2421bb!2sGaribaldi%20611%2C%20San%20Nicol%C3%A1s%20de%20Los%20Arroyos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1622412832927!5m2!1ses!2sar"
      width="600"
      height="450"
      allowFullScreen={true}
      loading="lazy"
      style={{ width: '100vw', border: 'none' }}
    />
  </Col>
);

export default Home;

const H3Divider = styled.h3`
  border-bottom: 1px solid ${gray};
  width: 38vw;
`;

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
  text-align: center;
  line-height: 1.7;
`;

const MainHeader = styled.h1`
  color: ${gray};
`;

const ContactOverflow = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 45vw;
  justify-content: flex-start;
  right: 0.5rem;
  margin-top: 0.5rem;
  padding: 1em;
`;
