import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function CRMTestForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "Buying a home",
    message: "",
    source: "CRM Test Form"
  });

  const { toast } = useToast();

  const createLead = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("/api/leads", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: (data: any) => {
      toast({
        title: "Success!",
        description: `Lead created successfully. CRM Synced: ${data.crmSynced ? 'Yes' : 'No'}`,
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interest: "Buying a home",
        message: "",
        source: "CRM Test Form"
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create lead. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createLead.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Test Follow Up Boss Integration</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <Input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        
        <Textarea
          name="message"
          placeholder="Message or Questions"
          value={formData.message}
          onChange={handleChange}
          rows={3}
        />
        
        <Button
          type="submit"
          disabled={createLead.isPending}
          className="w-full"
        >
          {createLead.isPending ? "Creating Lead..." : "Test CRM Integration"}
        </Button>
      </form>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>This form will:</p>
        <ul className="list-disc ml-4 mt-2">
          <li>Create a lead in your local database</li>
          <li>Send the lead to Follow Up Boss CRM</li>
          <li>Assign to Dr. Jan Duffy automatically</li>
          <li>Add Shawood Homes tags and source tracking</li>
        </ul>
      </div>
    </div>
  );
}