import styled from 'styled-components';

import partners from '../assets/partners.png';
import { usePageTitle } from '../hooks/usePageTitle';
import { secondaryOrange } from '../styles/colors';

const Company = () => {
  usePageTitle(
    { en: 'Company', es: 'Empresa' },
    { en: 'Over 30 years of industrial electronics expertise in Argentina.', es: 'Más de 30 años de experiencia en electrónica industrial en Argentina.' }
  );
  return (
  <div>
    <br />
    <h2>Company</h2>
    <hr />
    <h4>
      C&S Controles y Sistemas was founded in 1991, with the mission of
      performing ​​Industrial Electronics designs and developments.
    </h4>
    <div>
      Our business values are set around serving our customer with full
      dedication, achieving their trust and work with them to solve their
      specific needs. We believe that our personal attention and daily work
      strengthen this trust and persists throughout the years. C&S's main
      business is set in industrial electronics, in over 20 years, we have
      worked to increase our expertise in design, development, and maintenance
      of industrial electronic equipment. For this reason, our reliability and
      experience are two key pillars to our growth and our customers.
    </div>
    <br />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <PartnersHeader>
        These are some of the companies that trusted and continue to trust us
      </PartnersHeader>
      <PartnersImg src={partners} alt="partners" />
    </div>
  </div>
  );
};

export default Company;

const PartnersImg = styled.img`
  height: auto;
  width: 50vw;
`;

const PartnersHeader = styled.h5`
  color: ${secondaryOrange};
  font-weight: 500;
`;
