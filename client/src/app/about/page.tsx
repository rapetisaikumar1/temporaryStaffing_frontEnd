import Link from 'next/link';
import { ArrowRight, Users, Globe, Award, BarChart3, CheckCircle2, Star, Calendar, ShieldCheck } from 'lucide-react';

const values = [
  { icon: Users, title: 'People First', desc: 'Our event workers are W-2 employees — not gig contractors. Fully insured, fairly paid, and supported before, during, and after every single shift.' },
  { icon: Globe, title: 'Nationwide Reach', desc: 'With deep talent pools in 50+ cities and coordinators in every major metro, we can staff your event wherever it takes place — whether it\'s in New York or Nashville.' },
  { icon: ShieldCheck, title: 'Rigorous Vetting', desc: 'Every worker passes a criminal background check, skills assessment, and in-person or virtual interview before they ever set foot at one of our events.' },
  { icon: BarChart3, title: 'Performance-Driven', desc: 'We track attendee feedback, event-day performance, and coordinator ratings to continuously improve the quality of every crew we send.' },
];

const milestones = [
  { year: '2012', event: 'StaffPro founded by event operations veterans in New York City' },
  { year: '2015', event: 'Expanded to 10 major markets; crossed 1,000 events staffed' },
  { year: '2018', event: 'Launched proprietary platform for real-time shift management and GPS check-in' },
  { year: '2021', event: 'Reached 48 states and 50,000+ W-2 placements; earned top staffing agency award' },
  { year: '2024', event: 'Over 15,000 events staffed; 60,000+ active workers in our national talent network' },
];

const clients = [
  'Fortune 500 Corporate Events', 'Music Festival Promoters', 'National Trade Associations',
  'Sports Franchise Venues', 'Luxury Hotel Banquet Teams', 'Non-Profit Foundations',
  'Event Production Companies', 'Brand Marketing Agencies',
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative bg-[#0d2b5e] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-blue-300 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>About</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">About StaffPro</h1>
          <p className="text-blue-100 text-xl max-w-3xl leading-relaxed">
            We're the staffing partner built by event people, for event people. Founded in 2012, we've grown into America's most trusted temporary event staffing agency — handling everything from 2-person brand activations to 500-person festival crews.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-50 border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '2012', label: 'Year Founded' },
            { value: '15,000+', label: 'Events Staffed' },
            { value: '60,000+', label: 'Active Talent Network' },
            { value: '96%', label: 'Client Retention Rate' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold text-[#0033a0] mb-1">{s.value}</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Story */}
      <section className="py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#0033a0] mb-3">Our Story</div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] mb-6">Built by event professionals, for event professionals</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-base">
                <p>
                  StaffPro was founded in 2012 by a team of event operations veterans who'd worked — and struggled — at festivals, conferences, galas, and product launches for more than a decade. We kept running into the same problem: the agency sent people who showed up late, didn't know the job, or didn't show up at all. And when it went wrong, no one answered the phone.
                </p>
                <p>
                  We built StaffPro to be the agency we always wished existed. One that answers at 5am the morning of your load-in. One that sends workers who are trained, uniformed, and ready — not warm bodies. One that handles all payroll, compliance, and HR overhead so you never have to think about it.
                </p>
                <p>
                  Today we're a nationally recognized staffing partner for corporate event teams, festival promoters, sports venues, luxury hotels, trade associations, brand marketing agencies, and non-profit foundations. Wherever your event happens, we have vetted talent ready to deploy — within 24 hours, often much sooner.
                </p>
                <p>
                  We're not a gig app. We don't 1099 our workers and hand you liability. Every StaffPro professional is a fully insured W-2 employee — and that distinction matters more than anything else we do.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/request-staff" className="inline-flex items-center gap-2 bg-[#0d2b5e] text-white text-sm font-bold px-6 py-3 rounded hover:bg-[#1a3f7a] transition-colors">
                  Partner With Us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-medium px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                  View Our Services
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Our milestone timeline</h3>
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 rounded-full bg-[#0033a0] text-white flex items-center justify-center text-xs font-bold shrink-0">{m.year.slice(2)}</div>
                      {i < milestones.length - 1 && <div className="w-0.5 bg-blue-200 flex-1 min-h-[32px] my-1"></div>}
                    </div>
                    <div className="pb-6 pt-1.5">
                      <div className="text-xs font-bold text-[#0033a0] mb-1">{m.year}</div>
                      <p className="text-sm text-gray-600">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0033a0] mb-3">Our Values</div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e]">What every client can count on</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-lg p-7 text-center hover:border-[#0033a0] hover:shadow-sm transition-all">
                <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-5">
                  <Icon className="h-7 w-7 text-[#0d2b5e]" />
                </div>
                <h3 className="font-bold text-[#0d2b5e] text-base mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            <div className="lg:w-1/2">
              <div className="text-xs font-bold uppercase tracking-widest text-[#0033a0] mb-3">Clients & Partners</div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] mb-5">Who we serve</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                StaffPro partners with organizations across the full event industry spectrum — from scrappy independent producers planning their first major festival to Fortune 500 event teams managing a 10-city roadshow. Our model scales to any size.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {clients.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#0033a0] shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-3 gap-0.5 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=500&auto=format&fit=crop" alt="Festival event" className="h-48 object-cover w-full col-span-2" />
              <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=300&auto=format&fit=crop" alt="Corporate event" className="h-48 object-cover w-full" />
              <img src="https://images.unsplash.com/photo-1470338745628-171cf53de3a8?q=80&w=300&auto=format&fit=crop" alt="Bartender" className="h-48 object-cover w-full" />
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=500&auto=format&fit=crop" alt="Gala event" className="h-48 object-cover w-full col-span-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0033a0] mb-3">Our Difference</div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] mb-4">Why StaffPro is different</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">Not all staffing agencies are created equal. Here's what sets us apart in the event staffing market.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, num: '01', title: 'Event-Specific Expertise', body: 'We don\'t staff office jobs and factories on the side. Events are all we do — which means our vetting criteria, our training programs, and our talent pools are built specifically around event roles and environments.' },
              { icon: Calendar, num: '02', title: '24/7 Operations Center', body: 'Emergencies don\'t respect business hours. Our operations team is available around the clock for last-minute bookings, no-show replacements, and real-time event-day communication. We pick up the phone.' },
              { icon: Award, num: '03', title: 'W-2 Only Workforce', body: 'Every worker we deploy is a StaffPro W-2 employee. That means we cover payroll taxes, worker\'s comp, unemployment insurance, and general liability — removing your exposure and making us the safer, more compliant choice.' },
            ].map(({ icon: Icon, num, title, body }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md hover:border-[#0033a0] transition-all group">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-14 w-14 rounded-xl bg-[#0033a0] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-4xl font-extrabold text-gray-100 select-none">{num}</span>
                </div>
                <h3 className="font-bold text-[#0d2b5e] text-xl mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] mb-3">Ready to work together?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto text-base">Whether you need to staff an event or you're looking to join the best event staffing team in the country, we'd love to connect.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-staff" className="inline-flex items-center gap-2 bg-[#0d2b5e] text-white font-bold px-8 py-3.5 rounded hover:bg-[#1a3f7a] transition-colors text-sm">
              Request Event Staff <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/join-team" className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-3.5 rounded hover:bg-gray-50 transition-colors text-sm">
              Join Our Talent Network
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
