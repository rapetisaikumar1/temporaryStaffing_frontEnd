import Link from 'next/link';
import { Button } from './ui/button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary tracking-tight">StaffPro</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/about" className="transition-colors hover:text-primary">About</Link>
          <Link href="/services" className="transition-colors hover:text-primary">Services</Link>
          <Link href="/industries" className="transition-colors hover:text-primary">Industries</Link>
          <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/join-team">
            <Button variant="outline" className="hidden md:inline-flex">Join Our Team</Button>
          </Link>
          <Link href="/request-staff">
            <Button>Request Staff</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
