import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Building2, CalendarCheck, CheckCircle2, ChevronRight, Clock, MapPin, Users2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="relative container mx-auto px-4 md:px-6 z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
            Nationwide Staffing Now Available
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mb-6">
            The Right People.<br/>At The Right Time.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
            StaffPro provides elite temporary staffing for corporate events, conferences, trade shows, and brand promotions. Verified professionals ready when you need them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="font-semibold" asChild>
              <Link href="/request-staff">Hire Staff Now <ChevronRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary font-semibold" asChild>
              <Link href="/join-team">Apply for Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="w-full py-12 border-b bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border">
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-bold tracking-tighter text-primary">10k+</span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Events Staffed</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-bold tracking-tighter text-primary">25k+</span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Verified Pros</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-bold tracking-tighter text-primary">48</span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">US States</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-bold tracking-tighter text-primary">99%</span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Fill Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="w-full py-20 px-4 md:px-6 bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Our Expertise</h2>
            <p className="max-w-[700px] text-muted-foreground text-lg">Specialized event personnel trained to represent your brand with absolute professionalism.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                  <Users2 className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Event Hosts & Brand Ambassadors</CardTitle>
                <CardDescription className="text-base pt-2">Outgoing, articulate professionals to greet guests, manage registration, and promote your brand.</CardDescription>
              </CardHeader>
            </Card>
            {/* Service 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Hospitality & Catering</CardTitle>
                <CardDescription className="text-base pt-2">Experienced bartenders, servers, and catering staff for VIP events, weddings, and corporate banquets.</CardDescription>
              </CardHeader>
            </Card>
            {/* Service 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                  <CalendarCheck className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Event Coordinators & Crew</CardTitle>
                <CardDescription className="text-base pt-2">Detail-oriented onsite coordinators, registration staff, and production crew for seamless execution.</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/services">View All Staffing Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 px-4 md:px-6 bg-primary/5 border-y">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Why Partner With StaffPro?</h2>
              <p className="text-lg text-muted-foreground mb-8">We understand that our people are the face of your event. That's why we maintain rigorous vetting standards and focus entirely on reliability and presentation.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Rigorous Vetting</h3>
                    <p className="text-muted-foreground">Every candidate passes interviews, background checks, and skills assessments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Rapid Deployment</h3>
                    <p className="text-muted-foreground">Last-minute changes? We have backup personnel ready to deploy on demand.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">W-2 Compliance</h3>
                    <p className="text-muted-foreground">All staff are fully insured standard employees, mitigating your legal risk and classification liabilities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1632&auto=format&fit=crop" alt="Staff working at a business conference" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <Card className="bg-white/95 backdrop-blur shadow-xl border-none">
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-2" /> 24/7 Availability
                      </CardTitle>
                      <CardDescription>Support teams ready around the clock.</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-24 px-4 md:px-6 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to staff your next event?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">Get a custom quote and staff assigned within 24 hours.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="font-semibold text-primary" asChild>
              <Link href="/request-staff">Request Staff Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
