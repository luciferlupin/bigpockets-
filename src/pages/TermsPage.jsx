import { motion } from "framer-motion";
import { Shield, Users, FileText, AlertCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="pt-20 min-h-screen bg-white">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Terms of Use</h1>
            <p className="text-white/80 max-w-2xl text-lg">Please read these terms carefully before using BigPockets services</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-text-muted leading-relaxed">Last updated: April 21, 2025</p>
              
              <div className="bg-muted rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-text mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Acceptance of Terms
                </h2>
                <p className="text-text-muted leading-relaxed">
                  By accessing and using BigPockets.in, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">1. Services Overview</h2>
                <p className="text-text-muted mb-4">BigPockets is a group buying real estate platform that:</p>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                  <li>Connects serious home buyers interested in the same properties</li>
                  <li>Negotiates bulk discounts with developers on behalf of buyer groups</li>
                  <li>Passes back 100% of broker commissions to buyers</li>
                  <li>Provides verified property listings and due diligence support</li>
                  <li>Offers end-to-end guidance from shortlisting to possession</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">2. User Eligibility</h2>
                <p className="text-text-muted mb-4">To use BigPockets services, you must:</p>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                  <li>Be at least 18 years of age</li>
                  <li>Have genuine intent to purchase property</li>
                  <li>Provide accurate and complete information</li>
                  <li>Have the financial capacity to complete the purchase</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">3. Group Buying Process</h2>
                <div className="bg-muted rounded-xl p-6">
                  <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    How It Works
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-text-muted ml-4">
                    <li>Express interest in specific properties</li>
                    <li>Join buyer groups for your preferred projects</li>
                    <li>Participate in group negotiations with developers</li>
                    <li>Receive group discount and broker commission passback</li>
                    <li>Complete individual purchase with negotiated terms</li>
                  </ol>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">4. Fees and Payments</h2>
                <div className="space-y-3 text-text-muted">
                  <p><strong>Platform Usage:</strong> Free for buyers to join groups and browse properties</p>
                  <p><strong>Service Fee:</strong> Only charged upon successful property purchase through our platform</p>
                  <p><strong>Broker Commission:</strong> 100% passed back to buyers as additional savings</p>
                  <p><strong>Payment Terms:</strong> All fees are clearly disclosed before any commitment</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">5. User Responsibilities</h2>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                  <li>Provide accurate and truthful information</li>
                  <li>Maintain confidentiality of group negotiations</li>
                  <li>Act in good faith with other group members</li>
                  <li>Complete due diligence before making purchase decisions</li>
                  <li>Honor commitments made during the buying process</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">6. Property Information</h2>
                <p className="text-text-muted mb-4">While we strive for accuracy, please note:</p>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                  <li>All property information is subject to verification</li>
                  <li>Prices and availability may change without notice</li>
                  <li>Buyers must conduct independent property verification</li>
                  <li>We recommend legal consultation before purchase</li>
                  <li>RERA registration status should be verified independently</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">7. Limitation of Liability</h2>
                <p className="text-text-muted mb-4">BigPockets liability is limited to:</p>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                  <li>Facilitating group formation and negotiations</li>
                  <li>Providing verified property information</li>
                  <li>Offering guidance throughout the buying process</li>
                </ul>
                <p className="text-text-muted mt-4">We are not responsible for:</p>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                  <li>Property quality or construction defects</li>
                  <li>Developer delays or defaults</li>
                  <li>Market fluctuations or price changes</li>
                  <li>Individual financial decisions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">8. Privacy and Data</h2>
                <p className="text-text-muted">
                  Your privacy is important to us. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal data.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">9. Dispute Resolution</h2>
                <p className="text-text-muted mb-4">Any disputes arising from these terms shall be:</p>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                  <li>First addressed through mutual discussion</li>
                  <li>If unresolved, through mediation in Noida, India</li>
                  <li>Finally, subject to jurisdiction of courts in Noida</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">10. Term and Termination</h2>
                <p className="text-text-muted">
                  These terms remain in effect until terminated. Either party may terminate by providing 30 days written notice. Termination does not affect completed transactions.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mt-8">
                <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600" />
                  Important Note
                </h3>
                <p className="text-blue-800 text-sm">
                  Real estate transactions involve significant financial commitments. We strongly recommend consulting with legal and financial advisors before making any purchase decisions.
                </p>
              </div>

              <div className="border-t border-border pt-8 mt-8">
                <p className="text-text-muted text-sm">
                  For questions about these terms, please contact us at hello@bigpockets.in or call +91 70425 80018.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
