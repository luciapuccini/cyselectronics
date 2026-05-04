import { Routes, Route } from 'react-router-dom';

import Positioning from './Positioning';
import Protection from './Protection';
import { usePageTitle } from '../hooks/usePageTitle';

const Products = () => {
  usePageTitle(
    { en: 'Products', es: 'Productos' },
    { en: 'Industrial electronics products: positioning systems, protection systems, and custom developments.', es: 'Productos de electrónica industrial: sistemas de posicionamiento, protección y desarrollos a medida.' }
  );
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h2>Products</h2>
            <hr />
          </div>
        }
      />
      <Route path="/positioning" element={<Positioning />} />
      <Route path="/positioning/*" element={<Positioning />} />
      <Route path="/protection" element={<Protection />} />
      <Route path="/protection/*" element={<Protection />} />
    </Routes>
  );
};

export default Products;
