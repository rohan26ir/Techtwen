



export default function Privacy() {
  return (
    <div className="bg-background ">
      <div className="w-[95%] mx-auto py-5 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground mb-4">Last updated on 23 Jan 2026</p>
            <div className="w-full h-px bg-secondary mb-6"></div>
            <p className="text-foreground">
              Welcome to Landio (&quot;we&quot; or &quot;us&quot;). This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you use our website and related services.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">1.1 Personal Information</h3>
                  <p className="text-foreground">
                    We may collect personal information, such as your name, email address, and other contact details when you voluntarily provide it to us, such as when you register for an account, subscribe to newsletters, or contact us through the website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">1.2 Usage Information</h3>
                  <p className="text-foreground">
                    We may collect information about your use of the website, including your IP address, browser type, device information, and pages visited. This information helps us analyze trends, administer the site, and improve user experience.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-foreground mb-4">
                We use the collected information for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Providing and maintaining the website</li>
                <li>Communicating with you about your account and our services</li>
                <li>Sending newsletters, promotional materials, and other information you request</li>
                <li>Analyzing website usage and improving our services</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
              <p className="text-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy. We may share information with trusted third-party service providers who assist us in operating our website or conducting our business.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Cookies and Similar Technologies</h2>
              <p className="text-foreground">
                We use cookies and similar technologies to enhance your experience on our website. You can control cookies through your browser settings, but disabling them may affect your ability to use certain features of the site.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
              <p className="text-foreground">
                You can manage your communication preferences by unsubscribing from newsletters or adjusting your account settings. You may also contact us to update or delete your personal information.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Security</h2>
              <p className="text-foreground">
                We take reasonable measures to protect the security of your personal information. However, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Children&apos;s Privacy</h2>
              <p className="text-foreground">
                Our website is not directed to individuals under the age of 18. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to remove such information.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-foreground">
                We may update this Privacy Policy periodically. We will notify you of any changes by posting the new Privacy Policy on this page. Your continued use of the website after such modifications will constitute your acknowledgment of the modified Privacy Policy.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-foreground">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:support@techtwen.com" className="text-primary hover:underline">
                  support@techtwen.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};