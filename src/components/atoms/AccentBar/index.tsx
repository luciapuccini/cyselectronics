import styled, { css } from 'styled-components';

type AccentBarProps = {
  $width?: string;
  $height?: string;
  $color?: string;
};

const AccentBar = styled.span<AccentBarProps>`
  ${({ $width = '32px', $height = '1px', $color = 'var(--accent)' }) => css`
    display: inline-block;
    width: ${$width};
    height: ${$height};
    background: ${$color};
  `}
`;

export default AccentBar;
