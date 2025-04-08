import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-white">
      <Helmet>
        <title>404 - Page Not Found | Urban Shield Anti-Pollution Skincare</title>
        <meta name="description" content="The page you are looking for does not exist. Return to the Urban Shield homepage to explore our anti-pollution skincare products." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://radianttouch.pro" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://radianttouch.pro" />
        <meta property="og:title" content="404 - Page Not Found | Urban Shield Anti-Pollution Skincare" />
        <meta property="og:description" content="The page you are looking for does not exist. Return to the Urban Shield homepage to explore our anti-pollution skincare products." />
        <meta property="og:image" content="/lovable-uploads/logo_radiant_touch.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://radianttouch.pro" />
        <meta property="twitter:title" content="404 - Page Not Found | Urban Shield Anti-Pollution Skincare" />
        <meta property="twitter:description" content="The page you are looking for does not exist. Return to the Urban Shield homepage to explore our anti-pollution skincare products." />
        <meta property="twitter:image" content="/lovable-uploads/logo_radiant_touch.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
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
                  "name": "Page Not Found",
                  "item": "https://radianttouch.pro/404"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-gradient-gold">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Page not found</p>
        <p className="text-gray-400 mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="bg-gold hover:bg-gold/80 text-dark px-6 py-3 rounded-full font-medium transition-all duration-300">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
