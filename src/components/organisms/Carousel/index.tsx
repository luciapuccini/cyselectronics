import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

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

const INTERVAL_MS = 4500;

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [tick, setTick] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: tick is used as a reset trigger when user navigates manually
  useEffect(() => {
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [next, tick]);

  const goTo = (i: number) => {
    setCurrent(i);
    setTick((t) => t + 1);
  };

  return (
    <Wrapper>
      {slides.map((slide, i) => (
        <Slide key={slide.header} image={slide.image} active={i === current}>
          <TextPanel>
            <AccentBar />
            <Header>{slide.header}</Header>
            <Detail>{slide.detail}</Detail>
          </TextPanel>
        </Slide>
      ))}
      <Dots>
        {slides.map((slide, i) => (
          <Dot
            key={slide.header}
            active={i === current}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </Dots>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 400px;
  max-height: 720px;
  overflow: hidden;
`;

const Slide = styled.div<{ image: string; active: boolean }>`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(135deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.15) 60%, transparent 100%),
    url("${({ image }) => image}");
  background-size: cover;
  background-position: center;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.8s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 4rem 4rem 5rem;

  @media (max-width: 599px) {
    padding: 3rem 1.5rem 4rem;
  }
`;

const TextPanel = styled.div`
  background: rgba(18, 92, 52, 0.78);
  border-radius: 18px;
  padding: 2.25rem 2.75rem 3rem;
  max-width: min(640px, 90%);
  box-shadow: 0 22px 50px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);

  @media (max-width: 959px) {
    padding: 2rem 2rem 2.5rem;
  }

  @media (max-width: 599px) {
    padding: 1.75rem 1.5rem 2rem;
  }
`;

const AccentBar = styled.span`
  display: inline-block;
  width: 48px;
  height: 3px;
  background: var(--primary);
  margin-bottom: 1rem;
  border-radius: 2px;
`;

const Header = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0 0 0.75rem;
`;

const Detail = styled.p`
  font-family: var(--font-sans);
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
  color: rgba(255, 255, 255, 0.85);
  max-width: 640px;
  line-height: 1.6;
  font-weight: 400;
  margin: 0;
`;

const Dots = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

const Dot = styled.button<{ active: boolean }>`
  width: ${({ active }) => (active ? '32px' : '10px')};
  height: 10px;
  border-radius: 5px;
  border: none;
  background: ${({ active }) => (active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.4)')};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
`;
