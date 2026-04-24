import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import './Carousel.css';

import slide1 from '../../../assets/slide-1.webp';
import slide2 from '../../../assets/slide-2.webp';
import slide3 from '../../../assets/slide-3.webp';

const slides = [
  {
    image: slide1,
    header: 'STEELMAKERS',
    detail:
      'Our expertise in this market has been improved over the years having made top state of the art solutions related to sensors, automatic control, real-time quality control, equipment protection, etc.',
  },
  {
    image: slide2,
    header: 'ELECTRONIC',
    detail:
      'Development, manufacture and repair of electronic and electromechanical products ranging from the concept to turnkey supply.',
  },
  {
    image: slide3,
    header: 'ENGINEERING',
    detail:
      'Conceptualization, requirements, specification, architecture design, hardware development, testing, documentation and reverse engineering.',
  },
];

const INTERVAL_MS = 4000;

const SplideCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [tick, setTick] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [next, tick]);

  const goTo = (i: number) => {
    setCurrent(i);
    setTick((t) => t + 1);
  };

  return (
    <CarouselWrapper>
      {slides.map((slide, i) => (
        <Slide key={i} image={slide.image} active={i === current}>
          <SlideHeader>{slide.header}</SlideHeader>
          <SlideDetail>{slide.detail}</SlideDetail>
        </Slide>
      ))}
      <Dots>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel_controls${i === current ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </Dots>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  position: relative;
  height: 50vh;
  width: 100vw;
  overflow: hidden;
`;

const Slide = styled.div<{ image: string; active: boolean }>`
  position: absolute;
  inset: 0;
  background-image: url("${({ image }) => image}");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.6s ease;
  @media (max-width: 599px) {
    align-items: center;
    justify-content: center;
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
    display: none;
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
`;

export default SplideCarousel;
