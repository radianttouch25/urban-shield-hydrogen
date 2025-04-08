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
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 bg-noise mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent opacity-30"></div>
      <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-gold/10 blur-3xl"></div>
      
      <Helmet>
        <title>Terms of Service | Urban Shield Anti-Pollution Skincare by Radiant Touch</title>
        <meta name="description" content="Read the comprehensive Terms of Service for Urban Shield anti-pollution skincare products by Radiant Touch LIMITED. Understand your rights and obligations when using our products and services." />
        <meta name="keywords" content="Urban Shield terms, Radiant Touch terms of service, skincare terms and conditions, product usage terms, anti-pollution skincare legal, skincare product agreement" />
        <meta name="author" content="Radiant Touch LIMITED" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://radianttouch.pro/terms" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://radianttouch.pro/terms" />
        <meta property="og:title" content="Terms of Service | Urban Shield Anti-Pollution Skincare by Radiant Touch" />
        <meta property="og:description" content="Read the comprehensive Terms of Service for Urban Shield anti-pollution skincare products by Radiant Touch LIMITED. Understand your rights and obligations when using our products and services." />
        <meta property="og:image" content="/lovable-uploads/logo_radiant_touch.png" />
        <meta property="og:site_name" content="Radiant Touch" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://radianttouch.pro/terms" />
        <meta property="twitter:title" content="Terms of Service | Urban Shield Anti-Pollution Skincare by Radiant Touch" />
        <meta property="twitter:description" content="Read the comprehensive Terms of Service for Urban Shield anti-pollution skincare products by Radiant Touch LIMITED. Understand your rights and obligations when using our products and services." />
        <meta property="twitter:image" content="/lovable-uploads/logo_radiant_touch.png" />
        <meta name="twitter:site" content="@RadiantTouchLtd" />
        <meta name="twitter:creator" content="@RadiantTouchLtd" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Urban Shield Terms of Service",
              "description": "Comprehensive Terms of Service for Urban Shield anti-pollution skincare products by Radiant Touch LIMITED.",
              "datePublished": "2024-12-20",
              "dateModified": "2024-12-20",
              "inLanguage": "en-GB",
              "isPartOf": {
                "@type": "WebSite",
                "name": "Radiant Touch",
                "url": "https://radianttouch.pro"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Radiant Touch LIMITED",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://radianttouch.pro/lovable-uploads/logo_radiant_touch.png",
                  "width": "112",
                  "height": "112"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "United Kingdom"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "legal@radianttouch.com"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://radianttouch.pro/terms"
              },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", ".prose h2"]
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://radianttouch.pro"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Terms of Service",
                    "item": "https://radianttouch.pro/terms"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div 
            ref={contentRef} 
            className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-gold">Terms of Service</h1>
            
            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <p className="text-lg text-gray-300">
                These Terms of Service ("Terms") govern your access to and use of the website, products, and services provided by Radiant Touch LIMITED ("we," "us," or "our"). By accessing or using our services, you agree to be bound by these Terms.
              </p>
              
              <section className="bg-dark-light rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Use of Services</h2>
                <p className="text-gray-300">
                  You may use our services only as permitted by these Terms and any applicable laws. You agree not to misuse our services or help anyone else do so.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Account Registration</h3>
                <p className="text-gray-300">
                  Some of our services require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">User Content</h3>
                <p className="text-gray-300">
                  You retain ownership of any content you submit through our services. By providing content, you grant us a worldwide, royalty-free license to use, reproduce, modify, distribute, and display that content in connection with our services.
                </p>
              </section>
              
              <section className="bg-dark-light rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Products and Orders</h2>
                <p className="text-gray-300">
                  Product descriptions, pricing, and availability are subject to change without notice. We reserve the right to limit quantities, cancel orders, or refuse service to anyone.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Pricing and Payment</h3>
                <p className="text-gray-300">
                  All prices are displayed in the applicable currency and do not include taxes or shipping fees, which will be added at checkout. Payment must be made through the methods we provide.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Shipping and Delivery</h3>
                <p className="text-gray-300">
                  Delivery times are estimates only and not guaranteed. Risk of loss and title for products pass to you upon delivery to the carrier.
                </p>
              </section>
              
              <section className="bg-dark-light rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Intellectual Property</h2>
                <p className="text-gray-300">
                  Our services and their contents, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </section>
              
              <section className="bg-dark-light rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Disclaimer of Warranties</h2>
                <p className="text-gray-300">
                  OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
              </section>
              
              <section className="bg-dark-light rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Limitation of Liability</h2>
                <p className="text-gray-300">
                  IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
              </section>
              
              <section className="bg-dark-light rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Indemnification</h2>
                <p className="text-gray-300">
                  You agree to defend, indemnify, and hold us harmless from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of our services.
                </p>
              </section>
              
              <section className="bg-dark-light rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Governing Law</h2>
                <p className="text-gray-300">
                  These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
                </p>
              </section>
              
              <section className="bg-dark-light rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Changes to These Terms</h2>
                <p className="text-gray-300">
                  We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last Updated" date.
                </p>
              </section>
              
              <section className="bg-dark-light rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about these Terms, please contact us at legal@radianttouch.com.
                </p>
              </section>
              
              <p className="text-sm text-gray-400 mt-8">Last Updated: December 20, 2024</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
