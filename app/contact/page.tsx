'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitMessage('Thank you for your message! We&apos;ll get back to you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setIsSubmitting(false)

    // Clear message after 3 seconds
    setTimeout(() => setSubmitMessage(''), 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@enternet.io',
      href: 'mailto:support@enternet.io',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 (555) 123-4567',
      href: 'tel:+915551234567',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Bangalore, India',
      href: '#',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-card to-background px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold text-foreground lg:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <Card key={info.title} className="border border-border">
                <CardContent className="pt-6">
                  <a href={info.href} className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}

            {/* Business Hours */}
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium text-foreground">Closed</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-border">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We&apos;ll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2 w-full rounded-md border border-input bg-input px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  {submitMessage && (
                    <div className="rounded-md bg-green-500/10 p-4 text-sm text-green-500">
                      {submitMessage}
                    </div>
                  )}

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is the response time for inquiries?',
                a: 'We typically respond to all inquiries within 24 hours during business days.',
              },
              {
                q: 'How can I report a technical issue?',
                a: 'Please email support@enternet.io with details and screenshots if possible.',
              },
              {
                q: 'Can I schedule a demo?',
                a: 'Yes! Fill out the contact form with "Demo Request" as the subject.',
              },
              {
                q: 'Do you offer API access?',
                a: 'Yes, we offer API access for enterprise customers. Contact our sales team.',
              },
            ].map((item, index) => (
              <Card key={index} className="border border-border bg-background">
                <CardHeader>
                  <CardTitle className="text-lg">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
