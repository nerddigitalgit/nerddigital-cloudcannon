import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Terms: React.FC = () => {
  const lastUpdated = "February 1, 2026";

  return (
    <div className="min-h-screen bg-nerd-light">
      {/* Header */}
      <div className="bg-white border-b border-nerd-border">
        <div className="container mx-auto px-6 py-4">
          <a
            href="#/"
            className="inline-flex items-center gap-2 text-nerd-muted hover:text-nerd-dark transition-colors font-sans"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-nerd-dark mb-4 font-sans font-semibold">
            Terms and Conditions
          </h1>
          <p className="text-nerd-muted font-sans mb-12">Last updated: {lastUpdated}</p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-nerd-dark font-sans">

              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="mb-4 leading-relaxed">
                  These Terms and Conditions ("Terms") govern your access to and use of the NerdDigital website and services. By accessing or using our website, you agree to be bound by these Terms and our <a href="#/privacy" className="text-nerd-green hover:underline">Privacy Policy</a>.
                </p>
                <p className="leading-relaxed">
                  NerdDigital is a business registered and operated in the Province of Ontario, Canada. These Terms are governed by the laws of Ontario and the federal laws of Canada applicable therein.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
                <p className="mb-4 leading-relaxed">
                  NerdDigital provides marketing consulting, strategy, and implementation services for coaches, consultants, course creators, and other domain experts ("Services"). Our Services may include but are not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Marketing strategy and consulting</li>
                  <li>Funnel design and optimization</li>
                  <li>Email marketing</li>
                  <li>Paid advertising management</li>
                  <li>Lead generation systems</li>
                  <li>Educational content and courses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
                <p className="mb-4 leading-relaxed">By using our website and Services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Use our website and Services only for lawful purposes</li>
                  <li>Not attempt to interfere with or disrupt our website or servers</li>
                  <li>Not reproduce, duplicate, or exploit any portion of our website without permission</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                <p className="mb-4 leading-relaxed">
                  All content on this website, including text, graphics, logos, images, videos, and software, is the property of NerdDigital or its content suppliers and is protected by Canadian and international copyright laws.
                </p>
                <p className="leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use any content from our website without our prior written consent, except for personal, non-commercial use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Free Content and Courses</h2>
                <p className="mb-4 leading-relaxed">
                  We may offer free content, including email courses, guides, and other educational materials. By signing up for free content:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You consent to receive emails from NerdDigital related to the content you requested</li>
                  <li>You may also receive marketing communications, which you can opt out of at any time</li>
                  <li>The content is provided for educational purposes only and does not constitute professional advice</li>
                  <li>Results may vary and are not guaranteed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Paid Services</h2>
                <p className="mb-4 leading-relaxed">
                  For paid Services, specific terms will be outlined in a separate service agreement or proposal. General terms include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment terms will be specified in your service agreement</li>
                  <li>All fees are in Canadian dollars unless otherwise stated</li>
                  <li>Refund policies, if applicable, will be outlined in your service agreement</li>
                  <li>We reserve the right to modify pricing for future services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Results</h2>
                <p className="mb-4 leading-relaxed">
                  <strong>Results are not guaranteed.</strong> While we strive to provide valuable strategies and services, individual results will vary based on numerous factors including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Your existing business and audience</li>
                  <li>Market conditions</li>
                  <li>Your implementation of recommendations</li>
                  <li>Your industry and niche</li>
                  <li>External factors beyond our control</li>
                </ul>
                <p className="leading-relaxed">
                  Testimonials and case studies on our website represent individual results and are not guarantees of future performance. Your results may differ significantly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Advertising and Marketing</h2>
                <p className="mb-4 leading-relaxed">
                  We use Meta (Facebook/Instagram) advertising to promote our services. By interacting with our ads or website:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may be tracked using cookies and pixels for advertising purposes</li>
                  <li>Your data may be used to create custom audiences for advertising</li>
                  <li>You can opt out of personalized advertising through your platform settings</li>
                </ul>
                <p className="mt-4 leading-relaxed">
                  For more information about how we handle your data, please review our <a href="#/privacy" className="text-nerd-green hover:underline">Privacy Policy</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
                <p className="mb-4 leading-relaxed">
                  To the fullest extent permitted by applicable law, NerdDigital and its owners, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Loss of profits, revenue, or business</li>
                  <li>Loss of data or information</li>
                  <li>Business interruption</li>
                  <li>Any other pecuniary loss</li>
                </ul>
                <p className="leading-relaxed">
                  Our total liability for any claims arising from your use of our website or Services shall not exceed the amount you paid us, if any, in the twelve (12) months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
                <p className="leading-relaxed">
                  You agree to indemnify, defend, and hold harmless NerdDigital and its owners, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our website or Services, your violation of these Terms, or your violation of any rights of a third party.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Third-Party Links</h2>
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites or services. We are not responsible for the content, terms, or privacy practices of these external sites. Your use of third-party websites is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Modifications to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website after any changes constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">13. Termination</h2>
                <p className="leading-relaxed">
                  We reserve the right to terminate or suspend your access to our website and Services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">14. Governing Law and Jurisdiction</h2>
                <p className="leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles. Any disputes arising from these Terms or your use of our website shall be subject to the exclusive jurisdiction of the courts of Ontario, Canada.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">15. Severability</h2>
                <p className="leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">16. Entire Agreement</h2>
                <p className="leading-relaxed">
                  These Terms, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and NerdDigital regarding your use of our website and Services, superseding any prior agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">17. Contact Us</h2>
                <p className="mb-4 leading-relaxed">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="leading-relaxed">
                  <strong>NerdDigital</strong><br />
                  Ontario, Canada<br />
                  Email: hello@nerddigital.com
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-nerd-dark">
        <div className="container mx-auto px-6 text-center">
          <img src="/images/nerd-digital-logo-white.png" alt="NerdDigital" className="h-4 mx-auto mb-4 opacity-80" />
          <p className="text-sm text-gray-500 font-sans">
            © Copyright {new Date().getFullYear()} NerdDigital
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
