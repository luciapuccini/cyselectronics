import { useLocation } from 'react-router-dom';

import { TabNav, TabLink } from '../components/atoms/TabNav';
import { usePageTitle } from '../hooks/usePageTitle';
import Product from './Product';

function Protection() {
  const { pathname } = useLocation();
  const isRotor = pathname.includes('rotor');
  usePageTitle(
    isRotor
      ? { en: 'Rotor Protection', es: 'Protección de Rotor' }
      : { en: 'PEMCC Protection', es: 'Protección PEMCC' },
    isRotor
      ? { en: 'Rotor protection systems for industrial motors.', es: 'Sistemas de protección de rotor para motores industriales.' }
      : { en: 'PEMCC protection systems for industrial applications.', es: 'Sistemas de protección PEMCC para aplicaciones industriales.' }
  );

  return (
    <div>
      <br />
      <h2>Protection</h2>
      <TabNav>
        <TabLink href="/products/protection/pemcc" active={!isRotor}>PEMCC</TabLink>
        <TabLink href="/products/protection/rotor" active={isRotor}>Rotor</TabLink>
      </TabNav>
      {isRotor ? <Product product="rotor" /> : <Product product="pemcc" />}
    </div>
  );
}

export default Protection;
