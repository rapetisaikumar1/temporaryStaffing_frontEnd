import Link from 'next/link';
import { ChevronRight, Shield, Clock, Users, BarChart3, Award, ArrowRight } from 'lucide-react';

const specialties = [
  { label: 'Event Hosts & Registration Staff', href: '/services' },
  { label: 'Brand Ambassadors & Promotions', href: '/services' },
  { label: 'Hospitality & Catering', href: '/services' },
  { label: 'Trade Show & Exhibition Staff', href: '/services' },
  { label: 'Production Crew & Logistics', href: '/services' },
  { label: 'Administrative & Office Support', href: '/services' },
  { label: 'Warehouse & Light Industrial', href: '/services' },
  { label: 'Security & Crowd Management', href: '/services' },
];

const stats = [
  { number: '50,000+', label: 'Professionals Placed' },
  { number: '10,000+', label: 'Events Staffed' },
  { number: '48', label: 'States Covered' },
  { number: '99%', label: 'Client Fill Rate' },
];

const steps = [
  { num: '01', title: 'Tell us your needs', desc: 'Submit your staffing request with event details, dates, headcount, and required skills. Takes under 5 minutes.' },
  { num: '02', title: 'We match & screen', desc: 'Our team handpicks candidates from our pre-vetted talent pool. Every professional passes background checks and skills assessments.' },
  { num: '03', title: 'Staff shows up ready', desc: 'Your team is briefed, badged, and on-site on time. We handle all HR, payroll, and compliance.' },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* ── Hero Split ── */}
      <section className="w-full grid md:grid-cols-2 min-h-[540px]">
        {/* Left – Employers */}
        <div className="bg-[#0d2b5e] text-white flex flex-col justify-center px-8 py-16 md:px-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-4">For Employers</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Hire pre-vetted staff for any event or project.
          </h1>
          <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-8 max-w-md">
            StaffPro connects you with experienced, background-checked professionals — deployed in as little as 24 hours nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/request-staff"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0d2b5e] font-semibold px-6 py-3 rounded hover:bg-blue-50 transition-colors text-sm"
            >
              Request Staff <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-blue-300 text-white font-medium px-6 py-3 rounded hover:bg-white/10 transition-colors text-sm"
            >
              View Staffing Solutions
            </Link>
          </div>
        </div>

        {/* Right – Job Seekers */}
        <div className="bg-gray-50 flex flex-col justify-center px-8 py-16 md:px-16 md:py-20 border-l border-gray-100">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0d2b5e] mb-4">For Job Seekers</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#0d2b5e] mb-5">
            Find flexible work that fits your life.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Thousands of temporary, part-time, and full-time opportunities across hospitality, events, logistics, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/join-team"
              className="inline-flex items-center justify-center gap-2 bg-[#0d2b5e] text-white font-semibold px-6 py-3 rounded hover:bg-[#1a3f7a] transition-colors text-sm"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded hover:bg-gray-100 transition-colors text-sm"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="w-full bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-bold text-[#0d2b5e]">{s.number}</div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Staffing Specialties (Randstad-style list) ── */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] mb-2">Browse by staffing specialty</h2>
            <p className="text-gray-500 text-base">We place professionals across every event type and industry sector.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-0 border-t border-gray-200">
            {specialties.map((spec) => (
              <Link
                key={spec.label}
                href={spec.href}
                className="flex items-center justify-between py-4 px-2 border-b border-gray-200 hover:bg-gray-50 group transition-colors"
              >
                <span className="text-[#0d2b5e] font-medium text-sm md:text-base">{spec.label}</span>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-[#0d2b5e] group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d2b5e] hover:underline underline-offset-4">
              View all staffing categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why StaffPro ── */}
      <section className="w-full bg-gray-50 border-y border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] mb-3">Why companies choose StaffPro</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We don't just fill positions — we deliver professionals who show up prepared, on time, and ready to represent your brand.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Rigorous Screening', desc: 'Every candidate completes background checks, reference checks, and in-person skills assessments before joining our network.' },
              { icon: Clock, title: '24-Hour Deployment', desc: 'Need staff fast? Our extensive talent pool means we can place verified professionals in under 24 hours.' },
              { icon: Users, title: 'W-2 Employees', desc: 'All staff are our direct W-2 employees — fully insured, covered, and compliant. Zero legal risk for you.' },
              { icon: Award, title: 'Dedicated Managers', desc: 'Every engagement includes a dedicated account manager as your single point of contact, start to finish.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="h-10 w-10 rounded bg-[#0d2b5e]/8 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-[#0d2b5e]" />
                </div>
                <h3 className="font-semibold text-[#0d2b5e] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] mb-3">How it works</h2>
            <p className="text-gray-500 max-w-xl">From request to deployment in three straightforward steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="text-5xl font-black text-gray-100 leading-none mb-4 select-none">{step.num}</div>
                <h3 className="text-lg font-bold text-[#0d2b5e] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries Served ── */}
      <section className="w-full bg-gray-50 border-y border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] mb-3">Industries & event types we serve</h2>
            <p className="text-gray-500">Wherever your event is, whatever role you need — we have the talent.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {['Corporate Conferences', 'Trade Shows', 'Festivals & Concerts', 'VIP & Galas', 'Brand Activations', 'Private Events'].map((ind) => (
              <Link key={ind} href="/industries"
                className="flex items-center justify-center text-center text-xs font-medium text-[#0d2b5e] bg-white border border-gray-200 rounded-lg px-3 py-4 hover:border-[#0d2b5e] hover:shadow-sm transition-all leading-snug"
              >
                {ind}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dual CTA ── */}
      <section className="w-full grid md:grid-cols-2">
        {/* Employer */}
        <div className="bg-[#0d2b5e] text-white px-8 py-14 md:px-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">Employers</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need staff for your next event?</h2>
          <p className="text-blue-100 mb-6 text-sm leading-relaxed max-w-sm">Tell us your requirements and we'll have pre-screened candidates ready within 24 hours.</p>
          <Link href="/request-staff" className="inline-flex items-center gap-2 bg-white text-[#0d2b5e] font-semibold px-5 py-2.5 rounded hover:bg-blue-50 transition-colors text-sm">
            Submit a Staffing Request <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        {/* Job Seeker */}
        <div className="bg-[#1a3f7a] text-white px-8 py-14 md:px-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">Job Seekers</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start earning?</h2>
          <p className="text-blue-100 mb-6 text-sm leading-relaxed max-w-sm">Join thousands of professionals who rely on StaffPro for consistent, flexible work opportunities.</p>
          <Link href="/join-team" className="inline-flex items-center gap-2 border border-blue-300 text-white font-semibold px-5 py-2.5 rounded hover:bg-white/10 transition-colors text-sm">
            Apply to Join Our Network <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
