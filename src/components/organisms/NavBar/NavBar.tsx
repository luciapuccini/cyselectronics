import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../assets/cys-branding.svg';
import MenuIcon from '../../../assets/menu.svg?react';
import type { Locale } from '../../../content';
import { useLanguage } from '../../../context/LanguageContext';

const matchHref = (href: string, path: string) =>
  href === '/' ? path === '/' : path.startsWith(href);

const CustomNavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { content, locale, setLocale } = useLanguage();
  const { nav } = content;

  const activePath = location.pathname;

  // biome-ignore lint/correctness/useExhaustiveDependencies: activePath is a trigger, not used inside the effect body
  useEffect(() => {
    setMenuOpen(false);
  }, [activePath]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Header>
      <HeaderInner>
        <Logo />
        <DesktopNavigation
          items={nav.items}
          activePath={activePath}
          cta={nav.cta}
          locale={locale}
          setLocale={setLocale}
          langSwitch={nav.langSwitch}
        />
        <MobileToggle
          type="button"
          aria-label={menuOpen ? nav.ariaClose : nav.ariaOpen}
          onClick={toggleMenu}
        >
          {menuOpen ? <CloseGlyph>✕</CloseGlyph> : <MenuGlyph />}
        </MobileToggle>
      </HeaderInner>
      <MobileNavigation
        items={nav.items}
        activePath={activePath}
        cta={nav.cta}
        menuOpen={menuOpen}
        onNavigate={closeMenu}
        locale={locale}
        setLocale={setLocale}
        langSwitch={nav.langSwitch}
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

type NavItem = { code: string; label: string; href: string };
type LangSwitchLabels = { en: string; es: string };

type LanguageSwitcherProps = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  labels: LangSwitchLabels;
};

const LanguageSwitcher = ({ locale, setLocale, labels }: LanguageSwitcherProps) => (
  <LangToggle>
    <LangOption
      type="button"
      $active={locale === 'es'}
      onClick={() => setLocale('es')}
    >
      {labels.es}
    </LangOption>
    <LangDivider aria-hidden>·</LangDivider>
    <LangOption
      type="button"
      $active={locale === 'en'}
      onClick={() => setLocale('en')}
    >
      {labels.en}
    </LangOption>
  </LangToggle>
);

type DesktopNavigationProps = {
  items: NavItem[];
  activePath: string;
  cta: { label: string; href: string };
  locale: Locale;
  setLocale: (l: Locale) => void;
  langSwitch: LangSwitchLabels;
};

const DesktopNavigation = ({ items, activePath, cta, locale, setLocale, langSwitch }: DesktopNavigationProps) => (
  <DesktopNav>
    <NavList aria-label="Main navigation">
      {items.map((item) => {
        const active = matchHref(item.href, activePath);
        return (
          <NavLink key={item.code} href={item.href} $active={active}>
            <NavCode>{item.code}</NavCode>
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </NavList>
    <LanguageSwitcher locale={locale} setLocale={setLocale} labels={langSwitch} />
    <QuoteButton href={cta.href}>
      {cta.label}
      <QuoteArrow aria-hidden>↗</QuoteArrow>
    </QuoteButton>
  </DesktopNav>
);

type MobileNavigationProps = {
  items: NavItem[];
  activePath: string;
  cta: { label: string; href: string };
  menuOpen: boolean;
  onNavigate: () => void;
  locale: Locale;
  setLocale: (l: Locale) => void;
  langSwitch: LangSwitchLabels;
};

const MobileNavigation = ({
  items,
  activePath,
  cta,
  menuOpen,
  onNavigate,
  locale,
  setLocale,
  langSwitch,
}: MobileNavigationProps) => (
  <MobileMenu $open={menuOpen}>
    <MobileNavList aria-label="Mobile navigation">
      {items.map((item) => {
        const active = matchHref(item.href, activePath);
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
    <MobileBottom>
      <LanguageSwitcher locale={locale} setLocale={setLocale} labels={langSwitch} />
      <MobileQuoteButton href={cta.href} onClick={onNavigate}>
        {cta.label}
        <QuoteArrow aria-hidden>↗</QuoteArrow>
      </MobileQuoteButton>
    </MobileBottom>
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

const LangToggle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: var(--letter-widest);
  text-transform: uppercase;
`;

const LangDivider = styled.span`
  color: var(--border);
  user-select: none;
`;

const LangOption = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  padding: 0.2rem 0.25rem;
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  cursor: ${({ $active }) => ($active ? 'default' : 'pointer')};
  color: ${({ $active }) => ($active ? 'var(--foreground)' : 'var(--muted-foreground)')};
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  transition: color var(--transition-fast);

  &:hover {
    color: ${({ $active }) => ($active ? 'var(--foreground)' : 'var(--accent)')};
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

const MobileBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-5);
  gap: var(--space-4);
`;

const MobileQuoteButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
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
