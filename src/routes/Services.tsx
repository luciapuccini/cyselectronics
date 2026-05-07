import styled from 'styled-components';

import repair from '../assets/repair.jpeg';
import { usePageTitle } from '../hooks/usePageTitle';

type ServiceSectionContent = {
  header: string;
  paragraphs: string[];
  bullets?: string[];
  highlights?: Array<{ title: string; items: string[] }>;
};

const SERVICE_SECTIONS: ServiceSectionContent[] = [
  {
    header: 'Engineering',
    paragraphs: [
      'Our product engineering process includes conceptualization, requirements, specification, architecture design, hardware development, testing, documentation and reverse engineering.',
    ],
    bullets: [
      'Electromechanical development requirements',
      'Mechanical and electrical developments architecture',
      'Electronic boards system and architecture',
      'Designs testing and verification',
      'Reverse engineering',
    ],
  },
  {
    header: 'Electronic',
    paragraphs: [
      'Service development, manufacture and repair of electronic and electromechanical products from concept to turnkey supply is available.',
    ],
    bullets: [
      'Development and manufacture of spare parts and solutions',
      'Technical assistance',
      'Repair of industrial electronic control and power multibrand equipment',
    ],
  },
  {
    header: 'Steelmakers',
    paragraphs: [
      'Our expertise in this market has been perfected over the years having made unique sensing system related engineering, automatic control, quality control, real-time, operational safety, etc. For example:',
    ],
    highlights: [
      { title: 'Pickling lines', items: ['Catenary measurement system'] },
      { title: 'Coke plant', items: ['Infrared positioning system for coking ovens.'] },
    ],
  },
];

const Services = () => {
  usePageTitle(
    { en: 'Services', es: 'Servicios' },
    {
      en: 'Electronics design, repair, and maintenance services for industrial equipment.',
      es: 'Servicios de diseño, reparación y mantenimiento de equipos electrónicos industriales.',
    },
  );

  return (
    <Page>
      <ServicesHero />
      <TwoColumn>
        <ImgCol>
          <img src={repair} alt="services" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </ImgCol>
        <ContentCol>
          {SERVICE_SECTIONS.map((section) => (
            <ServiceSection key={section.header} section={section} />
          ))}
        </ContentCol>
      </TwoColumn>
    </Page>
  );
};

export default Services;

const ServicesHero = () => (
  <HeroBlock>
    <HeroHeading>Services</HeroHeading>
    <HeroDivider />
  </HeroBlock>
);

const ServiceSection = ({ section }: { section: ServiceSectionContent }) => (
  <SectionBlock>
    <Header>{section.header}</Header>
    {section.paragraphs.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}
    {section.bullets && (
      <ul>
        {section.bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
    {section.highlights &&
      section.highlights.map((highlight) => (
        <HighlightGroup key={highlight.title}>
          <HighlightTitle>{highlight.title}</HighlightTitle>
          <ul>
            {highlight.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </HighlightGroup>
      ))}
  </SectionBlock>
);

const Page = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--space-12) var(--space-6) var(--space-16);
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
  box-sizing: border-box;

  @media (max-width: 599px) {
    padding: var(--space-10) var(--space-4) var(--space-14);
  }
`;

const HeroBlock = styled.header`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

const HeroHeading = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  margin: 0;
  color: var(--foreground);
`;

const HeroDivider = styled.hr`
  width: 64px;
  height: 2px;
  background: var(--primary);
  border: none;
  margin: 0;
`;

const SectionBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

const HighlightGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const HighlightTitle = styled.span`
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const TwoColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-4);
  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

const ImgCol = styled.div`
  flex: 5;
`;

const ContentCol = styled.div`
  flex: 7;
`;

const Header = styled.h3`
  color: var(--primary);
`;
