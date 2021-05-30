import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

import magnaposi from '../../../assets/Magnaposi.png';
import { gray, primaryGreen } from '../../../styles/colors';

const ProductCard = () => {
  return (
    <Card style={{ width:"15rem" }}>
      <Card.Img variant="top" src={magnaposi} alt="product image"/>
      <Card.Body>
        <CardTitle>Magnaposi</CardTitle>
        <CardText>Steel catenary measurement in pickling processes.</CardText>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <CardLink href="#">Learn more &rarr; </CardLink>
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

const CardLink =styled(Card.Link)`
color:${primaryGreen};
font-weight:500
`