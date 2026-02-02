import Link from "next/link";
import style from "./navbar.module.scss";
import Image from "next/image";
import brandingSvg from "../../assets/cys-branding.svg";
import { useRouter } from "next/router";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact us" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
];

const isCurrentPath = (route: string, href: string) => {
  if (href === "/") return route === "/";
  return route.startsWith(href);
};

const Navbar = () => {
  const { route } = useRouter();

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
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${style.link} ${isCurrentPath(route, href) ? style.current : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
