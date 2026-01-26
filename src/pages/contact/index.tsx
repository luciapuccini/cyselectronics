import style from "./contact.module.scss";

interface ContactProps {
    children?: React.ReactNode;
}

const Contact = ({ children }: ContactProps) => (
  <div className={style.container}>
    <h1>Contact Page</h1>
    {children}
  </div>
);

export default Contact;
