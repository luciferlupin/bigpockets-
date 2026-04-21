import { motion } from "framer-motion";
import { Users, TrendingDown, Shield, Award, Target, HeartHandshake } from "lucide-react";

const values = [
  { icon: Users, title: "Community First", desc: "We believe in the power of collective bargaining. When buyers unite, everyone wins." },
  { icon: TrendingDown, title: "Maximum Savings", desc: "Our sole mission is to get you the lowest possible price, including full broker commission passback." },
  { icon: Shield, title: "100% Transparency", desc: "No hidden fees, no surprises. Every deal, every discount, every rupee is accounted for." },
  { icon: Award, title: "Verified Projects", desc: "We only list RERA-registered, legally verified properties from reputed developers." },
  { icon: Target, title: "Buyer Advocacy", desc: "We negotiate on your behalf as a group, ensuring institutional-level pricing for individuals." },
  { icon: HeartHandshake, title: "End-to-End Support", desc: "From shortlisting to possession, our relationship managers guide you at every step." },
];

export default function AboutPage() {
  return (
    <main className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About BigPockets</h1>
            <p className="text-white/80 max-w-2xl text-lg">India's first group buying real estate platform, built to democratize institutional-level pricing for everyday homebuyers.</p>
          </motion.div>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-light text-primary text-sm font-medium rounded-full mb-4">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Why We Built BigPockets</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8 text-text-muted leading-relaxed">
            <p>Buying a home is one of the biggest financial decisions of your life. Yet, individual buyers often pay significantly more than institutional investors purchasing in bulk. We saw this gap and decided to bridge it.</p>
            <p>BigPockets was founded with a simple but powerful idea: what if home buyers could team up with their future neighbors and negotiate better deals just like big investors do?</p>
            <p>Today, we have helped over 850 families save more than Rs. 25 Crores on their dream homes. By bringing together serious buyers for the same project, we unlock prices usually reserved for bulk purchasers. And we pass back 100% of the broker commission as extra savings.</p>
            <p>We are not just a platform. We are a movement to make real estate fair, transparent, and affordable for every Indian family.</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-white text-primary text-sm font-medium rounded-full mb-4">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">What Drives Us</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const I = v.icon;
              return (
                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-primary/5 transition-all">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                    <I className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">{v.title}</h3>
                  <p className="text-text-muted text-sm">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
