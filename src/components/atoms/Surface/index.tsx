import styled from 'styled-components';

export const Surface = styled.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 0;
  box-shadow: none;
`;

export const InteractiveSurface = styled(Surface)`
  transition: background var(--transition-base), color var(--transition-base), border-color var(--transition-base);

  &:hover {
    background: var(--background);
    border-color: var(--accent);
  }
`;

export const Panel = styled(Surface)`
  padding: clamp(var(--space-6), 4vw, var(--space-10));
`;

export const Card = styled(Surface)`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding: clamp(var(--space-6), 4vw, var(--space-8));
`;
