import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

import { gray, primaryGreen,green200 } from '../../../styles/colors';
import { getProduct } from '../../../utils/products';

interface Props {
  name: string;
}

const ProductCard = ({ name }: Props) => {
  const product = getProduct(name);
  return (
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={product?.image} alt="product image" />
      <Card.Body>
        <CardTitle>{product?.title}</CardTitle>
        <CardText>{product?.detail}</CardText>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <CardLink href={product?.link}>Learn more &rarr; </CardLink>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ProductCard;

const CardTitle = styled(Card.Title)`
  color: ${gray};
  font-weight: bold;
`;

const CardText = styled(Card.Text)`
  color: ${gray};
`;

const CardLink = styled(Card.Link)`
  color: ${primaryGreen};
  font-weight: 500;
  :hover {
    color: ${green200};
  }
`;
