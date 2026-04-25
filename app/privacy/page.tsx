'use client'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-card to-background px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold text-foreground lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last updated: March 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8 text-muted-foreground">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">1. Introduction</h2>
            <p>
              EnterNet (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our,&rdquo; or &ldquo;Company&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website and use our services.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">2. Information We Collect</h2>
            <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect
              on the Site includes:</p>
            <ul className="space-y-2 ml-4 list-disc">
              <li><strong>Personal Data:</strong> Name, email address, phone number, company information, and professional background.</li>
              <li><strong>Financial Information:</strong> Banking details if you transact on our platform.</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
              <li><strong>Usage Data:</strong> Pages you visit, features used, and interactions with content.</li>
              <li><strong>Location Data:</strong> General location information based on IP address.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="space-y-2 ml-4 list-disc">
              <li>Provide, maintain, and improve our services</li>
              <li>Authenticate users and provide account security</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send marketing and promotional communications</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">4. Disclosure of Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. However, we may share your
              information with:
            </p>
            <ul className="space-y-2 ml-4 list-disc mt-4">
              <li>Service providers who assist us in operating our website</li>
              <li>Business partners with your consent</li>
              <li>Law enforcement if required by law</li>
              <li>Other users (only information you choose to make public)</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. However,
              no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">6. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information.
              See our Cookie Policy for more details.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">7. Your Privacy Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="space-y-2 ml-4 list-disc">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">8. Children&apos;s Privacy</h2>
            <p>
              EnterNet does not knowingly collect personal information from children under 18. If we learn that we have
              collected personal information from a child under 18, we will delete such information promptly.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational,
              legal, or regulatory reasons. We will notify you of any material changes.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4">
              <p className="font-semibold text-foreground">EnterNet Privacy Team</p>
              <p>Email: privacy@enternet.io</p>
              <p>Address: Bangalore, India</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
