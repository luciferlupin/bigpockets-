import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import Home from "./pages/Home";
import PropertiesPage from "./pages/PropertiesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ArticlesPage from "./pages/ArticlesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import EMICalculatorPage from "./pages/EMICalculatorPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import RefundPage from "./pages/RefundPage";
import ComparePage from "./pages/ComparePage";
import NewsPage from "./pages/NewsPage";
import CorporatePage from "./pages/CorporatePage";
import ConverterPage from "./pages/ConverterPage";
import SubscriptionPage from "./pages/SubscriptionPage";

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<PropertiesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/emi-calculator" element={<EMICalculatorPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/refund" element={<RefundPage />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/corporate" element={<CorporatePage />} />
              <Route path="/converter" element={<ConverterPage />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App
