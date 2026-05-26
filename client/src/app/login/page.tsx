'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff, ArrowRight, Lock, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('Login functionality coming soon. Please contact support@staffpro.demo');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0b1f41] flex-col justify-between p-14">
        <Link href="/" className="flex flex-col items-start gap-0">
          <span className="text-3xl font-extrabold text-white tracking-tighter leading-none">StaffPro</span>
          <span className="text-[10px] font-semibold text-blue-300 uppercase tracking-widest pl-1">Event Staffing Solutions</span>
        </Link>
        <div>
          <blockquote className="text-white text-2xl font-bold leading-snug mb-6 max-w-md">
            "The fastest way to build a professional event crew — from one bartender to 300."
          </blockquote>
          <div className="flex flex-col gap-4">
            {[
              { stat: '15,000+', label: 'Events staffed' },
              { stat: '60,000+', label: 'Vetted professionals' },
              { stat: '24/7', label: 'Coordinator support' },
            ].map((s) => (
              <div key={s.stat} className="flex items-center gap-4">
                <span className="text-3xl font-extrabold text-blue-300">{s.stat}</span>
                <span className="text-blue-100 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-blue-400 text-xs">
          © {new Date().getFullYear()} StaffPro Inc. All rights reserved.
        </p>
      </div>

      {/* Right panel — login form */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <Link href="/" className="flex flex-col items-start gap-0 mb-10 lg:hidden">
            <span className="text-2xl font-extrabold text-[#0033a0] tracking-tighter leading-none">StaffPro</span>
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest pl-0.5">Event Staffing Solutions</span>
          </Link>

          <h1 className="text-3xl font-bold text-[#0b1f41] mb-2">Welcome back</h1>
          <p className="text-gray-500 text-base mb-10">Sign in to your StaffPro account to manage shifts, crew requests, and more.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 border-gray-300 focus:border-[#0033a0] text-base"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
                <a href="#" className="text-sm font-medium text-[#0033a0] hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 border-gray-300 focus:border-[#0033a0] text-base"
                />
                <button
                  type="button"
                  className="absolute right-3.5 top-3.5 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input id="remember" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#0033a0]" />
              <label htmlFor="remember" className="text-sm text-gray-600">Keep me signed in</label>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#0033a0] hover:bg-[#002277] text-white font-bold text-base rounded flex items-center justify-center gap-2"
            >
              Sign In <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col gap-3 text-center">
            <p className="text-sm text-gray-500">
              Need to hire event staff?{' '}
              <Link href="/request-staff" className="font-semibold text-[#0033a0] hover:underline">Submit a staffing request</Link>
            </p>
            <p className="text-sm text-gray-500">
              Looking for event work?{' '}
              <Link href="/join-team" className="font-semibold text-[#0033a0] hover:underline">Apply to join our team</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
