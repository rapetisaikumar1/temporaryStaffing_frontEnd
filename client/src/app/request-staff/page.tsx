"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  companyName: z.string().min(2, { message: "Company name is required." }),
  contactName: z.string().min(2, { message: "Contact name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Valid phone number is required." }),
  eventType: z.string().min(2, { message: "Event type is required." }),
  eventDate: z.string().min(2, { message: "Event date is required." }),
  location: z.string().min(2, { message: "Location is required." }),
  staffCount: z.string().min(1, { message: "Staff count is required." }),
  notes: z.string().optional(),
});

export default function RequestStaffPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      location: "",
      staffCount: "",
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Submit logic will go here
    alert("Request submitted successfully!");
  }

  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Request Staff</h1>
        <p className="text-lg text-muted-foreground">Fill out the form below to request staffing for your next event or business need. A representative will contact you within 24 hours.</p>
      </div>

      <div className="bg-card border rounded-2xl p-6 md:p-10 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">Company Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Corp" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Contact Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="jane@acmecorp.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">Event Requirements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of Event / Role</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Brand Ambassador, Registration" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="staffCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Staff Needed</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" placeholder="5" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Location / Venue</FormLabel>
                      <FormControl>
                        <Input placeholder="Javits Center, NYC" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Dates</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Oct 12-15" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Details (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us more about the specific requirements, uniform needs, or schedule..." 
                        className="resize-none h-32"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Submit Request
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
