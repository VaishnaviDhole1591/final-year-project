import Link from 'next/link'
import { ArrowRight, FileText, Users, Calendar, BookOpen, CheckCircle2, Lightbulb, Rocket, Target, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { testimonials } from '@/lib/data'

const features = [
  {
    icon: FileText,
    title: 'Government Schemes',
    description: 'Discover and apply for 100+ government schemes tailored for startups and MSMEs.',
    href: '/schemes'
  },
  {
    icon: Users,
    title: 'Entrepreneur Network',
    description: 'Connect with founders, mentors, and investors across India.',
    href: '/network'
  },
  {
    icon: Calendar,
    title: 'Events & Incubators',
    description: 'Access workshops, bootcamps, and incubation programs.',
    href: '/events'
  },
  {
    icon: BookOpen,
    title: 'Resources',
    description: 'Templates, guides, and articles to accelerate your startup journey.',
    href: '/resources'
  }
]

const steps = [
  {
    icon: Lightbulb,
    title: 'Create Your Profile',
    description: 'Sign up and build your entrepreneur profile to get personalized recommendations.'
  },
  {
    icon: Target,
    title: 'Discover Opportunities',
    description: 'Browse schemes, events, and resources matched to your business needs.'
  },
  {
    icon: Rocket,
    title: 'Apply & Connect',
    description: 'Apply for schemes, register for events, and connect with fellow entrepreneurs.'
  },
  {
    icon: CheckCircle2,
    title: 'Grow Your Business',
    description: 'Leverage funding, mentorship, and network to scale your startup.'
  }
]

const stats = [
  { value: '10,000+', label: 'Entrepreneurs' },
  { value: '100+', label: 'Schemes' },
  { value: '500+', label: 'Events' },
  { value: '50+', label: 'Incubators' }
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-20 lg:py-32">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                The Future of{' '}
                <span className="text-primary">Entrepreneur Networks</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                Connect with entrepreneurs, discover government schemes, access incubators, and grow your business with India&apos;s premier startup platform.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/schemes">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Explore Schemes
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary lg:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-y border-border bg-card py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Everything you need to succeed
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                One platform for all your entrepreneurial needs
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Link key={feature.title} href={feature.href}>
                  <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="mt-4 text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How it works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get started in four simple steps
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.title} className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute top-8 left-1/2 hidden w-full lg:block" style={{ transform: 'translateX(50%)' }}>
                    {index < steps.length - 1 && (
                      <div className="h-0.5 w-full bg-border" />
                    )}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="border-y border-border bg-card py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What entrepreneurs say
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join thousands of entrepreneurs who trust EnterNet
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="relative">
                  <CardHeader>
                    <Quote className="h-8 w-8 text-primary/20" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 text-center sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to grow your startup?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
                Join EnterNet today and unlock access to government schemes, mentorship, and a thriving entrepreneur community.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/signup">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Create Free Account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
