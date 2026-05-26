'use client'

import Link from 'next/link'
import { ArrowRight, FileText, Users, Calendar, BookOpen, CheckCircle2, Lightbulb, Rocket, Target, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useLanguage } from '@/contexts/language-context'
import { testimonials } from '@/lib/data'

const featuresData = [
  {
    icon: FileText,
    titleKey: 'home.features.schemes',
    descriptionKey: 'home.features.schemesDesc',
    href: '/schemes'
  },
  {
    icon: Users,
    titleKey: 'home.features.network',
    descriptionKey: 'home.features.networkDesc',
    href: '/network'
  },
  {
    icon: Calendar,
    titleKey: 'events.title',
    descriptionKey: 'events.subtitle',
    href: '/events'
  },
  {
    icon: BookOpen,
    titleKey: 'resources.title',
    descriptionKey: 'resources.subtitle',
    href: '/resources'
  }
]

const stepsData = [
  {
    icon: Lightbulb,
    titleEn: 'Create Your Profile',
    titleHi: 'अपनी प्रोफाइल बनाएं',
    descriptionEn: 'Sign up and build your entrepreneur profile to get personalized recommendations.',
    descriptionHi: 'व्यक्तिगत सिफारिशें पाने के लिए साइन अप करें और अपनी उद्यमी प्रोफाइल बनाएं।'
  },
  {
    icon: Target,
    titleEn: 'Discover Opportunities',
    titleHi: 'अवसर खोजें',
    descriptionEn: 'Browse schemes, events, and resources matched to your business needs.',
    descriptionHi: 'अपनी व्यावसायिक जरूरतों के अनुसार योजनाएं, कार्यक्रम और संसाधन ब्राउज़ करें।'
  },
  {
    icon: Rocket,
    titleEn: 'Apply & Connect',
    titleHi: 'आवेदन करें और जुड़ें',
    descriptionEn: 'Apply for schemes, register for events, and connect with fellow entrepreneurs.',
    descriptionHi: 'योजनाओं के लिए आवेदन करें, कार्यक्रमों के लिए पंजीकरण करें, और साथी उद्यमियों से जुड़ें।'
  },
  {
    icon: CheckCircle2,
    titleEn: 'Grow Your Business',
    titleHi: 'अपना व्यवसाय बढ़ाएं',
    descriptionEn: 'Leverage funding, mentorship, and network to scale your startup.',
    descriptionHi: 'अपने स्टार्टअप को बढ़ाने के लिए फंडिंग, मेंटरशिप और नेटवर्क का लाभ उठाएं।'
  }
]

export function HomeContent() {
  const { t, language } = useLanguage()

  const stats = [
    { value: '10,000+', label: language === 'en' ? 'Entrepreneurs' : 'उद्यमी' },
    { value: '30+', label: language === 'en' ? 'Schemes' : 'योजनाएं' },
    { value: '500+', label: language === 'en' ? 'Events' : 'कार्यक्रम' },
    { value: '50+', label: language === 'en' ? 'Incubators' : 'इनक्यूबेटर' }
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              {language === 'en' ? (
                <>
                  The Future of{' '}
                  <span className="text-primary">Entrepreneur Networks</span>
                </>
              ) : (
                <>
                  <span className="text-primary">उद्यमी नेटवर्क</span>{' '}
                  का भविष्य
                </>
              )}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              {language === 'en' 
                ? "Connect with entrepreneurs, discover government schemes, access incubators, and grow your business with India's premier startup platform."
                : "उद्यमियों से जुड़ें, सरकारी योजनाएं खोजें, इनक्यूबेटर तक पहुंचें, और भारत के प्रमुख स्टार्टअप प्लेटफॉर्म के साथ अपना व्यवसाय बढ़ाएं।"
              }
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  {language === 'en' ? 'Get Started' : 'शुरू करें'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/schemes">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  {t('home.hero.cta')}
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
              {language === 'en' ? 'Everything you need to succeed' : 'सफल होने के लिए आपको जो कुछ भी चाहिए'}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {language === 'en' ? 'One platform for all your entrepreneurial needs' : 'आपकी सभी उद्यमी जरूरतों के लिए एक प्लेटफॉर्म'}
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature) => (
              <Link key={feature.titleKey} href={feature.href}>
                <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="mt-4 text-lg">{t(feature.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {t(feature.descriptionKey)}
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
              {language === 'en' ? 'How it works' : 'यह कैसे काम करता है'}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {language === 'en' ? 'Get started in four simple steps' : 'चार सरल चरणों में शुरू करें'}
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stepsData.map((step, index) => (
              <div key={step.titleEn} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute top-8 left-1/2 hidden w-full lg:block" style={{ transform: 'translateX(50%)' }}>
                  {index < stepsData.length - 1 && (
                    <div className="h-0.5 w-full bg-border" />
                  )}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {language === 'en' ? step.titleEn : step.titleHi}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {language === 'en' ? step.descriptionEn : step.descriptionHi}
                </p>
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
              {language === 'en' ? 'What entrepreneurs say' : 'उद्यमी क्या कहते हैं'}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {language === 'en' ? 'Join thousands of entrepreneurs who trust EnterNet' : 'हजारों उद्यमियों से जुड़ें जो EnterNet पर भरोसा करते हैं'}
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
              {language === 'en' ? 'Ready to grow your startup?' : 'अपना स्टार्टअप बढ़ाने के लिए तैयार हैं?'}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
              {language === 'en' 
                ? 'Join EnterNet today and unlock access to government schemes, mentorship, and a thriving entrepreneur community.'
                : 'आज ही EnterNet से जुड़ें और सरकारी योजनाओं, मेंटरशिप और एक समृद्ध उद्यमी समुदाय तक पहुंच प्राप्त करें।'
              }
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  {language === 'en' ? 'Create Free Account' : 'मुफ्त खाता बनाएं'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
