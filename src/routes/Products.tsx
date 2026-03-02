import { Routes, Route } from 'react-router-dom';

import Positioning from './Positioning';
import Protection from './Protection';

const Products = () => (
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

export default Products;
