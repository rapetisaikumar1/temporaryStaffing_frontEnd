import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, Hash, Share2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0b1f41] text-gray-300 pt-16 pb-8 border-t border-[#16305a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <span className="text-3xl font-extrabold text-white tracking-tighter leading-none mb-6 block">StaffPro.</span>
            <p className="text-gray-400 mb-6 max-w-sm text-base">
              The global leader in HR services and connecting people with opportunities across all major industries.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400 shrink-0" />
                <span>123 Corporate Blvd, Suite 500, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400 shrink-0" />
                <span>+1 (800) 555-0199</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                <span>contact@staffpro-example.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Job Seekers</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/join-team" className="hover:text-white transition-colors">Search Jobs</Link></li>
              <li><Link href="/join-team" className="hover:text-white transition-colors">Submit Resume</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Career Advice</Link></li>
              <li><Link href="/join-team" className="hover:text-white transition-colors">Create Account</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Employers</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/request-staff" className="hover:text-white transition-colors">Request Talent</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Specialties</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Leadership</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Locations</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Press & Media</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1a3563] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} StaffPro Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Globe className="h-5 w-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Hash className="h-5 w-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Share2 className="h-5 w-5" /></a>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
