import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const industries = [
  {
    title: 'Corporate Events & Conferences',
    desc: 'Large-scale summits, shareholder meetings, and corporate retreats requiring high-touch professional registration, badging, and wayfinding staff.',
    roles: ['Registration Staff', 'Badge Scanning Crew', 'Concierge Hosts', 'Green Room Assistants'],
    scale: 'Typical crew: 5 – 200 staff',
  },
  {
    title: 'Trade Shows & Exhibitions',
    desc: 'Engaging booth staff, lead-generation representatives, and product demonstrators to maximize brand exposure on the show floor.',
    roles: ['Brand Ambassadors', 'Booth Demonstrators', 'Lead Gen Reps', 'Booth Setup Crew'],
    scale: 'Typical crew: 2 – 50 staff per booth',
  },
  {
    title: 'Brand Activations & PR Tours',
    desc: 'Energetic promotional teams for pop-ups, street teams, and experiential marketing activations in any city.',
    roles: ['Street Team Members', 'Sampling Agents', 'Mobile Tour Staff', 'Event Photographers (Asst)'],
    scale: 'Typical crew: 2 – 30 staff',
  },
  {
    title: 'Festivals & Concerts',
    desc: 'High-volume operational staff for ticketing gates, crowd flow, VIP areas, and general event logistics at large public gatherings.',
    roles: ['Ticket Scanners', 'VIP Hosts', 'Crowd Management Crew', 'Wristbanding Staff'],
    scale: 'Typical crew: 20 – 500+ staff',
  },
  {
    title: 'VIP & Gala Events',
    desc: 'Polished, formally dressed staff for black-tie dinners, award ceremonies, high-end networking mixers, and charity galas.',
    roles: ['Dinner Servers', 'Coat Check Attendants', 'Valet Coordinators', 'VIP Check-in Hosts'],
    scale: 'Typical crew: 5 – 100 staff',
  },
  {
    title: 'Private Events & Weddings',
    desc: 'Discreet, professional service staff ensuring seamless execution of private celebrations, from intimate dinners to large receptions.',
    roles: ['Event Servers', 'Bartenders', 'Setup & Breakdown Crew', 'Day-of Coordinators'],
    scale: 'Typical crew: 2 – 40 staff',
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#0d2b5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-blue-300 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Industries</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            From corporate boardrooms to festival grounds, we deliver the exact caliber of professional your event demands.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((ind) => (
              <div key={ind.title} className="border border-gray-200 rounded-lg p-7 hover:border-[#0d2b5e] hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-[#0d2b5e] mb-2">{ind.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{ind.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {ind.roles.map((role) => (
                    <span key={role} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">{role}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 font-medium">{ind.scale}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d2b5e] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Ready to staff your next event?</h2>
            <p className="text-blue-100 text-sm max-w-md">Tell us your event type, headcount, and dates. We'll have pre-screened candidates ready within 24 hours.</p>
          </div>
          <Link href="/request-staff" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#0d2b5e] font-semibold px-6 py-3 rounded hover:bg-blue-50 transition-colors text-sm">
            Submit a Staffing Request <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
