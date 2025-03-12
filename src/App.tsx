
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Technology from "@/pages/Technology";
import Benefits from "@/pages/Benefits";
import PreOrder from "@/pages/PreOrder";
import Invest from "@/pages/Invest";
import Shipping from "@/pages/Shipping";
import NotFound from "@/pages/NotFound";
import "./App.css";

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
        <Route path="/preorder" element={<PreOrder />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
