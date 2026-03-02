import styled from 'styled-components';

import { gray, primaryGreen, green200 } from '../../../styles/colors';
import { getProduct } from '../../../utils/products';

interface Props {
  name: string;
}

const ProductCard = ({ name }: Props) => {
  const product = getProduct(name);
  return (
    <CardWrapper>
      <img src={product?.image} alt="product image" />
      <CardBody>
        <CardTitle>{product?.title}</CardTitle>
        <CardText>{product?.detail}</CardText>
      </CardBody>
      <CardFooter>
        <CardLink href={product?.link}>Learn more &rarr;</CardLink>
      </CardFooter>
    </CardWrapper>
  );
};

export default ProductCard;

const CardWrapper = styled.div`
  width: 17rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const CardBody = styled.div`
  padding: 1rem;
  flex: 1;
`;

const CardTitle = styled.h5`
  color: ${gray};
  font-weight: bold;
`;

const CardText = styled.p`
  color: ${gray};
`;

const CardFooter = styled.div`
  padding: 0.75rem 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`;

const CardLink = styled.a`
  color: ${primaryGreen};
  font-weight: 500;
  text-decoration: none;
  :hover {
    color: ${green200};
  }
`;
