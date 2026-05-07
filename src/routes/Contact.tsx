import styled from 'styled-components';

import ContactForm from '../components/organisms/ContactForm';
import { usePageTitle } from '../hooks/usePageTitle';
import { useTranslation } from '../hooks/useTranslation';
import { tokens } from '../styles/tokens';

const copy = {
  en: {
    eyebrow: 'Contact',
    title: 'Let’s talk about\nyour next project',
    lede: 'Engineering solutions in industrial control and automation. We are ready to help.',
    infoTitle: 'Contact information',
    address: 'Address',
    phone: 'Phone',
    email: 'E-mail',
    addressLines: ['Garibaldi 611', 'B2900 San Nicolás de Los Arroyos', 'Province of Buenos Aires'],
    phoneLines: ['+54-336-4426734'],
    emailLines: ['info@controlesysistemas.com.ar'],
  },
  es: {
    eyebrow: 'Contacto',
    title: 'Hablemos sobre\nsu próximo proyecto',
    lede: 'Soluciones de ingeniería en control y automatización industrial. Estamos listos para ayudarle.',
    infoTitle: 'Información de contacto',
    address: 'Dirección',
    phone: 'Teléfono',
    email: 'E-mail',
    addressLines: ['Garibaldi 611', 'B2900 San Nicolás de Los Arroyos', 'Provincia de Buenos Aires'],
    phoneLines: ['+54-336-4426734'],
    emailLines: ['info@controlesysistemas.com.ar'],
  },
};

type ContactCopy = typeof copy.en;

const Contact = () => {
  usePageTitle(
    { en: 'Contact', es: 'Contacto' },
    {
      en: 'Get in touch with C&S Controles y Sistemas for industrial electronics projects and inquiries.',
      es: 'Contacte a C&S Controles y Sistemas para proyectos y consultas de electrónica industrial.',
    },
  );
  const { locale } = useTranslation();
  const t = copy[locale];

  return (
    <Page>
      <ContactHero eyebrow={t.eyebrow} title={t.title} lede={t.lede} />
      <Grid>
        <InfoColumn>
          <ContactInfo info={t} />
        </InfoColumn>
        <ContactForm />
      </Grid>
    </Page>
  );
};

export default Contact;

const ContactHero = ({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) => (
  <Hero>
    <Eyebrow>
      <EyebrowDash />
      {eyebrow}
    </Eyebrow>
    <Title>{title}</Title>
    <Lede>{lede}</Lede>
  </Hero>
);

const ContactInfo = ({ info }: { info: ContactCopy }) => {
  const items: InfoItemProps[] = [
    { icon: <MapPinIcon />, label: info.address, lines: info.addressLines },
    { icon: <PhoneIcon />, label: info.phone, lines: info.phoneLines, mono: true },
    { icon: <MailIcon />, label: info.email, lines: info.emailLines, mono: true },
  ];

  return (
    <>
      <InfoCard>
        <SectionLabel>{info.infoTitle}</SectionLabel>
        {items.map((item) => (
          <InfoItem key={item.label} {...item} />
        ))}
      </InfoCard>
      <MapCard>
        <MapFrame
          title="Google map — C&S Controles y Sistemas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26665.2008965253!2d-60.24076986293017!3d-33.341027880805335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7679b30478e45%3A0x705b2ead1a2421bb!2sGaribaldi%20611%2C%20San%20Nicol%C3%A1s%20de%20Los%20Arroyos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1622412832927!5m2!1ses!2sar"
          loading="lazy"
          allowFullScreen
        />
      </MapCard>
    </>
  );
};

type InfoItemProps = {
  icon: React.ReactNode;
  label: string;
  lines: string[];
  mono?: boolean;
};

const InfoItem = ({ icon, label, lines, mono }: InfoItemProps) => (
  <Item>
    <ItemIcon>{icon}</ItemIcon>
    <ItemBody>
      <ItemLabel>{label}</ItemLabel>
      <ItemValue $mono={mono}>
        {lines.map((line, i) => (
          <span key={line}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </ItemValue>
    </ItemBody>
  </Item>
);

const MapPinIcon = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const PhoneIcon = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MailIcon = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const Page = styled.div`
  max-width: ${tokens.layout.containerMax};
  margin: 0 auto;
  padding: 0 ${tokens.space[6]};
  width: 100%;
`;

const Hero = styled.section`
  padding-top: ${tokens.space[14]};
`;

const Eyebrow = styled.div`
  font-family: ${tokens.font.mono};
  font-size: 0.68rem;
  font-weight: ${tokens.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${tokens.letter.widest};
  color: ${tokens.colors.primary};
  margin-bottom: ${tokens.space[3]};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const EyebrowDash = styled.span`
  display: inline-block;
  width: 28px;
  height: 1.5px;
  background: ${tokens.colors.primary};
`;

const Title = styled.h1`
  font-family: ${tokens.font.sans};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: ${tokens.fontWeight.bold};
  line-height: ${tokens.lineHeight.snug};
  letter-spacing: -0.02em;
  color: ${tokens.colors.foreground};
  margin: 0 0 ${tokens.space[3]};
  white-space: pre-line;
`;

const Lede = styled.p`
  font-size: 1.05rem;
  line-height: ${tokens.lineHeight.relaxed};
  color: ${tokens.colors.mutedForeground};
  max-width: 520px;
  margin: 0;
`;

const Grid = styled.section`
  padding: ${tokens.space[12]} 0 ${tokens.space[20]};
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: ${tokens.space[10]};
  align-items: start;

  @media (max-width: ${tokens.bp.lg}) {
    grid-template-columns: 1fr;
    gap: ${tokens.space[8]};
    padding: ${tokens.space[10]} 0 ${tokens.space[16]};
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.space[8]};
`;

const InfoCard = styled.div`
  background: ${tokens.colors.card};
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg};
  padding: ${tokens.space[6]} ${tokens.space[6]};
  display: flex;
  flex-direction: column;
  gap: ${tokens.space[6]};
  box-shadow: ${tokens.shadow.sm};
`;

const SectionLabel = styled.div`
  font-family: ${tokens.font.mono};
  font-size: 0.68rem;
  font-weight: ${tokens.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: ${tokens.letter.wider};
  color: ${tokens.colors.mutedForeground};
  padding-bottom: ${tokens.space[2]};
  border-bottom: 1px solid ${tokens.colors.border};
`;

const Item = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`;

const ItemIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${tokens.radius.md};
  background: ${tokens.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${tokens.colors.accent};
  flex-shrink: 0;
`;

const ItemBody = styled.div`
  min-width: 0;
`;

const ItemLabel = styled.div`
  font-family: ${tokens.font.mono};
  font-size: 0.7rem;
  font-weight: ${tokens.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${tokens.letter.wider};
  color: ${tokens.colors.mutedForeground};
  margin-bottom: 4px;
`;

const ItemValue = styled.div<{ $mono?: boolean }>`
  font-size: 0.925rem;
  line-height: ${tokens.lineHeight.relaxed};
  font-family: ${(p) => (p.$mono ? tokens.font.mono : tokens.font.sans)};
  color: ${tokens.colors.foreground};
  word-break: break-word;
`;

const MapCard = styled.div`
  background: ${tokens.colors.card};
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg};
  overflow: hidden;
  box-shadow: ${tokens.shadow.sm};
`;

const MapFrame = styled.iframe`
  display: block;
  width: 100%;
  height: 220px;
  border: none;
`;
