'use client'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-card to-background px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold text-foreground lg:text-5xl">
            Terms of Service
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
            <h2 className="mb-4 text-2xl font-bold text-foreground">1. Agreement to Terms</h2>
            <p>
              By accessing and using the EnterNet website and services, you accept and agree to be bound by and comply
              with these Terms of Service. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on
              EnterNet&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license,
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-2 ml-4 list-disc">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person</li>
              <li>Violate any laws or regulations</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">3. Disclaimer</h2>
            <p>
              The materials on EnterNet&apos;s website are provided on an &apos;as is&apos; basis. EnterNet makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
              of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">4. Limitations</h2>
            <p>
              In no event shall EnterNet or its suppliers be liable for any damages (including, without limitation, damages
              for loss of data or profit, or due to business interruption) arising out of the use or inability to use the
              materials on EnterNet&apos;s website, even if EnterNet or an authorized representative has been notified orally
              or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on EnterNet&apos;s website could include technical, typographical, or photographic
              errors. EnterNet does not warrant that any of the materials on its website are accurate, complete, or current.
              EnterNet may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">6. Links</h2>
            <p>
              EnterNet has not reviewed all of the sites linked to its website and is not responsible for the contents of
              any such linked site. The inclusion of any link does not imply endorsement by EnterNet of the site. Use of any
              such linked website is at the user&apos;s own risk.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">7. Modifications</h2>
            <p>
              EnterNet may revise these terms of service for its website at any time without notice. By using this website,
              you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India, and you
              irrevocably submit to the exclusive jurisdiction of the courts located in Bangalore.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">9. User Conduct</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="space-y-2 ml-4 list-disc">
              <li>Post or transmit any unlawful, threatening, abusive, defamatory, obscene, or otherwise objectionable material</li>
              <li>Disrupt the normal flow of dialogue within the website</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Engage in any form of harassment or bullying</li>
              <li>Violate any intellectual property rights</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">10. Termination</h2>
            <p>
              EnterNet may terminate or suspend your account immediately, without prior notice or liability, for any reason
              whatsoever, including if you breach the Terms of Service.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">11. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4">
              <p className="font-semibold text-foreground">EnterNet Legal Team</p>
              <p>Email: legal@enternet.io</p>
              <p>Address: Bangalore, India</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
