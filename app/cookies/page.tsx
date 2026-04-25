'use client'

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-card to-background px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold text-foreground lg:text-5xl">
            Cookie Policy
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
            <h2 className="mb-4 text-2xl font-bold text-foreground">1. What are Cookies?</h2>
            <p>
              Cookies are small pieces of text stored on your browser or device. They help websites remember information
              about your visit, like your preferences, login information, and browsing history. Cookies may be either
              &ldquo;persistent&rdquo; cookies or &ldquo;session&rdquo; cookies.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">2. Types of Cookies We Use</h2>
            
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                <p>
                  These cookies are required for the website to function properly. They enable core functionality like security,
                  network management, and accessibility. You cannot opt-out of these cookies.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Performance Cookies</h3>
                <p>
                  These cookies help us understand how users interact with our website. They collect information about pages
                  visited, errors encountered, and time spent on pages. This helps us improve our services.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Functional Cookies</h3>
                <p>
                  These cookies remember your preferences and choices (like language or username) so you don&apos;t have to
                  re-enter them on subsequent visits.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Marketing Cookies</h3>
                <p>
                  These cookies track your browsing activity and build a profile of your interests. This allows us to show
                  you relevant advertisements. You can opt-out of these cookies.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Third-Party Cookies</h3>
                <p>
                  Some cookies are placed by third-party services such as analytics providers and advertising networks. These
                  help us measure website performance and deliver targeted advertising.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">3. How We Use Cookies</h2>
            <ul className="space-y-2 ml-4 list-disc">
              <li>To maintain your session and keep you logged in</li>
              <li>To remember your preferences and settings</li>
              <li>To analyze website traffic and user behavior</li>
              <li>To provide personalized content and recommendations</li>
              <li>To measure advertising campaign performance</li>
              <li>To prevent fraud and enhance security</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">4. Other Tracking Technologies</h2>
            <p>
              In addition to cookies, we may use other tracking technologies including web beacons, pixels, and similar
              tracking devices. These work in conjunction with cookies to track user activity and improve our services.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">5. Managing Your Cookies</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Browser Settings</h3>
                <p>
                  Most web browsers allow you to control cookies through their settings. You can set your browser to refuse
                  all cookies or alert you when a cookie is being sent. However, disabling cookies may affect website functionality.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Cookie Consent</h3>
                <p>
                  When you first visit our website, you will see a cookie consent banner. You can choose which types of cookies
                  to allow. You can change your preferences at any time.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Opt-Out Options</h3>
                <p>
                  You can opt-out of marketing cookies and third-party tracking through industry opt-out tools like the Digital
                  Advertising Alliance (DAA) opt-out tool.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">6. Do Not Track</h2>
            <p>
              Some browsers include a &ldquo;Do Not Track&rdquo; feature. Our website currently does not respond to Do Not
              Track signals, but you can use other tools to control cookies and third-party tracking.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">7. Data Retention</h2>
            <p>
              Session cookies are deleted when you close your browser. Persistent cookies remain on your device until they
              expire or you manually delete them. The expiration time varies depending on the cookie type, but typically ranges
              from a few days to a few years.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">8. International Data Transfers</h2>
            <p>
              Cookie information may be transferred, stored, and processed in countries other than your country of residence.
              These countries may not have the same data protection laws. By using our website, you consent to such transfers.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">9. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of significant changes by posting the
              updated policy on this page and updating the &ldquo;last updated&rdquo; date.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">10. Contact Us</h2>
            <p>
              If you have questions about this Cookie Policy or our use of cookies, please contact us at:
            </p>
            <div className="mt-4">
              <p className="font-semibold text-foreground">EnterNet Privacy Team</p>
              <p>Email: privacy@enternet.io</p>
              <p>Address: Bangalore, India</p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 mt-8">
            <h3 className="font-semibold text-foreground mb-3">Cookie Consent Settings</h3>
            <p className="text-sm mb-4">
              Manage your cookie preferences below:
            </p>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked disabled className="rounded" />
                <span className="text-sm">Essential Cookies (Required)</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-sm">Performance & Analytics Cookies</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-sm">Functional Cookies</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Marketing & Advertising Cookies</span>
              </label>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
