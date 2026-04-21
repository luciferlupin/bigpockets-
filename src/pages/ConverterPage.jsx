import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpDown, Square, Ruler, DollarSign, Calculator } from "lucide-react";

export default function ConverterPage() {
  const [activeTab, setActiveTab] = useState("area");
  const [areaInput, setAreaInput] = useState("");
  const [areaFrom, setAreaFrom] = useState("sq.ft");
  const [areaTo, setAreaTo] = useState("sq.m");
  const [currencyInput, setCurrencyInput] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("INR");
  const [currencyTo, setCurrencyTo] = useState("USD");

  const areaConversions = {
    "sq.ft": {
      "sq.m": 0.092903,
      "sq.yd": 0.111111,
      "acre": 0.0000229568,
      "hectare": 0.0000092903,
      "sq.ft": 1,
    },
    "sq.m": {
      "sq.ft": 10.7639,
      "sq.yd": 1.19599,
      "acre": 0.000247105,
      "hectare": 0.0001,
      "sq.m": 1,
    },
    "sq.yd": {
      "sq.ft": 9,
      "sq.m": 0.836127,
      "acre": 0.000206612,
      "hectare": 0.0000836127,
      "sq.yd": 1,
    },
    "acre": {
      "sq.ft": 43560,
      "sq.m": 4046.86,
      "sq.yd": 4840,
      "hectare": 0.404686,
      "acre": 1,
    },
    "hectare": {
      "sq.ft": 107639,
      "sq.m": 10000,
      "sq.yd": 11959.9,
      "acre": 2.47105,
      "hectare": 1,
    },
  };

  const currencyConversions = {
    "INR": {
      "USD": 0.012,
      "EUR": 0.011,
      "GBP": 0.0095,
      "AED": 0.044,
      "SGD": 0.016,
      "INR": 1,
    },
    "USD": {
      "INR": 83.5,
      "EUR": 0.92,
      "GBP": 0.79,
      "AED": 3.67,
      "SGD": 1.35,
      "USD": 1,
    },
    "EUR": {
      "INR": 90.8,
      "USD": 1.09,
      "GBP": 0.86,
      "AED": 3.99,
      "SGD": 1.47,
      "EUR": 1,
    },
    "GBP": {
      "INR": 105.6,
      "USD": 1.27,
      "EUR": 1.16,
      "AED": 4.65,
      "SGD": 1.71,
      "GBP": 1,
    },
    "AED": {
      "INR": 22.7,
      "USD": 0.27,
      "EUR": 0.25,
      "GBP": 0.22,
      "SGD": 0.37,
      "AED": 1,
    },
    "SGD": {
      "INR": 61.8,
      "USD": 0.74,
      "EUR": 0.68,
      "GBP": 0.58,
      "AED": 2.72,
      "SGD": 1,
    },
  };

  const convertArea = () => {
    const input = parseFloat(areaInput);
    if (isNaN(input)) return "";
    const result = input * areaConversions[areaFrom][areaTo];
    return result.toFixed(6);
  };

  const convertCurrency = () => {
    const input = parseFloat(currencyInput);
    if (isNaN(input)) return "";
    const result = input * currencyConversions[currencyFrom][currencyTo];
    return result.toFixed(2);
  };

  const swapAreaUnits = () => {
    setAreaFrom(areaTo);
    setAreaTo(areaFrom);
    setAreaInput(convertArea().toString());
  };

  const swapCurrencies = () => {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
    setCurrencyInput(convertCurrency().toString());
  };

  return (
    <main className="pt-20 min-h-screen bg-white">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Property Converter</h1>
            <p className="text-white/80 max-w-2xl text-lg">Convert area measurements and currencies for real estate calculations</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-lg p-1 inline-flex">
              <button
                onClick={() => setActiveTab("area")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "area" ? "bg-white text-primary shadow-sm" : "text-text-muted hover:text-text"
                }`}
              >
                <Square className="w-4 h-4 inline mr-2" />
                Area
              </button>
              <button
                onClick={() => setActiveTab("currency")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "currency" ? "bg-white text-primary shadow-sm" : "text-text-muted hover:text-text"
                }`}
              >
                <DollarSign className="w-4 h-4 inline mr-2" />
                Currency
              </button>
            </div>
          </div>

          {activeTab === "area" && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl border border-border shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-text mb-6 text-center">Area Converter</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">From</label>
                  <select
                    value={areaFrom}
                    onChange={(e) => setAreaFrom(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent mb-4"
                  >
                    <option value="sq.ft">Square Feet (sq.ft)</option>
                    <option value="sq.m">Square Meters (sq.m)</option>
                    <option value="sq.yd">Square Yards (sq.yd)</option>
                    <option value="acre">Acres</option>
                    <option value="hectare">Hectares</option>
                  </select>
                  <input
                    type="number"
                    value={areaInput}
                    onChange={(e) => setAreaInput(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter value"
                  />
                </div>

                <div className="text-center">
                  <button
                    onClick={swapAreaUnits}
                    className="mb-4 p-3 bg-primary-light rounded-full hover:bg-primary transition-colors group"
                  >
                    <ArrowUpDown className="w-5 h-5 text-primary group-hover:rotate-180 transition-transform" />
                  </button>
                  <label className="block text-sm font-medium text-text mb-2">To</label>
                  <select
                    value={areaTo}
                    onChange={(e) => setAreaTo(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent mb-4"
                  >
                    <option value="sq.ft">Square Feet (sq.ft)</option>
                    <option value="sq.m">Square Meters (sq.m)</option>
                    <option value="sq.yd">Square Yards (sq.yd)</option>
                    <option value="acre">Acres</option>
                    <option value="hectare">Hectares</option>
                  </select>
                  <div className="px-4 py-3 bg-primary-light rounded-lg">
                    <p className="text-2xl font-bold text-primary">
                      {convertArea() || "0"}
                    </p>
                    <p className="text-sm text-text-muted">
                      {areaTo}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-blue-600" />
                  Common Real Estate Conversions
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <p className="font-medium text-text">1 sq.ft</p>
                    <p className="text-blue-600">= 0.093 sq.m</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-text">1 sq.yd</p>
                    <p className="text-blue-600">= 9 sq.ft</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-text">1 acre</p>
                    <p className="text-blue-600">= 43,560 sq.ft</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-text">1 hectare</p>
                    <p className="text-blue-600">= 2.47 acres</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "currency" && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl border border-border shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-text mb-6 text-center">Currency Converter</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">From</label>
                  <select
                    value={currencyFrom}
                    onChange={(e) => setCurrencyFrom(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent mb-4"
                  >
                    <option value="INR">Indian Rupee (INR)</option>
                    <option value="USD">US Dollar (USD)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="AED">UAE Dirham (AED)</option>
                    <option value="SGD">Singapore Dollar (SGD)</option>
                  </select>
                  <input
                    type="number"
                    value={currencyInput}
                    onChange={(e) => setCurrencyInput(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>

                <div className="text-center">
                  <button
                    onClick={swapCurrencies}
                    className="mb-4 p-3 bg-primary-light rounded-full hover:bg-primary transition-colors group"
                  >
                    <ArrowUpDown className="w-5 h-5 text-primary group-hover:rotate-180 transition-transform" />
                  </button>
                  <label className="block text-sm font-medium text-text mb-2">To</label>
                  <select
                    value={currencyTo}
                    onChange={(e) => setCurrencyTo(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent mb-4"
                  >
                    <option value="INR">Indian Rupee (INR)</option>
                    <option value="USD">US Dollar (USD)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="AED">UAE Dirham (AED)</option>
                    <option value="SGD">Singapore Dollar (SGD)</option>
                  </select>
                  <div className="px-4 py-3 bg-primary-light rounded-lg">
                    <p className="text-2xl font-bold text-primary">
                      {convertCurrency() || "0"}
                    </p>
                    <p className="text-sm text-text-muted">
                      {currencyTo}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-green-600" />
                  Exchange Rates (Approximate)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <p className="font-medium text-text">1 USD</p>
                    <p className="text-green-600">= ₹83.5</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-text">1 EUR</p>
                    <p className="text-green-600">= ₹90.8</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-text">1 GBP</p>
                    <p className="text-green-600">= ₹105.6</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-text">1 AED</p>
                    <p className="text-green-600">= ₹22.7</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-text">1 SGD</p>
                    <p className="text-green-600">= ₹61.8</p>
                  </div>
                </div>
                <p className="text-xs text-text-muted mt-3 text-center">
                  * Rates are indicative and subject to market fluctuations
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
