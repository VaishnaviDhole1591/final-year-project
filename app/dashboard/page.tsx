import Link from 'next/link'
import { ArrowRight, FileText, Users, Calendar, TrendingUp, Eye, Bookmark, Bell } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { schemes, entrepreneurs, events } from '@/lib/data'

const stats = [
  {
    title: 'Recommended Schemes',
    value: '12',
    description: '+3 new this week',
    icon: FileText,
    trend: 'up'
  },
  {
    title: 'Connections',
    value: '48',
    description: '+5 pending requests',
    icon: Users,
    trend: 'up'
  },
  {
    title: 'Upcoming Events',
    value: '6',
    description: '2 this week',
    icon: Calendar,
    trend: 'neutral'
  },
  {
    title: 'Profile Views',
    value: '234',
    description: '+12% from last month',
    icon: Eye,
    trend: 'up'
  }
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Welcome back, John!</h1>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your entrepreneur journey
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                {stat.trend === 'up' && <TrendingUp className="h-3 w-3 text-green-500" />}
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recommended Schemes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recommended Schemes</CardTitle>
              <CardDescription>Based on your profile and industry</CardDescription>
            </div>
            <Link href="/schemes">
              <Button variant="ghost" size="sm">
                View all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {schemes.slice(0, 3).map((scheme) => (
              <div
                key={scheme.id}
                className="flex items-start gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-accent/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium leading-tight line-clamp-1">{scheme.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                    {scheme.description}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{scheme.fundingType}</Badge>
                    <span className="text-xs text-muted-foreground">{scheme.industry}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Events and programs you might like</CardDescription>
            </div>
            <Link href="/events">
              <Button variant="ghost" size="sm">
                View all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {events.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="flex items-start gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-accent/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/20">
                  <Calendar className="h-5 w-5 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium leading-tight line-clamp-1">{event.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    by {event.organizer}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{new Date(event.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>
                    <span>•</span>
                    <span>{event.mode}</span>
                  </div>
                </div>
                <Badge variant={event.mode === 'Online' ? 'default' : 'outline'} className="shrink-0">
                  {event.mode}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* New Connections */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Suggested Connections</CardTitle>
              <CardDescription>Entrepreneurs in your industry</CardDescription>
            </div>
            <Link href="/network">
              <Button variant="ghost" size="sm">
                View all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {entrepreneurs.slice(0, 4).map((person) => (
              <div
                key={person.id}
                className="flex items-center gap-4"
              >
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium leading-tight text-sm">{person.name}</h4>
                  <p className="text-xs text-muted-foreground truncate">
                    {person.title} at {person.company}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Connect
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <Bell className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm">
                  Your application for <span className="font-medium">Startup India Seed Fund</span> has been received
                </p>
                <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-medium">Priya Sharma</span> accepted your connection request
                </p>
                <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                <Calendar className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-sm">
                  Reminder: <span className="font-medium">AI Innovation Summit</span> starts tomorrow
                </p>
                <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <FileText className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm">
                  New scheme matching your profile: <span className="font-medium">Technology Development Board</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
