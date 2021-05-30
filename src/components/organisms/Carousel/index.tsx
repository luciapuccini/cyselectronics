import React from 'react';
import styled from 'styled-components';

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './Carousel.css';

import slide1 from '../../../assets/slide-1.png';
import slide2 from '../../../assets/slide-2.png';
import slide3 from '../../../assets/slide-3.png';



const SplideCarousel = () => (
  <Splide
    options={{
      rewind: true,
      autoplay: true,
      interval: 30000,
      height: '50vh',
      width: '100vw',
      arrows: false,
      classes: {
        page: 'splide__pagination__page carousel_controls',
      },
    }}
  >
    <SplideSlideCustom image={slide1}>
      <SlideHeader>STEELMAKERS</SlideHeader>
      <SlideDetail>
        Our expertise in this market has been improved over the years having
        made top state of the art solutions related to sensors, automatic
        control, real-time quality control, equipment protection, etc.
      </SlideDetail>
    </SplideSlideCustom>
    <SplideSlideCustom image={slide2}>
      <SlideHeader>ELECTRONIC</SlideHeader>
      <SlideDetail>
        Development, manufacture and repair of electronic and electromechanical
        products ranging from the concept to turnkey supply.
      </SlideDetail>
    </SplideSlideCustom>
    <SplideSlideCustom image={slide3}>
      <SlideHeader>ENGINEERING</SlideHeader>
      <SlideDetail>
        Conceptualization, requirements, specification, architecture design,
        hardware development, testing, documentation and reverse engineering.
      </SlideDetail>
    </SplideSlideCustom>
  </Splide>
);

const SplideSlideCustom = styled(SplideSlide)<{ image: string }>`
 width:100%;
 height:auto;
 background-image: url("${({ image }) => image}");
 background-size: cover;
 background-position: center;
 display:flex;
 flex-direction:column;
 align-items:flex-end;
 justify-content:space-evenly;
 @media (max-width: 599px) {
  align-items:center;
  justify-content:center;
}
`;

const SlideHeader = styled.h2`
  color: #ffffff;
  text-transform: uppercase;
  font-family: "Raleway", Arial, sans-serif;
  margin: 0 0 1.375em;
  background: rgba(30, 126, 52, 0.8);
  font-size: 1.875em;
  font-weight: 300;
  line-height: 1.3;
  padding: 0.625em 1.25em;

`;

const SlideDetail = styled.p`
  color: #ffffff;
  font-family: "Raleway", Arial, sans-serif;
  margin: 0 0 0.937em;
  background: rgba(30, 126, 52, 0.8);
  font-size: 1.5em;
  font-weight: 300;
  line-height: 1.3;
  padding: 0.625em 1.25em;
  max-width: 80vw;
  @media (max-width: 599px) {
display:none
  }

`;

export default SplideCarousel