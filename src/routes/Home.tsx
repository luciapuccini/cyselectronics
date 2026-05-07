import type { ReactNode, SVGProps } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pcbDetailImage from '../assets/pcb-detail.jpg';
import TrustedBySection from '../components/molecules/TrustedBySection';
import Carousel from '../components/organisms/Carousel';
import { usePageTitle } from '../hooks/usePageTitle';

type Capability = {
  code: string;
  title: string;
  description: string;
  items: string[];
  icon: ReactNode;
};

type Stat = {
  value: string;
  label: string;
};

const CAPABILITIES: Capability[] = [
  {
    code: 'C-01',
    title: 'Engineering',
    description:
      'Conceptualisation, requirements, architecture and electronic design — verified through rigorous testing.',
    items: ['Electromechanical R&D', 'PCB & enclosure design', 'Reverse engineering'],
    icon: <CpuGlyph />,
  },
  {
    code: 'C-02',
    title: 'Manufacturing',
    description:
      'Development and small-to-medium series production of electronic and electromechanical assemblies.',
    items: ['Spare parts production', 'Turnkey supply', 'Custom enclosures'],
    icon: <CircuitGlyph />,
  },
  {
    code: 'C-03',
    title: 'Maintenance',
    description:
      'Multibrand repair and modernisation of industrial control and power equipment, on-site or in-shop.',
    items: ['Drives & PLCs', 'Power converters', 'Sensor calibration'],
    icon: <WrenchGlyph />,
  },
  {
    code: 'C-04',
    title: 'Steelmaking',
    description:
      'Three decades of mill-floor expertise — sensing, real-time quality and operational safety systems.',
    items: ['Catenary measurement', 'Coke oven IR positioning', 'Pickling line QC'],
    icon: <FactoryGlyph />,
  },
];

const ABOUT_STATS: Stat[] = [
  { value: '1991', label: 'Founded' },
  { value: '30+', label: 'Years on the floor' },
  { value: '200+', label: 'Industrial deployments' },
  { value: '24/7', label: 'Field response' },
];

const Home = () => {
  usePageTitle(undefined, {
    en: 'Industrial electronics design, development, and maintenance since 1991.',
    es: 'Diseño, desarrollo y mantenimiento de electrónica industrial desde 1991.',
  });
  return (
    <>
      <Carousel />
      <CapabilitiesSection />
      <AboutSection />
      <TrustedBySection />
    </>
  );
};

export default Home;

const CapabilitiesSection = () => {
  return (
    <CapabilitiesWrapper>
      <CapabilitiesInner>
        <CapabilitiesHeader>
          <CapabilitiesHeadingStack>
            <CapabilitiesHeading>
              <CapabilitiesAccent />
              <CapabilitiesHeadingLabel>Capabilities · 04</CapabilitiesHeadingLabel>
            </CapabilitiesHeading>
            <CapabilitiesTitle>
              Four disciplines.
              <br />
              <CapabilitiesTitleSub>One accountable team.</CapabilitiesTitleSub>
            </CapabilitiesTitle>
          </CapabilitiesHeadingStack>
          <CapabilitiesIntro>
            C&S Controles y Sistemas was founded in 1991, with the mission of performing ​​Industrial Electronics designs and developments.
          </CapabilitiesIntro>
        </CapabilitiesHeader>

        <CapabilitiesGrid>
          {CAPABILITIES.map((capability) => (
            <CapabilityCard key={capability.code}>
              <CapabilityMeta>
                <CapabilityCode>{capability.code}</CapabilityCode>
                <CapabilityIcon>{capability.icon}</CapabilityIcon>
              </CapabilityMeta>
              <CapabilityText>
                <CapabilityName>{capability.title}</CapabilityName>
                <CapabilityDescription>{capability.description}</CapabilityDescription>
              </CapabilityText>
              <CapabilityList>
                {capability.items.map((item) => (
                  <CapabilityListItem key={item}>
                    <CapabilityListMarker />
                    {item}
                  </CapabilityListItem>
                ))}
              </CapabilityList>
            </CapabilityCard>
          ))}
        </CapabilitiesGrid>

        <CapabilitiesFooter>
          <CapabilitiesLink to="/solutions">
            View full solutions catalogue
            <ArrowIcon viewBox="0 0 16 16" role="presentation" aria-hidden>
              <path d="M4 12L12 4" />
              <path d="M6 4H12V10" />
            </ArrowIcon>
          </CapabilitiesLink>
        </CapabilitiesFooter>
      </CapabilitiesInner>
    </CapabilitiesWrapper>
  );
};

const AboutSection = () => {
  return (
    <AboutWrapper>
      <AboutGrid>
        <AboutImagePanel>
          <AboutImage src={pcbDetailImage} alt="Macro detail of an industrial control board manufactured by C&S" />
          <AboutImageOverlay aria-hidden />
          <AboutBadge>
            <BadgeIndicator />
            File · CYS-PCB-014
          </AboutBadge>
        </AboutImagePanel>
        <AboutContent>
          <AboutPattern aria-hidden />
          <AboutContentInner>
            <AboutMeta>
              <AboutMetaLabel>/About</AboutMetaLabel>
              <AboutMetaDivider />
              <AboutMetaSupport>C&S Controles y Sistemas</AboutMetaSupport>
            </AboutMeta>

            <AboutTitle>
              Industrial electronics, designed and built with full dedication — for over three decades.
            </AboutTitle>

            <AboutCopy>
              <p>
                C&S Controles y Sistemas was founded in 1991 with a single mission: to perform industrial
                electronics design and development with the rigour the factory floor demands.
              </p>
              <p>
                Our values are built around personal attention. Reliability and experience are the two pillars that
                have anchored our growth — and our customers&apos; trust — over thirty years of practice.
              </p>
            </AboutCopy>

            <AboutStats>
              {ABOUT_STATS.map((stat) => (
                <AboutStat key={stat.label}>
                  <AboutStatLabel>{stat.label}</AboutStatLabel>
                  <AboutStatValue>{stat.value}</AboutStatValue>
                </AboutStat>
              ))}
            </AboutStats>
          </AboutContentInner>
        </AboutContent>
      </AboutGrid>
    </AboutWrapper>
  );
};

const CapabilitiesWrapper = styled.section`
  position: relative;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--background);
  padding: 5rem var(--space-4);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        90deg,
        rgba(16, 25, 17, 0.08) 1px,
        transparent 1px
      ),
      linear-gradient(
        rgba(16, 25, 17, 0.08) 1px,
        transparent 1px
      );
    background-size: 22px 22px;
    opacity: 0.25;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    padding: 7rem var(--space-8);
  }
`;

const CapabilitiesInner = styled.div`
  position: relative;
  z-index: var(--z-raised);
  max-width: var(--container-max-wide);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-8), 4vw, var(--space-12));
`;

const CapabilitiesHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: clamp(var(--space-6), 6vw, var(--space-12));
  }
`;

const CapabilitiesHeadingStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  max-width: 640px;
`;

const CapabilitiesHeading = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;

const CapabilitiesAccent = styled.span`
  display: inline-block;
  width: 32px;
  height: 1px;
  background: var(--accent);
`;

const CapabilitiesHeadingLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: var(--letter-extreme);
  text-transform: uppercase;
  color: var(--accent);
`;

const CapabilitiesTitle = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.125rem);
  font-weight: var(--font-weight-medium);
  letter-spacing: -0.01em;
  line-height: 1.15;
  color: var(--foreground);
`;

const CapabilitiesTitleSub = styled.span`
  color: var(--muted-foreground);
`;

const CapabilitiesIntro = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: var(--line-relaxed);
  color: var(--muted-foreground);
  max-width: clamp(260px, 28vw, 340px);
  text-wrap: pretty;
`;

const CapabilitiesGrid = styled.div`
  display: grid;
  gap: 1px;
  border: 1px solid var(--border);
  background: var(--border);
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const CapabilityCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  background: var(--background);
  padding: var(--space-6);
  transition: background var(--transition-base), transform var(--transition-base);

  &:hover {
    background: var(--card);
  }

  @media (min-width: 768px) {
    padding: var(--space-8);
  }
`;

const CapabilityMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CapabilityCode = styled.span`
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: var(--letter-extreme);
  text-transform: uppercase;
  color: var(--muted-foreground);
`;

const CapabilityIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);

  & > svg {
    width: 22px;
    height: 22px;
  }
`;

const CapabilityText = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

const CapabilityName = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: var(--font-weight-medium);
  letter-spacing: -0.01em;
  color: var(--foreground);
`;

const CapabilityDescription = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: var(--line-relaxed);
  color: var(--muted-foreground);
`;

const CapabilityList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  border-top: 1px solid var(--border);
  padding-top: var(--space-4);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-foreground);
`;

const CapabilityListItem = styled.li`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const CapabilityListMarker = styled.span`
  display: inline-block;
  width: 14px;
  height: 1px;
  background: var(--accent);
`;

const CapabilitiesFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ArrowIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: currentColor;
  stroke-width: 1.5;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform var(--transition-fast);
`;

const CapabilitiesLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--foreground);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--accent);
  }

  &:hover ${ArrowIcon} {
    transform: translate(3px, -3px);
  }
`;

const AboutWrapper = styled.section`
  border-bottom: 1px solid var(--border);
  background: var(--background);
`;

const AboutGrid = styled.div`
  display: grid;
  gap: 1px;
  max-width: var(--container-max-wide);
  margin: 0 auto;
  background: var(--border);
  border-left: 1px solid var(--border);
  border-right: 1px solid var(--border);
  grid-template-columns: minmax(0, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

const AboutImagePanel = styled.div`
  position: relative;
  background: var(--card);
  overflow: hidden;
  aspect-ratio: 4 / 3;

  @media (min-width: 768px) {
    grid-column: span 5;
    aspect-ratio: auto;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AboutImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(250, 250, 248, 0.6) 0%,
    rgba(250, 250, 248, 0) 45%,
    rgba(250, 250, 248, 0.3) 100%
  );
`;

const AboutBadge = styled.div`
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  border: 1px solid rgba(16, 25, 17, 0.2);
  background: rgba(250, 250, 248, 0.7);
  padding: 0.35rem 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: var(--letter-extreme);
  text-transform: uppercase;
  color: var(--foreground);
  backdrop-filter: blur(8px);
`;

const BadgeIndicator = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--accent);
`;

const AboutContent = styled.div`
  position: relative;
  background: var(--background);
  padding: var(--space-6);
  overflow: hidden;

  @media (min-width: 768px) {
    grid-column: span 7;
    padding: var(--space-12);
  }

  @media (min-width: 1024px) {
    padding: var(--space-16);
  }
`;

const AboutPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      90deg,
      rgba(16, 25, 17, 0.06) 1px,
      transparent 1px
    ),
    linear-gradient(
      rgba(16, 25, 17, 0.06) 1px,
      transparent 1px
    );
  background-size: 20px 20px;
  opacity: 0.3;
  pointer-events: none;
`;

const AboutContentInner = styled.div`
  position: relative;
  z-index: var(--z-raised);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
`;

const AboutMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;

const AboutMetaLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: var(--letter-extreme);
  text-transform: uppercase;
  color: var(--accent);
`;

const AboutMetaDivider = styled.span`
  display: inline-block;
  width: 48px;
  height: 1px;
  background: var(--border);
`;

const AboutMetaSupport = styled.span`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: var(--letter-extreme);
  text-transform: uppercase;
  color: var(--muted-foreground);
`;

const AboutTitle = styled.h2`
  margin: 0;
  max-width: 640px;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: var(--font-weight-medium);
  letter-spacing: -0.01em;
  line-height: 1.15;
  color: var(--foreground);
  text-wrap: balance;
`;

const AboutCopy = styled.div`
  display: grid;
  gap: var(--space-6);
  font-size: 0.95rem;
  line-height: var(--line-relaxed);
  color: var(--muted-foreground);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  & > p {
    margin: 0;
  }
`;

const AboutStats = styled.dl`
  display: grid;
  gap: 1px;
  border: 1px solid var(--border);
  background: var(--border);
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const AboutStat = styled.div`
  background: var(--background);
  padding: var(--space-4);

  @media (min-width: 768px) {
    padding: var(--space-6);
  }
`;

const AboutStatLabel = styled.dt`
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: var(--letter-extreme);
  text-transform: uppercase;
  color: var(--muted-foreground);
`;

const AboutStatValue = styled.dd`
  margin: var(--space-3) 0 0;
  font-family: var(--font-mono);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: var(--font-weight-medium);
  letter-spacing: -0.01em;
  color: var(--foreground);
`;

const svgBaseProps: SVGProps<SVGSVGElement> = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function CpuGlyph() {
  return (
    <svg {...svgBaseProps}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="8" y="8" width="8" height="8" rx="1.2" />
      <path d="M9 2v2" />
      <path d="M15 2v2" />
      <path d="M9 20v2" />
      <path d="M15 20v2" />
      <path d="M2 9h2" />
      <path d="M2 15h2" />
      <path d="M20 9h2" />
      <path d="M20 15h2" />
    </svg>
  );
}

function CircuitGlyph() {
  return (
    <svg {...svgBaseProps}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <circle cx="9" cy="9" r="1.3" />
      <circle cx="15" cy="12" r="1.3" />
      <circle cx="12" cy="16" r="1.3" />
      <path d="M9 9v5h3l3 3" />
      <path d="M15 12h4" />
      <path d="M9 9H5" />
      <path d="M12 16v4" />
    </svg>
  );
}

function WrenchGlyph() {
  return (
    <svg {...svgBaseProps}>
      <path d="M15.5 2.5a4.5 4.5 0 0 0-3.5 7.3L6.7 15l-2.1 0.5-1.1 1.1 3.8 3.8 1.1-1.1 0.5-2.1 5.2-5.3a4.5 4.5 0 0 0 7.3-3.5l-3 3-2.5-2.5 3-3Z" />
      <path d="M6.5 15.5l2 2" />
    </svg>
  );
}

function FactoryGlyph() {
  return (
    <svg {...svgBaseProps}>
      <path d="M3 21v-9.5l5 3V9.5l5 3V6l8-3v18Z" />
      <path d="M8 21v-3" />
      <path d="M12 21v-3" />
      <path d="M16 21v-5" />
      <path d="M5 21v-3" />
    </svg>
  );
}
