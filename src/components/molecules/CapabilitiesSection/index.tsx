import type { ReactNode, SVGProps } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AccentBar from '../../atoms/AccentBar';
import { Card } from '../../atoms/Surface';

type Capability = {
  code: string;
  title: string;
  description: string;
  items: string[];
  icon: ReactNode;
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

const CapabilitiesSection = () => {
  return (
    <CapabilitiesWrapper>
      <CapabilitiesInner>
        <CapabilitiesHeader>
          <CapabilitiesHeadingStack>
            <CapabilitiesHeading>
              <AccentBar />
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

export default CapabilitiesSection;

const CapabilitiesWrapper = styled.section`
  border-top: 1px solid var(--border);

  padding: 5rem var(--space-4);

  @media (min-width: 768px) {
    padding: 7rem var(--space-8);
  }
`;

const CapabilitiesInner = styled.div`
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
  gap: var(--space-4);
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const CapabilityCard = styled(Card).attrs({ as: 'article' })`
  transition: border-color var(--transition-base);

  &:hover {
    border-color: var(--accent);
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
