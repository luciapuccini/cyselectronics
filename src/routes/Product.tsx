import React from 'react';
import { useParams } from 'react-router-dom';

interface ParamsType {
  product: string;
}

// TODO: create a common structure to all products pages.
const Product = () => {
  const { product } = useParams<ParamsType>();

  return (
    <div>
      <h3>{product}</h3>
    </div>
  );
};

export default Product