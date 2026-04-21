import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, IndianRupee, Percent, Calendar, TrendingDown, Info } from "lucide-react";

export default function EMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(8000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [downPayment, setDownPayment] = useState(20);

  const calculateEMI = () => {
    const principal = loanAmount * (1 - downPayment / 100);
    const monthlyRate = interestRate / 12 / 100;
    const months = loanTenure * 12;
    
    if (monthlyRate === 0) return principal / months;
    
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    return emi;
  };

  const emi = calculateEMI();
  const totalPayment = emi * loanTenure * 12;
  const totalInterest = totalPayment - (loanAmount * (1 - downPayment / 100));
  const downPaymentAmount = loanAmount * downPayment / 100;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <main className="pt-20 min-h-screen bg-muted">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">EMI Calculator</h1>
            <p className="text-white/80 max-w-2xl text-lg">Calculate your monthly home loan payments and plan your budget effectively</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-border shadow-lg">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold text-text">Loan Details</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-text mb-3">
                    <IndianRupee className="w-4 h-4 text-primary" />
                    Property Value: <span className="text-primary font-bold">{formatCurrency(loanAmount)}</span>
                  </label>
                  <input
                    type="range"
                    min="1000000"
                    max="50000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-text-muted mt-1">
                    <span>Rs. 10L</span>
                    <span>Rs. 5Cr</span>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-text mb-3">
                    <Percent className="w-4 h-4 text-primary" />
                    Down Payment: <span className="text-primary font-bold">{downPayment}%</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-text-muted mt-1">
                    <span>10%</span>
                    <span>50%</span>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-text mb-3">
                    <Percent className="w-4 h-4 text-primary" />
                    Interest Rate: <span className="text-primary font-bold">{interestRate}% p.a.</span>
                  </label>
                  <input
                    type="range"
                    min="6"
                    max="12"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-text-muted mt-1">
                    <span>6%</span>
                    <span>12%</span>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-text mb-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    Loan Tenure: <span className="text-primary font-bold">{loanTenure} years</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-text-muted mt-1">
                    <span>5 years</span>
                    <span>30 years</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border p-8 bg-primary-light">
              <h3 className="text-lg font-semibold text-text mb-6">Calculation Results</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-text-muted mb-1">Down Payment Amount</p>
                    <p className="text-xl font-bold text-primary">{formatCurrency(downPaymentAmount)}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-text-muted mb-1">Loan Amount</p>
                    <p className="text-xl font-bold text-primary">{formatCurrency(loanAmount * (1 - downPayment / 100))}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-text-muted mb-1">Monthly EMI</p>
                    <p className="text-xl font-bold text-accent">{formatCurrency(emi)}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-text-muted mb-1">Total Interest Payable</p>
                    <p className="text-xl font-bold text-text">{formatCurrency(totalInterest)}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-lg p-4">
                <p className="text-sm text-text-muted mb-1">Total Payment (Principal + Interest)</p>
                <p className="text-2xl font-bold text-primary">{formatCurrency(totalPayment)}</p>
              </div>

              <div className="mt-6 flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                <Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <p className="text-sm text-blue-800">
                  With BigPockets group buying, you could save 5-25% on the property value, reducing both your down payment and EMI significantly.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-12 bg-white rounded-2xl border border-border p-8">
            <h3 className="text-xl font-semibold text-text mb-6">How Group Buying Affects Your EMI</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-text mb-3">Without Group Buying</h4>
                <div className="space-y-2 text-sm text-text-muted">
                  <p>Property Value: {formatCurrency(loanAmount)}</p>
                  <p>Down Payment (20%): {formatCurrency(downPaymentAmount)}</p>
                  <p>Loan Amount: {formatCurrency(loanAmount * 0.8)}</p>
                  <p>Monthly EMI: {formatCurrency(emi)}</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-3">With 15% Group Discount</h4>
                <div className="space-y-2 text-sm text-text-muted">
                  <p>Property Value: {formatCurrency(loanAmount * 0.85)}</p>
                  <p>Down Payment (20%): {formatCurrency(downPaymentAmount * 0.85)}</p>
                  <p>Loan Amount: {formatCurrency(loanAmount * 0.8 * 0.85)}</p>
                  <p className="text-primary font-semibold">Monthly EMI: {formatCurrency(emi * 0.85)}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <TrendingDown className="w-4 h-4 inline mr-2" />
                You save {formatCurrency(emi * 0.15 * loanTenure * 12)} over the entire loan tenure with group buying!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
