import styled from 'styled-components';

import magnaposiImg from '../assets/products/Magnaposi.png';
import pemccImg from '../assets/products/pemcc.png';
import rotorImg from '../assets/products/rotor.jpg';
import AccentBar from '../components/atoms/AccentBar';
import { Card, Surface } from '../components/atoms/Surface';
import SectionHero from '../components/molecules/SectionHero';
import type { Cta, CtaVariant, Mode, ProductItem, ServiceItem, SiteContent, SolutionsSectionCopy, SolutionsSectionKey, Spec } from '../content';
import { useLanguage } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import { tokens } from '../styles/tokens';

const PRODUCT_IMAGES: Record<string, string> = {
  magnaposi: magnaposiImg,
  pemcc: pemccImg,
  rotor: rotorImg,
};

const sectionOrder: SolutionsSectionKey[] = ['positioning', 'protection', 'services'];

const Solutions = () => {
  const { content } = useLanguage();
  const { solutions } = content;
  usePageTitle(solutions.metaTitle, solutions.metaDescription);

  return (
    <Page>
      <SolutionsHero hero={solutions.hero} />
      <SolutionsSections sections={solutions.sections} />
      <SolutionsFinalCta cta={solutions.cta} />
    </Page>
  );
};

export default Solutions;

const SolutionsHero = ({ hero }: { hero: SiteContent['solutions']['hero'] }) => (
  <HeroSection>
    <SectionHero eyebrow={hero.eyebrow} title={hero.title} lede={hero.lede} />
  </HeroSection>
);

const SolutionsSections = ({ sections }: { sections: SiteContent['solutions']['sections'] }) => (
  <>
    {sectionOrder.map((key) => (
      <SolutionsSectionBlock key={key} id={key} section={sections[key]} />
    ))}
  </>
);

const SolutionsSectionBlock = ({ id, section }: { id: SolutionsSectionKey; section: SolutionsSectionCopy }) => {
  const countLabel = String(section.items.length).padStart(2, '0');
  const isServices = section.type === 'service';

  return (
    <SolutionsSection id={id}>
      <SolutionsSectionInner>
        <SolutionsSectionHeader>
          <SolutionsHeaderStack>

            <SectionLabel>
              <AccentBar $width="36px" $color="currentColor" />
              <span>{section.label} · {countLabel}</span>
            </SectionLabel>

            <SectionTitle>
              {section.items[0].name}
            </SectionTitle>

          </SolutionsHeaderStack>
        </SolutionsSectionHeader>

        {isServices ? (
          <ServiceGrid>
            {(section.items as ServiceItem[]).map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </ServiceGrid>
        ) : (
          <ProductStack>
            {(section.items as ProductItem[]).map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </ProductStack>
        )}
      </SolutionsSectionInner>
    </SolutionsSection>
  );
};

const SolutionsFinalCta = ({ cta }: { cta: SiteContent['solutions']['cta'] }) => (
  <FinalCtaSection>
    <CtaInner>
      <CtaCopy>
        <SectionLabel $tone="light">
          <AccentBar $width="36px" $color="currentColor" />
          <span>{cta.heading}</span>
        </SectionLabel>
        <CtaBody>{cta.body}</CtaBody>
      </CtaCopy>
      <CtaButton href={cta.href}>{cta.button}</CtaButton>
    </CtaInner>
  </FinalCtaSection>
);

const ProductCard = ({ item }: { item: ProductItem }) => (
  <ProductCardRoot>
    <ProductGrid>
      <ProductVisual>
        <ProductImage src={PRODUCT_IMAGES[item.id]} alt={item.name} loading="lazy" />
      </ProductVisual>
      <ProductBody>
        <ProductTagline>{item.tagline}</ProductTagline>
        {/* <ProductName>{item.name}</ProductName> */}
        <ProductDetail>{item.detail}</ProductDetail>

        <ProductModes modes={item.modes} />
        <ProductFeatures features={item.features} />
        <ProductSpecs specs={item.specs} />
        <ProductActions ctas={item.ctas} supportingLink={item.supportingLink} />
      </ProductBody>
    </ProductGrid>
  </ProductCardRoot>
);

const ProductModes = ({ modes }: { modes?: Mode[] }) => {
  if (!modes || modes.length === 0) {
    return null;
  }

  return (
    <ModeList>
      {modes.map((mode) => (
        <ModeCard key={mode.name}>
          <ModeName>{mode.name}</ModeName>
          <ModeDescription>{mode.description}</ModeDescription>
        </ModeCard>
      ))}
    </ModeList>
  );
};

const ProductFeatures = ({ features }: { features?: string[] }) => {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <FeatureList>
      {features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </FeatureList>
  );
};

const ProductSpecs = ({ specs }: { specs?: Spec[] }) => {
  if (!specs || specs.length === 0) {
    return null;
  }

  return (
    <SpecTable>
      {specs.map((spec) => (
        <SpecRow key={spec.label}>
          <SpecLabel>{spec.label}</SpecLabel>
          <SpecValue>{spec.value}</SpecValue>
        </SpecRow>
      ))}
    </SpecTable>
  );
};

const ProductActions = ({
  ctas,
  supportingLink,
}: {
  ctas?: Cta[];
  supportingLink?: ProductItem['supportingLink'];
}) => {
  const hasCtas = Boolean(ctas && ctas.length > 0);
  if (!hasCtas && !supportingLink) {
    return null;
  }

  return (
    <CtaRow>
      {ctas?.map((cta) => (
        <CardButton
          key={cta.label}
          href={cta.href}
          $variant={cta.variant}
          target={cta.newTab ? '_blank' : undefined}
          rel={cta.newTab ? 'noreferrer' : undefined}
          download={cta.download}
        >
          {cta.label}
        </CardButton>
      ))}
      {supportingLink && (
        <SupportingLink
          href={supportingLink.href}
          target={supportingLink.newTab ? '_blank' : undefined}
          rel={supportingLink.newTab ? 'noreferrer' : undefined}
        >
          {supportingLink.label}
        </SupportingLink>
      )}
    </CtaRow>
  );
};

const ServiceCard = ({ item }: { item: ServiceItem }) => (
  <ServiceCardRoot>
    <ServiceTitle>{item.name}</ServiceTitle>
    <ServiceIntro>{item.intro}</ServiceIntro>
    {item.bullets && (
      <ServiceList>
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ServiceList>
    )}
    {item.subsections && (
      <ServiceSubsectionList>
        {item.subsections.map((subsection) => (
          <ServiceSubsectionItem key={subsection.heading}>
            <ServiceSubsectionHeading>{subsection.heading}</ServiceSubsectionHeading>
            <ServiceSubsectionDetail>{subsection.bullet}</ServiceSubsectionDetail>
          </ServiceSubsectionItem>
        ))}
      </ServiceSubsectionList>
    )}
  </ServiceCardRoot>
);

const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`

  border-bottom: 1px solid var(--border);
  padding: clamp(4rem, 7vw, 6rem) var(--space-8) clamp(3rem, 6vw, 4rem);
  & > header {
    margin: 0 ;
  }
`;

const SolutionsSection = styled.section`
  border-bottom: 1px solid var(--border);
  padding: clamp(4rem, 7vw, 6rem) var(--space-8);
  @media (max-width: ${tokens.bp.lg}) {
    padding: clamp(3rem, 10vw, 4.5rem) var(--space-6);
  }
`;

const SolutionsSectionInner = styled.div`
  max-width: var(--container-max-wide);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-6), 6vw, var(--space-12));
`;

const SolutionsHeaderStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  max-width: 640px;
`

const SolutionsSectionHeader = styled.div`
display: flex;
align-items: center;
gap: var(--space-3);
  
`;

const SectionLabel = styled.span<{ $tone?: 'default' | 'light' }>`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: var(--letter-extreme);
  text-transform: uppercase;
  color: ${({ $tone }) => ($tone === 'light' ? 'var(--accent-foreground)' : 'var(--accent)')};
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.125rem);
  font-weight: var(--font-weight-medium);
  letter-spacing: -0.01em;
  line-height: 1.15;
  color: var(--foreground);
`;

const SectionDescription = styled.p`
  margin: 0;
  max-width: clamp(520px, 55vw, 720px);
  font-size: clamp(0.95rem, 1.4vw, 1.1rem);
  color: var(--muted-foreground);
  line-height: var(--line-relaxed);
  text-wrap: pretty;
`;

const ProductStack = styled.div`
  display: grid;
  gap: clamp(var(--space-6), 5vw, var(--space-10));
`;

const ServiceGrid = styled.div`
  display: grid;
  gap: var(--space-6);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ProductCardRoot = styled(Surface).attrs({ as: 'article' })`
  overflow: hidden;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: ${tokens.bp['2xl']}) {
    grid-template-columns: 1fr;
  }
`;

const ProductVisual = styled.div`
  
  padding: ${tokens.space[10]};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${tokens.bp['2xl']}) {
    padding: ${tokens.space[8]};
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 380px;
  object-fit: contain;
  filter: drop-shadow(0 12px 32px rgba(0, 0, 0, 0.1));
`;

const ProductBody = styled.div`
  padding: ${tokens.space[10]};
  display: flex;
  flex-direction: column;
  gap: ${tokens.space[5]};

  @media (max-width: ${tokens.bp['2xl']}) {
    padding: ${tokens.space[8]};
  }
`;

const ProductTagline = styled.span`
  font-family: ${tokens.font.mono};
  font-size: ${tokens.fontSize.base};
  text-transform: uppercase;
  letter-spacing: ${tokens.letter.widest};
  color: ${tokens.colors.primary};
`;

const ProductDetail = styled.p`
  font-size: ${tokens.fontSize.base};
  line-height: ${tokens.lineHeight.relaxed};
  color: ${tokens.colors.mutedForeground};
  margin: 0;
`;

const ModeList = styled.div`
  display: grid;
  gap: ${tokens.space[4]};

  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`;

const ModeCard = styled.div`
  border-left: 3px solid ${tokens.colors.primary};
  padding: ${tokens.space[4]} ${tokens.space[5]};
`;

const ModeName = styled.strong`
  display: block;
  font-size: ${tokens.fontSize.sm};
  color: ${tokens.colors.foreground};
  margin-bottom: ${tokens.space[1]};
`;

const ModeDescription = styled.span`
  font-size: ${tokens.fontSize.xs};
  color: ${tokens.colors.mutedForeground};
  line-height: ${tokens.lineHeight.relaxed};
`;

const FeatureList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: ${tokens.space[2]};

  li {
    font-size: ${tokens.fontSize.sm};
    color: ${tokens.colors.mutedForeground};
  }
`;

const SpecTable = styled.div`
  border-top: 1px solid ${tokens.colors.border};
  display: flex;
  flex-direction: column;
`;

const SpecRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${tokens.space[3]} 0;
  border-bottom: 1px solid ${tokens.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const SpecLabel = styled.span`
  font-size: ${tokens.fontSize.xs};
  font-weight: ${tokens.fontWeight.medium};
  letter-spacing: ${tokens.letter.wide};
  text-transform: uppercase;
  color: ${tokens.colors.mutedForeground};
`;

const SpecValue = styled.span`
  font-size: ${tokens.fontSize.sm};
  font-weight: ${tokens.fontWeight.semibold};
  color: ${tokens.colors.foreground};
`;

const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.space[3]};
  align-items: center;
`;

const CardButton = styled.a<{ $variant: CtaVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${tokens.space[2]} ${tokens.space[5]};
  font-size: ${tokens.fontSize.sm};
  font-weight: ${tokens.fontWeight.semibold};
  letter-spacing: ${tokens.letter.tight};
  text-decoration: none;
  transition: transform ${tokens.transition.fast}, background ${tokens.transition.fast};

  ${(props) =>
    props.$variant === 'primary'
      ? `background: ${tokens.colors.primary}; color: ${tokens.colors.primaryForeground}; border: none;`
      : `background: transparent; color: ${tokens.colors.foreground}; border: 1px solid ${tokens.colors.border};`}

  &:hover {
    transform: translateY(-2px);
  }
`;

const SupportingLink = styled.a`
  font-size: ${tokens.fontSize.sm};
  font-weight: ${tokens.fontWeight.medium};
  color: ${tokens.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ServiceCardRoot = styled(Card).attrs({ as: 'article' })`
  padding: ${tokens.space[10]};
  gap: ${tokens.space[4]};
  @media (max-width: ${tokens.bp['2xl']}) {
    padding: ${tokens.space[8]};
  }
`;

const ServiceTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: ${tokens.fontWeight.bold};
  color: ${tokens.colors.foreground};
`;

const ServiceIntro = styled.p`
  margin: 0;
  font-size: ${tokens.fontSize.base};
  color: ${tokens.colors.mutedForeground};
  line-height: ${tokens.lineHeight.relaxed};
`;

const ServiceList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: ${tokens.space[2]};

  li {
    font-size: ${tokens.fontSize.sm};
    color: ${tokens.colors.foreground};
  }
`;

const ServiceSubsectionList = styled.div`
  display: grid;
  gap: ${tokens.space[4]};

  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`;

const ServiceSubsectionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.space[1]};
  padding: ${tokens.space[4]};
`;

const ServiceSubsectionHeading = styled.h4`
  margin: 0;
  font-size: ${tokens.fontSize.sm};
  font-weight: ${tokens.fontWeight.semibold};
  color: ${tokens.colors.primary};
  letter-spacing: ${tokens.letter.wide};
  text-transform: uppercase;
`;

const ServiceSubsectionDetail = styled.span`
  font-size: ${tokens.fontSize.sm};
  color: ${tokens.colors.mutedForeground};
`;

const FinalCtaSection = styled.section`
  position: relative;
  border-top: 1px solid var(--border);
  padding: clamp(4rem, 7vw, 6rem) var(--space-8) clamp(5rem, 8vw, 6.5rem);
`;

const CtaInner = styled.div`
  padding: clamp(${tokens.space[10]}, 6vw, ${tokens.space[12]}) clamp(${tokens.space[8]}, 8vw, ${tokens.space[10]});
  background: ${tokens.colors.accent};
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.space[6]};
  align-items: center;
  justify-content: space-between;
  max-width: var(--container-max-wide);
  margin: 0 auto;

  @media (max-width: ${tokens.bp.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CtaCopy = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: ${tokens.space[2]};
`;

const CtaBody = styled.p`
  margin: 0;
  font-size: ${tokens.fontSize.sm};
  color: rgba(255, 255, 255, 0.75);
  line-height: ${tokens.lineHeight.relaxed};
`;

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${tokens.space[3]} ${tokens.space[8]};
  background: ${tokens.colors.primaryForeground};
  color: ${tokens.colors.accent};
  font-weight: ${tokens.fontWeight.semibold};
  letter-spacing: ${tokens.letter.tight};
  text-decoration: none;
  transition: transform ${tokens.transition.fast};

  &:hover {
    transform: translateY(-2px);
  }
`;
