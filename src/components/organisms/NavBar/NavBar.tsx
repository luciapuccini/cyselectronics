import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

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

  // biome-ignore lint/correctness/useExhaustiveDependencies: location is used as a navigation trigger, not a consumed value
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
      <TopBar>
        <a href="/" aria-label="Home">
          <LogoImg src={logo} alt="C&S Logo" />
        </a>
        <DesktopLinks className="navWrapper">
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
        </DesktopLinks>
        <HamburgerButton onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          <Menu />
        </HamburgerButton>
      </TopBar>

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

const TopBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 64px;
  border-bottom: 1px solid var(--border);
  background: var(--card);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 599px) {
    padding: 0 1rem;
  }
`;

const DesktopLinks = styled.ul`
  @media (max-width: 599px) {
    display: none;
  }
`;

const LogoImg = styled.img`
  height: 48px;
  width: auto;
  display: block;
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  svg {
    fill: var(--primary);
    height: 1.75rem;
    width: 1.75rem;
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
  max-width: 280px;
  background: var(--card);
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
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid var(--border);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: var(--muted-foreground);
  padding: 0.5rem;
  line-height: 1;
  &:hover { color: var(--primary); }
`;

const DrawerNav = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
`;

const DrawerLink = styled.a<{ isActive: boolean }>`
  font-family: var(--font-display);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
  color: ${({ isActive }) => (isActive ? 'var(--primary)' : 'var(--foreground)')};
  text-decoration: none;
  padding: 0.875rem 1.5rem;
  border-bottom: 1px solid var(--border);
  &:hover { color: var(--primary); background: var(--secondary); }
`;

const DrawerAccordion = styled.div`
  border-bottom: 1px solid var(--border);
`;

const DrawerAccordionToggle = styled.button<{ isActive: boolean }>`
  width: 100%;
  background: none;
  border: none;
  font-family: var(--font-display);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
  color: ${({ isActive }) => (isActive ? 'var(--primary)' : 'var(--foreground)')};
  text-align: left;
  padding: 0.875rem 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover { color: var(--primary); background: var(--secondary); }
`;

const Chevron = styled.span<{ open: boolean }>`
  font-size: 1.1rem;
  color: var(--muted-foreground);
  transform: rotate(${({ open }) => (open ? '90deg' : '0deg')});
  transition: transform 0.2s ease;
  display: inline-block;
`;

const DrawerSubLinks = styled.div`
  background: var(--secondary);
  display: flex;
  flex-direction: column;
`;

const DrawerSubLink = styled.a`
  font-family: var(--font-display);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 500;
  color: var(--muted-foreground);
  text-decoration: none;
  padding: 0.75rem 2.25rem;
  border-top: 1px solid var(--border);
  &:hover { color: var(--primary); }
`;

const DropdownLi = styled.li`
  position: relative;
`;

const DropdownToggle = styled.button<{ isActive: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ isActive }) => (isActive ? 'var(--primary)' : 'var(--foreground)')};
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius);
  transition: background 0.15s;
  &:hover { background: var(--secondary); }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.375rem 0;
  min-width: 160px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  z-index: 100;
  margin-top: 0.25rem;

  a {
    font-family: var(--font-display);
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--foreground);
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: background 0.15s;
    &:hover { background: var(--secondary); }
  }
`;
