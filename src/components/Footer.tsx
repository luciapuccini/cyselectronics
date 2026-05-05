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
  padding: 3rem 2rem 2rem;
  width: 100%;
  box-sizing: border-box;
`;

const Grid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandLogo = styled.img`
  height: 48px;
  width: auto;
  margin-bottom: 1rem;
  filter: brightness(1.5);
  align-self: flex-start;
`;

const Tagline = styled.p`
  font-size: 0.8rem;
  line-height: 1.6;
  opacity: 0.6;
  margin: 0;
`;

const ColTitle = styled.h4`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 1rem;
  opacity: 0.5;
`;

const ColLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled.a`
  font-size: 0.825rem;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.15s;
  &:hover { color: var(--primary); }
`;

const ContactText = styled.p`
  font-size: 0.825rem;
  opacity: 0.65;
  line-height: 1.7;
  margin: 0;
`;

const BottomBar = styled.div`
  max-width: 1100px;
  margin: 2rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Copyright = styled.span`
  font-size: 0.75rem;
  opacity: 0.4;
`;

const Version = styled.span`
  font-size: 0.75rem;
  opacity: 0.4;
  font-family: var(--font-mono);
`;
