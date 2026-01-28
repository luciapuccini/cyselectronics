import Link from "next/link";
import style from "./navbar.module.scss";
import Image from "next/image";
import brandingSvg from "../../assets/cys-branding.svg";
import { useRouter } from "next/router";

const getCurrentPage = (path: string) => {
  const page = path.slice(1);
  switch (page) {
    case "":
      return 0;
    case "company":
      return 1;
    case "contact":
      return 2;
    case "products":
    case "products/positioning":
    case "products/protection":
      return 3;
    case "services":
      return 4;
    default:
      return 0;
  }
};

const Navbar = () => {
  const { route } = useRouter();
  const isActive = getCurrentPage(route);

  return (
    <header className={style.container}>
      <Image
        src={brandingSvg}
        alt="cyselectronics logo"
        width={104}
        height={64}
        priority
      />

      <nav className={style.nav}>
        <div className={isActive === 0 ? style.linkWrapper : ""}>
          <div>
            <Link href="/" className={style.link}>
              Home
            </Link>
          </div>
        </div>
        <div className={isActive === 1 ? style.linkWrapper : ""}>
          <div>
            <Link href="/company" className={style.link}>
              Company
            </Link>
          </div>
        </div>
        <div className={isActive === 2 ? style.linkWrapper : ""}>
          <div>
            <Link href="/contact" className={style.link}>
              Contact us
            </Link>
          </div>
        </div>
        <div className={isActive === 3 ? style.linkWrapper : ""}>
          <div>
            <Link href="/products" className={style.link}>
              Products
            </Link>
          </div>
        </div>
        <div className={isActive === 4 ? style.linkWrapper : ""}>
          <div>
            <Link href="/services" className={style.link}>
              Services
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
