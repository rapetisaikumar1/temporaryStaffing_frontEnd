import Link from 'next/link';
import { Search, MapPin, Users, CheckCircle2, ArrowRight, Calendar, ShieldAlert, Star, Clock, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import EventTypesCarousel from '@/components/website/EventTypesCarousel';



const roles = [
  'Bartenders & Mixologists',
  'Banquet Servers',
  'Brand Ambassadors',
  'Event Security Guards',
  'Trade Show Hosts',
  'Stagehands & Crew',
  'Registration Staff',
  'VIP Escorts',
];

const testimonials = [
  { quote: 'StaffPro placed 80 bartenders and servers for our 3-day festival with 48 hours notice. Every single person showed up uniformed and ready.', name: 'Sarah M.', title: 'Director of Events, Horizon Music Group' },
  { quote: 'Our annual conference runs like clockwork now. Their registration staff and concierge hosts have become an extension of our own team.', name: 'David K.', title: 'VP Operations, National Trade Alliance' },
  { quote: 'No-shows used to be our biggest fear. With StaffPro, it\'s never crossed our mind once in three years of working together.', name: 'Jennifer R.', title: 'Executive Producer, Prestige Event Co.' },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full font-sans">

      {/* HERO */}
      <section id="find-jobs" className="relative w-full min-h-[540px] flex items-center bg-gray-900 py-16 md:py-28 lg:py-36">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
            alt="Large event with crowd"
            className="w-full h-full object-cover opacity-45"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="max-w-3xl bg-white p-8 md:p-12 rounded shadow-2xl mx-auto md:mx-0">
            <div className="inline-block bg-blue-100 text-[#0033a0] px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5 rounded-sm">
              America's #1 Temporary Event Staffing Agency
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0b1f41] mb-4 tracking-tight leading-tight">
              Elite temporary staff for every event, on demand.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Bartenders, servers, security, brand ambassadors, stagehands — fully vetted, W-2 insured, and ready to deploy within 24 hours anywhere in the country. Or browse open shifts near you.
            </p>
            <div className="flex flex-col md:flex-row gap-3 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <Input type="text" placeholder="Role (e.g. Bartender, Security)" className="pl-11 h-13 text-base rounded-sm border-gray-300" />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <Input type="text" placeholder="City, state, or zip code" className="pl-11 h-13 text-base rounded-sm border-gray-300" />
              </div>
              <Button size="lg" className="bg-[#0033a0] hover:bg-[#002277] text-white font-bold rounded-sm w-full md:w-auto px-8 whitespace-nowrap">
                Find Jobs
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm font-semibold border-t border-gray-200 pt-5">
              <span className="text-gray-500">Planning an event and need to hire staff?</span>
              <Link href="/request-staff" className="text-[#0033a0] hover:underline flex items-center gap-1">
                Request your crew now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-gray-100 border-b border-gray-200 py-10">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-extrabold text-[#0033a0]">15,000+</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Events Staffed</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-[#0033a0]">50,000+</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Vetted Professionals</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-[#0033a0]">24/7</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Dispatch Support</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-[#0033a0]">100%</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">W-2 Compliant</div>
          </div>
        </div>
      </section>

      {/* EVENT TYPES GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event types we specialize in</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized talent networks are built around specific event environments — so the professionals we send actually know the job.
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <EventTypesCarousel />
          </div>
          <div className="text-center mt-12">
            <Link href="/industries" className="inline-flex items-center text-[#0033a0] font-bold hover:underline text-base">
              View all event categories <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* POPULAR ROLES TICKER ROW */}
      <section className="bg-[#0033a0] py-6 overflow-hidden border-y border-[#0027881]">
        <div className="flex gap-10 animate-none flex-wrap justify-center px-4">
          {roles.map((role) => (
            <span key={role} className="text-white font-semibold text-sm flex items-center gap-3 whitespace-nowrap">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300 inline-block"></span>
              {role}
            </span>
          ))}
        </div>
      </section>

      {/* ROLES WE FILL */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="text-xs font-bold uppercase tracking-widest text-[#0033a0] mb-3">Temporary Event Staffing</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Every role your event needs — covered.</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you need one emergency fill-in or a crew of 300 for a multi-day festival, we deploy pre-screened talent across every event discipline. All workers are background-checked, trained, and employed as W-2 staff — so you carry zero liability.
              </p>
              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#0033a0] shrink-0 mt-0.5" />
                  <div><span className="font-bold text-gray-900">Hospitality & Catering — </span><span className="text-gray-600">Bartenders, Mixologists, Banquet Servers, Coat Check, Kitchen Assistants, Event Captains</span></div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#0033a0] shrink-0 mt-0.5" />
                  <div><span className="font-bold text-gray-900">Security & Crowd Management — </span><span className="text-gray-600">Licensed Guards, Ticket Takers, Barricade Staff, VIP Escorts, Bag Checkers</span></div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#0033a0] shrink-0 mt-0.5" />
                  <div><span className="font-bold text-gray-900">Promotional & Brand — </span><span className="text-gray-600">Brand Ambassadors, Product Demonstrators, Registration Staff, Trade Show Hosts</span></div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#0033a0] shrink-0 mt-0.5" />
                  <div><span className="font-bold text-gray-900">Event Production — </span><span className="text-gray-600">Stagehands, Setup & Teardown Crews, A/V Assistants, Parking Attendants</span></div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-[#0033a0] hover:bg-[#002277] text-white px-8 py-3 text-base font-bold">
                  <Link href="/request-staff">Request a Custom Crew</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#0033a0] text-[#0033a0] px-8 py-3 text-base font-bold hover:bg-blue-50">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1470338745628-171cf53de3a8?q=80&w=900&auto=format&fit=crop" alt="Bartender at event" className="rounded shadow-lg h-64 object-cover w-full" />
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=900&auto=format&fit=crop" alt="Event setup crew" className="rounded shadow-lg h-64 object-cover w-full mt-8" />
              <img src="https://images.unsplash.com/photo-1549451371-64aa98a6f660?q=80&w=900&auto=format&fit=crop" alt="Brand ambassadors" className="rounded shadow-lg h-64 object-cover w-full -mt-8" />
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900&auto=format&fit=crop" alt="Event team" className="rounded shadow-lg h-64 object-cover w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* DUAL PATH */}
      <section className="w-full">
        <div className="grid md:grid-cols-2">
          <div className="bg-[#0b1f41] text-white px-6 py-14 md:px-14 md:py-20 flex flex-col items-center justify-center text-center">
            <Briefcase className="h-12 w-12 text-blue-300 mb-5" />
            <h2 className="text-3xl font-bold mb-3">I need temporary staff</h2>
            <p className="text-blue-100 text-base mb-4 max-w-md">Scale your workforce on demand — office support, light industrial, hospitality, customer service, and more.</p>
            <ul className="text-blue-200 text-sm space-y-1.5 mb-7 text-left w-full max-w-xs">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0" /> Same-day & short-notice placements</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0" /> Fully screened, W-2 employees</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0" /> Teams from 1 to 500+ workers</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0" /> Dedicated account manager</li>
            </ul>
            <Link href="/request-staff" className="bg-white text-[#0b1f41] font-bold text-base px-8 py-3 rounded-sm hover:bg-gray-100 transition-colors w-full sm:w-auto inline-block">
              Request Staff Now
            </Link>
          </div>
          <div className="bg-[#f0f4f8] text-[#0b1f41] px-6 py-14 md:px-14 md:py-20 flex flex-col items-center justify-center text-center">
            <Users className="h-12 w-12 text-[#0033a0] mb-5" />
            <h2 className="text-3xl font-bold mb-3">I&apos;m looking for work</h2>
            <p className="text-gray-600 text-base mb-4 max-w-md">Find flexible temporary and contract jobs across industries — on your schedule with weekly direct-deposit pay.</p>
            <ul className="text-gray-600 text-sm space-y-1.5 mb-7 text-left w-full max-w-xs">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0033a0] shrink-0" /> Flexible hours — full-time, part-time & short-term</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0033a0] shrink-0" /> Weekly direct-deposit pay</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0033a0] shrink-0" /> Jobs across multiple industries</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0033a0] shrink-0" /> Free skills & compliance training</li>
            </ul>
            <Link href="/join-team" className="bg-[#0033a0] text-white font-bold text-base px-8 py-3 rounded-sm hover:bg-[#002277] transition-colors w-full sm:w-auto inline-block">
              Job Seeker
            </Link>
          </div>
        </div>
      </section>

      {/* WHY STAFFPRO */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why top event organizers rely on StaffPro</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We remove the risk and headache of temporary staffing so your team can focus entirely on delivering a great event.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 bg-blue-50 rounded-full flex items-center justify-center mb-8">
                <ShieldAlert className="h-10 w-10 text-[#0033a0]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Compliance & Insurance</h3>
              <p className="text-gray-600 text-lg leading-relaxed">All workers are employed as W-2 staff. We cover payroll taxes, worker's compensation, and carry $5M general liability coverage — so you carry zero employment risk at your venue.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 bg-blue-50 rounded-full flex items-center justify-center mb-8">
                <CheckCircle2 className="h-10 w-10 text-[#0033a0]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rigorously Vetted Talent</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Every professional passes criminal background checks, reference verification, and role-specific assessments including TIPS certification for bar staff and Guard Card verification for security.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 bg-blue-50 rounded-full flex items-center justify-center mb-8">
                <Clock className="h-10 w-10 text-[#0033a0]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Shift Management</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Our staffing platform provides live visibility into confirmed workers, GPS-based venue clock-ins, and instant replacements if someone calls off — all manageable from your phone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 border-t border-gray-200 py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by the industry's best</h2>
            <p className="text-xl text-gray-600">Event planners, venues, and brands across North America rely on StaffPro.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gray-200 rounded p-8 flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 leading-relaxed italic flex-1 mb-6">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BAND */}
      <section className="bg-[#0033a0] py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to staff your next event?</h2>
        <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">Submit your event details and a dedicated coordinator will respond with a custom crew proposal within 2 hours.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/request-staff" className="bg-white text-[#0033a0] font-bold text-lg px-10 py-4 rounded-sm hover:bg-gray-100 transition-colors inline-block">
            Request Event Staff
          </Link>
          <Link href="/join-team" className="border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-sm hover:bg-white/10 transition-colors inline-block">
            Find Event Gigs
          </Link>
        </div>
      </section>

    </div>
  );
}
