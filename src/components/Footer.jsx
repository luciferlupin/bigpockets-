import { Link } from "react-router-dom";
import { Wallet, MapPin, Mail, Phone, ArrowUpRight, Heart } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "Home", path: "/" },
    { label: "Properties", path: "/properties" },
    { label: "Compare", path: "/compare" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
  "Resources": [
    { label: "Articles", path: "/articles" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "EMI Calculator", path: "/emi-calculator" },
    { label: "Converter", path: "/converter" },
    { label: "News", path: "/news" },
    { label: "FAQs", path: "/#faq" },
  ],
  "Services": [
    { label: "Corporate Enquiry", path: "/corporate" },
    { label: "Subscription", path: "/subscription" },
  ],
  "Legal": [
    { label: "Terms of Use", path: "/terms" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Refund Policy", path: "/refund" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-text text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-lg flex items-center justify-center">
                <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                Big<span className="text-accent">Pockets</span>
              </span>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-xs">
              India's first group buying real estate platform. Save 5-25% on your dream home by buying together with other serious buyers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm">Supernova Astralis, Sector 94, Noida, 201301</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm">hello@bigpockets.in</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm">+91 70425 80018</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-sm sm:text-base font-semibold mb-2 sm:mb-4">{title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; 2025 BigPockets. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1">
            <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500 fill-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
