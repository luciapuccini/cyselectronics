import styled from 'styled-components';

import { getProduct } from '../utils/products';

interface Props {
  product: string;
}

const Product: React.FC<Props> = ({ product }) => {
  const productData = getProduct(product);
  const isMagnaposi = product === 'magnaposi';

  if (!productData) {
    return (
      <Container>
        <Header>Product not found</Header>
        <p>The requested product is not available.</p>
      </Container>
    );
  }

  const { complete_title, title, description, image, detail } = productData;
  
  return (
    <Container>
      <Header>{complete_title || title}</Header>
      <b>{detail}</b>
      <br />
      <br />
      <ProductRow>
        <DescriptionCol>
          {description}
          {isMagnaposi && (
            <div>
              <hr />
              <ProductLink href="https://magnaposi.com">Website &rarr;</ProductLink>
              <br />
              <br />
              <ProductLink href="/Magnaposi_eng_datasheet_3.02.pdf" target="_blank">
                Download PDF
              </ProductLink>
            </div>
          )}
        </DescriptionCol>
        <ProductImgContainer>
          <ProductImg src={image} alt={`product=${title}`} />
        </ProductImgContainer>
      </ProductRow>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  min-height: 64vh;
`;

const Header = styled.h3`
  margin-top: var(--space-4);
  color: var(--primary);
  cursor: default;
`;

const ProductRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

const DescriptionCol = styled.div`
  flex: 7;
`;

const ProductImgContainer = styled.div`
  flex: 4;
  margin-right: var(--space-4);
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ProductLink = styled.a`
  color: var(--primary);
  font-weight: var(--font-weight-medium);
  :hover {
    color: var(--primary);
  }
`;
