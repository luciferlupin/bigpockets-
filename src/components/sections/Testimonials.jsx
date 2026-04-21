import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../../data/properties";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-white text-primary text-sm font-medium rounded-full mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">What Our Customers Say</h2>
          <p className="text-text-muted max-w-xl mx-auto">Hear from families who saved big with group purchasing</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:shadow-primary/5 transition-all">
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-text text-sm leading-relaxed mb-4">{t.text}</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-4 h-4 ${j < t.rating ? "text-accent fill-accent" : "text-gray-300"}`} />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-text">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role} - {t.location}</p>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 bg-primary-light text-primary text-xs font-semibold rounded-full">Saved Rs. {t.savings}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
