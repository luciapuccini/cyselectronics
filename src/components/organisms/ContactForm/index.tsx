import React from 'react';
import styled from 'styled-components';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import { secondaryOrange, orange200 } from '../../../styles/colors';
import Map from '../../atoms/Map';

const ContactForm = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height:'90vh',    alignItems: "flex-start"
  }}>
      {/* @ts-ignore */}
      <Container xs={1} md={6} lg={6} style={{ margin: 0, padding: 0 }}>
        <FormContainer name="contact" netlify>
          <b>
            Use this simple form to send us your inquiries or quotation
            requests.
          </b>
          <br />
          <br />
          <FormRow>
            <Form.Group controlId="contactName">
              <Form.Label>Name</Form.Label>
              <Form.Control required={true} type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group controlId="contactEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required={true}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </FormRow>

          <Form.Group controlId="contactText">
            <Form.Label>Your message</Form.Label>
            <Form.Control as="textarea" type="text" placeholder="Message" rows={5} style={{resize:"none"}}/>
          </Form.Group>

          <OrangeButton type="submit">Submit</OrangeButton>
        </FormContainer>
      </Container>
      <MapCol md={6} lg={6}>
        <Map width="50vw" />
      </MapCol>
    </div>
  );
};

export default ContactForm;

const FormContainer = styled(Form)`
  padding: 0 1rem 0 1rem;
`;

const FormRow = styled(Row)`
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const OrangeButton = styled(Button)`
  background-color: ${secondaryOrange};
  border: none;
  :hover {
    background-color: ${orange200};
    border: none;
  }
  :active {
    background-color: ${secondaryOrange};
    border: none;
  }
`;

const MapCol = styled(Col)`
  margin-right: 2rem;
  @media (max-width: 699px) {
    display: none;
  }
`;
