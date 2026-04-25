'use client'

import { useState } from 'react'
import { FileText, Download, BookOpen, FileSpreadsheet, Newspaper } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SearchInput } from '@/components/search-input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { resources } from '@/lib/data'

const getResourceIcon = (type: string) => {
  switch (type) {
    case 'Guide':
      return BookOpen
    case 'Template':
      return FileSpreadsheet
    case 'Article':
      return Newspaper
    default:
      return FileText
  }
}

const getResourceColor = (type: string) => {
  switch (type) {
    case 'Guide':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
    case 'Template':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
    case 'Article':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'
  }
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('all')

  const filteredResources = resources.filter(resource => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const matchesSearch = 
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.type.toLowerCase().includes(query)
      if (!matchesSearch) return false
    }

    // Tab filter
    if (activeTab !== 'all' && resource.type.toLowerCase() !== activeTab.toLowerCase()) {
      return false
    }

    return true
  })

  const guides = resources.filter(r => r.type === 'Guide')
  const templates = resources.filter(r => r.type === 'Template')
  const articles = resources.filter(r => r.type === 'Article')

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight">Resource Center</h1>
            <p className="mt-2 text-muted-foreground">
              Guides, templates, and articles to help you build and grow your startup
            </p>
            <div className="mt-6">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search resources..."
                className="max-w-xl"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border py-6">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{guides.length}</div>
                <div className="text-sm text-muted-foreground">Guides</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{templates.length}</div>
                <div className="text-sm text-muted-foreground">Templates</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{articles.length}</div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList>
                <TabsTrigger value="all">All ({resources.length})</TabsTrigger>
                <TabsTrigger value="guide">Guides ({guides.length})</TabsTrigger>
                <TabsTrigger value="template">Templates ({templates.length})</TabsTrigger>
                <TabsTrigger value="article">Articles ({articles.length})</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="space-y-6">
                {filteredResources.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">No resources found</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Try adjusting your search or filters
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredResources.map((resource) => {
                      const Icon = getResourceIcon(resource.type)
                      return (
                        <Card key={resource.id} className="group h-full transition-all duration-200 hover:shadow-lg hover:border-primary/20">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${getResourceColor(resource.type).split(' ').slice(0, 1).join(' ')}`}>
                                <Icon className={`h-6 w-6 ${getResourceColor(resource.type).split(' ').slice(1).join(' ')}`} />
                              </div>
                              <Badge className={getResourceColor(resource.type)}>
                                {resource.type}
                              </Badge>
                            </div>
                            <CardTitle className="mt-4 text-lg line-clamp-2">{resource.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <CardDescription className="line-clamp-2">
                              {resource.description}
                            </CardDescription>
                            <div className="flex items-center justify-between pt-2">
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Download className="h-4 w-4" />
                                <span>{resource.downloads.toLocaleString()} downloads</span>
                              </div>
                              <Button size="sm">
                                Download
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-card py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Have a resource to share?</h2>
              <p className="mt-2 text-muted-foreground">
                Help fellow entrepreneurs by contributing your templates, guides, or articles
              </p>
              <Button className="mt-6">
                Submit Resource
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
