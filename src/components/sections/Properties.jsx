import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Bed, Maximize, TrendingDown, Users, ArrowRight, Star, ChevronDown } from "lucide-react";
import { properties, cities, bhkOptions, statusOptions } from "../../data/properties";
import OptimizedImage from "./OptimizedImage";

export default function FeaturedProperties() {
  const [city, setCity] = useState("All Cities");
  const [bhk, setBhk] = useState("All Types");
  const [status, setStatus] = useState("All Status");

  const filtered = properties.filter((p) => {
    return (city === "All Cities" || p.city === city) &&
      (bhk === "All Types" || p.bhk === bhk) &&
      (status === "All Status" || p.status === status);
  });

  const fmt = (n) => `Rs. ${(n / 100000).toFixed(1)}L`;

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary-light text-primary text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">Hot Deals</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-3 sm:mb-4">Featured Properties</h2>
          <p className="text-text-muted max-w-lg sm:max-w-xl mx-auto">Handpicked projects with active group buying deals</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
          <div className="relative">
            <select value={city} onChange={(e) => setCity(e.target.value)} className="appearance-none bg-white border border-border rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 pr-10 text-xs sm:text-sm font-medium text-text hover:border-primary transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20">
              {cities.map((o) => <option key={o}>{o}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
          </div>
          <div className="relative">
            <select value={bhk} onChange={(e) => setBhk(e.target.value)} className="appearance-none bg-white border border-border rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 pr-10 text-xs sm:text-sm font-medium text-text hover:border-primary transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20">
              {bhkOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
          </div>
          <div className="relative">
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="appearance-none bg-white border border-border rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 pr-10 text-xs sm:text-sm font-medium text-text hover:border-primary transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20">
              {statusOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <OptimizedImage src={p.image} alt={p.name} className="relative overflow-hidden aspect-[4/3]" priority={i < 3 ? 'high' : 'normal'} />
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-primary text-white text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">{p.discount} OFF</div>
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-sm flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-xs font-medium">
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent fill-accent" />{p.rating}
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-text"><Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 inline mr-0.5 sm:mr-1" />{p.buyersJoined}/{p.minBuyers} joined</span>
                  <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${(p.buyersJoined / p.minBuyers) * 100}%` }} />
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex items-start justify-between mb-1.5 sm:mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-text group-hover:text-primary transition-colors">{p.name}</h3>
                </div>
                <p className="text-xs sm:text-sm text-text-muted flex items-center gap-1 mb-2 sm:mb-3"><MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />{p.location}</p>
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-text-muted mb-3 sm:mb-4">
                  <span className="flex items-center gap-1"><Bed className="w-3 h-3 sm:w-3.5 sm:h-3.5" />{p.bhk}</span>
                  <span className="flex items-center gap-1"><Maximize className="w-3 h-3 sm:w-3.5 sm:h-3.5" />{p.area}</span>
                </div>
                <div className="flex items-end justify-between mb-3 sm:mb-4">
                  <div>
                    <p className="text-xs sm:text-sm text-text-muted line-through">{fmt(p.originalPrice)}</p>
                    <p className="text-lg sm:text-xl font-bold text-primary">{fmt(p.price)}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-accent text-sm font-medium">
                    <TrendingDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />Save {fmt(p.originalPrice - p.price)}
                  </div>
                </div>
                <Link to="/properties" className="flex items-center justify-center gap-2 w-full py-2 sm:py-2.5 bg-primary/5 hover:bg-primary text-primary hover:text-white text-xs sm:text-sm font-semibold rounded-xl transition-all active:scale-95">
                  Join Group <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
