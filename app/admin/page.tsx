import { Users, FileText, Calendar, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { schemes, entrepreneurs, events, adminUsers } from '@/lib/data'

const stats = [
  {
    title: 'Total Users',
    value: adminUsers.length.toString(),
    change: '+12%',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Active Schemes',
    value: schemes.length.toString(),
    change: '+2',
    trend: 'up',
    icon: FileText,
  },
  {
    title: 'Upcoming Events',
    value: events.length.toString(),
    change: '+5',
    trend: 'up',
    icon: Calendar,
  },
  {
    title: 'Network Growth',
    value: '23%',
    change: '+8%',
    trend: 'up',
    icon: TrendingUp,
  },
]

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Monitor and manage the EnterNet platform
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
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                )}
                <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                  {stat.change}
                </span>
                <span>from last month</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
            <CardDescription>Latest user registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {adminUsers.slice(0, 4).map((user) => (
                <div key={user.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-medium ${user.status === 'Active' ? 'text-green-500' : 'text-yellow-500'}`}>
                      {user.status}
                    </p>
                    <p className="text-xs text-muted-foreground">{user.joinDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Schemes</CardTitle>
            <CardDescription>Recently added schemes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {schemes.slice(0, 4).map((scheme) => (
                <div key={scheme.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">{scheme.title}</p>
                      <p className="text-xs text-muted-foreground">{scheme.industry}</p>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground shrink-0">
                    {scheme.fundingType}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <button className="flex items-center gap-3 rounded-lg border border-border p-4 text-left transition-colors hover:bg-accent">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">Add User</p>
                <p className="text-xs text-muted-foreground">Create new user account</p>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-border p-4 text-left transition-colors hover:bg-accent">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">Add Scheme</p>
                <p className="text-xs text-muted-foreground">Create new scheme</p>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-border p-4 text-left transition-colors hover:bg-accent">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">Add Event</p>
                <p className="text-xs text-muted-foreground">Schedule new event</p>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-border p-4 text-left transition-colors hover:bg-accent">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">View Reports</p>
                <p className="text-xs text-muted-foreground">Analytics dashboard</p>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
