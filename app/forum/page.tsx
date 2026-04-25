'use client'

import { useState } from 'react'
import { MessageSquare, ThumbsUp, MessageCircle, Plus, TrendingUp, Clock, User } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SearchInput } from '@/components/search-input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { discussions } from '@/lib/data'

export default function ForumPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newQuestion, setNewQuestion] = useState({ title: '', content: '' })

  const filteredDiscussions = discussions.filter(discussion => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      discussion.title.toLowerCase().includes(query) ||
      discussion.author.toLowerCase().includes(query) ||
      discussion.tags.some(tag => tag.toLowerCase().includes(query))
    )
  })

  const sortedByRecent = [...filteredDiscussions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const sortedByPopular = [...filteredDiscussions].sort(
    (a, b) => b.upvotes - a.upvotes
  )

  const handleSubmitQuestion = () => {
    // In a real app, this would submit to an API
    console.log('Submitting question:', newQuestion)
    setIsDialogOpen(false)
    setNewQuestion({ title: '', content: '' })
  }

  const DiscussionCard = ({ discussion }: { discussion: typeof discussions[0] }) => (
    <Card className="transition-all duration-200 hover:shadow-md hover:border-primary/20 cursor-pointer">
      <CardContent className="pt-6">
        <div className="flex gap-4">
          {/* Vote section */}
          <div className="flex flex-col items-center gap-1 text-muted-foreground">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ThumbsUp className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">{discussion.upvotes}</span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold leading-tight hover:text-primary transition-colors">
              {discussion.title}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {discussion.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Avatar className="h-5 w-5">
                  <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                    {discussion.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span>{discussion.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{new Date(discussion.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-3 w-3" />
                <span>{discussion.replies} replies</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Community Forum</h1>
                <p className="mt-2 text-muted-foreground">
                  Ask questions, share knowledge, and connect with fellow entrepreneurs
                </p>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Ask Question
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Ask a Question</DialogTitle>
                    <DialogDescription>
                      Post your question to the community. Be specific and provide context.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Question Title</Label>
                      <Input
                        id="title"
                        placeholder="What's your question?"
                        value={newQuestion.title}
                        onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="content">Details</Label>
                      <Textarea
                        id="content"
                        placeholder="Provide more context about your question..."
                        rows={5}
                        value={newQuestion.content}
                        onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSubmitQuestion}>
                      Post Question
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div className="mt-6">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search discussions..."
                className="max-w-xl"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-4">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Tabs defaultValue="recent" className="space-y-6">
                  <TabsList>
                    <TabsTrigger value="recent" className="gap-2">
                      <Clock className="h-4 w-4" />
                      Recent
                    </TabsTrigger>
                    <TabsTrigger value="popular" className="gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Popular
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="recent" className="space-y-4">
                    {sortedByRecent.map((discussion) => (
                      <DiscussionCard key={discussion.id} discussion={discussion} />
                    ))}
                  </TabsContent>

                  <TabsContent value="popular" className="space-y-4">
                    {sortedByPopular.map((discussion) => (
                      <DiscussionCard key={discussion.id} discussion={discussion} />
                    ))}
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Popular Tags</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">Funding</Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">DPIIT</Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">Government Schemes</Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">Co-founder</Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">Seed Round</Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">Legal</Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">Marketing</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Community Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Total Discussions</span>
                      <span className="font-semibold">1,234</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Active Members</span>
                      <span className="font-semibold">567</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Answers This Week</span>
                      <span className="font-semibold">89</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Top Contributors</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {['Priya Sharma', 'Rahul Verma', 'Neha Gupta'].map((name, index) => (
                      <div key={name} className="flex items-center gap-3">
                        <span className="text-sm font-medium text-muted-foreground w-4">
                          {index + 1}
                        </span>
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                            {name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{name}</span>
                      </div>
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
