import { Building2, CalendarSync, GlassWater, Mic2, Tent, VenetianMask } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function IndustriesPage() {
  const industries = [
    { icon: Building2, title: "Corporate Events & Conferences", desc: "Large-scale summits, shareholder meetings, and corporate retreats requiring high-touch professional registration and wayfinding staff." },
    { icon: Tent, title: "Trade Shows & Exhibitions", desc: "Engaging brand ambassadors and sales assistants to drive booth traffic, scan badges, and qualify leads on the show floor." },
    { icon: Mic2, title: "PR Tour & Brand Activations", desc: "Energetic promotional teams for pop-ups, street teams, and mobile vehicle tours nationwide." },
    { icon: GlassWater, title: "VIP & Hospitality Events", desc: "Polished catered staff, VIP hosts, and mixologists for exclusive galas and high-end networking mixers." },
    { icon: VenetianMask, title: "Festivals & Concerts", desc: "High-volume operational teams for ticketing, crowds, VIP tents, and general event logistics." },
    { icon: CalendarSync, title: "Private Events & Weddings", desc: "Discreet and professional service staff to ensure seamless execution of private celebrations." },
  ];

  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Industries & Event Types</h1>
        <p className="text-lg text-muted-foreground">From corporate boardrooms to festival grounds, we supply the exact profile of talent your industry demands.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <Card key={idx} className="border-none shadow-md bg-muted/20">
              <CardHeader>
                <div className="h-10 w-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{ind.title}</CardTitle>
                <CardDescription className="pt-2 text-base">{ind.desc}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
