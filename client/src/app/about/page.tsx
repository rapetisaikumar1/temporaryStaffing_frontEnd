import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-muted/30 py-20 border-b">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About StaffPro</h1>
          <p className="text-lg text-muted-foreground">
            We are the premier provider of temporary event staffing, bridging the gap between exceptional talent and world-class events.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              StaffPro was founded on a simple principle: events succeed or fail based on the people working them. We aim to eliminate the unpredictability of event staffing by maintaining a highly vetted roster of professionals who are trained to integrate seamlessly with your core team.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you are organizing a 5,000-person tech conference or an intimate VIP gathering, we provide the reliable, articulate, and proactive staff necessary to deliver a flawless attendee experience.
            </p>
          </div>
          <div className="bg-primary/5 rounded-2xl p-8 border">
            <h3 className="text-xl font-semibold mb-6">The StaffPro Difference</h3>
            <ul className="space-y-4">
              {['W-2 Employee Model for Risk Mitigation', 'Rigorous 4-Step Vetting Process', '24/7 Dedicated Account Management', 'Nationwide Network of 25,000+ Pros', 'Technology-Driven Deployment'].map((item, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
