import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, IndianRupee, Users, TrendingDown } from "lucide-react";

export default function SavingsCalculator() {
  const [cost, setCost] = useState(85);
  const [buyers, setBuyers] = useState(25);

  const baseDiscount = 0.05;
  const perBuyerBoost = 0.003;
  const brokerComm = 0.02;
  const totalDiscount = Math.min(baseDiscount + buyers * perBuyerBoost, 0.25) + brokerComm;
  const totalSavings = Math.round(cost * totalDiscount * 100);
  const perUnitSavings = Math.round(totalSavings / buyers);

  const formatCr = (l) => {
    if (l >= 100) return `Rs. ${(l / 100).toFixed(2)} Cr`;
    return `Rs. ${l} Lakhs`;
  };

  return (
    <section className="py-20 lg:py-28 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-white text-primary text-sm font-medium rounded-full mb-4">Savings Tool</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Calculate How Much You Can Save</h2>
          <p className="text-text-muted max-w-xl mx-auto">See your potential savings with group buying power</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-primary/5 border border-border">
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-text mb-3">
                  <IndianRupee className="w-4 h-4 text-primary" />
                  Cost per Apartment (Lakhs): <span className="text-primary font-bold">{cost}L</span>
                </label>
                <input type="range" min="30" max="300" value={cost} onChange={(e) => setCost(Number(e.target.value))} className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary" />
                <div className="flex justify-between text-xs text-text-muted mt-1"><span>30L</span><span>300L</span></div>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-text mb-3">
                  <Users className="w-4 h-4 text-primary" />
                  Number of Buyers: <span className="text-primary font-bold">{buyers}</span>
                </label>
                <input type="range" min="5" max="100" value={buyers} onChange={(e) => setBuyers(Number(e.target.value))} className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary" />
                <div className="flex justify-between text-xs text-text-muted mt-1"><span>5</span><span>100</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 sm:p-8 text-white shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-semibold">Your Savings Estimate</h3>
            </div>
            <div className="space-y-5">
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Total Group Savings</span>
                <span className="text-2xl sm:text-3xl font-bold text-accent">{formatCr(totalSavings)}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Per Buyer Savings</span>
                <span className="text-xl font-semibold">{formatCr(perUnitSavings)}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-white/80">Effective Discount</span>
                <span className="text-xl font-semibold">{(totalDiscount * 100).toFixed(1)}%</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <TrendingDown className="w-4 h-4" />
                Includes broker commission passback + group negotiation discount
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
