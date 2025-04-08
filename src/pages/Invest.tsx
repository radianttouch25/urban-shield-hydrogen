
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, LineChart, TrendingUp, BarChart3, DollarSign } from "lucide-react";

const Invest = () => {
  // Initialize PayPal button for investors
  useEffect(() => {
    // Check if PayPal SDK is loaded
    if (window.paypal) {
      try {
        window.paypal.HostedButtons({
          hostedButtonId: "2RSCFR53NNZ56"
        })
        .render("#paypal-container-2RSCFR53NNZ56");
      } catch (error) {
        console.error("PayPal button initialization error:", error);
      }
    }
  }, []);
  return (
    <div className="min-h-screen bg-dark text-white">
      <Helmet>
        <title>Investment Opportunities | Urban Shield by Radiant Touch</title>
        <meta name="description" content="Explore investment opportunities with Radiant Touch, the company behind Urban Shield revolutionary anti-pollution skincare technology. Join us in revolutionizing the global skincare market." />
        <meta name="keywords" content="Urban Shield investment, Radiant Touch investors, skincare technology investment, anti-pollution skincare opportunity, skincare market growth" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://radianttouch.pro/invest" />
        <meta property="og:title" content="Investment Opportunities | Urban Shield by Radiant Touch" />
        <meta property="og:description" content="Explore investment opportunities with Radiant Touch, the company behind Urban Shield revolutionary anti-pollution skincare technology. Join us in revolutionizing the global skincare market." />
        <meta property="og:image" content="/lovable-uploads/logo_radiant_touch.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://radianttouch.pro/invest" />
        <meta property="twitter:title" content="Investment Opportunities | Urban Shield by Radiant Touch" />
        <meta property="twitter:description" content="Explore investment opportunities with Radiant Touch, the company behind Urban Shield revolutionary anti-pollution skincare technology. Join us in revolutionizing the global skincare market." />
        <meta property="twitter:image" content="/lovable-uploads/logo_radiant_touch.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "InvestmentOrProject",
              "name": "Urban Shield Investment Opportunity",
              "description": "Investment opportunity in revolutionary anti-pollution skincare technology by Radiant Touch LIMITED.",
              "image": "https://radianttouch.pro/lovable-uploads/logo_radiant_touch.png",
              "sponsor": {
                "@type": "Organization",
                "name": "Radiant Touch LIMITED",
                "url": "https://radianttouch.pro"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://radianttouch.pro/invest"
              }
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <span className="text-gold text-sm">Investor Relations</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">Investment</span>
                <span className="block text-gradient-gold">Opportunities</span>
              </h1>

              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Join us in revolutionizing the $240B global skincare market with breakthrough anti-pollution technology that addresses growing urban health concerns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-dark-light rounded-xl p-6 border border-white/10 flex flex-col h-full">
                <div className="mb-4 p-3 rounded-full bg-gold/10 w-fit">
                  <TrendingUp className="h-6 w-6 text-gold" />
                </div>
                <h2 className="text-xl font-bold mb-3">Market Growth</h2>
                <p className="text-gray-300 mb-6">
                  The anti-pollution skincare market is projected to grow at a CAGR of 6.8% from 2023 to 2030, reaching $19.4 billion by 2030.
                </p>
                <div className="mt-auto">
                  <div className="h-1 w-full bg-gray-700 rounded mb-1">
                    <div className="h-1 bg-gradient-gold rounded" style={{ width: '68%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Current Market</span>
                    <span>2030 Projection</span>
                  </div>
                </div>
              </div>

              <div className="bg-dark-light rounded-xl p-6 border border-white/10 flex flex-col h-full">
                <div className="mb-4 p-3 rounded-full bg-silver/10 w-fit">
                  <BarChart3 className="h-6 w-6 text-silver" />
                </div>
                <h2 className="text-xl font-bold mb-3">Consumer Demand</h2>
                <p className="text-gray-300 mb-6">
                  87% of consumers in urban areas are concerned about pollution effects on skin, with 72% willing to pay premium prices for effective protection.
                </p>
                <div className="mt-auto">
                  <div className="grid grid-cols-5 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-12 bg-dark-darker rounded-sm flex items-end">
                        <div
                          className="w-full bg-gradient-to-t from-gold to-gold-light rounded-sm"
                          style={{ height: `${[45, 60, 72, 81, 87][i]}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>2019</span>
                    <span>2023</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-light/50 rounded-xl p-8 border border-white/10 mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gradient-gold">Investment Highlights</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Proprietary Technology</h3>
                    <p className="text-gray-300 text-sm">
                      Patented Molecular Shield Technology with 3 pending patents for our formula and production process.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Scalable Business Model</h3>
                    <p className="text-gray-300 text-sm">
                      Direct-to-consumer focus with B2B partnerships in development for wider market penetration.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Expert Leadership</h3>
                    <p className="text-gray-300 text-sm">
                      Team with 50+ years combined experience in cosmetic chemistry, product development, and luxury brand marketing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Strong Orders</h3>
                    <p className="text-gray-300 text-sm">
                      $1.2M in orders secured during soft launch phase, demonstrating strong market validation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-dark-light to-dark-darker rounded-xl p-8 border border-white/10 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Join Our Journey?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We're currently raising a $5M seed round to scale production, expand our product line, and accelerate our go-to-market strategy.
              </p>

              <div className="flex flex-col gap-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold mb-2">Invest Now</h3>
                  <p className="text-gray-300 text-sm mb-4">Secure your investment opportunity with our PayPal payment option</p>
                  <p className="text-gold text-sm font-medium mb-4">Minimum investment: £5,000</p>
                  <div id="paypal-container-2RSCFR53NNZ56" className="w-full max-w-md mx-auto"></div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="mailto:investors@radianttouch.com"
                    className="button-shine inline-flex items-center justify-center px-8 py-3 rounded-md bg-gradient-gold text-dark font-medium transition-all hover:shadow-lg hover:shadow-gold/20"
                  >
                    Contact Investor Relations
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>

                  <Button variant="outline" className="border-white/20 hover:bg-white/5">
                    Download Investor Deck
                  </Button>
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

export default Invest;
