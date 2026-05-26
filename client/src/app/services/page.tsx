import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
  const services = [
    {
      title: "Event Hosts & Hostesses",
      description: "Articulate and polished professionals to greet guests, manage registration desks, handle directional support, and provide general event assistance.",
      tags: ["Registration", "Greeters", "VIP Support", "Directional"]
    },
    {
      title: "Brand Ambassadors",
      description: "Outgoing, engaging personnel trained to represent your brand, drive lead generation, demonstrate products, and increase booth traffic.",
      tags: ["Trade Shows", "Promotions", "Lead Gen", "Product Demos"]
    },
    {
      title: "Hospitality Staff",
      description: "Trained servers, certified bartenders, and catering assistants for elegant VIP events, corporate mixers, and banquets.",
      tags: ["Bartenders", "Servers", "Bussers", "Catering Aides"]
    },
    {
      title: "Production & Event Crew",
      description: "Hardworking teams for setup, tear-down, swag bag stuffing, inventory management, and general onsite labor.",
      tags: ["Setup/Strike", "Laborers", "Inventory", "Runners"]
    },
    {
      title: "Specialized Roles",
      description: "Niche staffing including bilingual hosts, emcees, technical demonstrators, and onsite event managers.",
      tags: ["Bilingual", "Emcees", "Tech Demos", "Managers"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Staffing Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We provide a wide array of specialized personnel tailored to the specific needs of your event or campaign.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((svc, i) => (
          <Card key={i} className={i === 4 ? "md:col-span-2" : ""}>
            <CardHeader>
              <CardTitle className="text-2xl">{svc.title}</CardTitle>
              <CardDescription className="text-base pt-2">{svc.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag, j) => (
                  <Badge key={j} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
