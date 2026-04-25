'use client'

import { MapPin, Briefcase, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function CareersPage() {
  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Build scalable systems serving thousands of entrepreneurs.',
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'Mumbai, India',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Lead product strategy and vision for EnterNet platform.',
    },
    {
      id: 3,
      title: 'Growth Marketing Manager',
      department: 'Marketing',
      location: 'Delhi, India',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Drive user acquisition and engagement across channels.',
    },
    {
      id: 4,
      title: 'Business Development Executive',
      department: 'Business',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '1+ years',
      description: 'Build partnerships with government agencies and NGOs.',
    },
    {
      id: 5,
      title: 'Customer Success Manager',
      department: 'Support',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Ensure entrepreneurs get maximum value from EnterNet.',
    },
    {
      id: 6,
      title: 'Content Writer & Editor',
      department: 'Content',
      location: 'Remote',
      type: 'Full-time',
      experience: '1+ years',
      description: 'Create compelling content about entrepreneurship and schemes.',
    },
  ]

  const perks = [
    'Competitive salary and equity options',
    'Health insurance and wellness programs',
    'Professional development budget',
    'Flexible work arrangements',
    'Collaborative and innovative culture',
    'Impact-driven work',
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-card to-background px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold text-foreground lg:text-5xl">
            Careers at EnterNet
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Join us in empowering entrepreneurs to succeed
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-foreground">Why Work at EnterNet?</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              At EnterNet, we&apos;re on a mission to democratize entrepreneurship. We believe that technology and
              community can transform lives and create lasting economic impact. If you&apos;re passionate about this
              mission, you&apos;ll find a home here.
            </p>
            <p>
              Our team is made up of talented individuals from diverse backgrounds who are united by a common goal: to
              make entrepreneurship accessible to everyone. We foster an environment of continuous learning,
              collaboration, and innovation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6">
                <div className="h-2 w-8 rounded bg-primary"></div>
                <p className="mt-4 font-medium text-foreground">{perk}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="border-y border-border bg-card px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Open Positions</h2>
          <p className="mb-12 text-muted-foreground">
            We&apos;re hiring talented people for these roles
          </p>

          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={job.id} className="border border-border bg-background hover:bg-card/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>{job.department}</CardDescription>
                    </div>
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {job.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{job.description}</p>
                  <div className="flex flex-wrap gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      {job.experience}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      Posted recently
                    </div>
                  </div>
                  <Button>View Details & Apply</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-foreground">Our Culture</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-accent">Ownership</h3>
              <p className="text-muted-foreground">
                We trust our team members to take ownership of their work and make decisions that impact the company.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-accent">Learning</h3>
              <p className="text-muted-foreground">
                We invest in continuous learning and provide resources for professional growth and development.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-accent">Collaboration</h3>
              <p className="text-muted-foreground">
                We work together across teams and disciplines to build something greater than we could alone.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-accent">Impact</h3>
              <p className="text-muted-foreground">
                Every day, our work directly impacts thousands of entrepreneurs and their families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Make an Impact?</h2>
          <p className="mb-8 text-muted-foreground">
            Submit your resume and let&apos;s talk about how you can contribute to EnterNet&apos;s mission.
          </p>
          <Button size="lg">Apply Now</Button>
        </div>
      </section>
    </main>
  )
}
