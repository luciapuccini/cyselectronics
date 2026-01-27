import Link from "next/link";
import style from "./navbar.module.scss";
import Image from "next/image";
import brandingSvg from "../../assets/cys-branding.svg";

const Navbar = () => (
  <header className={style.container}>
    <Image
      src={brandingSvg}
      alt="cyselectronics logo"
      width={104}
      height={64}
      priority
    />

    <nav className={style.nav}>
      <Link href="/" className={style.link}>
        Home
      </Link>
      <Link href="/company" className={style.link}>
        Company
      </Link>
      <Link href="/contact" className={style.link}>
        Contact us
      </Link>
      <Link href="/products" className={style.link}>
        Products
      </Link>
      <Link href="/services" className={style.link}>
        Services
      </Link>
    </nav>
  </header>
);

export default Navbar;
