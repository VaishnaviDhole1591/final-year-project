import { MapPin, Building2, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface EntrepreneurCardProps {
  entrepreneur: {
    id: string
    name: string
    title: string
    company: string
    industry: string
    location: string
    bio: string
    connections: number
  }
}

export function EntrepreneurCard({ entrepreneur }: EntrepreneurCardProps) {
  return (
    <Card className="group h-full transition-all duration-200 hover:shadow-lg hover:border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
              {entrepreneur.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base leading-tight">{entrepreneur.name}</CardTitle>
            <CardDescription className="text-sm mt-0.5">
              {entrepreneur.title} at {entrepreneur.company}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{entrepreneur.bio}</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            <Building2 className="mr-1 h-3 w-3" />
            {entrepreneur.industry}
          </Badge>
          <Badge variant="outline" className="text-xs">
            <MapPin className="mr-1 h-3 w-3" />
            {entrepreneur.location}
          </Badge>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{entrepreneur.connections} connections</span>
          </div>
          <Button size="sm">Connect</Button>
        </div>
      </CardContent>
    </Card>
  )
}
