import Link from 'next/link'
import { MapPin, Building2, Wallet } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface SchemeCardProps {
  scheme: {
    id: string
    title: string
    description: string
    eligibility: string
    industry: string
    location: string
    fundingType: string
  }
}

export function SchemeCard({ scheme }: SchemeCardProps) {
  return (
    <Card className="group h-full transition-all duration-200 hover:shadow-lg hover:border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg leading-tight line-clamp-2">{scheme.title}</CardTitle>
          <Badge variant="secondary" className="shrink-0">{scheme.fundingType}</Badge>
        </div>
        <CardDescription className="line-clamp-2 mt-2">
          {scheme.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{scheme.industry}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{scheme.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Wallet className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{scheme.eligibility}</span>
          </div>
        </div>
        <Link href={`/schemes/${scheme.id}`} className="block">
          <Button className="w-full" variant="outline">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
