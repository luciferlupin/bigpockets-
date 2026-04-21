import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, TrendingUp, Home, Shield, Users } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "How Group Buying is Revolutionizing Real Estate in India",
    excerpt: "Discover how collective purchasing power is transforming the way Indians buy homes, with savings of up to 25%.",
    category: "Industry Trends",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "5 Things to Check Before Joining a Group Buying Deal",
    excerpt: "Essential due diligence steps to ensure your group buying experience is safe and profitable.",
    category: "Buyer Guide",
    date: "Mar 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop",
    icon: Shield,
  },
  {
    id: 3,
    title: "Understanding Broker Commission Passback: Complete Guide",
    excerpt: "How BigPockets passes 100% of broker commissions back to buyers, maximizing your savings.",
    category: "Savings Guide",
    date: "Mar 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554224154-260325c05f6b?w=800&auto=format&fit=crop",
    icon: Users,
  },
  {
    id: 4,
    title: "NRI Guide to Buying Property in India Through Group Buying",
    excerpt: "Special considerations for NRIs looking to invest in Indian real estate through collective purchasing.",
    category: "NRI Guide",
    date: "Feb 28, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    icon: Home,
  },
];

export default function ArticlesPage() {
  return (
    <main className="pt-20 min-h-screen bg-muted">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Articles & Resources</h1>
            <p className="text-white/80 max-w-2xl text-lg">Expert insights, guides, and industry trends to help you make informed real estate decisions.</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, i) => {
              const Icon = article.icon;
              return (
                <motion.article key={article.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:shadow-primary/5 transition-all">
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-medium text-primary">{article.category}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-text-muted mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{article.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-text-muted mb-4 line-clamp-3">{article.excerpt}</p>
                    <button className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
