import Link from 'next/link';
import { ArrowRight, Users, Globe, Award, BarChart3 } from 'lucide-react';

const values = [
  { icon: Users, title: 'People First', desc: 'Our staff are W-2 employees — fully insured, fairly compensated, and supported before, during, and after every placement.' },
  { icon: Globe, title: 'National Reach', desc: 'With active talent networks across 48 states, we can staff your event wherever it takes place — no matter the scale.' },
  { icon: Award, title: 'Quality Assurance', desc: 'Every candidate undergoes a rigorous vetting process including interviews, skills assessments, and background verification.' },
  { icon: BarChart3, title: 'Data-Driven Matching', desc: 'We track performance ratings, client feedback, and event outcomes to continuously improve every placement we make.' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#0d2b5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-blue-300 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>About</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About StaffPro</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            We started with a simple mission: make hiring temporary staff faster, easier, and more reliable than any other service in the country.
          </p>
        </div>
      </section>

      {/* Mission / Story */}
      <section className="py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] mb-5">Our story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  StaffPro was founded by event operations veterans who saw the same problem repeat itself at every show, conference, and gala: the staff showed up late, under-prepared, or not at all — and the agency was nowhere to be found.
                </p>
                <p>
                  We built StaffPro to be the staffing company we always wished existed. One that answers the phone at 6am the morning of your event. One that sends people who actually show up ready to work. One that handles all the HR and compliance so you never have to think about it.
                </p>
                <p>
                  Today, we're a nationally recognized staffing partner serving corporate clients, trade organizations, event producers, and hospitality groups across 48 states.
                </p>
              </div>
              <Link href="/request-staff" className="mt-8 inline-flex items-center gap-2 bg-[#0d2b5e] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#1a3f7a] transition-colors">
                Work with us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { num: '2012', label: 'Year Founded' },
                { num: '50,000+', label: 'Placements made' },
                { num: '98%', label: 'Client retention rate' },
                { num: '48', label: 'States with active talent' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-5 p-5 border border-gray-200 rounded-lg">
                  <div className="text-3xl font-bold text-[#0d2b5e] w-32 shrink-0">{s.num}</div>
                  <div className="text-gray-600 text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] mb-10">What we stand for</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-lg p-6">
                <Icon className="h-6 w-6 text-[#0d2b5e] mb-4" />
                <h3 className="font-semibold text-[#0d2b5e] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] mb-3">Ready to work together?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Whether you need to hire or you're looking for work, StaffPro is ready to help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/request-staff" className="inline-flex items-center gap-2 bg-[#0d2b5e] text-white font-semibold px-6 py-3 rounded hover:bg-[#1a3f7a] transition-colors text-sm">
              Request Staff <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/join-team" className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded hover:bg-gray-50 transition-colors text-sm">
              Apply for Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
