import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  border-top: 1px solid var(--border);
  background: var(--background);
`;

export const SectionContent = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: var(--container-max-wide);
  padding: clamp(var(--space-8), 6vw, var(--space-12)) clamp(var(--space-5), 4vw, var(--space-8));
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-6), 3vw, var(--space-10));
  box-sizing: border-box;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: var(--font-weight-medium);
  letter-spacing: -0.01em;
  line-height: 1.15;
  color: var(--foreground);
`;

export const SectionEyebrow = styled.span`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: var(--letter-extreme);
  text-transform: uppercase;
  color: var(--accent);
`;
