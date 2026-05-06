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
    linear-gradient(135deg, var(--color-overlay-dark-55) 0%, var(--color-overlay-dark-15) 60%, transparent 100%),
    url("${({ image }) => image}");
  background-size: cover;
  background-position: center;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.8s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-16) var(--space-16) var(--space-20);

  @media (max-width: 599px) {
    padding: var(--space-12) var(--space-6) var(--space-16);
  }
`;

const TextPanel = styled.div`
  background: var(--color-panel-overlay);
  border-radius: var(--radius-xl);
  padding: 2.25rem 2.75rem var(--space-12);
  max-width: min(640px, 90%);
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(4px);

  @media (max-width: 959px) {
    padding: var(--space-8) var(--space-8) var(--space-10);
  }

  @media (max-width: 599px) {
    padding: 1.75rem var(--space-6) var(--space-8);
  }
`;

const AccentBar = styled.span`
  display: inline-block;
  width: 48px;
  height: 3px;
  background: var(--primary);
  margin-bottom: var(--space-4);
  border-radius: 2px;
`;

const Header = styled.h2`
  font-family: var(--font-mono);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  letter-spacing: -0.02em;
  line-height: var(--line-snug);
  margin: 0 0 var(--space-3);
`;

const Detail = styled.p`
  font-family: var(--font-sans);
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
  color: var(--color-overlay-light-85);
  max-width: 640px;
  line-height: var(--line-relaxed);
  font-weight: var(--font-weight-regular);
  margin: 0;
`;

const Dots = styled.div`
  position: absolute;
  bottom: var(--space-6);
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
  background: ${({ active }) => (active ? 'var(--primary)' : 'var(--color-overlay-light-40)')};
  cursor: pointer;
  transition: all var(--transition-slow);
  padding: 0;
`;
