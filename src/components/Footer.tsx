import styled from 'styled-components';

import logo from '../assets/cys-branding.svg';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Company', href: '/company' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
];

const productLinks = [
  { label: 'Magnaposi SM-500T', href: '/products/positioning' },
  { label: 'PEMCC', href: '/products/protection' },
  { label: 'Protection Rotor', href: '/products/protection' },
];

const Footer = () => (
  <FooterBar>
    <Grid>
      <Col>
        <BrandLogo src={logo} alt="C&S" />
        <Tagline>
          Industrial electronics design, development, and maintenance since 1991.
        </Tagline>
      </Col>
      <Col>
        <ColTitle>Navigation</ColTitle>
        <ColLinks>
          {navLinks.map((l) => (
            <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
          ))}
        </ColLinks>
      </Col>
      <Col>
        <ColTitle>Products</ColTitle>
        <ColLinks>
          {productLinks.map((l) => (
            <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
          ))}
        </ColLinks>
      </Col>
      <Col>
        <ColTitle>Contact</ColTitle>
        <ContactText>
          +54-336-4426734<br />
          info@controlesysistemas.com.ar<br />
          San Nicolás, Buenos Aires, Argentina
        </ContactText>
      </Col>
    </Grid>
    <BottomBar>
      <Copyright>© {new Date().getFullYear()} C&S Controles y Sistemas. All rights reserved.</Copyright>
      <Version>v2.0</Version>
    </BottomBar>
  </FooterBar>
);

export default Footer;

const FooterBar = styled.footer`
  background: var(--foreground);
  color: var(--background);
  padding: var(--space-12) var(--space-8) var(--space-8);
  width: 100%;
  box-sizing: border-box;
`;

const Grid = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-8);
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandLogo = styled.img`
  height: 48px;
  width: auto;
  margin-bottom: var(--space-4);
  filter: brightness(1.5);
  align-self: flex-start;
`;

const Tagline = styled.p`
  font-size: 0.8rem;
  line-height: var(--line-relaxed);
  opacity: 0.6;
  margin: 0;
`;

const ColTitle = styled.h4`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--letter-wider);
  margin: 0 0 var(--space-4);
  opacity: 0.5;
`;

const ColLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const FooterLink = styled.a`
  font-size: var(--font-size-sm);
  color: var(--color-overlay-light-65);
  text-decoration: none;
  transition: color var(--transition-fast);
  &:hover { color: var(--primary); }
`;

const ContactText = styled.p`
  font-size: var(--font-size-sm);
  opacity: 0.65;
  line-height: var(--line-loose);
  margin: 0;
`;

const BottomBar = styled.div`
  max-width: var(--container-max);
  margin: var(--space-8) auto 0;
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-divider-on-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

const Copyright = styled.span`
  font-size: var(--font-size-xs);
  opacity: 0.4;
`;

const Version = styled.span`
  font-size: var(--font-size-xs);
  opacity: 0.4;
  font-family: var(--font-mono);
`;
