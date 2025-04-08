import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 bg-noise mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent opacity-30"></div>
      <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-gold/10 blur-3xl"></div>
      
      <Helmet>
        <title>Privacy Policy | Urban Shield Anti-Pollution Skincare by Radiant Touch</title>
        <meta name="description" content="Read the comprehensive Privacy Policy for Urban Shield anti-pollution skincare products by Radiant Touch LIMITED. Learn how we collect, use, and protect your personal information while using our website and services." />
        <meta name="keywords" content="Urban Shield privacy, Radiant Touch privacy policy, skincare data protection, personal information policy, GDPR compliance, cookie policy, anti-pollution skincare privacy" />
        <meta name="author" content="Radiant Touch LIMITED" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://radianttouch.pro/privacy" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://radianttouch.pro/privacy" />
        <meta property="og:title" content="Privacy Policy | Urban Shield Anti-Pollution Skincare by Radiant Touch" />
        <meta property="og:description" content="Read the comprehensive Privacy Policy for Urban Shield anti-pollution skincare products by Radiant Touch LIMITED. Learn how we collect, use, and protect your personal information while using our website and services." />
        <meta property="og:image" content="/lovable-uploads/logo_radiant_touch.png" />
        <meta property="og:site_name" content="Radiant Touch" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://radianttouch.pro/privacy" />
        <meta property="twitter:title" content="Privacy Policy | Urban Shield Anti-Pollution Skincare by Radiant Touch" />
        <meta property="twitter:description" content="Read the comprehensive Privacy Policy for Urban Shield anti-pollution skincare products by Radiant Touch LIMITED. Learn how we collect, use, and protect your personal information while using our website and services." />
        <meta property="twitter:image" content="/lovable-uploads/logo_radiant_touch.png" />
        <meta name="twitter:site" content="@RadiantTouchLtd" />
        <meta name="twitter:creator" content="@RadiantTouchLtd" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Urban Shield Privacy Policy",
              "description": "Comprehensive Privacy Policy for Urban Shield anti-pollution skincare products by Radiant Touch LIMITED.",
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
                  "email": "privacy@radianttouch.com"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://radianttouch.pro/privacy"
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
                    "name": "Privacy Policy",
                    "item": "https://radianttouch.pro/privacy"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-gradient-gold text-center">Privacy Policy</h1>
            
            <div className="prose prose-invert prose-lg max-w-none space-y-6 sm:space-y-8">
              <section className="bg-dark-light rounded-xl p-4 sm:p-6 md:p-8 border border-white/10 backdrop-blur-sm">
                <div className="max-w-3xl mx-auto">
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    This Privacy Policy describes how <span className="text-gold font-semibold">Radiant Touch LIMITED</span> ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website, use our services, or interact with our products.
                  </p>
                </div>
              </section>
              
              <section className="bg-dark-light rounded-xl p-4 sm:p-6 md:p-8 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gradient-gold">Information We Collect</h2>
                <p className="text-gray-300 mb-6">
                  We collect information that you provide directly to us, information we collect automatically when you use our services, and information from third-party sources.
                </p>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">Information You Provide</h3>
                <p className="text-gray-300 mb-4">
                  Contact information (name, email address, phone number), billing and shipping information, account credentials, survey responses and feedback, communications with us.
                </p>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">Information Collected Automatically</h3>
                <p className="text-gray-300">
                  Device information (IP address, browser type, operating system), usage data (pages visited, time spent on site), location information, cookies and similar tracking technologies.
                </p>
              </section>
              
              <section className="bg-dark-light rounded-xl p-4 sm:p-6 md:p-8 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gradient-gold">Cookie Policy</h2>
                <p className="text-gray-300 mb-6">
                  Our website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. This Cookie Policy explains how we use these technologies and the choices you have.
                </p>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">What Are Cookies?</h3>
                <p className="text-gray-300 mb-6">
                  Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">Types of Cookies We Use</h3>
                <p className="text-gray-300 mb-4">
                  Essential Cookies: Required for the website to function properly. These cannot be disabled. • 
                  Performance Cookies: Help us understand how visitors interact with our website. • 
                  Functionality Cookies: Allow the website to remember your choices. • 
                  Targeting/Advertising Cookies: Used to deliver relevant advertisements.
                </p>
              </section>
              
              <section className="bg-dark-light rounded-xl p-4 sm:p-6 md:p-8 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gradient-gold">How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">We use your information to:</p>
                <p className="text-gray-300">
                  Provide, maintain, and improve our services • Process transactions and fulfill orders • Communicate with you about products, services, and events • Personalize your experience • Analyze and understand how our services are used • Protect against fraud and unauthorized activity • Comply with legal obligations
                </p>
              </section>

              <section className="bg-dark-light rounded-xl p-4 sm:p-6 md:p-8 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gradient-gold">Sharing Your Information</h2>
                <p className="text-gray-300 mb-4">We may share your information with:</p>
                <p className="text-gray-300">
                  Service providers and business partners • Affiliated companies • Legal authorities when required by law • In connection with a business transaction (merger, acquisition, sale)
                </p>
              </section>

              <section className="bg-dark-light rounded-xl p-4 sm:p-6 md:p-8 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gradient-gold">Your Choices</h2>
                <p className="text-gray-300 mb-4">You have certain rights regarding your personal information:</p>
                <p className="text-gray-300">
                  Access, correct, or delete your personal information • Opt-out of marketing communications • Disable cookies through your browser settings • Request data portability (where applicable)
                </p>
              </section>

              <section className="bg-dark-light rounded-xl p-4 sm:p-6 md:p-8 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gradient-gold">Security</h2>
                <p className="text-gray-300">
                  We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                </p>
              </section>

              <section className="bg-dark-light rounded-xl p-4 sm:p-6 md:p-8 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gradient-gold">International Transfers</h2>
                <p className="text-gray-300">
                  Your information may be transferred to and processed in countries other than your country of residence, where data protection laws may differ.
                </p>
              </section>

              <section className="bg-dark-light rounded-xl p-4 sm:p-6 md:p-8 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gradient-gold">Children's Privacy</h2>
                <p className="text-gray-300">
                  Our services are not directed to children under 16, and we do not knowingly collect personal information from children under 16.
                </p>
              </section>

              <section className="bg-dark-light rounded-xl p-4 sm:p-6 md:p-8 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gradient-gold">Changes to This Privacy Policy</h2>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section className="bg-dark-light rounded-xl p-4 sm:p-6 md:p-8 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gradient-gold">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at privacy@radianttouch.com.
                </p>
              </section>
              
              <p className="text-sm text-gray-400 mt-6 sm:mt-8 text-center">Last Updated: December 20, 2024</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
