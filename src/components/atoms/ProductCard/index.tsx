import styled from 'styled-components';

import { primaryGreen, green200 } from '../../../styles/colors';
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
  border: 1px solid #e0e0e0;
  border-top: 3px solid ${primaryGreen};

  @media (max-width: 599px) {
    width: 100%;
  }
  border-radius: 0.375rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.14);
    transform: translateY(-2px);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
`;

const CardBody = styled.div`
  padding: 1rem 1.25rem;
  flex: 1;
`;

const CardTitle = styled.h5`
  color: #1a1a1a;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  color: #555;
  font-size: 0.875rem;
  line-height: 1.55;
  margin: 0;
`;

const CardFooter = styled.div`
  padding: 0.75rem 1.25rem;
  background: #f7f7f7;
  border-top: 1px solid #e0e0e0;
`;

const CardLink = styled.a`
  color: ${primaryGreen};
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  &:hover {
    color: ${green200};
    text-decoration: underline;
  }
`;
