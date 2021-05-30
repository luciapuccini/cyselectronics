import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

import magnaposi from '../../../assets/products/Magnaposi.png';
import rotor from '../../../assets/products/rotor.jpg';
import pemcc from '../../../assets/products/pemcc.png';

import { gray, primaryGreen,green200 } from '../../../styles/colors';

// FIXME: move to a file to reuse in product page
export const productsConfig = [
  {
    description:
      'In pickling processes is important to control the depth to which the material is immersed. To achieve that a reliable measurement must be done. The MAGNAPOSI System performs this function without contact with the acid solution and is maintenance free.',
    detail: 'Steel catenary measurement in pickling processes.',
    link: '/products/magnaposi',
    name: 'magnaposi',
    title: 'Magnaposi SM-500T',
    image: magnaposi,
    brochure: '',
    presentation: '',
  },
  {
    description:
      "C&S's DC motor protection system model PEMCC evaluates the rotor solicitation of a dc machine through its current sensing.You can configure two different operation modes: Mode TI-2 It is designed to replace electromechanical or overcurrent relays in general. It is also possible to configure an instantaneous trip. M. T. Mode (Thermal Model) It’s a special mode in which you can enter the motor physical parameters to analyze the actual thermal state of the machine. Useful, for example, in the case of successive starts or alternate cycles of loading, where TI-2 mode may not contemplate actual heating accumulated due to these efforts. You can also set an instantaneous trip",
    detail:
      'Motor protection system that evaluates the rotor solicitation of a dc machine through its current sensing.',
    link: '/products/pemcc',
    name: 'pemcc',
    title: 'PEMCC',
    image: pemcc,
    brochure: '',
    presentation: '',
  },
  {
    description: `The presence of imbalances in the rotor currents of a three-phase ac motors winding rotor can cause significant problems such as vibration, mechanical deformation and / or breakage of the windings.
      C & S’s rotor protection system performs the measurement of the three currents in the rotor winding engines of all sizes.
      It has the ability to detect the existence of current and rotor unbalance overcurrent. Should a fault be detected, the system gives an alarm to prevent operating conditions that may cause a malfunction. It also provides an output current proportional to the imbalance.
      Adjustments are made via keyboard and a display which has available status information, the current value of each phase unbalance, overcurrent settings and trip times.`,
    detail:
      'Rotor protection system for the measurement of the three currents in the rotor winding engines of all sizes.',
    link: '/products/rotor',
    name: 'rotor',
    title: 'PROTECTION ROTOR C&S',
    image: rotor,
    brochure: '',
    presentation: '',
  },
];

const getProduct = (name: string) =>
  productsConfig.find((product) => product.name === name);

interface Props {
  name: string;
}

const ProductCard = ({ name }: Props) => {
  const product = getProduct(name);
  return (
    <Card style={{ width: '15rem' }}>
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
