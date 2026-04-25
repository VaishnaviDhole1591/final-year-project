'use client'

import { Calendar, User, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: '5 Government Schemes Every Entrepreneur Should Know About',
      excerpt: 'Discover the top government schemes that can provide funding and support for your startup.',
      author: 'Priya Singh',
      date: 'March 15, 2024',
      category: 'Schemes',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'How to Build a Strong Entrepreneurial Network',
      excerpt: 'Learn the strategies successful entrepreneurs use to build meaningful professional relationships.',
      author: 'Raj Patel',
      date: 'March 10, 2024',
      category: 'Networking',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Scaling Your Startup: Lessons from Successful Founders',
      excerpt: 'Real-world insights from founders who scaled their companies from zero to millions.',
      author: 'Aisha Khan',
      date: 'March 5, 2024',
      category: 'Growth',
      readTime: '8 min read',
    },
    {
      id: 4,
      title: 'Financial Management Tips for New Entrepreneurs',
      excerpt: 'Master the basics of financial management to keep your startup healthy and profitable.',
      author: 'Dev Sharma',
      date: 'February 28, 2024',
      category: 'Finance',
      readTime: '6 min read',
    },
    {
      id: 5,
      title: 'The Role of Technology in Modern Entrepreneurship',
      excerpt: 'How technology is transforming the way entrepreneurs build, market, and scale businesses.',
      author: 'Priya Singh',
      date: 'February 20, 2024',
      category: 'Technology',
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'Women Entrepreneurs: Breaking Barriers and Building Empires',
      excerpt: 'Inspiring stories of women founders and the resources available to support them.',
      author: 'Aisha Khan',
      date: 'February 15, 2024',
      category: 'Featured',
      readTime: '10 min read',
    },
  ]

  const categories = ['All', 'Schemes', 'Networking', 'Growth', 'Finance', 'Technology', 'Featured']

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-card to-background px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold text-foreground lg:text-5xl">
            EnterNet Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Insights, stories, and resources for ambitious entrepreneurs
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Card className="border border-border bg-gradient-to-r from-primary/10 to-accent/10 overflow-hidden">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="h-64 rounded-lg bg-gradient-to-br from-primary to-accent md:col-span-1"></div>
              <div className="md:col-span-2 flex flex-col justify-center p-8">
                <span className="inline-block w-fit rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                  Featured
                </span>
                <h2 className="mt-4 text-2xl font-bold text-foreground">
                  Women Entrepreneurs: Breaking Barriers and Building Empires
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Inspiring stories of women founders and the resources available to support them on their journey to success.
                </p>
                <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Aisha Khan
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    February 15, 2024
                  </div>
                </div>
                <Button className="mt-6 w-fit">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-border bg-card px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-background text-foreground hover:bg-card'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.id} className="border border-border flex flex-col">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="mt-4 line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="space-y-4 border-t border-border pt-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{article.author}</span>
                      <span>{article.date}</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-border bg-card px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground">Stay Updated</h2>
          <p className="mt-4 text-muted-foreground">
            Subscribe to our newsletter to get the latest articles, tips, and resources delivered to your inbox.
          </p>
          <div className="mt-8 flex gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-md border border-input bg-input px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
