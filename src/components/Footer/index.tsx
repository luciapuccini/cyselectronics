const Footer = () => (
  <footer className="bg-muted text-muted-foreground py-8 px-6 border-t">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 ">C&S Electronics</h3>
        </div>
        <div>
          <h4 className="text-md font-medium mb-3 ">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/company"
                className="hover:text-primary transition-colors"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="hover:text-primary transition-colors"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-primary transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-medium mb-3 ">Contact Info</h4>
          <p className="text-sm space-y-1">
            <span>Email: info@controlesysistemas.com.ar</span>
            <br />
            <span>Phone: +54 3364 426734</span>
          </p>
        </div>
      </div>
      <div className="mt-8 pt-6 text-center text-sm">
        <p>&copy; 2026 C&S Controles y Sistemas.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
