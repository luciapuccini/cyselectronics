import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContactProps {
  children?: React.ReactNode;
}

const Contact = ({ children }: ContactProps) => (
  <div className="container mx-auto px-6 py-8">
    <Card>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>
          Get in touch with C&S Controles y Sistemas
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Email:</strong> info@cyselectronics.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Address:</strong> 123 Electronics Street, Tech City, TC
                12345
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Send us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-border rounded-md bg-background"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-border rounded-md bg-background"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-md bg-background"
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  </div>
);

export default Contact;
