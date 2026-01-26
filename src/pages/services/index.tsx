import style from "./services.module.scss";

interface ServicesProps {
    children?: React.ReactNode;
}

const Services = ({ children }: ServicesProps) => (
  <div className={style.container}>
    <h1>Services Page</h1>
    {children}
  </div>
);

export default Services;
