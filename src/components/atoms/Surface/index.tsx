import styled from 'styled-components';

export const Surface = styled.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 0;
  box-shadow: none;
`;


export const Card = styled(Surface)`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding: clamp(var(--space-6), 4vw, var(--space-8));
`;
