import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

const services = [
  { title: 'Event Hosts & Guest Services', sub: 'Registration, Wayfinding, VIP Reception', roles: ['Registration Staff', 'Concierge & Information Desk', 'VIP Host / Hostess', 'Greeting & Welcome Staff'], href: '/request-staff' },
  { title: 'Brand Ambassadors & Promotions', sub: 'Trade Shows, Pop-ups, Street Teams', roles: ['Trade Show Booth Staff', 'Product Demonstrators', 'Street Team Members', 'Lead Generation Reps'], href: '/request-staff' },
  { title: 'Hospitality & Catering', sub: 'Servers, Bartenders, Catering Crew', roles: ['Banquet Servers', 'Bartenders & Mixologists', 'Food & Beverage Runners', 'Catering Setup & Breakdown'], href: '/request-staff' },
  { title: 'Production & Event Crew', sub: 'Load-in, Logistics, Stage Support', roles: ['Load-in / Load-out Crew', 'Stage Hands', 'A/V Support Assistants', 'Event Setup & Teardown'], href: '/request-staff' },
  { title: 'Administrative & Office Support', sub: 'Temporary Desk, Clerical & Data', roles: ['Temporary Receptionists', 'Data Entry Specialists', 'Event Office Administrators', 'Executive Assistants (Temp)'], href: '/request-staff' },
  { title: 'Warehouse & Light Industrial', sub: 'Fulfillment, Packing, Logistics', roles: ['Order Fulfillment Associates', 'Forklift Operators', 'Inventory Counters', 'Shipping & Receiving Clerks'], href: '/request-staff' },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#0d2b5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-blue-300 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Staffing Solutions</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Staffing Solutions</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            From a single event host to a crew of 500, StaffPro provides fully vetted, insured professionals across every staffing category.
          </p>
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-gray-600 max-w-xl text-sm leading-relaxed">
            All staff are W-2 employees — fully insured, background-checked, and available within 24–48 hours. We handle payroll, compliance, and onsite coordination.
          </p>
          <Link href="/request-staff" className="shrink-0 inline-flex items-center gap-2 bg-[#0d2b5e] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#1a3f7a] transition-colors">
            Submit a Staffing Request <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="border border-gray-200 rounded-lg p-6 hover:border-[#0d2b5e] hover:shadow-md transition-all group">
                <h3 className="font-bold text-[#0d2b5e] text-lg mb-1">{svc.title}</h3>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-4">{svc.sub}</p>
                <ul className="space-y-2 mb-5">
                  {svc.roles.map((role) => (
                    <li key={role} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0d2b5e] shrink-0"></span>
                      {role}
                    </li>
                  ))}
                </ul>
                <Link href={svc.href} className="inline-flex items-center gap-1 text-sm font-semibold text-[#0d2b5e] hover:underline underline-offset-4">
                  Request this specialty <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0d2b5e] mb-3">Don't see your staffing category?</h2>
          <p className="text-gray-500 mb-7 max-w-md mx-auto text-sm">We staff across dozens of specialties. Contact us and we'll build a custom solution for your needs.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0d2b5e] text-white font-semibold px-6 py-3 rounded hover:bg-[#1a3f7a] transition-colors text-sm">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
