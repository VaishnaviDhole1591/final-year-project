'use client'

import { useState } from 'react'
import { Building2, MapPin, Users, ExternalLink } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { EventCard } from '@/components/event-card'
import { SearchInput } from '@/components/search-input'
import { NoEventsFound } from '@/components/empty-state'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { events, incubators } from '@/lib/data'

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('events')

  const filteredEvents = events.filter(event => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      event.title.toLowerCase().includes(query) ||
      event.organizer.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query)
    )
  })

  const filteredIncubators = incubators.filter(incubator => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      incubator.name.toLowerCase().includes(query) ||
      incubator.location.toLowerCase().includes(query) ||
      incubator.programs.some(p => p.toLowerCase().includes(query))
    )
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight">Events & Incubators</h1>
            <p className="mt-2 text-muted-foreground">
              Discover workshops, bootcamps, and incubation programs to accelerate your startup
            </p>
            <div className="mt-6">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search events and incubators..."
                className="max-w-xl"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList>
                <TabsTrigger value="events">
                  Events ({filteredEvents.length})
                </TabsTrigger>
                <TabsTrigger value="incubators">
                  Incubators ({filteredIncubators.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="events" className="space-y-6">
                {filteredEvents.length === 0 ? (
                  <NoEventsFound />
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="incubators" className="space-y-6">
                {filteredIncubators.length === 0 ? (
                  <NoEventsFound />
                ) : (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredIncubators.map((incubator) => (
                      <Card key={incubator.id} className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/20">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                              <Building2 className="h-6 w-6 text-primary" />
                            </div>
                            <Badge variant="secondary">{incubator.startups}+ startups</Badge>
                          </div>
                          <CardTitle className="mt-4">{incubator.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {incubator.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium mb-2">Programs</h4>
                            <div className="flex flex-wrap gap-2">
                              {incubator.programs.map((program) => (
                                <Badge key={program} variant="outline" className="text-xs">
                                  {program}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-2">Facilities</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {incubator.facilities.slice(0, 3).map((facility) => (
                                <li key={facility} className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                  {facility}
                                </li>
                              ))}
                              {incubator.facilities.length > 3 && (
                                <li className="text-xs text-muted-foreground">
                                  +{incubator.facilities.length - 3} more
                                </li>
                              )}
                            </ul>
                          </div>
                          <a
                            href={incubator.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="outline" className="w-full">
                              Visit Website
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
