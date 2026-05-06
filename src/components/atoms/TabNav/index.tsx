import styled from 'styled-components';

export const TabNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: var(--space-4);
`;

export const TabLink = styled.a<{ active?: boolean }>`
  padding: var(--space-2) var(--space-4);
  text-decoration: none;
  color: ${({ active }) => (active ? 'var(--primary)' : 'black')};
  font-weight: ${({ active }) => (active ? 'var(--font-weight-medium)' : 'var(--font-weight-regular)')};
  border: 1px solid ${({ active }) => (active ? '#dee2e6' : 'transparent')};
  border-bottom: ${({ active }) => (active ? '1px solid white' : '1px solid transparent')};
  margin-bottom: -1px;
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  background: ${({ active }) => (active ? 'white' : 'transparent')};
  &:hover {
    color: var(--primary);
  }
`;
