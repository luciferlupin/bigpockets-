import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Bed, Maximize, TrendingDown, Users, ArrowRight, Star, ChevronDown, Search, Filter } from "lucide-react";
import { properties, cities, bhkOptions, statusOptions } from "../data/properties";

export default function PropertiesPage() {
  const [city, setCity] = useState("All Cities");
  const [bhk, setBhk] = useState("All Types");
  const [status, setStatus] = useState("All Status");
  const [searchQ, setSearchQ] = useState("");

  const filtered = properties.filter((p) => {
    const matchSearch = searchQ === "" || p.name.toLowerCase().includes(searchQ.toLowerCase()) || p.location.toLowerCase().includes(searchQ.toLowerCase()) || p.builder.toLowerCase().includes(searchQ.toLowerCase());
    return matchSearch && (city === "All Cities" || p.city === city) && (bhk === "All Types" || p.bhk === bhk) && (status === "All Status" || p.status === status);
  });

  const fmt = (n) => `Rs. ${(n / 100000).toFixed(1)}L`;

  return (
    <main className="pt-20 min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">All Properties</h1>
            <p className="text-white/80 max-w-xl">Explore verified projects with active group buying deals. Join a group and unlock exclusive discounts.</p>
          </motion.div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="sticky top-16 z-30 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input value={searchQ} onChange={(e) => setSearchQ(e.target.value)} placeholder="Search by name, location, builder..." className="w-full pl-10 pr-4 py-2.5 bg-muted rounded-xl text-sm border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all" />
            </div>
            <div className="relative">
              <select value={city} onChange={(e) => setCity(e.target.value)} className="appearance-none bg-muted border border-transparent rounded-xl px-4 py-2.5 pr-10 text-sm font-medium text-text hover:border-primary transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/10">
                {cities.map((o) => <option key={o}>{o}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
            </div>
            <div className="relative">
              <select value={bhk} onChange={(e) => setBhk(e.target.value)} className="appearance-none bg-muted border border-transparent rounded-xl px-4 py-2.5 pr-10 text-sm font-medium text-text hover:border-primary transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/10">
                {bhkOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
            </div>
            <div className="relative">
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="appearance-none bg-muted border border-transparent rounded-xl px-4 py-2.5 pr-10 text-sm font-medium text-text hover:border-primary transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/10">
                {statusOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-text-muted text-sm">{filtered.length} properties found</p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <Filter className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <p className="text-text font-medium">No properties match your filters</p>
            <p className="text-text-muted text-sm mt-1">Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">{p.discount} OFF</div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium"><Star className="w-3 h-3 text-accent fill-accent" />{p.rating}</div>
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-text"><Users className="w-3 h-3 inline mr-1" />{p.buyersJoined}/{p.minBuyers} joined</span>
                    <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden"><div className="h-full bg-primary rounded-full" style={{ width: `${(p.buyersJoined / p.minBuyers) * 100}%` }} /></div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-text group-hover:text-primary transition-colors">{p.name}</h3>
                    <span className="text-xs text-primary bg-primary-light px-2 py-0.5 rounded-full font-medium">{p.status}</span>
                  </div>
                  <p className="text-xs text-primary font-medium mb-2">{p.builder}</p>
                  <p className="text-sm text-text-muted flex items-center gap-1 mb-3"><MapPin className="w-3.5 h-3.5" />{p.location}</p>
                  <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                    <span className="flex items-center gap-1"><Bed className="w-4 h-4" />{p.bhk}</span>
                    <span className="flex items-center gap-1"><Maximize className="w-4 h-4" />{p.area}</span>
                  </div>
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-xs text-text-muted line-through">{fmt(p.originalPrice)}</p>
                      <p className="text-xl font-bold text-primary">{fmt(p.price)}</p>
                    </div>
                    <div className="flex items-center gap-1 text-accent text-sm font-medium"><TrendingDown className="w-4 h-4" />Save {fmt(p.originalPrice - p.price)}</div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.amenities.slice(0, 3).map((a) => <span key={a} className="text-xs bg-muted text-text-muted px-2 py-1 rounded-lg">{a}</span>)}
                  </div>
                  <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-xl transition-all active:scale-95">
                    Join Group <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
