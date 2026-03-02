import Product from './Product';
import { TabNav, TabLink } from '../components/atoms/TabNav';

function Positioning() {
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
