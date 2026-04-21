import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database, UserCheck, AlertCircle } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="pt-20 min-h-screen bg-white">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-white/80 max-w-2xl text-lg">How we collect, use, and protect your personal information</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-text-muted leading-relaxed">Last updated: April 21, 2025</p>
              
              <div className="bg-primary-light rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-text mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Our Commitment to Privacy
                </h2>
                <p className="text-text leading-relaxed">
                  At BigPockets, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">1. Information We Collect</h2>
                
                <h3 className="font-semibold text-text mb-3">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4 mb-4">
                  <li>Name and contact details (phone, email)</li>
                  <li>Address and location preferences</li>
                  <li>Property requirements and budget</li>
                  <li>Financial capacity indicators</li>
                  <li>Government ID documents (for verification)</li>
                </ul>

                <h3 className="font-semibold text-text mb-3">Usage Information</h3>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4 mb-4">
                  <li>Property browsing history</li>
                  <li>Group participation records</li>
                  <li>Communication with our team</li>
                  <li>Website interaction data</li>
                  <li>Device and browser information</li>
                </ul>

                <h3 className="font-semibold text-text mb-3">Financial Information</h3>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                  <li>Budget range and financing preferences</li>
                  <li>Payment method preferences</li>
                  <li>Loan eligibility information</li>
                  <li>Transaction records (when applicable)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">2. How We Use Your Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted rounded-xl p-6">
                    <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-primary" />
                      Service Delivery
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-text-muted ml-4 text-sm">
                      <li>Match you with suitable properties</li>
                      <li>Connect you with buyer groups</li>
                      <li>Facilitate negotiations</li>
                      <li>Provide personalized recommendations</li>
                    </ul>
                  </div>

                  <div className="bg-muted rounded-xl p-6">
                    <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-primary" />
                      Verification & Safety
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-text-muted ml-4 text-sm">
                      <li>Verify buyer authenticity</li>
                      <li>Prevent fraudulent activities</li>
                      <li>Ensure group safety</li>
                      <li>Maintain platform integrity</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-text mb-3">Communication</h3>
                  <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                    <li>Send property updates and alerts</li>
                    <li>Respond to your inquiries</li>
                    <li>Provide customer support</li>
                    <li>Share relevant market insights</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">3. Information Sharing</h2>
                
                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-green-600" />
                    We Never Sell Your Data
                  </h3>
                  <p className="text-green-800 text-sm">
                    We do not sell, rent, or trade your personal information with third parties for marketing purposes.
                  </p>
                </div>

                <h3 className="font-semibold text-text mb-3">When We Share Information</h3>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4 mb-4">
                  <li>With property developers (for group negotiations only)</li>
                  <li>With other group members (limited, relevant information)</li>
                  <li>With service providers (payment processors, verification services)</li>
                  <li>When required by law or court order</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>

                <h3 className="font-semibold text-text mb-3">Group Information Sharing</h3>
                <p className="text-text-muted mb-4">
                  Within buyer groups, we share only necessary information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                  <li>First name and initial of last name</li>
                  <li>General location preference</li>
                  <li>Budget range (in categories)</li>
                  <li>Property preferences</li>
                  <li>Contact information (with explicit consent)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">4. Data Security</h2>
                
                <div className="bg-muted rounded-xl p-6">
                  <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary" />
                    Security Measures
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                    <li>SSL encryption for all data transmissions</li>
                    <li>Secure servers with restricted access</li>
                    <li>Regular security audits and updates</li>
                    <li>Employee background checks and training</li>
                    <li>Data minimization principles</li>
                    <li>Secure backup and recovery systems</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">5. Your Rights</h2>
                
                <h3 className="font-semibold text-text mb-3">You Have the Right To:</h3>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4 mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>Restrict processing of sensitive data</li>
                </ul>

                <p className="text-text-muted">
                  To exercise these rights, contact us at privacy@bigpockets.in or call +91 70425 80018.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">6. Cookies and Tracking</h2>
                
                <p className="text-text-muted mb-4">We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4 mb-4">
                  <li>Remember your preferences</li>
                  <li>Analyze website usage patterns</li>
                  <li>Improve our services</li>
                  <li>Provide personalized content</li>
                </ul>

                <p className="text-text-muted">
                  You can control cookies through your browser settings. Disabling cookies may affect some website features.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">7. Data Retention</h2>
                
                <p className="text-text-muted mb-4">We retain your information for:</p>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4 mb-4">
                  <li>Active users: As long as needed for service delivery</li>
                  <li>Completed transactions: 7 years (as required by law)</li>
                  <li>Inactive accounts: 2 years after last activity</li>
                  <li>Marketing communications: Until you opt-out</li>
                </ul>

                <p className="text-text-muted">
                  We delete or anonymize data when no longer needed for these purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">8. Children's Privacy</h2>
                
                <p className="text-text-muted">
                  Our services are not intended for children under 18. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete it immediately.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">9. International Data Transfers</h2>
                
                <p className="text-text-muted">
                  Your data is stored and processed in India. We may transfer data internationally only with appropriate safeguards and your consent.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">10. Policy Updates</h2>
                
                <p className="text-text-muted mb-4">
                  We may update this privacy policy periodically. Changes will be:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4 mb-4">
                  <li>Posted on this page</li>
                  <li>Effective immediately for new users</li>
                  <li>Notified to existing users via email</li>
                  <li>Highlighted for significant changes</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mt-8">
                <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600" />
                  Contact Us
                </h3>
                <p className="text-blue-800 text-sm mb-3">
                  For privacy-related questions or concerns:
                </p>
                <div className="space-y-1 text-blue-800 text-sm">
                  <p>Email: privacy@bigpockets.in</p>
                  <p>Phone: +91 70425 80018</p>
                  <p>Address: Supernova Astralis, Sector 94, Noida, UP 201301</p>
                </div>
              </div>

              <div className="border-t border-border pt-8 mt-8">
                <p className="text-text-muted text-sm">
                  This privacy policy is part of our commitment to transparency and user trust. By using BigPockets, you agree to the collection and use of information as described in this policy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
