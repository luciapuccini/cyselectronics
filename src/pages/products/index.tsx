import style from "./products.module.scss";

interface ProductsProps {
    children?: React.ReactNode;
}

const Products = ({ children }: ProductsProps) => (
  <div className={style.container}>
    <h1>Products Page</h1>
    {children}
  </div>
);

export default Products;
