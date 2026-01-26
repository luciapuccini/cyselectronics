import style from "./home.module.scss";

const Home = () => (
  <div className={style.container}>
    <div>carousel</div>
    <div className={style.mainCol}>
      <h1 className={style.mainHeader}>C&S Controles y Sistemas</h1>
      <h2 className={style.mainDetail}>
        We complement existing technologies with our own developments, aligned
        with the specific needs of the client, providing solutions to problems
        that have no reception in traditional suppliers.
      </h2>
    </div>
    <div>products</div>
    <div>map</div>
  </div>
);

export default Home;
