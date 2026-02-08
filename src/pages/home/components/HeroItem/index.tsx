import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

interface HeroItemProps {
  image: string;
  children: React.ReactNode;
}

const HeroItem: React.FC<HeroItemProps> = ({ image, children }) => (
  <CarouselItem>
    <Image
      src={image}
      alt="daskljd"
      className={`relative h-96 rounded-lg overflow-hidden`}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white">{children}</div>
    </div>
    {/* </div> */}
  </CarouselItem>
);

export default HeroItem;
