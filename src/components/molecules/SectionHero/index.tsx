import type { ElementType, ReactNode } from 'react';
import styled from 'styled-components';

import AccentBar from '../../atoms/AccentBar';

type SectionHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Heading level for the title. Defaults to h1 (page hero); use h2 for in-page sections. */
  titleAs?: ElementType;
  className?: string;
};

/**
 * Page/section hero composition: eyebrow + accent bar, title, optional lede.
 * Centralises the eyebrow + dash + title + lede shape used on Contact, Solutions,
 * and the Home capabilities header.
 */
const SectionHero = ({ eyebrow, title, lede, titleAs = 'h1', className }: SectionHeroProps) => (
  <Hero className={className}>
    <Eyebrow>
      <AccentBar />
      {eyebrow}
    </Eyebrow>
    <Title as={titleAs}>{title}</Title>
    {lede && <Lede>{lede}</Lede>}
  </Hero>
);

export default SectionHero;

const Hero = styled.header`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: var(--letter-extreme);
  text-transform: uppercase;
  color: var(--accent);
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-snug);
  letter-spacing: -0.01em;
  color: var(--foreground);
  white-space: pre-line;
`;

const Lede = styled.p`
  margin: 0;
  max-width: 580px;
  font-size: 1.05rem;
  line-height: var(--line-relaxed);
  color: var(--muted-foreground);
`;
