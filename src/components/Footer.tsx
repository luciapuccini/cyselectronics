import React from 'react';
import styled from 'styled-components';
import { gray } from '../styles/colors';

const Footer = () => (
  <FooterBar>Copyright © 2021 C&S Controles y Sistemas</FooterBar>
);

export default Footer;

const FooterBar = styled.footer`
  background-color: ${gray};
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
  box-sizing: border-box;
`;
