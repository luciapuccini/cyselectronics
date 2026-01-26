import style from "./company.module.scss";

interface CompanyProps {
    children?: React.ReactNode;
}

const Company = ({ children }: CompanyProps) => (
  <div className={style.container}>
    <h1>Company Page</h1>
    {children}
  </div>
);

export default Company;
