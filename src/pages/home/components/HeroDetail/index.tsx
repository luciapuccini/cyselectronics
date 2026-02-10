import type React from "react";

interface HeroDetailProps {
  children: React.ReactNode;
}

const HeroDetail: React.FC<HeroDetailProps> = ({ children }) => (
  <p className="text-2xl max-w-[80vw] px-5 py-2 bg-primary/80 hidden md:block ">
    {children}
  </p>
);

export default HeroDetail;
