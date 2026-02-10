import { CarouselItem } from "@/components/ui/carousel";
import Image, { type StaticImageData } from "next/image";

interface HeroItemProps {
  image: StaticImageData;
  children: React.ReactNode;
  loading: "eager" | "lazy";
}

const HeroItem: React.FC<HeroItemProps> = ({ image, loading, children }) => (
  <CarouselItem>
    <div className="relative h-56 md:h-96 overflow-hidden">
      <Image
        src={image}
        alt={`slide-carousel${image}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading={loading}
      />

      <div className="absolute inset-0 text-center text-white flex flex-col items-end justify-evenly">
        {children}
      </div>
    </div>
  </CarouselItem>
);

export default HeroItem;
