import ContactForm from '../components/organisms/ContactForm';
import { usePageTitle } from '../hooks/usePageTitle';

const Contact = () => {
  usePageTitle(
    { en: 'Contact', es: 'Contacto' },
    { en: 'Get in touch with C&S Controles y Sistemas for industrial electronics projects and inquiries.', es: 'Contacte a C&S Controles y Sistemas para proyectos y consultas de electrónica industrial.' }
  );
  return (
    <div>
      <br />
      <h2>Contact Us</h2>
      <hr />
      <ContactForm />
    </div>
  );
};

export default Contact;
