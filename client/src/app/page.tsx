import Link from 'next/link';
import { Search, MapPin, ChevronRight, Briefcase, Users, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const specialties = [
  'Administrative & Customer Service',
  'Finance & Accounting',
  'Technology',
  'Marketing & Creative',
  'Legal',
  'Human Resources',
  'Manufacturing & Logistics',
  'Healthcare'
];

export default function Home() {
  return (
    <div className="flex flex-col w-full font-sans">
      {/* Generic Staffing Hero with Search Card */}
      <section className="relative w-full py-16 md:py-28 lg:py-40 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
            alt="Professionals in office" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="max-w-4xl bg-white p-8 md:p-12 rounded shadow-2xl mx-auto md:mx-0 text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0033a0] mb-4 tracking-tight">Let's find your next great opportunity.</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">Search thousands of open positions or connect with a recruiter to advance your career.</p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-3.5 h-6 w-6 text-gray-400" />
                <Input type="text" placeholder="Job title, keywords, or company" className="pl-12 h-14 text-lg rounded-sm border-gray-300" />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-3.5 h-6 w-6 text-gray-400" />
                <Input type="text" placeholder="City, state, or zip code" className="pl-12 h-14 text-lg rounded-sm border-gray-300" />
              </div>
              <Button size="lg" className="h-14 px-10 bg-[#0033a0] hover:bg-[#002277] text-white text-lg font-bold rounded-sm w-full md:w-auto">
                Search Jobs
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-base font-semibold border-t border-gray-200 pt-6">
              <span className="text-gray-600">Are you an employer looking to hire?</span>
              <Link href="/request-staff" className="text-[#0033a0] hover:underline flex items-center">
                Request talent today <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar / Stats - Standard Corporate Practice */}
      <section className="bg-gray-100 border-b border-gray-200 py-10">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 text-center">
          <div>
            <div className="text-4xl font-extrabold text-[#0033a0]">10,000+</div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Placements this year</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-gray-300"></div>
          <div>
            <div className="text-4xl font-extrabold text-[#0033a0]">48</div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">States Covered</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-gray-300"></div>
          <div>
            <div className="text-4xl font-extrabold text-[#0033a0]">2.5m+</div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Candidates in network</div>
          </div>
        </div>
      </section>

      {/* Specialties Section - Standard Clean Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries we serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our specialized recruiters connect you with the right talent or opportunity across key sectors.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {specialties.map((spec) => (
               <Link key={spec} href="/industries" className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-sm hover:border-[#0033a0] hover:shadow-lg transition-all group cursor-pointer">
                 <span className="font-bold text-gray-800 text-lg group-hover:text-[#0033a0] leading-tight">{spec}</span>
                 <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-[#0033a0] shrink-0" />
               </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/industries" className="inline-flex items-center text-[#0033a0] font-bold hover:underline text-lg">
              View all specialties <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dual Path - The most generic staffing pattern */}
      <section className="w-full text-center">
        <div className="grid md:grid-cols-2">
          {/* Employers */}
          <div className="bg-[#0b1f41] text-white px-8 py-24 md:px-20 md:py-32 flex flex-col items-center justify-center">
            <Briefcase className="h-16 w-16 text-blue-300 mb-8" />
            <h2 className="text-4xl font-bold mb-6">I am looking to hire</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-md mx-auto">Find highly skilled professionals for temporary, project-based, or permanent roles.</p>
            <Link href="/request-staff" className="bg-white text-[#0b1f41] font-bold text-lg px-10 py-4 rounded-sm hover:bg-gray-100 transition-colors inline-block w-full sm:w-auto">
              Request Talent
            </Link>
          </div>
          {/* Job Seekers */}
          <div className="bg-[#f0f4f8] text-[#0b1f41] px-8 py-24 md:px-20 md:py-32 flex flex-col items-center justify-center">
            <Users className="h-16 w-16 text-[#0033a0] mb-8" />
            <h2 className="text-4xl font-bold mb-6">I am looking for a job</h2>
            <p className="text-gray-600 text-xl mb-10 max-w-md mx-auto">Browse open jobs, submit your resume, and get matched with top employers.</p>
            <Link href="/join-team" className="bg-[#0033a0] text-white font-bold text-lg px-10 py-4 rounded-sm hover:bg-[#002277] transition-colors inline-block w-full sm:w-auto">
              Search Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Standard layout */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dedicated to your success</h2>
            <p className="text-xl text-gray-600">Why thousands of businesses and professionals rely on StaffPro.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 bg-blue-50 rounded-full flex items-center justify-center mb-8">
                <Search className="h-10 w-10 text-[#0033a0]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Extensive Network</h3>
              <p className="text-gray-600 text-lg">Access to a pre-vetted database of millions of active job seekers across all major industries.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 bg-blue-50 rounded-full flex items-center justify-center mb-8">
                <CheckCircle2 className="h-10 w-10 text-[#0033a0]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Verified Quality</h3>
              <p className="text-gray-600 text-lg">Every candidate goes through rigorous background checks, skills testing, and interviews.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 bg-blue-50 rounded-full flex items-center justify-center mb-8">
                <FileText className="h-10 w-10 text-[#0033a0]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Compliance</h3>
              <p className="text-gray-600 text-lg">We handle payroll, taxes, insurance, and HR compliance so you can focus on your business.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
