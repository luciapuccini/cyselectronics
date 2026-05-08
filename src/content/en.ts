import type { SiteContent } from './types';

const en: SiteContent = {
  nav: {
    items: [
      { code: '01', label: 'Home', href: '/' },
      { code: '02', label: 'Solutions', href: '/solutions' },
      { code: '03', label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Request quote', href: '/contact' },
    ariaOpen: 'Open menu',
    ariaClose: 'Close menu',
    langSwitch: { en: 'EN', es: 'ES' },
  },

  home: {
    carousel: {
      slides: [
        {
          header: 'STEELMAKERS',
          detail:
            'Our expertise in this market has been improved over the years having made top state of the art solutions related to sensors, automatic control, real-time quality control, equipment protection, etc.',
        },
        {
          header: 'ELECTRONIC',
          detail:
            'Development, manufacture and repair of electronic and electromechanical products ranging from the concept to turnkey supply.',
        },
        {
          header: 'ENGINEERING',
          detail:
            'Conceptualization, requirements, specification, architecture design, hardware development, testing, documentation and reverse engineering.',
        },
      ],
    },

    capabilities: {
      eyebrow: 'Capabilities · 04',
      title: 'Four disciplines.',
      titleSub: 'One accountable team.',
      intro:
        'C&S Controles y Sistemas was founded in 1991, with the mission of performing Industrial Electronics designs and developments.',
      link: 'View full solutions catalogue',
      items: [
        {
          code: 'C-01',
          title: 'Engineering',
          description:
            'Conceptualisation, requirements, architecture and electronic design — verified through rigorous testing.',
          items: ['Electromechanical R&D', 'PCB & enclosure design', 'Reverse engineering'],
        },
        {
          code: 'C-02',
          title: 'Manufacturing',
          description:
            'Development and small-to-medium series production of electronic and electromechanical assemblies.',
          items: ['Spare parts production', 'Turnkey supply', 'Custom enclosures'],
        },
        {
          code: 'C-03',
          title: 'Maintenance',
          description:
            'Multibrand repair and modernisation of industrial control and power equipment, on-site or in-shop.',
          items: ['Drives & PLCs', 'Power converters', 'Sensor calibration'],
        },
        {
          code: 'C-04',
          title: 'Steelmaking',
          description:
            'Three decades of mill-floor expertise — sensing, real-time quality and operational safety systems.',
          items: ['Catenary measurement', 'Coke oven IR positioning', 'Pickling line QC'],
        },
      ],
    },

    about: {
      metaLabel: '/About',
      metaSupport: 'C&S Controles y Sistemas',
      title:
        'Industrial electronics, designed and built with full dedication — for over three decades.',
      copy: [
        'C&S Controles y Sistemas was founded in 1991 with a single mission: to perform industrial electronics design and development with the rigour the factory floor demands.',
        'Our values are built around personal attention. Reliability and experience are the two pillars that have anchored our growth — and our customers’ trust — over thirty years of practice.',
      ],
      stats: [
        { value: '1991', label: 'Founded' },
        { value: '30+', label: 'Years on the floor' },
        { value: '200+', label: 'Industrial deployments' },
        { value: '24/7', label: 'Field response' },
      ],
      imageAlt: 'Macro detail of an industrial control board manufactured by C&S',
      badge: 'File · CYS-PCB-014',
    },

    trustedBy: {
      accent: 'Trusted partners',
      title: 'Partners that rely on our work',
      footnote:
        'For more than three decades we have collaborated with leading industrial companies, delivering tailored electronics solutions where standard suppliers fall short.',
    },
  },

  solutions: {
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
            modes: [
              {
                name: 'Mode TI-2',
                description:
                  'Designed to replace electromechanical or overcurrent relays in general. It is also possible to configure an instantaneous trip.',
              },
              {
                name: 'Thermal Model mode',
                description:
                  'Enter the motor physical parameters to analyse the actual thermal state of the machine. Ideal for successive starts or alternating load cycles where TI-2 mode cannot track accumulated heating. Instantaneous trip can also be configured.',
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
              {
                heading: 'Coke plant',
                bullet: 'Infrared positioning system for coking ovens',
              },
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

  contact: {
    metaTitle: 'Contact',
    metaDescription:
      'Get in touch with C&S Controles y Sistemas for industrial electronics projects and inquiries.',
    hero: {
      eyebrow: 'Contact',
      title: 'Let’s talk about\nyour next project',
      lede: 'Engineering solutions in industrial control and automation. We are ready to help.',
    },
    info: {
      title: 'Contact information',
      address: {
        label: 'Address',
        lines: ['Garibaldi 611', 'B2900 San Nicolás de Los Arroyos', 'Province of Buenos Aires'],
      },
      phone: {
        label: 'Phone',
        lines: ['+54-336-4426734'],
      },
      email: {
        label: 'E-mail',
        lines: ['info@controlesysistemas.com.ar'],
      },
    },
    form: {
      formTitle: 'Contact form',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company',
      message: 'Message',
      required: '* Required fields',
      submit: 'Send message',
      submitting: 'Sending…',
      sent: 'Message sent',
      sentBody: 'Thank you for reaching out. We will get back to you shortly.',
      sendAnother: 'Send another message',
      errors: {
        name: 'Name is required',
        email: 'Email is required',
        emailInvalid: 'Invalid email',
        message: 'Message is required',
      },
    },
  },

  footer: {
    tagline: 'Industrial electronics design, development, and maintenance since 1991.',
    navColumn: 'Navigation',
    contactColumn: 'Contact',
    copyright: (year) => `© ${year} C&S Controles y Sistemas. All rights reserved.`,
    version: 'v2.0',
  },
};

export default en;
