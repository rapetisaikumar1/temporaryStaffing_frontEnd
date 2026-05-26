import Link from 'next/link';
import { ArrowRight, CheckCircle2, Users, Wine, Megaphone, ShieldCheck, Clapperboard, Trophy, HeartHandshake, Award } from 'lucide-react';

const services = [
  {
    icon: Wine,
    title: 'Hospitality & Catering Staff',
    image: 'https://images.unsplash.com/photo-1470338745628-171cf53de3a8?q=80&w=800&auto=format&fit=crop',
    desc: 'The backbone of any successful event. Our hospitality professionals bring poise, speed, and a guest-first attitude to every service interaction — from intimate corporate dinners to 5,000-person festivals.',
    roles: ['Banquet & Event Servers', 'Bartenders & Mixologists', 'Bar-backs & Runner Staff', 'Event Captains & Floor Leads', 'Coat Check Attendants', 'Food Station Assistants'],
    detail: 'All bar staff are TIPS/ServSafe certified. Uniformed or dressed to your event spec.',
    cta: '/request-staff',
  },
  {
    icon: Megaphone,
    title: 'Brand Ambassadors & Promotions',
    image: 'https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=800&auto=format&fit=crop',
    desc: 'High-energy promotional professionals who represent your brand with confidence and authenticity at trade shows, product launches, pop-up activations, and experiential marketing tours.',
    roles: ['Trade Show Booth Hosts', 'Product Demonstrators', 'Sampling Agents', 'Street Team Members', 'Lead Generation Reps', 'Mobile Tour Staff'],
    detail: 'Available for single-day activations or multi-city promotional tours nationwide.',
    cta: '/request-staff',
  },
  {
    icon: ShieldCheck,
    title: 'Event Security & Crowd Management',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop',
    desc: 'Professionally licensed security staff and crowd management specialists trained for high-density public environments. We keep your guests safe and your event running smoothly.',
    roles: ['Licensed Security Guards', 'Ticket Takers & Gate Crew', 'Bag Check & Entry Staff', 'VIP Escorts & Personal Security', 'Crowd Flow Coordinators', 'Parking & Traffic Control'],
    detail: 'All security personnel are licensed, background-checked, and certified in de-escalation.',
    cta: '/request-staff',
  },
  {
    icon: Users,
    title: 'Event Hosts & Guest Services',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
    desc: 'The first and last impression your guests receive. Our guest services professionals create welcoming, frictionless experiences — from arrival to departure — at conferences, galas, and corporate functions.',
    roles: ['Conference Registration Staff', 'Badge Scanning & Check-in Crew', 'Concierge & Wayfinding Hosts', 'Greeter & Welcome Teams', 'VIP Check-in Coordinators', 'Information Desk Attendants'],
    detail: 'Bilingual hosts available. Branded uniforms and scripted talking points provided on request.',
    cta: '/request-staff',
  },
  {
    icon: Clapperboard,
    title: 'Event Production & Stagehands',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop',
    desc: 'Experienced event production labor for load-in, setup, teardown, and on-site operational support. We work alongside your production team to ensure the physical execution of your event goes off without a hitch.',
    roles: ['Load-in & Load-out Crew', 'Stage & Set Construction Assistants', 'A/V Equipment Runners', 'General Venue Setup Crew', 'Backstage Production Assistants', 'Forklift Operators (certified)'],
    detail: 'Available on call for early-morning load-ins and late-night strikes. Union and non-union options.',
    cta: '/request-staff',
  },
  {
    icon: Trophy,
    title: 'Sporting Events & Stadium Staff',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&auto=format&fit=crop',
    desc: 'High-volume venue staffing for stadiums, arenas, and large-scale sporting events. From concessions to VIP suites, we supply the full spectrum of event-day roles.',
    roles: ['Concession Stand Operators', 'Suite Attendants & VIP Servers', 'Usher & Seating Staff', 'Merchandise Sellers', 'Parking Lot Attendants', 'Medical Support Coordinators (non-clinical)'],
    detail: 'Experienced with NFL, NBA, MLS, and major college venue protocols.',
    cta: '/request-staff',
  },
  {
    icon: HeartHandshake,
    title: 'Charity Galas & Fundraisers',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop',
    desc: 'Elegant, formal event staffing for non-profit galas, silent auctions, and fundraising banquets. Our staff understand the sensitivity and sophistication these events demand.',
    roles: ['Gala Dinner Servers', 'Silent Auction Staff', 'Donor Registration Hosts', 'Valet Parking Coordinators', 'MC & Program Assistants', 'Setup & Décor Crew'],
    detail: 'White-glove service standard. Formal attire provided or black-and-white dress code honored.',
    cta: '/request-staff',
  },
  {
    icon: Award,
    title: 'VIP & Red Carpet Events',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    desc: 'Refined, discreet staffing for award shows, VIP receptions, celebrity events, and high-profile client entertainment where presentation and professionalism are non-negotiable.',
    roles: ['VIP & Green Room Hosts', 'Red Carpet Coordinators', 'Personal Assistants (event-day)', 'Luxury Concierge Staff', 'Photographer & Media Escorts', 'Premium Bartenders'],
    detail: 'NDA compliance available. Experienced with agency, entertainment, and luxury brand events.',
    cta: '/request-staff',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative bg-[#0d2b5e] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-blue-300 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Services</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">Staffing Services</h1>
          <p className="text-blue-100 text-xl max-w-3xl leading-relaxed">
            From bartenders to brand ambassadors to backstage crew — we supply fully vetted, insured W-2 staff for every event role, at every scale.
          </p>
        </div>
      </section>

      {/* Compliance Badge */}
      <section className="bg-blue-50 border-b border-blue-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 sm:gap-10 text-sm font-medium text-[#0d2b5e]">
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0033a0]" /> All workers are W-2 employees — you carry zero liability</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0033a0]" /> $5M general liability insurance coverage</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0033a0]" /> Background checks on every worker</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0033a0]" /> Same-day and last-minute bookings accepted</span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#0033a0] hover:shadow-xl transition-all flex flex-col group">
                  {/* Card image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#0b1f41]/10" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight">{svc.title}</h3>
                    </div>
                  </div>
                  {/* Card body */}
                  <div className="p-7 flex flex-col flex-1">
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">{svc.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {svc.roles.map((role) => (
                      <div key={role} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0033a0] shrink-0"></span>
                        {role}
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 rounded px-4 py-3 text-xs text-gray-500 font-medium mb-6 italic">{svc.detail}</div>
                  <div className="mt-auto">
                    <Link href={svc.cta} className="inline-flex items-center gap-2 text-sm font-bold text-[#0033a0] hover:underline underline-offset-4">
                      Request this service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Strip */}
      <section className="bg-gray-50 border-t border-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0d2b5e] mb-3">How it works</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Booking event staff with StaffPro takes minutes, not days.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { step: '01', title: 'Submit your request', body: 'Tell us your event type, dates, headcount, and role requirements using our online form.' },
              { step: '02', title: 'Receive a proposal', body: 'A dedicated coordinator contacts you within 2 hours with a custom staffing plan and transparent pricing.' },
              { step: '03', title: 'Confirm your crew', body: 'Review worker profiles, approve the lineup, and receive individual confirmations for each shift.' },
              { step: '04', title: 'Event day support', body: 'Your coordinator stays on-call throughout your event. Real-time tracking confirms everyone arrived on time.' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className="text-5xl font-extrabold text-blue-100 mb-3 leading-none">{item.step}</div>
                <h3 className="font-bold text-[#0d2b5e] text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d2b5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">Ready to build your event crew?</h2>
            <p className="text-blue-100 max-w-md leading-relaxed">Tell us your event details and we'll match you with pre-screened, uniformed professionals ready to deploy within 24 hours.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/request-staff" className="inline-flex items-center justify-center gap-2 bg-white text-[#0d2b5e] font-bold px-8 py-3.5 rounded hover:bg-blue-50 transition-colors text-sm">
              Request Staff Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-blue-300 text-white font-bold px-8 py-3.5 rounded hover:bg-white/10 transition-colors text-sm">
              Talk to a Coordinator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
