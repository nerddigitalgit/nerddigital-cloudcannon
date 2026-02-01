import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
            Privacy Policy
          </h1>
          <p className="text-nerd-muted font-sans mb-12">Last updated: {lastUpdated}</p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-nerd-dark font-sans">

              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="mb-4 leading-relaxed">
                  NerdDigital ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="leading-relaxed">
                  NerdDigital is a business registered and operated in the Province of Ontario, Canada. By using our website and services, you consent to the practices described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <p className="mb-4 leading-relaxed">We may collect information about you in various ways, including:</p>

                <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                <p className="mb-4 leading-relaxed">
                  When you voluntarily provide it to us, such as when you fill out a contact form, book a call, or sign up for our email list. This may include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Business information</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Automatically Collected Information</h3>
                <p className="mb-4 leading-relaxed">
                  When you visit our website, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referring website</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Click patterns and interactions</li>
                  <li>Device information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Cookies and Tracking Technologies</h2>
                <p className="mb-4 leading-relaxed">
                  We use cookies and similar tracking technologies to collect and track information about your visit to our website. This helps us understand where our visitors come from and how they interact with our site, allowing us to optimize our marketing efforts.
                </p>

                <h3 className="text-xl font-semibold mb-2">Types of Cookies We Use</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
                  <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Meta (Facebook) Pixel</h3>
                <p className="leading-relaxed">
                  We use Meta (Facebook) Pixel to track conversions from Meta ads, optimize ads based on collected data, build targeted audiences for future ads, and remarket to people who have already taken action on our website. The Meta Pixel may collect information about your browsing behavior on our site and use cookies to provide measurement services and target ads.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
                <p className="mb-4 leading-relaxed">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and fulfill your requests</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Analyze website usage and optimize our marketing</li>
                  <li>Deliver targeted advertising through Meta and other platforms</li>
                  <li>Protect against fraudulent or illegal activity</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Information Sharing and Disclosure</h2>
                <p className="mb-4 leading-relaxed">
                  <strong>We do not sell, rent, or trade your personal information to third parties.</strong>
                </p>
                <p className="mb-4 leading-relaxed">We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and conducting our business (e.g., email service providers, analytics providers, payment processors).</li>
                  <li><strong>Advertising Partners:</strong> Such as Meta, for the purpose of delivering targeted advertisements. This sharing is governed by our use of the Meta Pixel as described above.</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, privacy, safety, or property.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
                <p className="mb-4 leading-relaxed">Under Canadian privacy law, including PIPEDA (Personal Information Protection and Electronic Documents Act), you have the right to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Withdraw consent for certain processing activities</li>
                  <li>Request deletion of your personal information (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  <strong>Cookie Preferences:</strong> You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of our website.
                </p>
                <p className="leading-relaxed">
                  <strong>Opt-Out of Meta Tracking:</strong> You can opt out of Meta's data collection by adjusting your ad preferences in your Facebook settings or by using browser-based opt-out tools.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Data Security</h2>
                <p className="leading-relaxed">
                  We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Third-Party Links</h2>
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
                <p className="mb-4 leading-relaxed">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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

export default PrivacyPolicy;
