import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import brandingSvg from "@/assets/cys-branding.svg";
import menu from "@/assets/menu.svg";
import { useState } from "react";

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
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-4 bg-background border-b">
      <div className="flex justify-between items-start w-full ">
        <Link href="/">
          <Image
            src={brandingSvg}
            alt="cyselectronics logo"
            width={104}
            height={64}
            priority
          />
        </Link>

        <Image
          src={menu}
          alt="navigation menu icon"
          className="sm:hidden cursor-pointer"
          width={40}
          height={40}
          priority
          onClick={() => setToggle(!toggle)}
        />
      </div>

      <NavigationMenu show={!!toggle}>
        <NavigationMenuList>
          {navItems.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle({
                  active: isCurrentPath(route, href),
                })}
              >
                <Link href={href}>{label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
