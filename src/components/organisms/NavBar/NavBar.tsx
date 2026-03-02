import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import logo from '../../../assets/cys-branding.svg';
import Menu from '../../../assets/menu.svg?react';

import './NavBar.css';

const getCurrentPage = (path: string) => {
  const page = path.slice(1);
  switch (page) {
    case '': return 0;
    case 'company': return 1;
    case 'contact': return 2;
    case 'products':
    case 'products/positioning':
    case 'products/protection': return 3;
    case 'services': return 4;
    default: return 0;
  }
};

const CustomNavBar = () => {
  const [toggle, setToggle] = useState(true);
  const location = useLocation();
  const [active, setActive] = useState(getCurrentPage(location.pathname));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <TopBarContainer>
      <ExtrasContainer>
        <a href="/">
          <LogoImg src={logo} alt="cyslogo" />
        </a>
        <ToggleNav onClick={() => setToggle(!toggle)} />
      </ExtrasContainer>
      <LinksContainer className="navWrapper" toggle={toggle}>
        <li className={active === 0 ? 'current' : ''}>
          <a onClick={() => setActive(0)} href="/">Home</a>
        </li>
        <li className={active === 1 ? 'current' : ''}>
          <a href="/company" onClick={() => setActive(1)}>Company</a>
        </li>
        <li className={active === 2 ? 'current' : ''}>
          <a onClick={() => setActive(2)} href="/contact">Contact Us</a>
        </li>
        <DropdownLi ref={dropdownRef} className={active === 3 ? 'current' : ''}>
          <DropdownToggle
            onClick={() => setDropdownOpen((d) => !d)}
            isActive={active === 3}
          >
            Products
          </DropdownToggle>
          {dropdownOpen && (
            <DropdownMenu>
              <a
                href="/products/positioning"
                onClick={() => { setActive(3); setDropdownOpen(false); }}
              >
                Positioning
              </a>
              <a
                href="/products/protection"
                onClick={() => { setActive(3); setDropdownOpen(false); }}
              >
                Protection
              </a>
            </DropdownMenu>
          )}
        </DropdownLi>
        <li className={active === 4 ? 'current' : ''}>
          <a href="/services" onClick={() => setActive(4)}>Services</a>
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
    padding: 0;
  }
`;

const LogoImg = styled.img`
  height: 4rem;
  width: 6.5rem;
  margin: 0.5em 1em 0.5em 1em;
  margin-top: 0.6rem;
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

const DropdownLi = styled.li`
  position: relative;
  display: inline-block;
`;

const DropdownToggle = styled.button<{ isActive: boolean }>`
  background: none;
  border: none;
  padding: 0.5em 0.8em;
  margin: 0;
  font-family: 'Raleway', Arial, sans-serif;
  font-size: 16px;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : '500')};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ isActive }) => (isActive ? '#1e7e34' : '#181819')};
  cursor: pointer;
  &:hover {
    color: #1e7e34;
    font-weight: bold;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  min-width: 8rem;
  padding: 0.5rem 0;
  a {
    padding: 0.5rem 1rem;
    width: 90%;
    text-align: center;
    color: #181819;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      color: #1e7e34;
    }
  }
`;
