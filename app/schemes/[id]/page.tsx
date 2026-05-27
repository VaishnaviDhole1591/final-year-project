import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, CheckCircle2, AlertCircle, Building2, MapPin, Wallet, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { schemes } from '@/lib/data'

interface SchemeDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function SchemeDetailPage({ params }: SchemeDetailPageProps) {
  const { id } = await params
  const scheme = schemes.find(s => s.id === id)

  if (!scheme) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="border-b border-border bg-card py-4">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link 
              href="/schemes"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Schemes
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Header */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="secondary">{scheme.fundingType}</Badge>
                    <Badge variant="outline">{scheme.industry}</Badge>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight text-balance">{scheme.title}</h1>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {scheme.description}
                  </p>
                </div>

                <Separator />

                {/* Benefits */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {scheme.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Eligibility */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-secondary" />
                      Eligibility Criteria
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{scheme.eligibility}</p>
                  </CardContent>
                </Card>

                {/* Application Steps */}
                <Card>
                  <CardHeader>
                    <CardTitle>How to Apply</CardTitle>
                    <CardDescription>
                      Follow these steps to apply for this scheme
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4">
                      {scheme.applicationSteps.map((step, index) => (
                        <li key={index} className="flex gap-4">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                            {index + 1}
                          </div>
                          <div className="flex-1 pt-1">
                            <p>{step}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info Card */}
                <Card className="sticky top-20">
                  <CardHeader>
                    <CardTitle>Quick Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Industry</p>
                        <p className="font-medium">{scheme.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{scheme.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Wallet className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Funding Type</p>
                        <p className="font-medium">{scheme.fundingType}</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <a
                        href={scheme.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full">
                          Apply Now
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                      <Button variant="outline" className="w-full">
                        Save for Later
                      </Button>
                    </div>

                    <p className="text-xs text-center text-muted-foreground">
                      You will be redirected to the official scheme portal
                    </p>
                  </CardContent>
                </Card>

                {/* Related Schemes */}
                <Card>
                  <CardHeader>
                    <CardTitle>Related Schemes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {schemes
                      .filter(s => s.id !== scheme.id && (s.fundingType === scheme.fundingType || s.industry === scheme.industry))
                      .slice(0, 3)
                      .map((relatedScheme) => (
                        <Link
                          key={relatedScheme.id}
                          href={`/schemes/${relatedScheme.id}`}
                          className="block rounded-lg border border-border p-3 transition-colors hover:bg-accent/50"
                        >
                          <h4 className="font-medium text-sm line-clamp-1">{relatedScheme.title}</h4>
                          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                            {relatedScheme.description}
                          </p>
                          <div className="mt-2 flex items-center text-xs text-primary">
                            Learn more
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </div>
                        </Link>
                      ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
