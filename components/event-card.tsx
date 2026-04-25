import { Calendar, Clock, MapPin, Users, Video, Building } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface EventCardProps {
  event: {
    id: string
    title: string
    organizer: string
    date: string
    time: string
    mode: string
    location?: string
    description: string
    registrations: number
  }
}

export function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const getModeIcon = () => {
    if (event.mode === 'Online') return <Video className="h-3 w-3" />
    if (event.mode === 'Offline') return <Building className="h-3 w-3" />
    return <Video className="h-3 w-3" />
  }

  const getModeColor = () => {
    if (event.mode === 'Online') return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
    if (event.mode === 'Offline') return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
    return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100'
  }

  return (
    <Card className="group h-full transition-all duration-200 hover:shadow-lg hover:border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle className="text-lg leading-tight line-clamp-2">{event.title}</CardTitle>
            <CardDescription className="mt-1">
              by {event.organizer}
            </CardDescription>
          </div>
          <Badge className={`shrink-0 ${getModeColor()}`}>
            {getModeIcon()}
            <span className="ml-1">{event.mode}</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 flex-shrink-0" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span>{event.time}</span>
          </div>
          {event.location && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span>{event.location}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 flex-shrink-0" />
            <span>{event.registrations} registered</span>
          </div>
        </div>
        <Button className="w-full">Apply Now</Button>
      </CardContent>
    </Card>
  )
}
