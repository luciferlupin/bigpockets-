import { motion } from "framer-motion";
import { Search, MapPin, Users, Tag, FileCheck } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Shortlist Project", desc: "Search, view video tours & virtual site visits to shortlist your top projects." },
  { icon: MapPin, num: "02", title: "Express Interest", desc: "Plan a site visit with our relationship manager to finalize your choice." },
  { icon: Users, num: "03", title: "Join Group", desc: "Join the active buyer group for your project & pick your unit." },
  { icon: Tag, num: "04", title: "Unlock Discount", desc: "Get exclusive group discounts and broker commission passback." },
  { icon: FileCheck, num: "05", title: "Finalize Purchase", desc: "Complete your purchase knowing you got the best possible deal." },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary text-sm font-medium rounded-full mb-4">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">How Does Group Buying Work?</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">Follow these simple 5 steps to your dream home with BigPockets</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((step, i) => {
            const I = step.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative group">
                <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <I className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-3xl font-bold text-primary/20 mb-2">{step.num}</span>
                  <h3 className="text-lg font-semibold text-text mb-2">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed flex-1">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 border-t-2 border-dashed border-primary/30" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
