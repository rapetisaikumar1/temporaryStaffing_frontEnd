import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const industries = [
  {
    title: 'Corporate Events & Conferences',
    desc: 'Large-scale summits, shareholder meetings, product launches, and corporate retreats demand a professional, polished workforce. We provide high-touch registration, badging, concierge, and general session staff who represent your brand with confidence.',
    roles: ['Registration & Badge Scanning', 'Concierge & Wayfinding Hosts', 'Green Room Assistants', 'AV Runner Support', 'Greeter Teams', 'VIP Check-in Coordinators'],
    scale: 'Typical crew: 5 – 200 staff',
    note: 'Available for single-day and multi-day conferences',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Music Festivals & Concerts',
    desc: 'High-volume operational staffing for ticketing gates, crowd flow management, VIP areas, concessions, and general event logistics at large public gatherings. Our crews are experienced working in fast-moving, high-pressure outdoor and indoor festival environments.',
    roles: ['Ticket Scanners & Gate Crew', 'VIP Section Hosts', 'Wristbanding Staff', 'General Crowd Management', 'Concession Stand Operators', 'Merchandise Sellers'],
    scale: 'Typical crew: 20 – 500+ staff',
    note: 'Experienced with multi-stage festivals and arena concerts',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Trade Shows & Exhibitions',
    desc: 'Engaging, knowledgeable booth staff, lead-generation representatives, and product demonstrators to maximize your brand exposure on the show floor. We also staff show-wide services including registration, badge scanning, and informational concierge.',
    roles: ['Brand Ambassadors', 'Booth Demonstrators', 'Lead Gen Representatives', 'Booth Setup & Teardown Crew', 'Registration Staff', 'Floor Hosts'],
    scale: 'Typical crew: 2 – 50 staff per booth',
    note: 'Experienced with CES, SXSW, NAB, and major industry expos',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Brand Activations & PR Tours',
    desc: 'Energetic, on-brand promotional teams for pop-up activations, street teams, experiential marketing, and national PR tours. We recruit and deploy talent specifically selected to match your brand voice and target audience.',
    roles: ['Street Team Members', 'Sampling & Promo Agents', 'Mobile Tour Staff', 'Experiential Brand Hosts', 'Influencer Event Assistants', 'Market Research Surveyors'],
    scale: 'Typical crew: 2 – 30 staff',
    note: 'Single-city and multi-city tour options',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Sporting Events & Stadiums',
    desc: 'Stadium-ready staffing for professional and collegiate venues. From concession stands to premium suites, our staff are experienced in high-volume, fast-turnaround venue environments where speed, accuracy, and customer service all matter.',
    roles: ['Concession Stand Operators', 'Premium Suite Servers', 'Usher & Fan Services Staff', 'Parking & Traffic Coordinators', 'Merchandise Sellers', 'Scoreboard & Ops Assistants'],
    scale: 'Typical crew: 25 – 300+ staff',
    note: 'Experienced with NFL, NBA, MLS, and NCAA venue standards',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'VIP & Gala Events',
    desc: 'Polished, formally dressed professionals for black-tie dinners, award ceremonies, charity galas, and high-end networking mixers. Our VIP event staff operate at a white-glove standard and are trained in formal dining service, discretion, and guest-first hospitality.',
    roles: ['Formal Dinner Servers', 'Coat Check Attendants', 'Valet Coordinators', 'Sommelier Assistants', 'VIP Check-in Hosts', 'Silent Auction Managers'],
    scale: 'Typical crew: 5 – 100 staff',
    note: 'Black-tie attire and NDA compliance available',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Weddings & Private Receptions',
    desc: 'Discreet, professional service staff ensuring the seamless execution of private celebrations — from intimate gatherings to grand receptions. We provide everything from bartenders and servers to setup crews and day-of coordinators.',
    roles: ['Wedding Servers', 'Bartenders & Bar Staff', 'Setup & Breakdown Crew', "Passed Hors d'Oeuvres Servers", 'Day-of Coordinators', 'Venue Prep Assistants'],
    scale: 'Typical crew: 2 – 40 staff',
    note: 'Weekend and holiday availability',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Charity Events & Fundraisers',
    desc: 'Tasteful, mission-aligned staffing for non-profit galas, silent auctions, golf tournaments, and community fundraisers. Our staff understand the sensitivity and sophistication required when representing a charitable cause.',
    roles: ['Gala Dinner Servers', 'Silent Auction & Bidding Staff', 'Donor Registration Hosts', 'Valet Parking Staff', 'Paddle Raise Coordinators', 'Post-Event Teardown Crew'],
    scale: 'Typical crew: 5 – 80 staff',
    note: 'Formal or smart-casual dress codes accommodated',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600&auto=format&fit=crop',
  },
];

const stats = [
  { label: 'Event types served', value: '25+' },
  { label: 'Cities with active talent pools', value: '50+' },
  { label: 'Workers deployed annually', value: '60,000+' },
  { label: 'Client retention rate', value: '96%' },
];

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative bg-[#0d2b5e] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-25" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-blue-300 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Industries</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">Industries We Serve</h1>
          <p className="text-blue-100 text-xl max-w-3xl leading-relaxed">
            From stadium concerts to black-tie galas, we've built specialized talent networks for every event environment. The staff we send actually know the job.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-50 border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold text-[#0033a0] mb-1">{s.value}</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((ind) => (
              <div key={ind.title} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all flex flex-col bg-white">
                {/* Photo Header */}
                <div className="relative h-52 overflow-hidden bg-gray-200">
                  <img 
                    src={ind.image} 
                    alt={ind.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f41]/50 to-[#0b1f41]/30"></div>
                </div>
                
                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">{ind.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{ind.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {ind.roles.map((role) => (
                      <span key={role} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0033a0] shrink-0"></span>
                        {role}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xs font-semibold text-gray-400">{ind.scale}</span>
                    <span className="hidden sm:block text-gray-200">|</span>
                    <span className="text-xs text-gray-400 italic">{ind.note}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance strip */}
      <section className="bg-blue-50 border-t border-blue-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-[#0d2b5e] font-bold text-lg mb-6">Regardless of the industry, every StaffPro deployment includes:</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Criminal background checks on all workers',
              'W-2 employment & payroll tax coverage',
              '$5M general liability insurance',
              'Role-specific skills verification',
              'Uniform coordination & dress code adherence',
              '24/7 on-call coordinator support',
              'GPS-verified venue check-in',
              'Replacement guarantee for no-shows',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-[#0d2b5e] font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#0033a0] shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d2b5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">Ready to staff your next event?</h2>
            <p className="text-blue-100 max-w-md leading-relaxed">Tell us your event type, headcount, and dates. We'll have pre-screened candidates confirmed and ready within 24 hours — often much sooner.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/request-staff" className="inline-flex items-center justify-center gap-2 bg-white text-[#0d2b5e] font-bold px-8 py-3.5 rounded hover:bg-blue-50 transition-colors text-sm">
              Submit a Staffing Request <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-blue-300 text-white font-bold px-8 py-3.5 rounded hover:bg-white/10 transition-colors text-sm">
              Speak to a Coordinator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
