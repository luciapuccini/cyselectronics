import React from 'react';
import styled from 'styled-components';
import { gray } from '../styles/colors';

const Footer = () => (
  <FooterBar>Copyright © 2021 C&S Controles y Sistemas</FooterBar>
);

export default Footer;

const FooterBar = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${gray};
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-self:center;
  width: 100vw;
  margin-top: 0.4rem;
`;
