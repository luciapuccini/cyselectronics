import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import HeroItem from "./components/HeroItem";
import HeroHeader from "./components/HeroHeader";
import HeroDetail from "./components/HeroDetail";
import slide1 from "src/assets/slide-1.webp";
import slide2 from "src/assets/slide-2.webp";
import slide3 from "src/assets/slide-3.webp";

const Home = () => (
  <>
    <section className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={
          [
            // Autoplay({
            //   delay: 4000,
            // }),
          ]
        }
        className="w-full"
      >
        <CarouselContent>
          <HeroItem image={slide1}>
            <HeroHeader>STEELMAKERS</HeroHeader>
            <HeroDetail>
              Our expertise in this market has been improved over the years
              having made top state of the art solutions related to sensors,
              automatic control, real-time quality control, equipment
              protection, etc.
            </HeroDetail>
          </HeroItem>
          <HeroItem image={slide2}>
            <HeroHeader>ELECTRONIC</HeroHeader>
            <HeroDetail>
              Development, manufacture and repair of electronic and
              electromechanical products ranging from the concept to turnkey
              supply.
            </HeroDetail>
          </HeroItem>
          <HeroItem image={slide3}>
            <HeroHeader>ENGINEERING</HeroHeader>
            <HeroDetail>
              Conceptualization, requirements, specification, architecture
              design, hardware development, testing, documentation and reverse
              engineering.
            </HeroDetail>
          </HeroItem>
        </CarouselContent>
      </Carousel>
    </section>
    <div className="container mx-auto px-6 py-8 space-y-12 ">
      {/* Products Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Our Products</CardTitle>
            <CardDescription>
              Discover our comprehensive range of electronic control solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-20 bg-muted rounded-lg mb-4"></div>
                  <h3 className="font-semibold mb-2">Control Systems</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced control solutions for industrial applications
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-20 bg-muted rounded-lg mb-4"></div>
                  <h3 className="font-semibold mb-2">Electronic Components</h3>
                  <p className="text-sm text-muted-foreground">
                    High-quality components for reliable performance
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-20 bg-muted rounded-lg mb-4"></div>
                  <h3 className="font-semibold mb-2">Custom Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Tailored solutions for unique requirements
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Map Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Global Presence</CardTitle>
            <CardDescription>
              Serving clients worldwide with local expertise
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Map Component Placeholder</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  </>
);

export default Home;
