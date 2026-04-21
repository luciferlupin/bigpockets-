import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Clock, Tag } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "BigPockets: Revolutionising How India Buys Homes – Smarter, Together",
    excerpt: "India's first group buying real estate platform is transforming how homebuyers purchase properties, offering collective bargaining power and significant savings.",
    date: "Feb 6, 2025",
    source: "Daily Hunt",
    category: "Media Coverage",
    url: "#",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Group Buying Saves Homebuyers ₹25Cr+ in 2024",
    excerpt: "BigPockets platform helps over 150 families save an average of 15% on property purchases through collective bargaining.",
    date: "Jan 15, 2025",
    source: "Economic Times",
    category: "Industry News",
    url: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Real Estate Tech Startup BigPockets Raises Series A Funding",
    excerpt: "Noida-based proptech startup secures funding to expand group buying platform across major Indian cities.",
    date: "Jan 10, 2025",
    source: "TechCrunch India",
    category: "Funding News",
    url: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Why Group Buying is the Future of Real Estate in India",
    excerpt: "Industry experts predict collective purchasing will become mainstream as homebuyers seek better deals and transparency.",
    date: "Dec 28, 2024",
    source: "Business Standard",
    category: "Expert Analysis",
    url: "#",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "BigPockets Expands to Bangalore and Hyderabad Markets",
    excerpt: "Group buying platform now available in 5 major cities, helping homebuyers save 5-25% on property purchases.",
    date: "Dec 15, 2024",
    source: "Times of India",
    category: "Expansion News",
    url: "#",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "How Group Buying Platforms Are Changing Real Estate Dynamics",
    excerpt: "Traditional brokers face new competition as tech-enabled group buying platforms offer better deals and transparency.",
    date: "Dec 8, 2024",
    source: "Financial Express",
    category: "Market Analysis",
    url: "#",
    image: "https://images.unsplash.com/photo-1554224154-260325c05f6b?w=800&auto=format&fit=crop",
  },
];

const categories = ["All", "Media Coverage", "Industry News", "Funding News", "Expert Analysis", "Expansion News", "Market Analysis"];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <main className="pt-20 min-h-screen bg-white">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">News & Media</h1>
            <p className="text-white/80 max-w-2xl text-lg">Latest news, media coverage, and major milestones from BigPockets</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-muted text-text-muted hover:bg-primary-light hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article, i) => (
              <motion.article 
                key={article.id} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="relative">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-lg">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {article.source}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-text-muted mb-4 line-clamp-3">{article.excerpt}</p>
                  <a 
                    href={article.url}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Read Full Article <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted">No news articles found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
