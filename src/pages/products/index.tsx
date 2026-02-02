import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductsProps {
  children?: React.ReactNode;
}

const Products = ({ children }: ProductsProps) => (
  <div className="container mx-auto px-6 py-8">
    <Card>
      <CardHeader>
        <CardTitle>Our Products</CardTitle>
        <CardDescription>
          Explore our comprehensive range of electronic control solutions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Control Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Advanced control solutions for industrial applications with
                real-time monitoring and optimization capabilities.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Electronic Components</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                High-quality electronic components for reliable performance in
                demanding environments.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Custom Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Tailored solutions designed to meet your unique requirements and
                specifications.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
        {children}
      </CardContent>
    </Card>
  </div>
);

export default Products;
