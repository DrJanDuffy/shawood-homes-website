import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertLeadSchema } from "@shared/schema";
import { CheckCircle2, Loader2 } from "lucide-react";

const formSchema = insertLeadSchema.extend({
  source: z.string().default("Contact Form"),
});

type FormData = z.infer<typeof formSchema>;

// Phone number formatting function
function formatPhoneNumber(value: string): string {
  const phoneNumber = value.replace(/\D/g, '');
  if (phoneNumber.length <= 3) return phoneNumber;
  if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}

export function ContactForm() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "buying",
      message: "",
      source: "Contact Form",
    },
  });

  const createLead = useMutation({
    mutationFn: async (data: FormData) => {
      return await apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      setIsSuccess(true);
      toast({
        title: "Thank you for your interest!",
        description: "Dr. Duffy will contact you within 24 hours.",
      });
      form.reset();
      setTimeout(() => setIsSuccess(false), 3000);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error?.message || "Failed to submit form. Please try again or call (702) 500-0337.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    createLead.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Email</FormLabel>
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
              <FormLabel className="text-gray-700">Phone</FormLabel>
              <FormControl>
                <Input 
                  type="tel" 
                  placeholder="(702) 500-0337" 
                  {...field}
                  onChange={(e) => {
                    const formatted = formatPhoneNumber(e.target.value);
                    field.onChange(formatted);
                  }}
                  maxLength={14}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">I'm interested in...</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="buying">Buying in Arcadia Homes Las Vegas</SelectItem>
                  <SelectItem value="selling">Selling my Arcadia Homes Las Vegas home</SelectItem>
                  <SelectItem value="market_analysis">Market analysis</SelectItem>
                  <SelectItem value="investment">Investment opportunities</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Message (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  rows={4} 
                  placeholder="Tell us about your needs..." 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full btn-primary relative overflow-hidden" 
          disabled={createLead.isPending || isSuccess}
        >
          {createLead.isPending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Success! We'll be in touch soon
            </>
          ) : (
            "Get My Free Analysis"
          )}
        </Button>
      </form>
    </Form>
  );
}
