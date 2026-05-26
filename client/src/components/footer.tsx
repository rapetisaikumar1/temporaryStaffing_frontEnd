import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="text-xl font-bold text-primary tracking-tight">StaffPro</span>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Premium temporary staffing solutions for events across the nation. Rapid deployment, professional coordination.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/services" className="hover:text-primary transition">Event Hosts</Link></li>
            <li><Link href="/services" className="hover:text-primary transition">Brand Ambassadors</Link></li>
            <li><Link href="/services" className="hover:text-primary transition">Hospitality Staff</Link></li>
            <li><Link href="/services" className="hover:text-primary transition">Production Crew</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
            <li><Link href="/industries" className="hover:text-primary transition">Event Types</Link></li>
            <li><Link href="/join-team" className="hover:text-primary transition">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>1 (800) 555-0199</li>
            <li>hello@staffpro.demo</li>
            <li>100 Business Pkwy, Suite 100<br/>New York, NY 10001</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} StaffPro Demo. All rights reserved.</p>
      </div>
    </footer>
  );
}
