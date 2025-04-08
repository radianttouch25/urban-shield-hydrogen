import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useStatsigClient } from "@statsig/react-bindings";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import OrderFeatureList from "@/components/cta/OrderFeatureList";
import { StatsigEventLogger } from "@/components/StatsigEventLogger";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  orderType: z.enum(["personal", "business", "gift"]),
  quantity: z.string().min(1, { message: "Please enter a quantity." }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Order = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize PayPal button
  useEffect(() => {
    // Check if PayPal SDK is loaded
    if (window.paypal) {
      try {
        window.paypal.HostedButtons({
          hostedButtonId: "PWLD3ZJR768C6"
        })
        .render("#paypal-container-PWLD3ZJR768C6");
      } catch (error) {
        console.error("PayPal button initialization error:", error);
      }
    }
  }, []);

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

  const { client } = useStatsigClient();

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      console.log("Form data:", data);
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Log order event to Statsig
      if (client) {
        client.logEvent("order_submitted", "urban_shield_product", {
          orderType: data.orderType,
          quantity: data.quantity,
          timestamp: new Date().toISOString()
        });
        console.log("Logged order event to Statsig");
      }

      toast.success("Order submitted successfully! We'll contact you soon with payment details.");
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
        <title>Order Urban Shield | Anti-Pollution Skincare by Radiant Touch</title>
        <meta name="description" content="Order Urban Shield, the revolutionary anti-pollution skincare product by Radiant Touch. Secure your product today and experience advanced skin protection." />
        <meta name="keywords" content="buy Urban Shield, order anti-pollution skincare, purchase skin protection, Urban Shield product, Radiant Touch skincare" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://radianttouch.pro/order" />
        <meta property="og:title" content="Order Urban Shield | Anti-Pollution Skincare by Radiant Touch" />
        <meta property="og:description" content="Order Urban Shield, the revolutionary anti-pollution skincare product by Radiant Touch. Secure your product today and experience advanced skin protection." />
        <meta property="og:image" content="/assets/urban-shield-bottle.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://radianttouch.pro/order" />
        <meta property="twitter:title" content="Order Urban Shield | Anti-Pollution Skincare by Radiant Touch" />
        <meta property="twitter:description" content="Order Urban Shield, the revolutionary anti-pollution skincare product by Radiant Touch. Secure your product today and experience advanced skin protection." />
        <meta property="twitter:image" content="/assets/urban-shield-bottle.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Urban Shield Anti-Pollution Skincare",
              "image": "https://radianttouch.pro/assets/urban-shield-bottle.png",
              "description": "Revolutionary molecular shield technology that creates an invisible barrier against pollution, UV rays, and environmental stressors.",
              "brand": {
                "@type": "Brand",
                "name": "Radiant Touch LIMITED"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://radianttouch.pro/order",
                "priceCurrency": "GBP",
                "price": "89.00",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-white">Order</span>
                <span className="block text-gradient-gold">Urban Shield</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Experience revolutionary anti-pollution protection for your skin. Fill out the form below to secure your order.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
              <div className="md:col-span-3">
                <div className="bg-dark-light rounded-xl p-6 md:p-8 border border-white/10 h-full">
                  <h2 className="text-xl font-bold mb-6 text-gradient-gold">Order Details</h2>

                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-dark-darker flex items-center justify-center">
                      <img
                        src="/assets/04488e94-b7fc-46c4-9760-2f2ba39b836d.png"
                        alt="Urban Shield Product"
                        className="w-16 h-auto"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Urban Shield Anti-Pollution Serum</h3>
                      <p className="text-gray-300 text-sm mb-1">50ml / 1.7 fl oz</p>
                      <div className="flex items-center gap-2">
                        <span className="text-gold font-bold">£34.99</span>
                        <span className="text-gray-400 line-through text-sm">£59.99</span>
                        <span className="bg-gold/20 text-gold text-xs px-2 py-0.5 rounded">Save 42%</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-bold mb-3">Order Benefits</h3>
                  <OrderFeatureList />

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Estimated Shipping:</span>
                      <span>Early June 2025</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Payment:</span>
                      <span>Processed after form submission</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="bg-dark-light rounded-xl p-6 md:p-8 border border-white/10 h-full">
                  <h2 className="text-xl font-bold mb-6 text-gradient-gold">Order Summary</h2>

                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300">Product Price</span>
                    <span>£59.99</span>
                  </div>

                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300">Discount</span>
                    <span className="text-gold">-£25.00</span>
                  </div>

                  <div className="flex justify-between mb-3 pb-3 border-b border-white/10">
                    <span className="text-gray-300">Shipping</span>
                    <span>Free</span>
                  </div>

                  <div className="flex justify-between font-bold text-lg mt-3">
                    <span>Total</span>
                    <span>£34.99</span>
                  </div>

                  <div className="flex flex-col gap-4 mt-8">
                    <div id="paypal-container-PWLD3ZJR768C6" className="w-full"></div>
                    <a
                      href="/contact"
                      className="button-shine w-full inline-flex items-center justify-center px-8 py-3 rounded-md bg-gradient-gold text-dark font-medium transition-all hover:shadow-lg hover:shadow-gold/20"
                    >
                      Contact Us
                    </a>
                  </div>

                  <p className="text-xs text-center text-gray-400 mt-4">
                    By ordering, you agree to our <a href="/terms" className="text-gold hover:underline">Terms</a> and <a href="/shipping" className="text-gold hover:underline">Shipping Policy</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-light rounded-xl p-6 md:p-8 border border-white/10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <h2 className="text-xl font-bold mb-6 text-gradient-gold">Your Information</h2>

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
                      {isSubmitting ? "Processing..." : "Submit Order"}
                    </Button>
                  </div>

                  <p className="text-sm text-gray-400">
                    By submitting this form, you agree to our <a href="/terms" className="text-gold hover:underline">Terms of Service</a> and <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a>. You'll be contacted with payment details within 24 hours.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Statsig Event Logger Example - Hidden in production */}
      <div className="fixed bottom-4 right-4 z-50">
        <StatsigEventLogger
          eventName="page_view"
          eventValue="order_page"
          eventMetadata={{
            referrer: document.referrer,
            timestamp: new Date().toISOString(),
            page: "order"
          }}
          buttonText="Log Order Page View"
        />
      </div>
    </div>
  );
};

export default Order;
