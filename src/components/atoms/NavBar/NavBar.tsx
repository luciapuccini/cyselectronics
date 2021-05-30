import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import logo from '../../../assets/cys-branding.svg';
import usFlag from '../assets/united-states.svg';
import { ReactComponent as Menu } from '../../../assets/menu.svg';

import './NavBar.css';

const getCurrentPage = (path: string) => {
  const page = path.slice(1);
  switch (page) {
    case '':
      return 0;
    case 'company':
      return 1;
    case 'contact':
      return 2;
    case 'products':
      return 3;
    case 'services':
      return 4;
    case 'news':
      return 4;
    default:
      return 0;
  }
};

const CustomNavBar = () => {
  const history = useHistory();
  const [toggle, setToggle] = React.useState(true);
  const lang = 'En'; // TODO: hangle languages
  const location = useLocation();
  const [active, setActive] = useState(getCurrentPage(location.pathname));

  return (
    <TopBarContainer>
      <ExtrasContainer>
        <LogoImg src={logo} />
        <ToggleNav onClick={() => setToggle(!toggle)} />
      </ExtrasContainer>
      <LinksContainer className="navWrapper" toggle={toggle}>
        <li className={active === 0 ? 'current' : ''}>
          <a onClick={() => setActive(0)} href="/">
            Home
          </a>
        </li>
        <li className={active === 1 ? 'current' : ''}>
          <a href="company" onClick={() => setActive(1)}>
            Company
          </a>
        </li>
        <li className={active === 2 ? 'current' : ''}>
          <a onClick={() => setActive(2)} href="contact">
            Contact Us
          </a>
        </li>
        <li className={active === 3 ? 'current' : ''}>
          <a href="products" onClick={() => setActive(3)}>
            Products
          </a>
        </li>
        <li className={active === 4 ? 'current' : ''}>
          <a href="services" onClick={() => setActive(4)}>
            Services
          </a>
        </li>
        <li className={active === 5 ? 'current' : ''}>
          <a href="news" onClick={() => setActive(5)}>
            News
          </a>
        </li>
      </LinksContainer>
    </TopBarContainer>
  );
};

export default CustomNavBar;

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 0px 3px #181819;
  @media (max-width: 599px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const ExtrasContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 599px) {
    width: 100%;

  }
`;

const LinksContainer = styled.ul<{ toggle: boolean }>`
  @media (max-width: 599px) {
    display: ${({ toggle }) => (toggle ? 'flex' : 'none')};
    flex-direction: column;
    padding:0
  }
`;

const LogoImg = styled.img`
  height: 4rem;
  width: 6.5rem;
  margin: 0.5em 1em 0.5em 1em;
  margin-top: 0.6rem;
  @media (max-width: 929px) {
  }
`;

const ToggleNav = styled(Menu)`
  fill: #009c22;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  margin-top: 1em;
  visibility: hidden;
  @media (max-width: 599px) {
    visibility: visible;
  }
`;
