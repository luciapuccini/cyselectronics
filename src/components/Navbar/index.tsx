import Link from "next/link";
import Image from "next/image";
import brandingSvg from "../../assets/cys-branding.svg";
import { useRouter } from "next/router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
    <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
      <Image
        src={brandingSvg}
        alt="cyselectronics logo"
        width={104}
        height={64}
        priority
      />

      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  style={{
                    backgroundColor: isCurrentPath(route, href)
                      ? "hsl(var(--muted))"
                      : "transparent",
                    color: isCurrentPath(route, href)
                      ? "hsl(var(--muted-foreground))"
                      : "hsl(var(--foreground))",
                  }}
                >
                  {label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
