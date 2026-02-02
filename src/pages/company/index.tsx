import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CompanyProps {
  children?: React.ReactNode;
}

const Company = ({ children }: CompanyProps) => (
  <div className="container mx-auto px-6 py-8">
    <Card>
      <CardHeader>
        <CardTitle>Company Page</CardTitle>
        <CardDescription>
          Learn more about C&S Controles y Sistemas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-semibold mb-4">About Our Company</h2>
        <p className="text-muted-foreground mb-4">
          We complement existing technologies with our own developments, aligned
          with the specific needs of the client, providing solutions to problems
          that have no reception in traditional suppliers.
        </p>
        {children}
      </CardContent>
    </Card>
  </div>
);

export default Company;
