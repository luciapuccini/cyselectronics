import styled from 'styled-components';

/**
 * Small icon container (≤40×40). The single layout-system exception to the
 * sharp-corners rule — keeps `--radius-md` for icon affordances next to text.
 * Use only for inline icons; never as a card or section.
 */
const IconBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--secondary);
  color: var(--accent);
`;

export default IconBadge;
