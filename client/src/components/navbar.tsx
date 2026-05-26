'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start gap-0 shrink-0">
            <span className="text-3xl font-extrabold text-[#0033a0] tracking-tighter leading-none">StaffPro</span>
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest pl-1">Workforce Solutions</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-gray-600">
            <Link href="/join-team" className="hover:text-[#0033a0] transition-colors">Job Seekers</Link>
            <Link href="/services" className="hover:text-[#0033a0] transition-colors">Employers</Link>
            <Link href="/industries" className="hover:text-[#0033a0] transition-colors">Specialties</Link>
            <Link href="/about" className="hover:text-[#0033a0] transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-[#0033a0] transition-colors">Contact</Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              href="/join-team"
              className="text-[15px] font-semibold text-[#0033a0] hover:text-[#0d2b5e] flex items-center gap-1.5 transition-colors"
            >
              <User className="h-4 w-4" /> Log In
            </Link>
            <div className="w-px h-5 bg-gray-300 mx-2"></div>
            <Link
              href="/request-staff"
              className="text-[15px] font-bold bg-[#0033a0] text-white px-5 py-2.5 rounded hover:bg-[#002277] transition-colors whitespace-nowrap"
            >
              Hire Talent
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col p-4 space-y-4 text-base font-semibold text-gray-700">
            <Link href="/join-team" onClick={() => setMobileOpen(false)} className="hover:text-[#0033a0]">Job Seekers</Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="hover:text-[#0033a0]">Employers</Link>
            <Link href="/industries" onClick={() => setMobileOpen(false)} className="hover:text-[#0033a0]">Specialties</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-[#0033a0]">About Us</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="hover:text-[#0033a0]">Contact</Link>
            
            <hr className="border-gray-100 my-2" />
            
            <Link href="/join-team" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-[#0033a0]">
              <User className="h-5 w-5" /> Log In
            </Link>
            <Link href="/request-staff" onClick={() => setMobileOpen(false)} className="bg-[#0033a0] text-white text-center rounded px-4 py-3">
              Hire Talent
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
