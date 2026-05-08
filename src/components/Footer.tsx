import styled from 'styled-components';

import logo from '../assets/cys-branding.svg';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { content } = useLanguage();
  const { footer } = content;
  const { info } = content.contact;

  return (
    <FooterBar>
      <Grid>
        <Col>
          <BrandLogo src={logo} alt="C&S" />
          <Tagline>{footer.tagline}</Tagline>
        </Col>
        <Col>
          <ColTitle>{footer.navColumn}</ColTitle>
          <ColLinks>
            {content.nav.items.map((l) => (
              <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
            ))}
          </ColLinks>
        </Col>
        <Col>
          <ColTitle>{footer.contactColumn}</ColTitle>
          <ContactText>
            {info.phone.lines[0]}<br />
            {info.email.lines[0]}<br />
            {info.address.lines[2]}
          </ContactText>
        </Col>
      </Grid>
      <BottomBar>
        <Copyright>{footer.copyright(new Date().getFullYear())}</Copyright>
        <Version>{footer.version}</Version>
      </BottomBar>
    </FooterBar>
  );
};

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
