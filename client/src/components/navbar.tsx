'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center justify-center h-8 w-8 rounded bg-[#0d2b5e] text-white text-xs font-black tracking-tight">SP</div>
            <span className="text-lg font-bold text-[#0d2b5e] tracking-tight">StaffPro</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/about" className="hover:text-[#0d2b5e] transition-colors whitespace-nowrap">About</Link>
            <Link href="/services" className="hover:text-[#0d2b5e] transition-colors whitespace-nowrap">For Employers</Link>
            <Link href="/join-team" className="hover:text-[#0d2b5e] transition-colors whitespace-nowrap">For Job Seekers</Link>
            <Link href="/industries" className="hover:text-[#0d2b5e] transition-colors whitespace-nowrap">Industries</Link>
            <Link href="/contact" className="hover:text-[#0d2b5e] transition-colors whitespace-nowrap">Contact</Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/join-team"
              className="text-sm font-medium text-[#0d2b5e] hover:underline underline-offset-4 transition-all whitespace-nowrap"
            >
              Find Jobs
            </Link>
            <Link
              href="/request-staff"
              className="text-sm font-semibold bg-[#0d2b5e] text-white px-5 py-2 rounded hover:bg-[#1a3f7a] transition-colors whitespace-nowrap"
            >
              Request Staff
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3">
          <Link href="/about" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/services" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>For Employers</Link>
          <Link href="/join-team" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>For Job Seekers</Link>
          <Link href="/industries" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Industries</Link>
          <Link href="/contact" className="block text-sm font-medium text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Contact</Link>
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <Link href="/join-team" className="text-sm font-medium text-[#0d2b5e]" onClick={() => setMobileOpen(false)}>Find Jobs →</Link>
            <Link href="/request-staff" className="text-sm font-semibold bg-[#0d2b5e] text-white px-4 py-2 rounded text-center" onClick={() => setMobileOpen(false)}>Request Staff</Link>
          </div>
        </div>
      )}
    </header>
  );
}
