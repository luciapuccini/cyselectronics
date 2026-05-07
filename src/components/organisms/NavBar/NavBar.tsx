import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../assets/cys-branding.svg';
import MenuIcon from '../../../assets/menu.svg?react';

type NavItem = {
  code: string;
  label: string;
  href: string;
  match: (path: string) => boolean;
};

const NAV_ITEMS: NavItem[] = [
  { code: '01', label: 'Home', href: '/', match: (path) => path === '/' },

  {
    code: '02',
    label: 'Solutions',
    href: '/solutions',
    match: (path) => path.startsWith('/solutions'),
  },

  { code: '03', label: 'Contact', href: '/contact', match: (path) => path.startsWith('/contact') },
];

const CTA = { href: '/contact', label: 'Request quote' };

const CustomNavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const activePath = location.pathname;

  useEffect(() => {
    setMenuOpen(false);
  }, [activePath]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Header>
      <HeaderInner>
        <Logo />
        <DesktopNavigation items={NAV_ITEMS} activePath={activePath} />
        <MobileToggle
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
        >
          {menuOpen ? <CloseGlyph>✕</CloseGlyph> : <MenuGlyph />}
        </MobileToggle>
      </HeaderInner>
      <MobileNavigation
        items={NAV_ITEMS}
        activePath={activePath}
        menuOpen={menuOpen}
        onNavigate={closeMenu}
      />
    </Header>
  );
};

export default CustomNavBar;

const Logo = () => (
  <LogoLink href="/" aria-label="Home">
    <LogoImg src={logo} alt="C&S Logo" />
  </LogoLink>
);

type DesktopNavigationProps = {
  items: NavItem[];
  activePath: string;
};

const DesktopNavigation = ({ items, activePath }: DesktopNavigationProps) => (
  <DesktopNav>
    <NavList aria-label="Main navigation">
      {items.map((item) => {
        const active = item.match(activePath);
        return (
          <NavLink key={item.code} href={item.href} $active={active}>
            <NavCode>{item.code}</NavCode>
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </NavList>
    <QuoteButton href={CTA.href}>
      {CTA.label}
      <QuoteArrow aria-hidden>↗</QuoteArrow>
    </QuoteButton>
  </DesktopNav>
);

type MobileNavigationProps = {
  items: NavItem[];
  activePath: string;
  menuOpen: boolean;
  onNavigate: () => void;
};

const MobileNavigation = ({ items, activePath, menuOpen, onNavigate }: MobileNavigationProps) => (
  <MobileMenu $open={menuOpen}>
    <MobileNavList aria-label="Mobile navigation">
      {items.map((item) => {
        const active = item.match(activePath);
        return (
          <MobileNavLink key={item.code} href={item.href} $active={active} onClick={onNavigate}>
            <MobileLinkContent>
              <NavCode>{item.code}</NavCode>
              <span>{item.label}</span>
            </MobileLinkContent>
            <Chevron aria-hidden $open={false}>↗</Chevron>
          </MobileNavLink>
        );
      })}
    </MobileNavList>
    <MobileQuoteButton href={CTA.href} onClick={onNavigate}>
      {CTA.label}
      <QuoteArrow aria-hidden>↗</QuoteArrow>
    </MobileQuoteButton>
  </MobileMenu>
);

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  border-bottom: 1px solid var(--border);
  background: var(--color-overlay-light-90);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  height: var(--header-height);
  padding: 0 var(--space-8);
  margin: 0 auto;
  max-width: var(--container-max-wide);

  @media (max-width: 899px) {
    padding: 0 var(--space-6);
  }

  @media (max-width: 599px) {
    padding: 0 var(--space-5);
    height: var(--header-height-mobile);
  }
`;

const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
`;

const LogoImg = styled.img`
  height: 44px;
  width: auto;

  @media (max-width: 599px) {
    height: 40px;
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-6);

  @media (max-width: 899px) {
    display: none;
  }
`;

const NavList = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const NavCode = styled.span`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: var(--letter-extreme);
  text-transform: uppercase;
  color: var(--primary);
  opacity: 0.75;
`;

const navBaseStyles = `
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding: 0.6rem var(--space-4);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: var(--letter-widest);
  text-transform: uppercase;
  line-height: var(--line-tight);
  position: relative;
  text-decoration: none;
  transition: color var(--transition-base);
`;

const NavLink = styled.a<{ $active: boolean }>`
  ${navBaseStyles}
  color: ${({ $active }) => ($active ? 'var(--color-text-on-dark-muted)' : 'var(--muted-foreground)')};

  &:hover {
    color: var(--foreground);
  }

  &::after {
    content: '';
    position: absolute;
    left: var(--space-4);
    right: var(--space-4);
    bottom: -6px;
    height: 2px;
    background: var(--primary);
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: center;
    transition: transform var(--transition-base);
  }
`;

const Chevron = styled.span<{ $open: boolean }>`
  font-size: var(--font-size-xs);
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
  transition: transform var(--transition-base);
  color: var(--muted-foreground);
`;

const QuoteButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  border: 1px solid var(--border);
  background: var(--card);
  padding: 0.6rem var(--space-5);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: var(--letter-widest);
  text-transform: uppercase;
  text-decoration: none;
  color: var(--foreground);
  transition: border-color var(--transition-base), color var(--transition-base);

  &:hover {
    border-color: var(--primary);
    color: var(--accent);
  }
`;

const QuoteArrow = styled.span`
  font-size: 0.8rem;
  transition: transform var(--transition-base);

  ${QuoteButton}:hover & {
    transform: translate(2px, -2px);
  }
`;

const MobileToggle = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid var(--border);
  background: var(--card);
  border-radius: var(--radius-lg);
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    stroke: var(--foreground);
  }

  @media (max-width: 899px) {
    display: inline-flex;
  }
`;

const MenuGlyph = styled(MenuIcon)`
  width: 20px;
  height: 20px;
  stroke: var(--foreground);
`;

const CloseGlyph = styled.span`
  font-size: 1.1rem;
  color: var(--foreground);
  line-height: var(--line-tight);
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 899px) {
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    border-top: 1px solid var(--border);
    background: var(--color-overlay-light-96);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
`;

const MobileNavList = styled.nav`
  display: flex;
  flex-direction: column;
`;

const MobileLinkContent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
`;

const MobileNavLink = styled.a<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-5);
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: var(--letter-widest);
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? 'var(--accent)' : 'var(--foreground)')};
  background: ${({ $active }) => ($active ? 'var(--secondary)' : 'transparent')};
`;


const MobileQuoteButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin: var(--space-5);
  border: 1px solid var(--border);
  background: var(--card);
  padding: 0.7rem var(--space-5);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: var(--letter-widest);
  text-transform: uppercase;
  color: var(--foreground);
  transition: border-color var(--transition-base), color var(--transition-base);

  &:hover {
    border-color: var(--accent);
    color: var(--primary);
  }
`;
