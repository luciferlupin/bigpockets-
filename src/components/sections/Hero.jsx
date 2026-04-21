import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Percent, Shield, TrendingDown, ChevronDown } from "lucide-react";

const benefits = [
  { icon: Users, text: "Buy as a Group", desc: "Serious buyers team up" },
  { icon: Percent, text: "5-25% Extra Discount", desc: "Group buying power" },
  { icon: Shield, text: "Broker Commission Passback", desc: "100% passed to you" },
  { icon: TrendingDown, text: "Below Market Prices", desc: "Save 10-15% extra" },
];

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px,white 1px,transparent 0)", backgroundSize: "40px 40px" }} />
      <motion.div animate={{ y: [0,-20,0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl will-change-transform" />
      <motion.div animate={{ y: [0,20,0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl will-change-transform" />

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/20">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                India's First Group Buying Platform
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
                Looking to buy your <span className="text-accent">Dream Home?</span>
              </h1>
              <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-xs sm:max-w-lg mx-auto lg:mx-0">
                Pay Less Together. Get Group Buying Discounts + 100% Broker Commission Passback
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10">
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">25 Cr+</div>
                  <p className="text-white/60 text-xs sm:text-sm">Total Savings</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">850+</div>
                  <p className="text-white/60 text-sm">Happy Families</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">15%</div>
                  <p className="text-white/60 text-sm">Avg. Extra Savings</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to="/properties" className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-accent hover:bg-accent-dark text-white text-sm sm:text-base font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-accent/30 active:scale-95 will-change-transform">
                  Explore Properties <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold rounded-full backdrop-blur-sm border border-white/20 transition-all active:scale-95 will-change-transform">
                  How It Works
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 border border-white/10 rounded-3xl" />
              <div className="absolute -inset-8 border border-white/5 rounded-3xl" />
              <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 space-y-3 sm:space-y-4 md:space-y-5">
                {benefits.map((b, i) => {
                  const I = b.icon;
                  return (
                    <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.15, duration: 0.5, ease: "easeOut" }} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors will-change-transform">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0"><I className="w-5 h-5 sm:w-6 sm:h-6 text-accent" /></div>
                      <div><h3 className="text-white font-semibold text-sm sm:text-base">{b.text}</h3><p className="text-white/60 text-xs sm:text-sm">{b.desc}</p></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/50" />
        </motion.div>
      </div>
    </section>
  );
}
