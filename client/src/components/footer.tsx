import Link from 'next/link';

const col1 = [
  { label: 'Event Hosts', href: '/services' },
  { label: 'Brand Ambassadors', href: '/services' },
  { label: 'Hospitality Staff', href: '/services' },
  { label: 'Production Crew', href: '/services' },
  { label: 'Trade Show Staff', href: '/services' },
  { label: 'Administrative Support', href: '/services' },
];

const col2 = [
  { label: 'About StaffPro', href: '/about' },
  { label: 'For Employers', href: '/services' },
  { label: 'For Job Seekers', href: '/join-team' },
  { label: 'Industries We Serve', href: '/industries' },
  { label: 'Contact Us', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#0a1f3d] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center h-8 w-8 rounded bg-white text-[#0a1f3d] text-xs font-black">SP</div>
              <span className="text-white text-lg font-bold tracking-tight">StaffPro</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Nationwide temporary and event staffing solutions. Rapid deployment, verified professionals, zero compliance headaches.
            </p>
            <div className="flex flex-col gap-1 text-sm text-gray-400">
              <a href="tel:+18005550199" className="hover:text-white transition-colors">1 (800) 555-0199</a>
              <a href="mailto:hello@staffpro.demo" className="hover:text-white transition-colors">hello@staffpro.demo</a>
            </div>
          </div>

          {/* Staffing Solutions */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Staffing Solutions</h4>
            <ul className="space-y-2.5">
              {col1.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {col2.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Get Started Today</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">Ready to work with StaffPro? Submit a staffing request or apply to join our talent network.</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/request-staff"
                className="inline-flex items-center justify-center bg-white text-[#0a1f3d] text-sm font-semibold px-4 py-2 rounded hover:bg-gray-100 transition-colors"
              >
                Request Staff
              </Link>
              <Link
                href="/join-team"
                className="inline-flex items-center justify-center border border-gray-500 text-gray-300 text-sm font-medium px-4 py-2 rounded hover:bg-white/10 transition-colors"
              >
                Find Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} StaffPro Staffing Solutions. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
