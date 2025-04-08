
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from 'sonner';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './App.css';
import './paypal-fix.css'; // Fix for PayPal button text input visibility

// Pages
import Index from '@/pages/Index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import Technology from '@/pages/Technology';
import Benefits from '@/pages/Benefits';
import Order from '@/pages/Order';
import Invest from '@/pages/Invest';
import Shipping from '@/pages/Shipping';
import BlobDemo from '@/pages/BlobDemo';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/order" element={<Order />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/blob-demo" element={<BlobDemo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      <SpeedInsights />
    </Router>
  );
}

export default App;
