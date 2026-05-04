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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerProductsOpen, setDrawerProductsOpen] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState(getCurrentPage(location.pathname));
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

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <TopBarContainer>
        <ExtrasContainer>
          <a href="/">
            <LogoImg src={logo} alt="cyslogo" />
          </a>
          <HamburgerButton onClick={() => setDrawerOpen(true)} aria-label="Open menu">
            <Menu />
          </HamburgerButton>
        </ExtrasContainer>
        <LinksContainer className="navWrapper">
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
                <a href="/products/positioning" onClick={() => { setActive(3); setDropdownOpen(false); }}>
                  Positioning
                </a>
                <a href="/products/protection" onClick={() => { setActive(3); setDropdownOpen(false); }}>
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

      <Overlay open={drawerOpen} onClick={closeDrawer} />
      <Drawer open={drawerOpen}>
        <DrawerHeader>
          <a href="/" onClick={closeDrawer}>
            <LogoImg src={logo} alt="cyslogo" />
          </a>
          <CloseButton onClick={closeDrawer} aria-label="Close menu">✕</CloseButton>
        </DrawerHeader>
        <DrawerNav>
          <DrawerLink href="/" isActive={active === 0} onClick={() => setActive(0)}>Home</DrawerLink>
          <DrawerLink href="/company" isActive={active === 1} onClick={() => setActive(1)}>Company</DrawerLink>
          <DrawerLink href="/contact" isActive={active === 2} onClick={() => setActive(2)}>Contact Us</DrawerLink>
          <DrawerAccordion>
            <DrawerAccordionToggle
              onClick={() => setDrawerProductsOpen((d) => !d)}
              isActive={active === 3}
            >
              Products
              <Chevron open={drawerProductsOpen}>›</Chevron>
            </DrawerAccordionToggle>
            {drawerProductsOpen && (
              <DrawerSubLinks>
                <DrawerSubLink href="/products/positioning" onClick={() => setActive(3)}>
                  Positioning
                </DrawerSubLink>
                <DrawerSubLink href="/products/protection" onClick={() => setActive(3)}>
                  Protection
                </DrawerSubLink>
              </DrawerSubLinks>
            )}
          </DrawerAccordion>
          <DrawerLink href="/services" isActive={active === 4} onClick={() => setActive(4)}>Services</DrawerLink>
        </DrawerNav>
      </Drawer>
    </>
  );
};

export default CustomNavBar;

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 0px 3px #181819;
`;

const ExtrasContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 599px) {
    width: 100%;
    padding-right: 1rem;
  }
`;

const LinksContainer = styled.ul`
  @media (max-width: 599px) {
    display: none;
  }
`;

const LogoImg = styled.img`
  height: 4rem;
  width: 6.5rem;
  margin: 0.5em 1em 0.5em 1em;
  margin-top: 0.6rem;
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  svg {
    fill: #009c22;
    height: 2rem;
    width: 2rem;
  }
  @media (max-width: 599px) {
    display: flex;
    align-items: center;
  }
`;

const Overlay = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 200;
`;

const Drawer = styled.nav<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 75vw;
  max-width: 300px;
  background: #fff;
  z-index: 201;
  transform: translateX(${({ open }) => (open ? '0' : '100%')});
  transition: transform 0.28s ease;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.18);
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.75rem;
  border-bottom: 1px solid #e0e0e0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: #555;
  padding: 0.5rem;
  line-height: 1;
  &:hover { color: #1e7e34; }
`;

const DrawerNav = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
`;

const DrawerLink = styled.a<{ isActive: boolean }>`
  font-family: 'Raleway', Arial, sans-serif;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
  color: ${({ isActive }) => (isActive ? '#1e7e34' : '#181819')};
  text-decoration: none;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
  &:hover { color: #1e7e34; background: #f9f9f9; }
`;

const DrawerAccordion = styled.div`
  border-bottom: 1px solid #f0f0f0;
`;

const DrawerAccordionToggle = styled.button<{ isActive: boolean }>`
  width: 100%;
  background: none;
  border: none;
  font-family: 'Raleway', Arial, sans-serif;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
  color: ${({ isActive }) => (isActive ? '#1e7e34' : '#181819')};
  text-align: left;
  padding: 1rem 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover { color: #1e7e34; background: #f9f9f9; }
`;

const Chevron = styled.span<{ open: boolean }>`
  font-size: 1.1rem;
  color: #888;
  transform: rotate(${({ open }) => (open ? '90deg' : '0deg')});
  transition: transform 0.2s ease;
  display: inline-block;
`;

const DrawerSubLinks = styled.div`
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
`;

const DrawerSubLink = styled.a`
  font-family: 'Raleway', Arial, sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: #555;
  text-decoration: none;
  padding: 0.8rem 2.25rem;
  border-top: 1px solid #ebebeb;
  &:hover { color: #1e7e34; }
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
  &:hover { color: #1e7e34; font-weight: bold; }
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
    &:hover { color: #1e7e34; }
  }
`;
