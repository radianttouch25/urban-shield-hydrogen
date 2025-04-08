
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Helmet>
        <title>Shipping & Order Policy | Urban Shield Anti-Pollution Skincare</title>
        <meta name="description" content="Discover Urban Shield's shipping policies, international delivery options, and order processing timeframes. Get your anti-pollution skincare products delivered worldwide with our reliable shipping service." />
        <meta name="keywords" content="Urban Shield shipping, skincare delivery, international shipping, order policy, delivery timeframes, anti-pollution skincare shipping, UK shipping, Europe shipping" />
        <meta name="author" content="Radiant Touch LIMITED" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://radianttouch.pro/shipping" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://radianttouch.pro/shipping" />
        <meta property="og:title" content="Shipping & Order Policy | Urban Shield Anti-Pollution Skincare" />
        <meta property="og:description" content="Discover Urban Shield's shipping policies, international delivery options, and order processing timeframes. Get your anti-pollution skincare products delivered worldwide with our reliable shipping service." />
        <meta property="og:image" content="/lovable-uploads/urban-shield-bottle.png" />
        <meta property="og:site_name" content="Radiant Touch" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://radianttouch.pro/shipping" />
        <meta property="twitter:title" content="Shipping & Order Policy | Urban Shield Anti-Pollution Skincare" />
        <meta property="twitter:description" content="Discover Urban Shield's shipping policies, international delivery options, and order processing timeframes. Get your anti-pollution skincare products delivered worldwide with our reliable shipping service." />
        <meta property="twitter:image" content="/lovable-uploads/urban-shield-bottle.png" />
        <meta name="twitter:site" content="@RadiantTouchLtd" />
        <meta name="twitter:creator" content="@RadiantTouchLtd" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Urban Shield Shipping & Order Policy",
              "description": "Information about shipping policies, delivery timeframes, and international shipping options for Urban Shield anti-pollution skincare products.",
              "datePublished": "2024-12-20",
              "dateModified": "2025-04-08",
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
                  "email": "info@radianttouch.pro",
                  "telephone": "+447459394987"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://radianttouch.pro/shipping"
              },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2"]
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
                    "name": "Shipping & Order Policy",
                    "item": "https://radianttouch.pro/shipping"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-white">Order</span>
                <span className="block text-gradient-gold">Policy</span>
              </h1>
              <p className="text-gray-300 text-lg">
                Information about orders, delivery timeframes, and international shipping.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Processing Timeframes</h2>
                <div className="bg-dark-light rounded-xl p-6 border border-white/10">
                  <p className="mb-4">
                    All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
                  </p>
                  <p>
                    For orders: Your order will be processed as a priority, with estimated shipping in Early June 2025. You will receive an email notification before your order ships.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Shipping Methods & Delivery Times</h2>
                <div className="bg-dark-light rounded-xl p-6 border border-white/10">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold mb-2">UK Shipping</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        <li>Standard Shipping (Free on orders over £50): 3-5 business days</li>
                        <li>Expedited Shipping (£8.95): 2-3 business days</li>
                        <li>Priority Shipping (£14.95): 1-2 business days</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold mb-2">International Shipping</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        <li>Europe: 5-7 business days (£12.95)</li>
                        <li>North America: 7-10 business days (£18.95)</li>
                        <li>Asia & Australia: 10-14 business days (£22.95)</li>
                        <li>Rest of World: 14-21 business days (£27.95)</li>
                      </ul>
                      <p className="mt-3 text-sm">
                        Please note that international customers may be subject to customs fees and import duties upon delivery. These fees are not included in the shipping cost and are the responsibility of the customer.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Tracking Information</h2>
                <div className="bg-dark-light rounded-xl p-6 border border-white/10">
                  <p className="mb-4">
                    You will receive a shipping confirmation email with a tracking number once your order has shipped. You can use this tracking number to follow your package's journey via our website or the carrier's website.
                  </p>
                  <p>
                    If you haven't received tracking information within 3 business days after your order confirmation, please contact our customer service team at info@radianttouch.pro.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Shipping Restrictions</h2>
                <div className="bg-dark-light rounded-xl p-6 border border-white/10">
                  <p className="mb-4">
                    Due to shipping regulations for cosmetic products, we currently do not ship to the following countries:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-4">
                    <li>North Korea</li>
                    <li>Cuba</li>
                    <li>Iran</li>
                    <li>Syria</li>
                    <li>Sudan</li>
                  </ul>
                  <p>
                    Additionally, certain products may have specific shipping restrictions based on local regulations. If your order contains any such products, our customer service team will contact you.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Returns & Exchanges</h2>
                <div className="bg-dark-light rounded-xl p-6 border border-white/10">
                  <p className="mb-4">
                    For information on returns and exchanges, please see our <Link to="/terms" className="text-gold hover:underline">Return Policy</Link>.
                  </p>
                  <p>
                    If you receive a damaged item, please contact our customer service team within 48 hours of delivery at info@radianttouch.pro. Include your order number and photos of the damaged items and packaging.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gradient-gold">Contact Us</h2>
                <div className="bg-dark-light rounded-xl p-6 border border-white/10">
                  <p className="mb-4">
                    If you have any questions about our order policy, please contact us:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Email: info@radianttouch.pro</li>
                    <li>Phone: +447459394987</li>
                    <li>Hours: Monday-Friday, 9am-5pm GMT</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/order"
                className="button-shine inline-flex items-center justify-center px-8 py-3 rounded-md bg-gradient-gold text-dark font-medium transition-all hover:shadow-lg hover:shadow-gold/20 mx-auto"
              >
                Order Now
              </Link>
              <p className="text-gray-400 mt-4">
                Secure your Urban Shield product today with our hassle-free shipping
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
