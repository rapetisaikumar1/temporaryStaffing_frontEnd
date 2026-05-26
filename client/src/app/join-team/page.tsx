"use client";

import Link from 'next/link';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, { message: "Required." }),
  lastName: z.string().min(2, { message: "Required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Valid phone number required." }),
  city: z.string().min(2, { message: "Required." }),
  jobType: z.string().min(2, { message: "Required." }),
  experience: z.string().min(10, { message: "Please describe your experience." }),
  availability: z.string().min(2, { message: "Required." }),
  resumeUrl: z.string().optional(),
});

export default function JoinTeamPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", city: "", jobType: "", experience: "", availability: "", resumeUrl: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Application submitted. We'll be in touch within 2 business days.");
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#0d2b5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-blue-300 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Find Event Gigs</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Work the Events You Love</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">Join StaffPro's talent network and get access to paid shifts at concerts, galas, trade shows, sporting events, festivals, and more — on a schedule that works for you.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-lg font-bold text-[#0d2b5e] mb-4">Why work events with StaffPro?</h2>
                <ul className="space-y-3">
                  {[
                    'Work concerts, galas, trade shows & sporting events',
                    'Weekly direct-deposit pay every Friday',
                    'Choose your own shifts — total flexibility',
                    'W-2 employment with full liability coverage',
                    'Access to premium venues and high-profile events',
                    'Free role-specific training & TIPS certification support',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-[#0d2b5e] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">Event roles we hire for</p>
                <div className="flex flex-wrap gap-2">
                  {['Bartender', 'Event Server', 'Brand Ambassador', 'VIP Host', 'Security Guard', 'Stagehand', 'Registration Staff', 'Ticket Scanner', 'Coat Check', 'Concierge Host'].map((r) => (
                    <span key={r} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-medium">{r}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="border border-gray-200 rounded-lg p-8">
                <h2 className="text-xl font-bold text-[#0d2b5e] mb-6">Your Application</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-5">
                      <FormField control={form.control} name="firstName" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">First Name</FormLabel>
                          <FormControl><Input placeholder="Jane" className="border-gray-300" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="lastName" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Last Name</FormLabel>
                          <FormControl><Input placeholder="Doe" className="border-gray-300" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                          <FormControl><Input type="email" placeholder="jane@email.com" className="border-gray-300" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Phone Number</FormLabel>
                          <FormControl><Input type="tel" placeholder="(555) 123-4567" className="border-gray-300" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="city" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">City / Metro Area</FormLabel>
                          <FormControl><Input placeholder="New York, NY" className="border-gray-300" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="jobType" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Primary Role Applying For</FormLabel>
                          <FormControl><Input placeholder="e.g. Brand Ambassador, Server" className="border-gray-300" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="experience" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Relevant Experience</FormLabel>
                        <FormControl><Textarea placeholder="Briefly describe your relevant work experience, skills, and any past events or roles..." className="resize-none h-28 border-gray-300" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="availability" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">General Availability</FormLabel>
                        <FormControl><Input placeholder="e.g. Weekends + select weekdays, full-time from June" className="border-gray-300" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="resumeUrl" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">LinkedIn or Resume URL (Optional)</FormLabel>
                        <FormControl><Input type="url" placeholder="https://linkedin.com/in/your-profile" className="border-gray-300" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-[#0d2b5e] text-white font-semibold px-6 py-3 rounded hover:bg-[#1a3f7a] transition-colors text-sm">
                      Submit Application <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
