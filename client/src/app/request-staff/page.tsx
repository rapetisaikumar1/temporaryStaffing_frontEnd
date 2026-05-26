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
  companyName: z.string().min(2, { message: "Company name is required." }),
  contactName: z.string().min(2, { message: "Contact name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Valid phone number required." }),
  eventType: z.string().min(2, { message: "Event type is required." }),
  eventDate: z.string().min(2, { message: "Event date is required." }),
  location: z.string().min(2, { message: "Location is required." }),
  staffCount: z.string().min(1, { message: "Staff count is required." }),
  notes: z.string().optional(),
});

export default function RequestStaffPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { companyName: "", contactName: "", email: "", phone: "", eventType: "", eventDate: "", location: "", staffCount: "", notes: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Request received! A staffing coordinator will contact you within 2 business hours.");
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#0d2b5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-blue-300 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Request Staff</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Request Event Staff</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">Tell us your event type, dates, location, and crew size. A dedicated event staffing coordinator will respond with a custom proposal within 2 hours.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-lg font-bold text-[#0d2b5e] mb-4">What happens next?</h2>
                <ul className="space-y-4">
                  {[
                    { step: '01', text: 'A dedicated event staffing coordinator reviews your request and contacts you within 2 hours — often sooner for urgent events.' },
                    { step: '02', text: 'We match your event type and role requirements against our pre-vetted talent pool, selecting workers experienced in that specific environment.' },
                    { step: '03', text: 'You receive worker profiles and confirm your crew. Everyone is briefed on your event details, dress code, and arrival time.' },
                    { step: '04', text: 'Your crew arrives on time, uniformed, and ready. Your coordinator remains on-call throughout your event for any last-minute needs.' },
                  ].map(({ step, text }) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="text-xs font-black text-[#0d2b5e] bg-blue-50 h-6 w-6 rounded flex items-center justify-center shrink-0 mt-0.5">{step}</span>
                      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-gray-200 pt-6 space-y-2">
                {['No fees until your crew is confirmed', 'W-2 employees — zero employer liability for you', 'Same-day & last-minute event staffing available', 'Serving 50+ cities across 48 states', 'Background-checked and role-verified talent', 'GPS-confirmed event day check-in'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-[#0d2b5e] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="border border-gray-200 rounded-lg p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <h2 className="text-base font-bold text-[#0d2b5e] mb-4 pb-2 border-b border-gray-200">Company Information</h2>
                      <div className="grid md:grid-cols-2 gap-5">
                        <FormField control={form.control} name="companyName" render={({ field }) => (
                          <FormItem><FormLabel className="text-sm font-medium text-gray-700">Company Name</FormLabel><FormControl><Input placeholder="Acme Corp" className="border-gray-300" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="contactName" render={({ field }) => (
                          <FormItem><FormLabel className="text-sm font-medium text-gray-700">Primary Contact</FormLabel><FormControl><Input placeholder="Jane Smith" className="border-gray-300" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel className="text-sm font-medium text-gray-700">Work Email</FormLabel><FormControl><Input type="email" placeholder="jane@acmecorp.com" className="border-gray-300" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem><FormLabel className="text-sm font-medium text-gray-700">Phone Number</FormLabel><FormControl><Input type="tel" placeholder="(555) 123-4567" className="border-gray-300" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-[#0d2b5e] mb-4 pb-2 border-b border-gray-200">Staffing Requirements</h2>
                      <div className="grid md:grid-cols-2 gap-5">
                        <FormField control={form.control} name="eventType" render={({ field }) => (
                          <FormItem><FormLabel className="text-sm font-medium text-gray-700">Type of Event / Role Needed</FormLabel><FormControl><Input placeholder="e.g. Trade Show, Brand Ambassador" className="border-gray-300" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="staffCount" render={({ field }) => (
                          <FormItem><FormLabel className="text-sm font-medium text-gray-700">Number of Staff Needed</FormLabel><FormControl><Input type="number" min="1" placeholder="10" className="border-gray-300" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="location" render={({ field }) => (
                          <FormItem><FormLabel className="text-sm font-medium text-gray-700">Event Location / Venue</FormLabel><FormControl><Input placeholder="Javits Center, New York, NY" className="border-gray-300" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="eventDate" render={({ field }) => (
                          <FormItem><FormLabel className="text-sm font-medium text-gray-700">Event Dates</FormLabel><FormControl><Input placeholder="e.g. Oct 12–15, 2026" className="border-gray-300" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                    </div>
                    <FormField control={form.control} name="notes" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Additional Details (Optional)</FormLabel>
                        <FormControl><Textarea placeholder="Uniform requirements, specific skill sets, schedule details, or any other notes..." className="resize-none h-28 border-gray-300" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-[#0d2b5e] text-white font-semibold px-6 py-3 rounded hover:bg-[#1a3f7a] transition-colors text-sm">
                      Submit Staffing Request <ArrowRight className="h-4 w-4" />
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
