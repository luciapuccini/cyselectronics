import styled from 'styled-components';

import sidorLogo from '../../../assets/partners/sidor.png';
import usiminasLogo from '../../../assets/partners/Usiminas_Logo.png';
import csnLogo from '../../../assets/partners/Companhia_Siderúrgica_Nacional.png';
import terniumLogo from '../../../assets/partners/Ternium.png';
import nideraLogo from '../../../assets/partners/nidera.png';
import msiGrupoLogo from '../../../assets/partners/msi_grupo.png';
import tenarisLogo from '../../../assets/partners/Tenaris Search Result.png';
import arcelorMittalLogo from '../../../assets/partners/ArcelorMittal.png';
import sidersaLogo from '../../../assets/partners/SIDERSA.png';
import generalElectricLogo from '../../../assets/partners/General_electric.webp';
import akSteelLogo from '../../../assets/partners/AK_Steel.png';
import airLiquideLogo from '../../../assets/partners/Air_Liquide.png';

type Partner = {
  name: string;
  logo: string;
  variant?: 'default' | 'darker';
};

const PARTNERS: Partner[] = [
  { name: 'SIDOR', logo: sidorLogo },
  { name: 'Usiminas', logo: usiminasLogo },
  { name: 'Companhia Siderurgica Nacional', logo: csnLogo },
  { name: 'Ternium', logo: terniumLogo },
  { name: 'Nidera', logo: nideraLogo },
  { name: 'MSI Grupo', logo: msiGrupoLogo, variant: 'darker' },
  { name: 'Tenaris', logo: tenarisLogo },
  { name: 'ArcelorMittal', logo: arcelorMittalLogo },
  { name: 'Sidersa', logo: sidersaLogo, variant: 'darker' },
  { name: 'General Electric', logo: generalElectricLogo },
  { name: 'AK Steel', logo: akSteelLogo },
  { name: 'Air Liquide', logo: airLiquideLogo },
];

const TrustedBySection = () => {
  return (
    <Section id="partners">
      <Inner>
        <Eyebrow>Trusted by</Eyebrow>
        <Title>Partners that rely on our work</Title>
        <Subtitle>
          For more than three decades we have collaborated with leading
          industrial companies, delivering tailored electronics solutions
          where standard suppliers fall short.
        </Subtitle>
        <Grid>
          {PARTNERS.map((partner) => (
            <LogoCell key={partner.name}>
              <LogoImg
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                $variant={partner.variant}
              />
            </LogoCell>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};

export default TrustedBySection;

const Section = styled.section`
  background: var(--secondary);
  padding: clamp(3rem, 6vw, 5rem) 2rem;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 0.75rem;
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--foreground);
  margin: 0 0 1rem;
`;

const Subtitle = styled.p`
  font-size: clamp(0.875rem, 1.3vw, 1.05rem);
  color: var(--muted-foreground);
  max-width: 640px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
  text-wrap: pretty;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  @media (max-width: 899px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 599px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }
`;

const LogoCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 3 / 2;
  padding: clamp(0.5rem, 1vw, 0.75rem);
  cursor: pointer;

  @media (max-width: 599px) {
    padding: 0.5rem;
    cursor: default;
  }
`;

const LogoImg = styled.img<{ $variant?: 'default' | 'darker' }>`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: ${({ $variant }) =>
    $variant === 'darker'
      ? 'grayscale(1) brightness(0.58) contrast(1.05)'
      : 'grayscale(1) brightness(0.92)'};
  opacity: ${({ $variant }) => ($variant === 'darker' ? 0.92 : 0.85)};

  ${LogoCell}:hover & {
    filter: ${({ $variant }) =>
      $variant === 'darker'
        ? 'grayscale(1) brightness(0.5) sepia(0.9) hue-rotate(85deg) saturate(3.5) contrast(1.05)'
        : 'grayscale(1) brightness(0.68) sepia(0.9) hue-rotate(85deg) saturate(3.5) contrast(1.05)'};
    opacity: 1;
  }
`;
