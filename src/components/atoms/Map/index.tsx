import styled from 'styled-components';

const LocationMap = () => {
  return (
    <Wrapper id="contact">
      <ContactCard>
        <CardTitle>Contact Us</CardTitle>
        <p><strong>Phone:</strong> +54-336-4426734</p>
        <p><strong>E-mail:</strong> info@controlesysistemas.com.ar</p>
        <Location>San Nicolás, Buenos Aires, Argentina.</Location>
      </ContactCard>
      <iframe
        title="google map cys"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26665.2008965253!2d-60.24076986293017!3d-33.341027880805335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7679b30478e45%3A0x705b2ead1a2421bb!2sGaribaldi%20611%2C%20San%20Nicol%C3%A1s%20de%20Los%20Arroyos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1622412832927!5m2!1ses!2sar"
        allowFullScreen
        loading="lazy"
        style={{ width: '100%', height: 420, border: 'none', display: 'block' }}
      />
    </Wrapper>
  );
};

export default LocationMap;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
`;

const ContactCard = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 1;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  max-width: 300px;
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--foreground);

  p {
    margin: 0 0 0.25rem;
  }

  @media (max-width: 799px) {
    display: none;
  }
`;

const CardTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
  margin: 0 0 0.75rem;
`;

const Location = styled.p`
  color: var(--muted-foreground);
  margin-top: 0.25rem !important;
`;
