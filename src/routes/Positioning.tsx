import { TabNav, TabLink } from '../components/atoms/TabNav';
import { usePageTitle } from '../hooks/usePageTitle';
import Product from './Product';

function Positioning() {
  usePageTitle(
    { en: 'Positioning', es: 'Posicionamiento' },
    { en: 'Industrial positioning systems designed and manufactured by C&S Controles y Sistemas.', es: 'Sistemas de posicionamiento industrial diseñados y fabricados por C&S Controles y Sistemas.' }
  );
  return (
    <div>
      <br />
      <h2>Positioning</h2>
      <TabNav>
        <TabLink href="https://magnaposi.com" active>Magnaposi</TabLink>
      </TabNav>
      <Product product="magnaposi" />
    </div>
  );
}

export default Positioning;
