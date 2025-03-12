
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Terms = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 bg-noise mix-blend-overlay"></div>
      
      <Helmet>
        <title>Terms of Service | Urban Shield</title>
        <meta name="description" content="Terms of Service for Radiant Touch LIMITED and Urban Shield products." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div 
            ref={contentRef} 
            className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-gold">Terms of Service</h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p>
                These Terms of Service ("Terms") govern your access to and use of the website, products, and services provided by Radiant Touch LIMITED ("we," "us," or "our"). By accessing or using our services, you agree to be bound by these Terms.
              </p>
              
              <h2>Use of Services</h2>
              <p>
                You may use our services only as permitted by these Terms and any applicable laws. You agree not to misuse our services or help anyone else do so.
              </p>
              
              <h3>Account Registration</h3>
              <p>
                Some of our services require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              
              <h3>User Content</h3>
              <p>
                You retain ownership of any content you submit through our services. By providing content, you grant us a worldwide, royalty-free license to use, reproduce, modify, distribute, and display that content in connection with our services.
              </p>
              
              <h2>Products and Orders</h2>
              <p>
                Product descriptions, pricing, and availability are subject to change without notice. We reserve the right to limit quantities, cancel orders, or refuse service to anyone.
              </p>
              
              <h3>Pricing and Payment</h3>
              <p>
                All prices are displayed in the applicable currency and do not include taxes or shipping fees, which will be added at checkout. Payment must be made through the methods we provide.
              </p>
              
              <h3>Shipping and Delivery</h3>
              <p>
                Delivery times are estimates only and not guaranteed. Risk of loss and title for products pass to you upon delivery to the carrier.
              </p>
              
              <h2>Intellectual Property</h2>
              <p>
                Our services and their contents, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h2>Disclaimer of Warranties</h2>
              <p>
                OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              
              <h2>Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              
              <h2>Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold us harmless from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of our services.
              </p>
              
              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
              </p>
              
              <h2>Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last Updated" date.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at legal@radianttouch.com.
              </p>
              
              <p className="text-sm text-gray-400">Last Updated: December 20, 2024</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
