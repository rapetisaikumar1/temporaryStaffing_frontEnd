import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground">General inquiries, corporate partnerships, and corporate office information.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-2xl">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            <Phone className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Phone</h3>
          <p className="text-muted-foreground mb-4">Mon-Fri from 8am to 6pm EST.</p>
          <a href="tel:+18005550199" className="font-medium hover:text-primary transition-colors">1 (800) 555-0199</a>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-2xl">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <p className="text-muted-foreground mb-4">Our friendly team is here to help.</p>
          <a href="mailto:hello@staffpro.demo" className="font-medium hover:text-primary transition-colors">hello@staffpro.demo</a>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-2xl">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            <MapPin className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Office</h3>
          <p className="text-muted-foreground mb-4">Come say hello at our HQ.</p>
          <address className="not-italic font-medium">100 Business Pkwy, Suite 100<br/>New York, NY 10001</address>
        </div>
      </div>
      
      <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Need staff immediately?</h2>
        <p className="text-muted-foreground mb-8">Skip the general inquiry and go straight to our staffing request form for the fastest response time.</p>
        <Button size="lg" asChild>
          <a href="/request-staff">Fill out a Staffing Request</a>
        </Button>
      </div>
    </div>
  );
}
