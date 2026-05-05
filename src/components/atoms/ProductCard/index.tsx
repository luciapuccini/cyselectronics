import styled from 'styled-components';

import { getProduct } from '../../../utils/products';

interface Props {
  name: string;
}

const ProductCard = ({ name }: Props) => {
  const product = getProduct(name);
  return (
    <Card>
      <ImageWrap>
        <img src={product?.image} alt={product?.title ?? 'product'} />
      </ImageWrap>
      <Body>
        <Title>{product?.title}</Title>
        <Text>{product?.detail}</Text>
      </Body>
      <Footer>
        <LearnMore href={product?.link}>Learn more &rarr;</LearnMore>
      </Footer>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  flex: 1 1 280px;
  max-width: 340px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s, transform 0.2s;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`;

const ImageWrap = styled.div`
  height: 160px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Body = styled.div`
  padding: 1.25rem;
  flex: 1;
  text-align: left;
`;

const Title = styled.h5`
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: var(--card-foreground);
`;

const Text = styled.p`
  font-size: 0.825rem;
  line-height: 1.6;
  color: var(--muted-foreground);
  margin: 0;
`;

const Footer = styled.div`
  padding: 0.75rem 1.25rem;
  border-top: 1px solid var(--border);
  background: var(--secondary);
  text-align: left;
`;

const LearnMore = styled.a`
  font-family: var(--font-display);
  font-size: 0.825rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--primary);
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;
