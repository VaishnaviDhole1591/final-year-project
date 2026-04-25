'use client'

import { Users, Target, Zap, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering entrepreneurs to discover government schemes and build meaningful networks.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a vibrant ecosystem where entrepreneurs support and learn from each other.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging technology to simplify access to opportunities and resources.',
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making entrepreneurship opportunities available to everyone, everywhere.',
    },
  ]

  const team = [
    { name: 'Priya Singh', role: 'Founder & CEO', bio: '15+ years in startup ecosystem' },
    { name: 'Raj Patel', role: 'CTO', bio: 'Former tech lead at major fintech' },
    { name: 'Aisha Khan', role: 'Head of Operations', bio: 'Government relations expertise' },
    { name: 'Dev Sharma', role: 'Product Lead', bio: 'Product design & UX specialist' },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-card to-background px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold text-foreground lg:text-5xl">
            About EnterNet
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Connecting entrepreneurs with opportunities and each other
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-foreground">Our Story</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              EnterNet was founded with a simple but powerful mission: to democratize access to entrepreneurial
              opportunities. We recognized that many aspiring entrepreneurs struggle to discover government schemes,
              connect with mentors, and find the resources they need to succeed.
            </p>
            <p>
              In 2023, our founding team came together with a vision to build a comprehensive platform that would
              serve as the go-to destination for entrepreneurs seeking funding, guidance, and community. Today, EnterNet
              has grown into a thriving ecosystem connecting thousands of entrepreneurs across India.
            </p>
            <p>
              Our platform combines cutting-edge technology with deep domain expertise to make entrepreneurship more
              accessible, transparent, and successful. We believe that with the right tools, knowledge, and connections,
              anyone can build a thriving business.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-y border-border bg-card px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground">Our Core Values</h2>
          <p className="mb-12 text-center text-muted-foreground">
            These principles guide everything we do at EnterNet
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-border bg-background p-6">
                <value.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground">Leadership Team</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Meet the people behind EnterNet
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent mx-auto">
                  <span className="text-2xl font-bold text-primary-foreground">{member.name[0]}</span>
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-accent">{member.role}</p>
                <p className="mt-2 text-xs text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">10K+</div>
              <p className="mt-2 text-muted-foreground">Active Entrepreneurs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">500+</div>
              <p className="mt-2 text-muted-foreground">Government Schemes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary">1M+</div>
              <p className="mt-2 text-muted-foreground">Total Funding Accessed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Join the EnterNet Community</h2>
          <p className="mb-8 text-muted-foreground">
            Start your entrepreneurial journey with access to schemes, network, and resources
          </p>
          <Link href="/signup">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
