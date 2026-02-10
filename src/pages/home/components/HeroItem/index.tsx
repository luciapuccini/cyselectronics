import { CarouselItem } from "@/components/ui/carousel";
import Image, { type StaticImageData } from "next/image";

interface HeroItemProps {
  image: string | StaticImageData;
  children: React.ReactNode;
}

const HeroItem: React.FC<HeroItemProps> = ({ image, children }) => (
  <CarouselItem>
    <div className="relative h-56 md:h-96 overflow-hidden">
      <Image
        src={image}
        alt={`slide-carousel${image}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">{children}</div>
      </div>
    </div>
  </CarouselItem>
);

export default HeroItem;
