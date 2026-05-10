import styled from 'styled-components';

import pcbDetailImage from '../../../assets/pcb-detail.jpg';
import { useLanguage } from '../../../context/LanguageContext';
import AccentBar from '../../atoms/AccentBar';
import { Surface } from '../../atoms/Surface';

const AboutSection = () => {
  const { content } = useLanguage();
  const { about } = content.home;

  return (
    <AboutWrapper>
      <AboutGrid>
        <AboutImagePanel>
          <AboutImage src={pcbDetailImage} alt={about.imageAlt} />
          <AboutImageOverlay aria-hidden />
          <AboutBadge>
            <BadgeIndicator />
            {about.badge}
          </AboutBadge>
        </AboutImagePanel>
        <AboutContent>
          <AboutContentInner>
            <AboutMeta>
              <AboutMetaLabel>{about.metaLabel}</AboutMetaLabel>
              <AccentBar $width="48px" $color="var(--border)" />
              <AboutMetaSupport>{about.metaSupport}</AboutMetaSupport>
            </AboutMeta>

            <AboutTitle>{about.title}</AboutTitle>

            <AboutCopy>
              <p>{about.copy[0]}</p>
              <p>{about.copy[1]}</p>
            </AboutCopy>

            <AboutStats>
              {about.stats.map((stat) => (
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

export default AboutSection;

const AboutWrapper = styled.section`
`;

const AboutGrid = styled(Surface)`
  display: grid;
  max-width: var(--container-max-wide);
  margin: 0 auto;
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
  border-bottom: 1px solid var(--border);

  @media (min-width: 768px) {
    grid-column: span 5;
    aspect-ratio: auto;
    border-bottom: none;
    border-right: 1px solid var(--border);
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
  background: var(--background);
  padding: var(--space-6);

  @media (min-width: 768px) {
    grid-column: span 7;
    padding: var(--space-12);
  }

  @media (min-width: 1024px) {
    padding: var(--space-16);
  }
`;

const AboutContentInner = styled.div`
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

const AboutStats = styled(Surface).attrs({ as: 'dl' })`
  display: grid;
  margin: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const AboutStat = styled.div`
  padding: var(--space-4);
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);

  &:nth-child(2n) {
    border-right: none;
  }

  &:nth-last-child(-n + 2) {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    padding: var(--space-6);
    border-bottom: none;

    &:nth-child(2n) {
      border-right: 1px solid var(--border);
    }

    &:last-child {
      border-right: none;
    }
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
