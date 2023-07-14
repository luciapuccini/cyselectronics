import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled, { css } from 'styled-components';

import { green200, primaryGreen } from '../styles/colors';
import { getProduct } from '../utils/products';

interface Props {
  product: string;
}


const Product: React.FC<Props> = ({ product }) => {
  const downloadPDF = () => {
    fetch("../../public/Magnaposi_eng_datasheet_3.02.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Magnaposi_Datasheet.pdf");
        document.body.appendChild(link);
        link.click();
        // @ts-ignore
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading PDF:", error);
      });
  };
  // @ts-ignore
  const { complete_title, title, description, image, detail } = getProduct(product);
  const isMagnaposi = product === 'magnaposi';

  return (
    <Container>
      <Header> {complete_title || title} </Header>
      <b>{detail}</b>
      <br />
      <br />
      <ProductRow>
        <Col sm={1} md={7} lg={7}>
          {description}
          {isMagnaposi && (
            <div>
              <hr />
              <ProductLink href="https://magnaposi.com">
                Website &rarr;{' '}
              </ProductLink>
              <br />
              <br />
              <ProductBtn onClick={downloadPDF}>
                Download PDF
              </ProductBtn>
            </div>
          )}

        </Col>
        <ProductImgContainer sm={1} md={4} lg={4}>
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
  margin-top: 1rem;
  color: ${primaryGreen};
  cursor: default;
`;

const ProductImgContainer = styled(Col)`
  margin-right: 1rem;
  width: 100%;
`;

const ProductImg = styled.img`
  width: 100%;
  heigth: 100%;
  object-fit: contain;
`;

const ProductRow = styled(Row)`
  margin: 0;
  padding: 0;
  justify-content: space-between;
`;

const ProductLink = styled.a`
  color: ${primaryGreen};
  font-weight: 500;
  :hover {
    color: ${green200};
  }
`;
const normalize = css`
  all: unset;
`;

const ProductBtn = styled.button`
  ${normalize}
  color: ${primaryGreen};
  font-weight: 500;
  :hover {
    color: ${green200};
  }
`;
