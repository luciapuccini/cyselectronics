import { useLocation } from 'react-router-dom';

import Product from './Product';
import { TabNav, TabLink } from '../components/atoms/TabNav';

function Protection() {
  const { pathname } = useLocation();
  const isRotor = pathname.includes('rotor');

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
