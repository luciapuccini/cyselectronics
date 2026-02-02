import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

    {/* Carousel Placeholder */}
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Featured Solutions</CardTitle>
          <CardDescription>
            Explore our latest innovations and success stories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">
              Carousel Component Placeholder
            </p>
          </div>
        </CardContent>
      </Card>
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
