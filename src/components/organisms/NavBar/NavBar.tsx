import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../assets/cys-branding.svg';
import MenuIcon from '../../../assets/menu.svg?react';

type NavItem = {
  code: string;
  label: string;
  href: string;
  match: (path: string) => boolean;
  children?: Array<{ label: string; href: string }>;
};

// TODO: delete comments -- new verison in progress
const NAV_ITEMS: NavItem[] = [
  { code: '01', label: 'Home', href: '/', match: (path) => path === '/' },
  // { code: '02', label: 'Company', href: '/company', match: (path) => path.startsWith('/company') },
  {
    code: '02',
    label: 'Solutions',
    href: '/solutions',
    match: (path) => path.startsWith('/solutions'),
    // children: [
    //   { label: 'Positioning', href: '/products/positioning' },
    //   { label: 'Protection', href: '/products/protection' },
    // ],
  },
  // { code: '04', label: 'Services', href: '/services', match: (path) => path.startsWith('/services') },
  { code: '03', label: 'Contact', href: '/contact', match: (path) => path.startsWith('/contact') },
];

const CTA = { href: '/contact', label: 'Request quote' };

const CustomNavBar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activePath = location.pathname;

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [activePath]);

  useEffect(() => {
    const productItem = NAV_ITEMS.find((item) => item.children);
    setMobileProductsOpen(productItem ? productItem.match(activePath) : false);
  }, [activePath]);

  const handleMobileNavigate = () => {
    setMenuOpen(false);
  };

  return (
    <Header>
      <HeaderInner>
        <LogoLink href="/" aria-label="Home">
          <LogoImg src={logo} alt="C&S Logo" />
        </LogoLink>

        <DesktopNav>
          <NavList aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const active = item.match(activePath);

              if (item.children) {
                const isOpen = openDropdown === item.code;
                return (
                  <NavDropdown key={item.code} ref={dropdownRef}>
                    <NavDropdownToggle
                      type="button"
                      onClick={() => setOpenDropdown((prev) => (prev === item.code ? null : item.code))}
                      $active={active}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      <NavCode>{item.code}</NavCode>
                      <span>{item.label}</span>
                      <Chevron $open={isOpen} aria-hidden>⌄</Chevron>
                    </NavDropdownToggle>
                    {isOpen && (
                      <DropdownPanel role="menu">
                        {item.children.map((child) => (
                          <DropdownLink
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </DropdownLink>
                        ))}
                      </DropdownPanel>
                    )}
                  </NavDropdown>
                );
              }

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

        <MobileToggle
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <CloseGlyph>✕</CloseGlyph> : <MenuGlyph />}
        </MobileToggle>
      </HeaderInner>

      <MobileMenu $open={menuOpen}>
        <MobileNavList aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => {
            const active = item.match(activePath);

            if (item.children) {
              return (
                <MobileDropdown key={item.code}>
                  <MobileDropdownToggle
                    type="button"
                    onClick={() => setMobileProductsOpen((prev) => !prev)}
                    $active={active}
                    aria-expanded={mobileProductsOpen}
                  >
                    <MobileDropdownLabel>
                      <NavCode>{item.code}</NavCode>
                      <span>{item.label}</span>
                    </MobileDropdownLabel>
                    <Chevron $open={mobileProductsOpen} aria-hidden>⌄</Chevron>
                  </MobileDropdownToggle>
                  {mobileProductsOpen && (
                    <MobileSubList>
                      {item.children.map((child) => (
                        <MobileSubLink
                          key={child.href}
                          href={child.href}
                          onClick={handleMobileNavigate}
                        >
                          {child.label}
                        </MobileSubLink>
                      ))}
                    </MobileSubList>
                  )}
                </MobileDropdown>
              );
            }

            return (
              <MobileNavLink
                key={item.code}
                href={item.href}
                $active={active}
                onClick={handleMobileNavigate}
              >
                <MobileLinkContent>
                  <NavCode>{item.code}</NavCode>
                  <span>{item.label}</span>
                </MobileLinkContent>
                <Chevron aria-hidden $open={false}>↗</Chevron>
              </MobileNavLink>
            );
          })}
        </MobileNavList>
        <MobileQuoteButton href={CTA.href} onClick={handleMobileNavigate}>
          {CTA.label}
          <QuoteArrow aria-hidden>↗</QuoteArrow>
        </MobileQuoteButton>
      </MobileMenu>
    </Header>
  );
};

export default CustomNavBar;

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

const NavDropdown = styled.div`
  position: relative;
`;

const NavDropdownToggle = styled.button<{ $active: boolean }>`
  ${navBaseStyles}
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ $active }) => ($active ? 'var(--foreground)' : 'var(--muted-foreground)')};

  &:hover {
    color: var(--foreground);
  }

  &::after {
    content: '';
    position: absolute;
    left: var(--space-4);
    right: var(--space-4);
    bottom: -6px;
    height: 1px;
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

const DropdownPanel = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  min-width: 210px;
  background: var(--color-white);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: var(--space-2) 0.4rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  z-index: var(--z-dropdown);
`;

const DropdownLink = styled.a`
  display: block;
  padding: 0.65rem 1.1rem;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  letter-spacing: var(--letter-tight);
  color: var(--foreground);
  text-decoration: none;
  border-radius: var(--radius-lg);
  transition: background var(--transition-base), color var(--transition-base);

  &:hover {
    background: var(--secondary);
    color: var(--foreground);
  }
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

const MobileDropdown = styled.div`
  border-bottom: 1px solid var(--border);
`;

const MobileDropdownToggle = styled.button<{ $active: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-5);
  border: none;
  background: ${({ $active }) => ($active ? 'var(--secondary)' : 'transparent')};
  text-align: left;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: var(--letter-widest);
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? 'var(--accent)' : 'var(--foreground)')};
`;

const MobileDropdownLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
`;

const MobileSubList = styled.div`
  background: var(--secondary);
  display: flex;
  flex-direction: column;
`;

const MobileSubLink = styled.a`
  padding: 0.85rem 2.25rem;
  text-decoration: none;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  color: var(--foreground);
  border-top: 1px solid var(--border);

  &:hover {
    color: var(--accent);
  }
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
