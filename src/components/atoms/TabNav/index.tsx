import styled from 'styled-components';
import { primaryGreen } from '../../../styles/colors';

export const TabNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 1rem;
`;

export const TabLink = styled.a<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: ${({ active }) => (active ? primaryGreen : 'black')};
  font-weight: ${({ active }) => (active ? '500' : 'normal')};
  border: 1px solid ${({ active }) => (active ? '#dee2e6' : 'transparent')};
  border-bottom: ${({ active }) => (active ? '1px solid white' : '1px solid transparent')};
  margin-bottom: -1px;
  border-radius: 0.25rem 0.25rem 0 0;
  background: ${({ active }) => (active ? 'white' : 'transparent')};
  &:hover {
    color: ${primaryGreen};
  }
`;
