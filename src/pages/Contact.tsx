
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  orderType: z.enum(["personal", "business", "gift"]),
  quantity: z.string().min(1, { message: "Please enter a quantity." }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      orderType: "personal",
      quantity: "1",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real application, you would send this data to your backend
      console.log("Form data:", data);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast.success("Pre-order submitted successfully! We'll contact you soon with payment details.");
      
      // Reset form
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      <Helmet>
        <title>Contact Urban Shield | Radiant Touch</title>
        <meta name="description" content="Contact Radiant Touch about Urban Shield, the revolutionary anti-pollution skincare product." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-white">Contact</span>
                <span className="block text-gradient-gold">Urban Shield</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Have questions about Urban Shield? Get in touch with our team. Fill out the form below to contact us.
              </p>
            </div>
            
            <div className="bg-dark-light rounded-xl p-6 md:p-10 border border-white/10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quantity</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" placeholder="Enter quantity" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="orderType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Order Type</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="personal" id="personal" />
                              <FormLabel htmlFor="personal" className="font-normal cursor-pointer">
                                Personal Use
                              </FormLabel>
                            </div>
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="business" id="business" />
                              <FormLabel htmlFor="business" className="font-normal cursor-pointer">
                                Business/Wholesale
                              </FormLabel>
                            </div>
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="gift" id="gift" />
                              <FormLabel htmlFor="gift" className="font-normal cursor-pointer">
                                Gift
                              </FormLabel>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Comments (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Let us know if you have any special requests or questions"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto button-shine bg-gradient-gold text-dark hover:shadow-lg transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Submit Pre-Order"}
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-400">
                    By submitting this form, you agree to our <a href="/terms" className="text-gold hover:underline">Terms of Service</a> and <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a>. You'll be contacted with payment details within 24 hours.
                  </p>
                </form>
              </Form>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dark-light rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-bold mb-4 text-gradient-gold">Pre-Order Benefits</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-gold">✦</div>
                    <p>42% discount off the regular retail price</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-gold">✦</div>
                    <p>Priority shipping when product launches in June 2025</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-gold">✦</div>
                    <p>Exclusive sample kit of complementary products</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-gold">✦</div>
                    <p>VIP access to future product launches</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-dark-light rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-bold mb-4 text-gradient-gold">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 text-gold">✉</div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a href="mailto:info@radianttouch.pro" className="text-white hover:text-gold">info@radianttouch.pro</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-gold">☎</div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <a href="tel:+447459394987" className="text-white hover:text-gold">+44 7459 394987</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-gold">⏱</div>
                    <div>
                      <p className="text-gray-300 text-sm">Business Hours</p>
                      <p className="text-white">Monday-Friday: 9am-5pm GMT</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a 
                    href="mailto:investors@radianttouch.pro" 
                    className="inline-block button-shine bg-gradient-gold text-dark px-6 py-2 rounded-md hover:shadow-lg transition-shadow"
                  >
                    Contact Investor Relations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
