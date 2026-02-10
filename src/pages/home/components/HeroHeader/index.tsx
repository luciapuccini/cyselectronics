import type React from "react";

interface HeroHeaderProps {
  children: React.ReactNode;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ children }) => (
  <h2 className="text-2xl max-w-[80vw] px-5 py-2 font-semibold md:mb-4 bg-primary/80">
    {children}
  </h2>
);

export default HeroHeader;
