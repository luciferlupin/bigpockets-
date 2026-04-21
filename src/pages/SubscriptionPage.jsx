import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Mail, CheckCircle, ArrowRight, Home, TrendingUp, Users } from "lucide-react";

export default function SubscriptionPage() {
  const [email, setEmail] = useState("");
  const [preferences, setPreferences] = useState({
    newProperties: true,
    priceDrops: true,
    groupDeals: true,
    newsletter: true,
  });
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handlePreferenceChange = (key) => {
    setPreferences({
      ...preferences,
      [key]: !preferences[key],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  const benefits = [
    {
      icon: Home,
      title: "New Property Alerts",
      description: "Be the first to know about new listings in your preferred areas",
    },
    {
      icon: TrendingUp,
      title: "Price Drop Notifications",
      description: "Get notified when prices drop on your shortlisted properties",
    },
    {
      icon: Users,
      title: "Group Buying Opportunities",
      description: "Exclusive access to forming buyer groups and special deals",
    },
  ];

  if (isSubscribed) {
    return (
      <main className="pt-20 min-h-screen bg-white">
        <div className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Successfully Subscribed!</h1>
              <p className="text-white/80 max-w-2xl text-lg">Welcome to the BigPockets community. You'll start receiving updates soon.</p>
            </motion.div>
          </div>
        </div>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-text mb-4">Check Your Email</h2>
            <p className="text-text-muted mb-8">We've sent a confirmation email to {email}. Please click the confirmation link to activate your subscription.</p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Subscribe Another Email
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-20 min-h-screen bg-white">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Stay Informed, Save More!</h1>
            <p className="text-white/80 max-w-2xl text-lg">Get updates on group-buying deals and exclusive savings opportunities</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3">{benefit.title}</h3>
                  <p className="text-text-muted">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-text mb-8">Subscribe for Updates</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-text mb-4">What updates would you like to receive?</h3>
                  <div className="space-y-3">
                    {[
                      { key: "newProperties", label: "New Property Listings", desc: "Latest properties in your preferred areas" },
                      { key: "priceDrops", label: "Price Drop Alerts", desc: "When prices decrease on saved properties" },
                      { key: "groupDeals", label: "Group Buying Deals", desc: "Exclusive group discounts and offers" },
                      { key: "newsletter", label: "Weekly Newsletter", desc: "Market insights and success stories" },
                    ].map((item) => (
                      <label key={item.key} className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences[item.key]}
                          onChange={() => handlePreferenceChange(item.key)}
                          className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
                        />
                        <div>
                          <span className="text-text font-medium">{item.label}</span>
                          <p className="text-sm text-text-muted">{item.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                >
                  <Bell className="w-5 h-5" />
                  Subscribe Now
                </button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-text mb-8">Why Subscribe?</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Early Bird Access",
                    description: "Get notified about new properties before they're listed publicly",
                    icon: "🚀",
                  },
                  {
                    title: "Exclusive Deals",
                    description: "Special discounts available only to subscribers",
                    icon: "💎",
                  },
                  {
                    title: "Market Insights",
                    description: "Expert analysis and trends in real estate",
                    icon: "📊",
                  },
                  {
                    title: "Success Stories",
                    description: "Learn how others are saving through group buying",
                    icon: "🏆",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-text mb-1">{item.title}</h3>
                      <p className="text-text-muted text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary-light rounded-xl">
                <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Privacy Guaranteed
                </h3>
                <p className="text-text-muted text-sm">
                  We respect your privacy. You can unsubscribe at any time, and we never share your email with third parties. 
                  Only relevant, valuable content will be sent to your inbox.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
