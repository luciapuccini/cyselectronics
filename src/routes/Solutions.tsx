import styled from 'styled-components';

import magnaposiImg from '../assets/products/Magnaposi.png';
import pemccImg from '../assets/products/pemcc.png';
import rotorImg from '../assets/products/rotor.jpg';
import { usePageTitle } from '../hooks/usePageTitle';
import { useTranslation } from '../hooks/useTranslation';
import { tokens } from '../styles/tokens';

type Locale = 'en' | 'es';
type SectionKey = 'positioning' | 'protection' | 'services';

type Spec = { label: string; value: string };
type Mode = { name: string; description: string };
type Feature = string;

type CtaVariant = 'primary' | 'secondary';

type Cta = {
  label: string;
  href: string;
  variant: CtaVariant;
  newTab?: boolean;
  download?: boolean;
};

type ProductItem = {
  id: string;
  name: string;
  tagline: string;
  detail: string;
  image: string;
  specs?: Spec[];
  modes?: Mode[];
  features?: Feature[];
  ctas?: Cta[];
  supportingLink?: { label: string; href: string; newTab?: boolean };
};

type ServiceSubsection = {
  heading: string;
  bullet: string;
};

type ServiceItem = {
  id: string;
  name: string;
  intro: string;
  bullets?: string[];
  subsections?: ServiceSubsection[];
};

type ProductSection = {
  type: 'product';
  label: string;
  description: string;
  items: ProductItem[];
};

type ServiceSection = {
  type: 'service';
  label: string;
  description: string;
  items: ServiceItem[];
};

type SectionCopy = ProductSection | ServiceSection;

type LocaleCopy = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
  };
  sections: Record<SectionKey, SectionCopy>;
  cta: {
    heading: string;
    body: string;
    button: string;
    href: string;
  };
};

const copy: Record<Locale, LocaleCopy> = {
  en: {
    metaTitle: 'Solutions',
    metaDescription:
      'Industrial electronics solutions covering positioning systems, protection systems, and lifecycle engineering services.',
    hero: {
      eyebrow: 'Solutions',
      title: 'Industrial electronics for critical operations',
      lede:
        'Positioning systems, protection systems, and lifecycle engineering services — designed and manufactured by C&S Controles y Sistemas.',
    },
    sections: {
      positioning: {
        type: 'product',
        label: 'Positioning',
        description:
          'Precision measurement systems for industrial positioning — contact-free, maintenance-free, built for harsh environments.',
        items: [
          {
            id: 'magnaposi',
            name: 'MAGNAPOSI',
            tagline: 'Steel catenary measurement in pickling processes',
            detail:
              'In pickling processes it is important to control the depth to which the material is immersed. To achieve that, a reliable measurement must be done. The MAGNAPOSI System performs this function without contact with the acid solution and is maintenance-free.',
            image: magnaposiImg,
            specs: [
              { label: 'Contact', value: 'Non-contact' },
              { label: 'Maintenance', value: 'Maintenance-free' },
              { label: 'Environment', value: 'Acid-resistant' },
              { label: 'Application', value: 'Pickling lines' },
            ],
            ctas: [
              { label: 'Request info', href: '/contact', variant: 'primary' },
              {
                label: 'Download PDF',
                href: '/Magnaposi_eng_datasheet_3.02.pdf',
                variant: 'secondary',
                download: true,
              },
            ],
            supportingLink: {
              label: 'Visit magnaposi.com',
              href: 'https://magnaposi.com',
              newTab: true,
            },
          },
        ],
      },
      protection: {
        type: 'product',
        label: 'Protection',
        description:
          'Electronic protection systems for DC motors and AC rotor windings — real-time monitoring with configurable trip modes.',
        items: [
          {
            id: 'pemcc',
            name: 'PEMCC',
            tagline: 'Electronic protection for DC motors',
            detail:
              "C&S's DC motor protection system model PEMCC evaluates the rotor solicitation of a DC machine through its current sensing.",
            image: pemccImg,
            modes: [
              {
                name: 'Mode TI-2',
                description:
                  'Designed to replace electromechanical or overcurrent relays in general. It is also possible to configure an instantaneous trip.',
              },
              {
                name: 'Thermal Model mode',
                description:
                  "Enter the motor physical parameters to analyse the actual thermal state of the machine. Ideal for successive starts or alternating load cycles where TI-2 mode cannot track accumulated heating. Instantaneous trip can also be configured.",
              },
            ],
            specs: [
              { label: 'Type', value: 'DC motor' },
              { label: 'Sensing', value: 'Current-based monitoring' },
              { label: 'Modes', value: 'TI-2 / Thermal model' },
              { label: 'Trip', value: 'Configurable' },
            ],
            ctas: [
              { label: 'Request info', href: '/contact', variant: 'primary' },
              {
                label: 'View manual',
                href: 'https://e.issuu.com/embed.html?identifier=z39bobtblh88&embedType=script#1523476/13436921',
                variant: 'secondary',
                newTab: true,
              },
            ],
          },
          {
            id: 'rotor',
            name: 'Rotor protection',
            tagline: 'Three-phase rotor current monitoring',
            detail:
              "C&S's rotor protection system performs the measurement of the three currents in the rotor winding engines of all sizes. It detects unbalance and overcurrent to prevent damage and provides an output proportional to the imbalance.",
            image: rotorImg,
            features: [
              'Current imbalance detection across three phases',
              'Overcurrent alarm for preventive action',
              'Analog output proportional to imbalance',
              'Keyboard and display interface for adjustments',
            ],
            specs: [
              { label: 'Type', value: 'AC wound rotor' },
              { label: 'Phases', value: '3-phase measurement' },
              { label: 'Output', value: 'Proportional current' },
              { label: 'Interface', value: 'Keyboard + display' },
            ],
            ctas: [{ label: 'Request info', href: '/contact', variant: 'primary' }],
          },
        ],
      },
      services: {
        type: 'service',
        label: 'Services',
        description:
          'Full-lifecycle engineering — from concept and design through manufacturing, repair, and technical assistance.',
        items: [
          {
            id: 'engineering',
            name: 'Engineering',
            intro:
              'Our product engineering process includes conceptualisation, requirements, specification, architecture design, hardware development, testing, documentation, and reverse engineering.',
            bullets: [
              'Electromechanical development requirements',
              'Mechanical and electrical architecture',
              'Electronic boards systems design',
              'Design validation, testing, and verification',
              'Reverse engineering and documentation',
            ],
          },
          {
            id: 'electronic',
            name: 'Electronic services',
            intro:
              'Development, manufacturing, and repair of electronic and electromechanical products from concept to turnkey delivery.',
            bullets: [
              'Spare parts development and production',
              'Specialised technical assistance',
              'Repair of industrial control and power equipment',
            ],
          },
          {
            id: 'steelmakers',
            name: 'Steelmakers',
            intro:
              'Decades of experience delivering sensing, automatic control, quality, and safety systems tailored to steel production environments.',
            subsections: [
              { heading: 'Pickling lines', bullet: 'Catenary measurement system' },
              { heading: 'Coke plant', bullet: 'Infrared positioning system for coking ovens' },
            ],
          },
        ],
      },
    },
    cta: {
      heading: 'Need a custom solution?',
      body: 'Our engineering team works with you from concept through turnkey delivery.',
      button: 'Request a quote',
      href: '/contact',
    },
  },
  es: {
    metaTitle: 'Soluciones',
    metaDescription:
      'Soluciones de electrónica industrial que abarcan sistemas de posicionamiento, protección y servicios de ingeniería durante todo el ciclo.',
    hero: {
      eyebrow: 'Soluciones',
      title: 'Electrónica industrial para operaciones críticas',
      lede:
        'Sistemas de posicionamiento, protección y servicios de ingeniería integral — diseñados y fabricados por C&S Controles y Sistemas.',
    },
    sections: {
      positioning: {
        type: 'product',
        label: 'Posicionamiento',
        description:
          'Sistemas de medición de precisión para posicionamiento industrial — sin contacto, sin mantenimiento y preparados para ambientes severos.',
        items: [
          {
            id: 'magnaposi',
            name: 'MAGNAPOSI',
            tagline: 'Medición de catenaria en líneas de decapado',
            detail:
              'En los procesos de decapado es fundamental controlar la profundidad a la que se sumerge el material. Para ello se requiere una medición confiable. El sistema MAGNAPOSI cumple esta función sin contacto con la solución ácida y no requiere mantenimiento.',
            image: magnaposiImg,
            specs: [
              { label: 'Contacto', value: 'Sin contacto' },
              { label: 'Mantenimiento', value: 'Sin mantenimiento' },
              { label: 'Ambiente', value: 'Resistente a ácidos' },
              { label: 'Aplicación', value: 'Líneas de decapado' },
            ],
            ctas: [
              { label: 'Solicitar información', href: '/contacto', variant: 'primary' },
              {
                label: 'Descargar PDF',
                href: '/Magnaposi_eng_datasheet_3.02.pdf',
                variant: 'secondary',
                download: true,
              },
            ],
            supportingLink: {
              label: 'Visitar magnaposi.com',
              href: 'https://magnaposi.com',
              newTab: true,
            },
          },
        ],
      },
      protection: {
        type: 'product',
        label: 'Protección',
        description:
          'Sistemas de protección electrónica para motores de CC y rotores de CA — monitoreo en tiempo real con modos de disparo configurables.',
        items: [
          {
            id: 'pemcc',
            name: 'PEMCC',
            tagline: 'Protección electrónica para motores de CC',
            detail:
              'El sistema de protección para motores de corriente continua PEMCC de C&S evalúa la solicitación del rotor mediante la medición de corriente.',
            image: pemccImg,
            modes: [
              {
                name: 'Modo TI-2',
                description:
                  'Diseñado para reemplazar relés electromecánicos o de sobrecorriente. Permite configurar un disparo instantáneo.',
              },
              {
                name: 'Modo Modelo Térmico',
                description:
                  'Permite ingresar los parámetros físicos del motor para analizar su estado térmico real. Ideal para arranques sucesivos o ciclos alternados de carga. También admite disparo instantáneo.',
              },
            ],
            specs: [
              { label: 'Tipo', value: 'Motor de CC' },
              { label: 'Medición', value: 'Monitoreo basado en corriente' },
              { label: 'Modos', value: 'TI-2 / Modelo térmico' },
              { label: 'Disparo', value: 'Configurable' },
            ],
            ctas: [
              { label: 'Solicitar información', href: '/contacto', variant: 'primary' },
              {
                label: 'Ver manual',
                href: 'https://e.issuu.com/embed.html?identifier=z39bobtblh88&embedType=script#1523476/13436921',
                variant: 'secondary',
                newTab: true,
              },
            ],
          },
          {
            id: 'rotor',
            name: 'Protección de rotor',
            tagline: 'Monitoreo de corrientes trifásicas en rotor',
            detail:
              'El sistema de protección de rotor de C&S mide las tres corrientes en bobinados de rotor de todos los tamaños. Detecta desequilibrios y sobrecorrientes para prevenir fallas y entrega una señal proporcional al desequilibrio.',
            image: rotorImg,
            features: [
              'Detección de desequilibrios de corriente en las tres fases',
              'Alarma de sobrecorriente para acción preventiva',
              'Salida analógica proporcional al desequilibrio',
              'Interfaz con teclado y display para ajustes',
            ],
            specs: [
              { label: 'Tipo', value: 'Rotor bobinado de CA' },
              { label: 'Fases', value: 'Medición trifásica' },
              { label: 'Salida', value: 'Corriente proporcional' },
              { label: 'Interfaz', value: 'Teclado + display' },
            ],
            ctas: [{ label: 'Solicitar información', href: '/contacto', variant: 'primary' }],
          },
        ],
      },
      services: {
        type: 'service',
        label: 'Servicios',
        description:
          'Ingeniería de punta a punta — desde el concepto y el diseño hasta la fabricación, reparación y asistencia técnica.',
        items: [
          {
            id: 'engineering',
            name: 'Ingeniería',
            intro:
              'Nuestro proceso de ingeniería incluye conceptualización, relevamiento de requisitos, especificación, diseño de arquitectura, desarrollo de hardware, ensayos, documentación y retroingeniería.',
            bullets: [
              'Relevamiento de requisitos electromecánicos',
              'Arquitecturas mecánicas y eléctricas',
              'Diseño de sistemas y placas electrónicas',
              'Ensayos, pruebas y verificación de diseños',
              'Retroingeniería y documentación',
            ],
          },
          {
            id: 'electronic',
            name: 'Servicios electrónicos',
            intro:
              'Desarrollo, fabricación y reparación de productos electrónicos y electromecánicos desde el concepto hasta la entrega llave en mano.',
            bullets: [
              'Desarrollo y producción de repuestos a medida',
              'Asistencia técnica especializada',
              'Reparación de equipos industriales de control y potencia',
            ],
          },
          {
            id: 'steelmakers',
            name: 'Siderurgia',
            intro:
              'Décadas de experiencia implementando sistemas de sensado, control automático, calidad y seguridad para entornos siderúrgicos.',
            subsections: [
              { heading: 'Líneas de decapado', bullet: 'Sistema de medición de catenaria' },
              { heading: 'Coquerías', bullet: 'Sistema de posicionamiento infrarrojo para hornos de coque' },
            ],
          },
        ],
      },
    },
    cta: {
      heading: '¿Necesita una solución a medida?',
      body: 'Nuestro equipo de ingeniería lo acompaña desde el concepto hasta la entrega llave en mano.',
      button: 'Solicitar cotización',
      href: '/contacto',
    },
  },
};

const sectionOrder: SectionKey[] = ['positioning', 'protection', 'services'];

const Solutions = () => {
  usePageTitle(
    { en: copy.en.metaTitle, es: copy.es.metaTitle },
    { en: copy.en.metaDescription, es: copy.es.metaDescription },
  );
  const { locale } = useTranslation();
  const content = copy[locale];

  return (
    <Page>
      <HeroSection>
        <Hero>
          <HeroEyebrow>
            <HeroDash />
            {content.hero.eyebrow}
          </HeroEyebrow>
          <HeroTitle>{content.hero.title}</HeroTitle>
          <HeroLede>{content.hero.lede}</HeroLede>
        </Hero>
      </HeroSection>

      {sectionOrder.map((key) => {
        const section = content.sections[key];
        const isServices = section.type === 'service';

        return (
          <SolutionsSection key={key} id={key}>
            <SectionPattern aria-hidden="true" />
            <SolutionsSectionInner>
              <SolutionsSectionHeader>
                <SectionLabel>
                  <SectionAccent />
                  <span>{section.label} · {String(section.items.length).padStart(2, '0')}</span>
                </SectionLabel>
                <SectionDescription>{section.description}</SectionDescription>
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
      })}

      <FinalCtaSection>
        <CtaInner>
          <CtaCopy>
            <SectionLabel $tone="light">
              <SectionAccent />
              <span>{content.cta.heading}</span>
            </SectionLabel>
            <CtaBody>{content.cta.body}</CtaBody>
          </CtaCopy>
          <CtaButton href={content.cta.href}>{content.cta.button}</CtaButton>
          <CtaPattern aria-hidden="true" />
        </CtaInner>
      </FinalCtaSection>
    </Page>
  );
};

export default Solutions;

const ProductCard = ({ item }: { item: ProductItem }) => (
  <ProductCardRoot>
    <ProductGrid>
      <ProductVisual>
        <ProductImage src={item.image} alt={item.name} loading="lazy" />
      </ProductVisual>
      <ProductBody>
        <ProductTagline>{item.tagline}</ProductTagline>
        <ProductName>{item.name}</ProductName>
        <ProductDetail>{item.detail}</ProductDetail>

        {item.modes && (
          <ModeList>
            {item.modes.map((mode) => (
              <ModeCard key={mode.name}>
                <ModeName>{mode.name}</ModeName>
                <ModeDescription>{mode.description}</ModeDescription>
              </ModeCard>
            ))}
          </ModeList>
        )}

        {item.features && (
          <FeatureList>
            {item.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </FeatureList>
        )}

        {item.specs && item.specs.length > 0 && (
          <SpecTable>
            {item.specs.map((spec) => (
              <SpecRow key={spec.label}>
                <SpecLabel>{spec.label}</SpecLabel>
                <SpecValue>{spec.value}</SpecValue>
              </SpecRow>
            ))}
          </SpecTable>
        )}

        {(item.ctas || item.supportingLink) && (
          <CtaRow>
            {item.ctas?.map((cta) => (
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
            {item.supportingLink && (
              <SupportingLink
                href={item.supportingLink.href}
                target={item.supportingLink.newTab ? '_blank' : undefined}
                rel={item.supportingLink.newTab ? 'noreferrer' : undefined}
              >
                {item.supportingLink.label}
              </SupportingLink>
            )}
          </CtaRow>
        )}
      </ProductBody>
    </ProductGrid>
  </ProductCardRoot>
);

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
  position: relative;
  border-bottom: 1px solid var(--border);
  padding: clamp(4rem, 7vw, 6rem) var(--space-8) clamp(3rem, 6vw, 4rem);
  background: var(--background);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        90deg,
        rgba(16, 25, 17, 0.05) 1px,
        transparent 1px
      ),
      linear-gradient(
        rgba(16, 25, 17, 0.05) 1px,
        transparent 1px
      );
    background-size: 22px 22px;
    opacity: 0.35;
    pointer-events: none;
  }
`;

const Hero = styled.header`
  position: relative;
  z-index: var(--z-raised);
  display: flex;
  flex-direction: column;
  gap: ${tokens.space[4]};
  max-width: 720px;
  margin: 0 auto;
`;

const HeroEyebrow = styled.span`
  font-family: ${tokens.font.mono};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: ${tokens.letter.extreme};
  color: ${tokens.colors.primary};
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const HeroDash = styled.span`
  display: inline-block;
  width: 32px;
  height: 2px;
  border-radius: 999px;
  background: ${tokens.colors.primary};
`;

const HeroTitle = styled.h1`
  font-family: ${tokens.font.display};
  font-size: clamp(2rem, 4.2vw, 3rem);
  font-weight: ${tokens.fontWeight.bold};
  line-height: ${tokens.lineHeight.snug};
  letter-spacing: -0.02em;
  margin: 0;
  color: ${tokens.colors.foreground};
`;

const HeroLede = styled.p`
  font-size: 1.05rem;
  line-height: ${tokens.lineHeight.relaxed};
  color: ${tokens.colors.mutedForeground};
  margin: 0;
  max-width: 580px;
`;

const SolutionsSection = styled.section`
  position: relative;
  border-bottom: 1px solid var(--border);
  background: var(--background);
  padding: clamp(4rem, 7vw, 6rem) var(--space-8);
  overflow: hidden;

  &:nth-of-type(even) {
    background: var(--card);
  }

  @media (max-width: ${tokens.bp.lg}) {
    padding: clamp(3rem, 10vw, 4.5rem) var(--space-6);
  }
`;

const SectionPattern = styled.div`
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
  background-size: 24px 24px;
  opacity: 0.28;
  pointer-events: none;
`;

const SolutionsSectionInner = styled.div`
  position: relative;
  z-index: var(--z-raised);
  max-width: var(--container-max-wide);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-6), 6vw, var(--space-12));
`;

const SolutionsSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);

  @media (min-width: 960px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
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

const SectionAccent = styled.span`
  display: inline-block;
  width: 36px;
  height: 1px;
  background: currentColor;
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

const ProductCardRoot = styled.article`
  background: ${tokens.colors.card};
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg};
  overflow: hidden;
  box-shadow: ${tokens.shadow.sm};
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: ${tokens.bp['2xl']}) {
    grid-template-columns: 1fr;
  }
`;

const ProductVisual = styled.div`
  background: ${tokens.colors.secondary};
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
  font-size: ${tokens.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: ${tokens.letter.widest};
  color: ${tokens.colors.primary};
`;

const ProductName = styled.h3`
  font-size: clamp(1.5rem, 3.2vw, 1.85rem);
  font-weight: ${tokens.fontWeight.bold};
  line-height: ${tokens.lineHeight.tight};
  color: ${tokens.colors.foreground};
  margin: 0;
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
  background: ${tokens.colors.secondary};
  border-radius: ${tokens.radius.md};
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
  border-radius: ${tokens.radius.md};
  font-size: ${tokens.fontSize.sm};
  font-weight: ${tokens.fontWeight.semibold};
  letter-spacing: ${tokens.letter.tight};
  text-decoration: none;
  transition: transform ${tokens.transition.fast}, box-shadow ${tokens.transition.fast}, background ${tokens.transition.fast};

  ${(props) =>
    props.$variant === 'primary'
      ? `background: ${tokens.colors.primary}; color: ${tokens.colors.primaryForeground}; border: none;`
      : `background: transparent; color: ${tokens.colors.foreground}; border: 1px solid ${tokens.colors.border};`}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
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

const ServiceCardRoot = styled.article`
  background: ${tokens.colors.card};
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg};
  padding: ${tokens.space[10]};
  display: flex;
  flex-direction: column;
  gap: ${tokens.space[4]};
  box-shadow: ${tokens.shadow.sm};

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
  background: ${tokens.colors.secondary};
  border-radius: ${tokens.radius.md};
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
  background: var(--background);
  padding: clamp(4rem, 7vw, 6rem) var(--space-8) clamp(5rem, 8vw, 6.5rem);
`;

const CtaInner = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${tokens.radius.xl};
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
  position: relative;
  z-index: 1;
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
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${tokens.space[3]} ${tokens.space[8]};
  border-radius: ${tokens.radius.md};
  background: ${tokens.colors.primaryForeground};
  color: ${tokens.colors.accent};
  font-weight: ${tokens.fontWeight.semibold};
  letter-spacing: ${tokens.letter.tight};
  text-decoration: none;
  transition: transform ${tokens.transition.fast}, box-shadow ${tokens.transition.fast};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.15);
  }
`;

const CtaPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.4;
  pointer-events: none;
  background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.65) 1px, transparent 0);
  background-size: 28px 28px;
`;
