import type React from "react";

interface HeroHeaderProps {
  children: React.ReactNode;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ children }) => (
  <h2 className="text-4xl font-bold md:mb-4 bg-primary/80">{children}</h2>
);

export default HeroHeader;
