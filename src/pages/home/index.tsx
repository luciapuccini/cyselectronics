import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import HeroItem from "./components/HeroItem";
import slide1 from "src/assets/slide-1.webp";
import Image from "next/image";

const Home = () => (
  <div className="container mx-auto px-6 py-8 space-y-12">
    {/* Hero Section */}
    <section className="text-center space-y-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          C&S Controles y Sistemas
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-3xl mx-auto">
          We complement existing technologies with our own developments, aligned
          with the specific needs of the client, providing solutions to problems
          that have no reception in traditional suppliers.
        </p>
        <div className="mt-8 space-x-4">
          <Button size="lg" className="bg-primary">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>

    {/* Carousel Hero Section */}
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
            <h2 className="text-4xl font-bold mb-4">Steelmakers</h2>
            <p className="text-xl mb-6">
              Our expertise in this market has been improved over the years
              having made top state of the art solutions related to sensors,
              automatic control, real-time quality control, equipment
              protection, etc.
            </p>
          </HeroItem>
          <CarouselItem>
            <div className="relative h-96 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold mb-4">ELECTRONIC</h2>
                  <p className="text-xl mb-6">
                    Development, manufacture and repair of electronic and
                    electromechanical products ranging from the concept to
                    turnkey supply.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-96 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold mb-4">ENGINEERING</h2>
                  <p className="text-xl mb-6">
                    Conceptualization, requirements, specification, architecture
                    design, hardware development, testing, documentation and
                    reverse engineering.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>

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
);

export default Home;
