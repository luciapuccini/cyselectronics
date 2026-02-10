import type React from "react";

interface HeroDetailProps {
  children: React.ReactNode;
}

const HeroDetail: React.FC<HeroDetailProps> = ({ children }) => (
  <p className="text-lg max-w-2xl mx-auto hidden md:block">{children}</p>
);

export default HeroDetail;
