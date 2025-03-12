
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-gold">Privacy Policy</h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p>
                This Privacy Policy describes how Radiant Touch LIMITED ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website, use our services, or interact with our products.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, information we collect automatically when you use our services, and information from third-party sources.
              </p>
              
              <h3>Information You Provide</h3>
              <ul>
                <li>Contact information (name, email address, phone number)</li>
                <li>Billing and shipping information</li>
                <li>Account credentials</li>
                <li>Survey responses and feedback</li>
                <li>Communications with us</li>
              </ul>
              
              <h3>Information Collected Automatically</h3>
              <ul>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent on site)</li>
                <li>Location information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and fulfill orders</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Personalize your experience</li>
                <li>Analyze and understand how our services are used</li>
                <li>Protect against fraud and unauthorized activity</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2>Sharing Your Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Service providers and business partners</li>
                <li>Affiliated companies</li>
                <li>Legal authorities when required by law</li>
                <li>In connection with a business transaction (merger, acquisition, sale)</li>
              </ul>
              
              <h2>Your Choices</h2>
              <p>
                You have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>Access, correct, or delete your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Disable cookies through your browser settings</li>
                <li>Request data portability (where applicable)</li>
              </ul>
              
              <h2>Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
              </p>
              
              <h2>International Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence, where data protection laws may differ.
              </p>
              
              <h2>Children's Privacy</h2>
              <p>
                Our services are not directed to children under 16, and we do not knowingly collect personal information from children under 16.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@radianttouch.com.
              </p>
              
              <p className="text-sm text-gray-400">Last Updated: June 15, 2023</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
