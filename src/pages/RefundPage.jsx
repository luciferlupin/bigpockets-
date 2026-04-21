import { motion } from "framer-motion";
import { Shield, AlertCircle, Clock, CheckCircle, XCircle, FileText } from "lucide-react";

export default function RefundPage() {
  return (
    <main className="pt-20 min-h-screen bg-white">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Refund Policy</h1>
            <p className="text-white/80 max-w-2xl text-lg">Clear guidelines on refunds and cancellations for BigPockets services</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-text-muted leading-relaxed">Last updated: April 21, 2025</p>
              
              <div className="bg-green-50 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-text mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Our Refund Commitment
                </h2>
                <p className="text-green-800 leading-relaxed">
                  At BigPockets, we believe in transparency and fairness. This policy outlines when and how refunds are processed to ensure you have complete clarity.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">1. Platform Usage Fees</h2>
                
                <div className="bg-muted rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    No Platform Fees for Browsing
                  </h3>
                  <p className="text-text-muted text-sm">
                    Property browsing, group joining, and initial consultations are completely free. No refund applicable as no fees are charged.
                  </p>
                </div>

                <h3 className="font-semibold text-text mb-3">Service Fee Refunds</h3>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                  <li><strong>Full Refund:</strong> If property purchase falls through due to developer default</li>
                  <li><strong>Partial Refund:</strong> If you withdraw before group formation is complete</li>
                  <li><strong>No Refund:</strong> After successful property purchase completion</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">2. Booking Amount Refunds</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-xl p-6">
                    <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-600" />
                      Non-Refundable Situations
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-red-800 text-sm ml-4">
                      <li>Buyer withdrawal after booking confirmation</li>
                      <li>Change of mind after developer acceptance</li>
                      <li>Financial inability to complete purchase</li>
                      <li>Documentation issues from buyer's side</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Refundable Situations
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-green-800 text-sm ml-4">
                      <li>Developer cancellation of project</li>
                      <li>Legal issues with property title</li>
                      <li>Major construction defects</li>
                      <li>Delay beyond agreed timeline (6+ months)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">3. Group Buying Scenarios</h2>
                
                <div className="space-y-4">
                  <div className="border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-text mb-3">Group Formation Failed</h3>
                    <p className="text-text-muted mb-2"><strong>Refund:</strong> 100% of any fees paid</p>
                    <p className="text-text-muted text-sm">
                      If minimum group size is not achieved within the specified timeline, all service fees are fully refundable.
                    </p>
                  </div>

                  <div className="border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-text mb-3">Group Deal Negotiation Failed</h3>
                    <p className="text-text-muted mb-2"><strong>Refund:</strong> 100% of service fees</p>
                    <p className="text-text-muted text-sm">
                      If we cannot secure a group discount with the developer, all service fees are fully refundable.
                    </p>
                  </div>

                  <div className="border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-text mb-3">Successful Group Deal</h3>
                    <p className="text-text-muted mb-2"><strong>Refund:</strong> No refund of service fees</p>
                    <p className="text-text-muted text-sm">
                      Once group discount is secured and you proceed with purchase, service fees are non-refundable.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">4. Refund Process Timeline</h2>
                
                <div className="bg-muted rounded-xl p-6">
                  <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Standard Processing Time
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-text">Refund Request Submission</span>
                      <span className="text-text-muted text-sm">Day 0</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-text">Document Verification</span>
                      <span className="text-text-muted text-sm">2-3 business days</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-text">Approval Process</span>
                      <span className="text-text-muted text-sm">3-5 business days</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-text">Refund Disbursement</span>
                      <span className="text-text-muted text-sm">5-7 business days</span>
                    </div>
                  </div>
                  <p className="text-text-muted text-sm mt-4">
                    Total time: 10-15 business days from request to refund
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">5. Required Documentation</h2>
                
                <h3 className="font-semibold text-text mb-3">For Booking Amount Refunds:</h3>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4 mb-4">
                  <li>Original booking receipt and payment proof</li>
                  <li>Developer cancellation notice (if applicable)</li>
                  <li>Legal documentation supporting refund claim</li>
                  <li>Bank account details for refund processing</li>
                  <li>ID proof and PAN card</li>
                </ul>

                <h3 className="font-semibold text-text mb-3">For Service Fee Refunds:</h3>
                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                  <li>Service fee payment receipt</li>
                  <li>Cancellation or withdrawal notice</li>
                  <li>Reason for refund request</li>
                  <li>Supporting documentation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">6. Refund Methods</h2>
                
                <div className="space-y-4">
                  <div className="bg-muted rounded-xl p-4">
                    <h3 className="font-semibold text-text mb-2">Original Payment Method</h3>
                    <p className="text-text-muted text-sm">
                      Refunds are processed to the original payment method used (credit card, bank transfer, etc.)
                    </p>
                  </div>

                  <div className="bg-muted rounded-xl p-4">
                    <h3 className="font-semibold text-text mb-2">Bank Transfer</h3>
                    <p className="text-text-muted text-sm">
                      For cash payments or when original method is unavailable, refunds are made via bank transfer
                    </p>
                  </div>

                  <div className="bg-muted rounded-xl p-4">
                    <h3 className="font-semibold text-text mb-2">Processing Fees</h3>
                    <p className="text-text-muted text-sm">
                      Any bank or payment gateway charges for refund processing are borne by the receiver
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">7. Dispute Resolution</h2>
                
                <p className="text-text-muted mb-4">
                  If you disagree with a refund decision:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-text-muted ml-4">
                  <li>Submit written appeal with additional documentation</li>
                  <li>Review by senior management team</li>
                  <li>Decision communicated within 7 business days</li>
                  <li>If still unresolved, mediation through neutral third party</li>
                  <li>Final recourse through consumer court</li>
                </ol>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text mb-4">8. Special Circumstances</h2>
                
                <div className="space-y-4">
                  <div className="border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-text mb-3">Medical Emergencies</h3>
                    <p className="text-text-muted mb-2"><strong>Policy:</strong> Case-by-case consideration</p>
                    <p className="text-text-muted text-sm">
                      Genuine medical emergencies with proper documentation may qualify for partial refunds.
                    </p>
                  </div>

                  <div className="border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-text mb-3">Job Loss/Financial Hardship</h3>
                    <p className="text-text-muted mb-2"><strong>Policy:</strong> No standard refund</p>
                    <p className="text-text-muted text-sm">
                      Financial inability alone does not qualify for refund, but we may assist with payment restructuring.
                    </p>
                  </div>

                  <div className="border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-text mb-3">Force Majeure Events</h3>
                    <p className="text-text-muted mb-2"><strong>Policy:</strong> Full refund consideration</p>
                    <p className="text-text-muted text-sm">
                      Natural disasters, pandemics, or government actions preventing purchase may qualify for full refund.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mt-8">
                <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600" />
                  Important Notes
                </h3>
                <ul className="list-disc list-inside space-y-2 text-blue-800 text-sm ml-4">
                  <li>All refund requests must be submitted in writing</li>
                  <li>Original documents must be provided for verification</li>
                  <li>Refund decisions are final and binding</li>
                  <li>BigPockets reserves right to modify policy with 30-day notice</li>
                  <li>This policy is governed by Indian law</li>
                </ul>
              </div>

              <div className="border-t border-border pt-8 mt-8">
                <p className="text-text-muted text-sm mb-4">
                  For refund-related inquiries:
                </p>
                <div className="space-y-1 text-text-muted text-sm">
                  <p>Email: refunds@bigpockets.in</p>
                  <p>Phone: +91 70425 80018</p>
                  <p>Address: Supernova Astralis, Sector 94, Noida, UP 201301</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
