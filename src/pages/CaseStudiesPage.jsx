import { motion } from "framer-motion";
import { MapPin, TrendingDown, Calendar, Building, CheckCircle, Quote, Clock, Users } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "DLF Elite Residences - 42% Savings Achieved",
    location: "Sector 54, Gurgaon",
    client: "Rahul & Priya Sharma",
    project: "DLF Elite Residences",
    category: "Luxury Apartments",
    date: "December 2024",
    originalPrice: "Rs. 95 Lakhs",
    finalPrice: "Rs. 85 Lakhs",
    savings: "Rs. 42 Lakhs",
    savingsPercent: "42%",
    buyers: "45 buyers",
    timeline: "3 months",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
    challenges: ["Individual buyers getting 5% discount", "Broker commission not disclosed", "Long negotiation cycles"],
    solution: ["Formed 45-member buyer group", "Direct negotiation with developer", "100% broker commission passback"],
    outcome: ["42% total savings", "Ready-to-move inventory secured", "Additional amenities included"],
  },
  {
    id: 2,
    title: "Godrej Properties - 28% Group Deal Success",
    location: "Sector 150, Noida",
    client: "Tech Professionals Group",
    project: "Godrej Grand Estate",
    category: "Mid-range Apartments",
    date: "November 2024",
    originalPrice: "Rs. 72 Lakhs",
    finalPrice: "Rs. 62 Lakhs",
    savings: "Rs. 28 Lakhs",
    savingsPercent: "28%",
    buyers: "38 buyers",
    timeline: "2 months",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
    challenges: [" scattered buyers across different phases", "Varying budget requirements", "Complex payment structures"],
    solution: ["Unified 38-buyer group formation", "Flexible payment schedule negotiation", "Phase-wise inventory allocation"],
    outcome: ["28% average savings", "Custom payment plans", "Priority unit selection"],
  },
  {
    id: 3,
    title: "Tata Housing - Record 51% Savings",
    location: "Sector 72, Noida",
    client: "First-time Homebuyers Collective",
    project: "Tata Green Valley",
    category: "Affordable Housing",
    date: "October 2024",
    originalPrice: "Rs. 55 Lakhs",
    finalPrice: "Rs. 48 Lakhs",
    savings: "Rs. 51 Lakhs",
    savingsPercent: "51%",
    buyers: "56 buyers",
    timeline: "4 months",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
    challenges: ["First-time buyer concerns", "Budget constraints", "Legal documentation complexity"],
    solution: ["56-strong buyer group", "Legal support provided", "EMI assistance program"],
    outcome: ["51% total savings", "Ready possession", "Complete legal support"],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="pt-20 min-h-screen bg-muted">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Success Stories & Case Studies</h1>
            <p className="text-white/80 max-w-2xl text-lg">Real examples of how buyers saved lakhs through group purchasing power</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, i) => (
              <motion.div key={study.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl border border-border overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-primary-light text-primary text-sm font-medium rounded-lg">{study.category}</span>
                      <span className="flex items-center gap-1 text-sm text-text-muted"><Calendar className="w-4 h-4" />{study.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-text mb-4">{study.title}</h2>
                    <div className="flex items-center gap-2 text-text-muted mb-6">
                      <MapPin className="w-4 h-4" />
                      <span>{study.location}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-muted rounded-lg p-4">
                        <p className="text-sm text-text-muted mb-1">Original Price</p>
                        <p className="text-lg font-semibold text-text">{study.originalPrice}</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <p className="text-sm text-text-muted mb-1">Final Price</p>
                        <p className="text-lg font-semibold text-primary">{study.finalPrice}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6 p-4 bg-primary-light rounded-lg">
                      <div>
                        <p className="text-sm text-text-muted mb-1">Total Savings</p>
                        <p className="text-2xl font-bold text-primary">{study.savings}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-text-muted mb-1">Savings %</p>
                        <p className="text-2xl font-bold text-accent">{study.savingsPercent}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-text-muted">
                      <span className="flex items-center gap-1"><Users className="w-4 h-4" />{study.buyers}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{study.timeline}</span>
                    </div>
                  </div>

                  <div className="relative">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>

                <div className="p-8 border-t border-border">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          <span className="text-red-600 text-sm">!</span>
                        </div>
                        Challenges
                      </h4>
                      <ul className="space-y-2">
                        {study.challenges.map((challenge, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 text-sm">?</span>
                        </div>
                        Solution
                      </h4>
                      <ul className="space-y-2">
                        {study.solution.map((sol, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                            {sol}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        Outcome
                      </h4>
                      <ul className="space-y-2">
                        {study.outcome.map((outcome, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
