import styled from 'styled-components';
import airLiquideLogo from '../../../assets/partners/Air_Liquide.png';
import akSteelLogo from '../../../assets/partners/AK_Steel.png';
import arcelorMittalLogo from '../../../assets/partners/ArcelorMittal.png';
import csnLogo from '../../../assets/partners/Companhia_Siderúrgica_Nacional.png';
import generalElectricLogo from '../../../assets/partners/General_electric.webp';
import msiGrupoLogo from '../../../assets/partners/msi_grupo.png';
import nideraLogo from '../../../assets/partners/nidera.png';
import sidersaLogo from '../../../assets/partners/SIDERSA.png';
import sidorLogo from '../../../assets/partners/sidor.png';
import tenarisLogo from '../../../assets/partners/Tenaris Search Result.png';
import terniumLogo from '../../../assets/partners/Ternium.png';
import usiminasLogo from '../../../assets/partners/Usiminas_Logo.png';

type Partner = {
  name: string;
  logo: string;
  industry: string;
  variant?: 'default' | 'darker';
};

const PARTNERS: Partner[] = [
  { name: 'SIDOR', logo: sidorLogo, industry: 'Steel', variant: 'darker' },
  { name: 'Usiminas', logo: usiminasLogo, industry: 'Steel' },
  { name: 'Companhia Siderurgica Nacional', logo: csnLogo, industry: 'Steel' },
  { name: 'Ternium', logo: terniumLogo, industry: 'Steel' },
  { name: 'Nidera', logo: nideraLogo, industry: 'Agro' },
  { name: 'MSI Grupo', logo: msiGrupoLogo, industry: 'Automation', variant: 'darker' },
  { name: 'Tenaris', logo: tenarisLogo, industry: 'Energy' },
  { name: 'ArcelorMittal', logo: arcelorMittalLogo, industry: 'Steel' },
  { name: 'Sidersa', logo: sidersaLogo, industry: 'Steel', variant: 'darker' },
  { name: 'General Electric', logo: generalElectricLogo, industry: 'Energy' },
  { name: 'AK Steel', logo: akSteelLogo, industry: 'Steel' },
  { name: 'Air Liquide', logo: airLiquideLogo, industry: 'Industrial Gases' },
];

const TrustedBySection = () => {
  return (
    <Section id="partners">
      <Inner>
        <HeadingRow>
          <HeadingStack>
            <Accent>
              <AccentBar />
              <AccentLabel>Trusted partners</AccentLabel>
            </Accent>
            <Title>Partners that rely on our work</Title>
          </HeadingStack>

        </HeadingRow>
        <Grid>
          {PARTNERS.map((partner, index) => (
            <LogoCell key={partner.name}>
              <LogoMeta>{`${String(index + 1).padStart(2, '0')} · ${partner.industry}`}</LogoMeta>
              <LogoImg
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                $variant={partner.variant}
              />
            </LogoCell>
          ))}
        </Grid>
        <Footnote>For more than three decades we have collaborated with leading
          industrial companies, delivering tailored electronics solutions
          where standard suppliers fall short.</Footnote>
      </Inner>
    </Section>
  );
};

export default TrustedBySection;

const Section = styled.section`
  position: relative;
  padding: clamp(3.5rem, 7vw, 6rem) 2rem;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #ffffff;
    background-image: radial-gradient(circle, #c8cacc 1px, transparent 1px);
    background-size: 24px 24px;
    mask-image: radial-gradient(
      ellipse 80% 60% at 50% 50%,
      transparent 30%,
      black 100%
    );
    -webkit-mask-image: radial-gradient(
      ellipse 80% 60% at 50% 50%,
      transparent 30%,
      black 100%
    );
    z-index: 0;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1120px;
  margin: 0 auto;
`;

const HeadingRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const HeadingStack = styled.div`
  max-width: 620px;
`;

const Accent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const AccentBar = styled.span`
  display: inline-block;
  width: 32px;
  height: 2px;
  background: var(--accent);
`;

const AccentLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
`;

const Title = styled.h2`
  margin: 1.5rem 0 0;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.1;
  color: var(--foreground);
`;

const Subtitle = styled.p`
  font-size: clamp(0.9rem, 1.4vw, 1.05rem);
  color: var(--muted-foreground);
  max-width: 360px;
  line-height: 1.6;
  text-wrap: pretty;

  @media (max-width: 767px) {
    max-width: 520px;
  }
`;

const Grid = styled.div`
  margin-top: clamp(2.75rem, 6vw, 4rem);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border: 1px solid var(--border);
  background: var(--border);
  gap: 1px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;

const LogoCell = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 3 / 2;
  background: oklch(0.99 0.002 120 / 0.85);
  padding: 1.5rem;
  transition: background 0.25s ease;
  overflow: hidden;

  &:hover {
    background: oklch(0.96 0.01 140 / 0.95);
  }

  @media (max-width: 599px) {
    padding: 1rem;
  }
`;

const LogoMeta = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(31, 53, 45, 0.65);
  pointer-events: none;

  @media (max-width: 599px) {
    top: 0.75rem;
    left: 0.75rem;
    font-size: 0.6rem;
  }
`;

const LogoImg = styled.img<{ $variant?: 'default' | 'darker' }>`
  max-width: 64%;
  max-height: 64%;
  object-fit: contain;
  filter: ${({ $variant }) =>
    $variant === 'darker'
      ? 'grayscale(1) brightness(0.58) contrast(1.05)'
      : 'grayscale(1) brightness(0.92)'};
  opacity: ${({ $variant }) => ($variant === 'darker' ? 0.9 : 0.82)};
  transition: filter 0.25s ease, opacity 0.25s ease;

  ${LogoCell}:hover & {
    filter: ${({ $variant }) =>
    $variant === 'darker'
      ? 'grayscale(1) brightness(0.5) sepia(0.9) hue-rotate(85deg) saturate(3.5) contrast(1.05)'
      : 'grayscale(1) brightness(0.68) sepia(0.9) hue-rotate(85deg) saturate(3.5) contrast(1.05)'};
    opacity: 0.95;
  }
`;

const Footnote = styled.p`
  margin-top: clamp(2rem, 4vw, 2.75rem);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(31, 53, 45, 0.65);
`;
