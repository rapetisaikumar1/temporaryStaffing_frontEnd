"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  fullName: z.string().min(2, { message: "Full name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Valid phone number is required." }),
  city: z.string().min(2, { message: "City is required." }),
  skills: z.string().min(2, { message: "Please list your primary skills." }),
  experience: z.string().min(10, { message: "Please briefly describe your event experience." }),
  availability: z.string().min(2, { message: "Please define your availability." }),
  resumeUrl: z.string().optional(),
});

export default function JoinTeamPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      skills: "",
      experience: "",
      availability: "",
      resumeUrl: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Application Values:", values);
    alert("Application submitted! Our recruitment team will review it shortly.");
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Join Our Team</h1>
        <p className="text-lg text-muted-foreground">Work at the most exciting events in your city. Great pay, flexible hours, and amazing experiences.</p>
      </div>

      <div className="bg-card border rounded-xl p-6 md:p-10 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City, State</FormLabel>
                    <FormControl>
                      <Input placeholder="Austin, TX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
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

            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Skills</FormLabel>
                  <FormControl>
                    <Input placeholder="Bartending, Registration, VIP Hosting..." {...field} />
                  </FormControl>
                  <FormDescription>Comma-separated list of your best event skills.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Relevant Experience</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Briefly describe your past experience working events..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>General Availability</FormLabel>
                    <FormControl>
                      <Input placeholder="Weekends, Evenings, Any time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resumeUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn URL or Portfolio</FormLabel>
                    <FormControl>
                      <Input type="url" placeholder="https://linkedin.com/in/..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-lg mt-4">Submit Application</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
