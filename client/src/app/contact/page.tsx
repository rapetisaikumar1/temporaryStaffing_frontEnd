import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative bg-[#0d2b5e] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-blue-300 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Have an upcoming event? Reach our staffing coordinators directly. For urgent or same-day staffing needs, call us — our operations team is available around the clock.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, label: 'Phone', value: '1 (800) 555-0199', sub: 'Mon–Fri, 8am–8pm EST', href: 'tel:+18005550199' },
              { icon: Mail, label: 'Email', value: 'hello@staffpro.demo', sub: 'We respond within 4 hours', href: 'mailto:hello@staffpro.demo' },
              { icon: MapPin, label: 'Headquarters', value: '100 Event Center Pkwy', sub: 'New York, NY 10001', href: '#' },
              { icon: Clock, label: '24/7 Emergency Line', value: '1 (800) 555-0911', sub: 'Same-day & last-minute staffing', href: 'tel:+18005550911' },
            ].map(({ icon: Icon, label, value, sub, href }) => (
              <a key={label} href={href} className="flex flex-col gap-3 p-6 border border-gray-200 rounded-lg hover:border-[#0d2b5e] hover:shadow-sm transition-all group">
                <div className="h-9 w-9 rounded bg-[#0d2b5e]/8 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-[#0d2b5e]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">{label}</p>
                  <p className="text-sm font-semibold text-[#0d2b5e] group-hover:underline underline-offset-2">{value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0d2b5e] mb-8">What can we help you with?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-7">
              <h3 className="font-bold text-[#0d2b5e] text-lg mb-2">I need event staff</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">Submit your event details — type, date, headcount, and roles needed. A dedicated coordinator will respond within 2 hours with a custom crew proposal and transparent pricing.</p>
              <Link href="/request-staff" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d2b5e] hover:underline underline-offset-4">
                Submit a staffing request <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-7">
              <h3 className="font-bold text-[#0d2b5e] text-lg mb-2">I want to work events</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">Join our event staffing talent network and get access to gigs at concerts, galas, trade shows, and sporting events. Work flexibly with weekly direct-deposit pay.</p>
              <Link href="/join-team" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d2b5e] hover:underline underline-offset-4">
                Browse open shifts <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-7">
              <h3 className="font-bold text-[#0d2b5e] text-lg mb-2">General inquiry</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">Questions about pricing, contracts, W-2 compliance, minimum crew sizes, or how our vetting process works? Our team is happy to help.</p>
              <a href="mailto:hello@staffpro.demo" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d2b5e] hover:underline underline-offset-4">
                Send us an email <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom office info */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            StaffPro is headquartered in New York City with active staffing coordinators in Los Angeles, Chicago, Dallas, Miami, Atlanta, Las Vegas, Nashville, and Seattle — deploying event crews across all 48 continental states.
          </p>
        </div>
      </section>
    </div>
  );
}
