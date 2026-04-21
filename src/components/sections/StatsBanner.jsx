import { motion } from "framer-motion";
import { IndianRupee, Users, Building, Handshake } from "lucide-react";
import { stats } from "../../data/properties";

const icons = [IndianRupee, Users, Building, Handshake];

export default function StatsBanner() {
  return (
    <section className="py-16 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const I = icons[i];
            return (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <I className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-text mb-1">
                  {stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
                </div>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
