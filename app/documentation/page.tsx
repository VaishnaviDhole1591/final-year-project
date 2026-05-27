'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Database, 
  GitBranch, 
  Layers, 
  Activity, 
  Server, 
  Map, 
  Layout,
  ArrowRight,
  ArrowDown,
  Circle,
  Square,
  Diamond,
  Users,
  FileText,
  Calendar,
  MessageSquare,
  BookOpen,
  Shield,
  Home,
  Settings,
  Search
} from 'lucide-react'

export default function DocumentationPage() {
  const [activeTab, setActiveTab] = useState('er-diagram')

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">System Documentation</h1>
            <p className="mt-2 text-muted-foreground">
              Technical diagrams and architecture documentation for EnterNet - MSME Entrepreneur Platform
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0">
              <TabsTrigger value="er-diagram" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Database className="mr-2 h-4 w-4" />
                ER Diagram
              </TabsTrigger>
              <TabsTrigger value="flow-diagram" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <GitBranch className="mr-2 h-4 w-4" />
                Flow Diagram
              </TabsTrigger>
              <TabsTrigger value="block-diagram" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Layers className="mr-2 h-4 w-4" />
                Block Diagram
              </TabsTrigger>
              <TabsTrigger value="dfd" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Activity className="mr-2 h-4 w-4" />
                DFD
              </TabsTrigger>
              <TabsTrigger value="architecture" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Server className="mr-2 h-4 w-4" />
                System Architecture
              </TabsTrigger>
              <TabsTrigger value="sitemap" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Map className="mr-2 h-4 w-4" />
                Site Map
              </TabsTrigger>
              <TabsTrigger value="wireframes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Layout className="mr-2 h-4 w-4" />
                Wireframes
              </TabsTrigger>
            </TabsList>

            {/* ER Diagram */}
            <TabsContent value="er-diagram" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Entity-Relationship Diagram
                  </CardTitle>
                  <CardDescription>
                    Database schema showing entities, attributes, and relationships
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <svg viewBox="0 0 1200 800" className="w-full min-w-[800px] h-auto">
                      {/* Background */}
                      <rect width="1200" height="800" fill="transparent" />
                      
                      {/* Users/Profiles Entity */}
                      <g transform="translate(100, 50)">
                        <rect width="200" height="220" rx="8" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="2" />
                        <rect width="200" height="40" rx="8" fill="hsl(var(--primary))" />
                        <text x="100" y="26" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">PROFILES</text>
                        <text x="15" y="65" fill="currentColor" fontSize="12">PK id: UUID</text>
                        <text x="15" y="85" fill="currentColor" fontSize="12">email: VARCHAR</text>
                        <text x="15" y="105" fill="currentColor" fontSize="12">first_name: VARCHAR</text>
                        <text x="15" y="125" fill="currentColor" fontSize="12">last_name: VARCHAR</text>
                        <text x="15" y="145" fill="currentColor" fontSize="12">avatar_url: TEXT</text>
                        <text x="15" y="165" fill="currentColor" fontSize="12">industry: VARCHAR</text>
                        <text x="15" y="185" fill="currentColor" fontSize="12">location: VARCHAR</text>
                        <text x="15" y="205" fill="currentColor" fontSize="12">created_at: TIMESTAMP</text>
                      </g>

                      {/* Schemes Entity */}
                      <g transform="translate(500, 50)">
                        <rect width="200" height="260" rx="8" fill="hsl(var(--secondary))" opacity="0.1" stroke="hsl(var(--secondary))" strokeWidth="2" />
                        <rect width="200" height="40" rx="8" fill="hsl(var(--secondary))" />
                        <text x="100" y="26" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">SCHEMES</text>
                        <text x="15" y="65" fill="currentColor" fontSize="12">PK id: UUID</text>
                        <text x="15" y="85" fill="currentColor" fontSize="12">title: VARCHAR</text>
                        <text x="15" y="105" fill="currentColor" fontSize="12">description: TEXT</text>
                        <text x="15" y="125" fill="currentColor" fontSize="12">eligibility: TEXT</text>
                        <text x="15" y="145" fill="currentColor" fontSize="12">benefits: JSONB</text>
                        <text x="15" y="165" fill="currentColor" fontSize="12">industry: VARCHAR</text>
                        <text x="15" y="185" fill="currentColor" fontSize="12">funding_type: VARCHAR</text>
                        <text x="15" y="205" fill="currentColor" fontSize="12">category: VARCHAR</text>
                        <text x="15" y="225" fill="currentColor" fontSize="12">ministry: VARCHAR</text>
                        <text x="15" y="245" fill="currentColor" fontSize="12">external_link: TEXT</text>
                      </g>

                      {/* Events Entity */}
                      <g transform="translate(900, 50)">
                        <rect width="200" height="220" rx="8" fill="hsl(var(--accent))" opacity="0.2" stroke="hsl(var(--foreground))" strokeWidth="2" />
                        <rect width="200" height="40" rx="8" fill="hsl(var(--foreground))" />
                        <text x="100" y="26" textAnchor="middle" fill="hsl(var(--background))" fontWeight="bold" fontSize="14">EVENTS</text>
                        <text x="15" y="65" fill="currentColor" fontSize="12">PK id: UUID</text>
                        <text x="15" y="85" fill="currentColor" fontSize="12">title: VARCHAR</text>
                        <text x="15" y="105" fill="currentColor" fontSize="12">description: TEXT</text>
                        <text x="15" y="125" fill="currentColor" fontSize="12">date: TIMESTAMP</text>
                        <text x="15" y="145" fill="currentColor" fontSize="12">mode: VARCHAR</text>
                        <text x="15" y="165" fill="currentColor" fontSize="12">location: VARCHAR</text>
                        <text x="15" y="185" fill="currentColor" fontSize="12">FK organizer_id: UUID</text>
                        <text x="15" y="205" fill="currentColor" fontSize="12">capacity: INTEGER</text>
                      </g>

                      {/* User Scheme Applications */}
                      <g transform="translate(300, 350)">
                        <rect width="220" height="160" rx="8" fill="hsl(var(--destructive))" opacity="0.1" stroke="hsl(var(--destructive))" strokeWidth="2" />
                        <rect width="220" height="40" rx="8" fill="hsl(var(--destructive))" />
                        <text x="110" y="26" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">USER_SCHEME_APPLICATIONS</text>
                        <text x="15" y="65" fill="currentColor" fontSize="12">PK id: UUID</text>
                        <text x="15" y="85" fill="currentColor" fontSize="12">FK user_id: UUID</text>
                        <text x="15" y="105" fill="currentColor" fontSize="12">FK scheme_id: UUID</text>
                        <text x="15" y="125" fill="currentColor" fontSize="12">status: VARCHAR</text>
                        <text x="15" y="145" fill="currentColor" fontSize="12">application_date: TIMESTAMP</text>
                      </g>

                      {/* Connections Entity */}
                      <g transform="translate(100, 350)">
                        <rect width="160" height="140" rx="8" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="2" />
                        <rect width="160" height="40" rx="8" fill="hsl(var(--primary))" />
                        <text x="80" y="26" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">CONNECTIONS</text>
                        <text x="15" y="65" fill="currentColor" fontSize="12">PK id: UUID</text>
                        <text x="15" y="85" fill="currentColor" fontSize="12">FK requester_id: UUID</text>
                        <text x="15" y="105" fill="currentColor" fontSize="12">FK receiver_id: UUID</text>
                        <text x="15" y="125" fill="currentColor" fontSize="12">status: VARCHAR</text>
                      </g>

                      {/* Forum Threads */}
                      <g transform="translate(100, 550)">
                        <rect width="180" height="160" rx="8" fill="hsl(var(--secondary))" opacity="0.1" stroke="hsl(var(--secondary))" strokeWidth="2" />
                        <rect width="180" height="40" rx="8" fill="hsl(var(--secondary))" />
                        <text x="90" y="26" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">FORUM_THREADS</text>
                        <text x="15" y="65" fill="currentColor" fontSize="12">PK id: UUID</text>
                        <text x="15" y="85" fill="currentColor" fontSize="12">title: VARCHAR</text>
                        <text x="15" y="105" fill="currentColor" fontSize="12">content: TEXT</text>
                        <text x="15" y="125" fill="currentColor" fontSize="12">FK author_id: UUID</text>
                        <text x="15" y="145" fill="currentColor" fontSize="12">created_at: TIMESTAMP</text>
                      </g>

                      {/* Forum Replies */}
                      <g transform="translate(320, 550)">
                        <rect width="180" height="140" rx="8" fill="hsl(var(--secondary))" opacity="0.1" stroke="hsl(var(--secondary))" strokeWidth="2" />
                        <rect width="180" height="40" rx="8" fill="hsl(var(--secondary))" />
                        <text x="90" y="26" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">FORUM_REPLIES</text>
                        <text x="15" y="65" fill="currentColor" fontSize="12">PK id: UUID</text>
                        <text x="15" y="85" fill="currentColor" fontSize="12">FK thread_id: UUID</text>
                        <text x="15" y="105" fill="currentColor" fontSize="12">FK author_id: UUID</text>
                        <text x="15" y="125" fill="currentColor" fontSize="12">content: TEXT</text>
                      </g>

                      {/* Resources */}
                      <g transform="translate(540, 550)">
                        <rect width="180" height="160" rx="8" fill="hsl(var(--accent))" opacity="0.2" stroke="hsl(var(--foreground))" strokeWidth="2" />
                        <rect width="180" height="40" rx="8" fill="hsl(var(--foreground))" />
                        <text x="90" y="26" textAnchor="middle" fill="hsl(var(--background))" fontWeight="bold" fontSize="14">RESOURCES</text>
                        <text x="15" y="65" fill="currentColor" fontSize="12">PK id: UUID</text>
                        <text x="15" y="85" fill="currentColor" fontSize="12">title: VARCHAR</text>
                        <text x="15" y="105" fill="currentColor" fontSize="12">category: VARCHAR</text>
                        <text x="15" y="125" fill="currentColor" fontSize="12">url: TEXT</text>
                        <text x="15" y="145" fill="currentColor" fontSize="12">FK creator_id: UUID</text>
                      </g>

                      {/* Relationship Lines */}
                      {/* Profiles to Connections */}
                      <line x1="200" y1="270" x2="180" y2="350" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
                      
                      {/* Profiles to User_Scheme_Applications */}
                      <line x1="300" y1="200" x2="350" y2="350" stroke="currentColor" strokeWidth="2" />
                      
                      {/* Schemes to User_Scheme_Applications */}
                      <line x1="500" y1="250" x2="450" y2="350" stroke="currentColor" strokeWidth="2" />
                      
                      {/* Profiles to Events (organizer) */}
                      <path d="M 300 150 Q 600 150 900 150" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                      
                      {/* Profiles to Forum Threads */}
                      <line x1="200" y1="270" x2="190" y2="550" stroke="currentColor" strokeWidth="2" />
                      
                      {/* Forum Threads to Forum Replies */}
                      <line x1="280" y1="630" x2="320" y2="630" stroke="currentColor" strokeWidth="2" />
                      
                      {/* Profiles to Resources */}
                      <path d="M 250 270 Q 400 400 630 550" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />

                      {/* Legend */}
                      <g transform="translate(800, 400)">
                        <rect width="300" height="180" rx="8" fill="hsl(var(--muted))" opacity="0.5" stroke="hsl(var(--border))" />
                        <text x="20" y="30" fill="currentColor" fontWeight="bold" fontSize="14">Legend</text>
                        <line x1="20" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="2" />
                        <text x="70" y="55" fill="currentColor" fontSize="12">One-to-Many</text>
                        <line x1="20" y1="80" x2="60" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                        <text x="70" y="85" fill="currentColor" fontSize="12">Foreign Key Reference</text>
                        <rect x="20" y="100" width="15" height="15" fill="hsl(var(--primary))" rx="2" />
                        <text x="45" y="112" fill="currentColor" fontSize="12">User/Profile Entities</text>
                        <rect x="20" y="125" width="15" height="15" fill="hsl(var(--secondary))" rx="2" />
                        <text x="45" y="137" fill="currentColor" fontSize="12">Content Entities</text>
                        <rect x="20" y="150" width="15" height="15" fill="hsl(var(--destructive))" rx="2" />
                        <text x="45" y="162" fill="currentColor" fontSize="12">Junction Tables</text>
                      </g>

                      {/* Arrow Marker Definition */}
                      <defs>
                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                          <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
                        </marker>
                      </defs>
                    </svg>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-semibold text-primary">Primary Entities</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>Profiles - User information</li>
                        <li>Schemes - Government schemes</li>
                        <li>Events - Workshops & programs</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-semibold text-secondary">Content Entities</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>Forum Threads - Discussions</li>
                        <li>Forum Replies - Thread responses</li>
                        <li>Resources - Learning materials</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-semibold text-destructive">Junction Tables</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>User_Scheme_Applications</li>
                        <li>Connections</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Flow Diagram */}
            <TabsContent value="flow-diagram" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-primary" />
                    User Flow Diagram
                  </CardTitle>
                  <CardDescription>
                    User journey through the application from registration to scheme application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <svg viewBox="0 0 1200 700" className="w-full min-w-[800px] h-auto">
                      {/* Start */}
                      <g transform="translate(50, 50)">
                        <ellipse cx="60" cy="30" rx="60" ry="30" fill="hsl(var(--primary))" />
                        <text x="60" y="35" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">START</text>
                      </g>
                      <line x1="110" y1="80" x2="110" y2="130" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowFlow)" />

                      {/* Visit Homepage */}
                      <g transform="translate(35, 130)">
                        <rect width="150" height="60" rx="8" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                        <text x="75" y="35" textAnchor="middle" fill="currentColor" fontSize="12">Visit Homepage</text>
                      </g>
                      <line x1="110" y1="190" x2="110" y2="230" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowFlow)" />

                      {/* Decision: Has Account? */}
                      <g transform="translate(35, 230)">
                        <polygon points="75,0 150,40 75,80 0,40" fill="hsl(var(--accent))" stroke="hsl(var(--foreground))" strokeWidth="2" />
                        <text x="75" y="45" textAnchor="middle" fill="currentColor" fontSize="11">Has Account?</text>
                      </g>

                      {/* No - Sign Up */}
                      <line x1="35" y1="270" x2="-50" y2="270" stroke="currentColor" strokeWidth="2" />
                      <line x1="-50" y1="270" x2="-50" y2="350" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowFlow)" />
                      <text x="-20" y="260" fill="currentColor" fontSize="10">No</text>
                      
                      <g transform="translate(-125, 350)">
                        <rect width="150" height="60" rx="8" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2" />
                        <text x="75" y="35" textAnchor="middle" fill="currentColor" fontSize="12">Sign Up</text>
                      </g>
                      <line x1="-50" y1="410" x2="-50" y2="460" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowFlow)" />

                      {/* Email Verification */}
                      <g transform="translate(-125, 460)">
                        <rect width="150" height="60" rx="8" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2" />
                        <text x="75" y="35" textAnchor="middle" fill="currentColor" fontSize="12">Email Verification</text>
                      </g>
                      <line x1="-50" y1="520" x2="-50" y2="570" stroke="currentColor" strokeWidth="2" />
                      <line x1="-50" y1="570" x2="110" y2="570" stroke="currentColor" strokeWidth="2" />
                      <line x1="110" y1="570" x2="110" y2="530" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowFlow)" />

                      {/* Yes - Login */}
                      <line x1="185" y1="270" x2="270" y2="270" stroke="currentColor" strokeWidth="2" />
                      <line x1="270" y1="270" x2="270" y2="350" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowFlow)" />
                      <text x="200" y="260" fill="currentColor" fontSize="10">Yes</text>
                      
                      <g transform="translate(195, 350)">
                        <rect width="150" height="60" rx="8" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2" />
                        <text x="75" y="35" textAnchor="middle" fill="currentColor" fontSize="12">Login</text>
                      </g>
                      <line x1="270" y1="410" x2="270" y2="460" stroke="currentColor" strokeWidth="2" />
                      <line x1="270" y1="460" x2="110" y2="460" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowFlow)" />

                      {/* Dashboard */}
                      <g transform="translate(35, 460)">
                        <rect width="150" height="60" rx="8" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2" />
                        <text x="75" y="35" textAnchor="middle" fill="currentColor" fontSize="12">Dashboard</text>
                      </g>

                      {/* Branch to Features */}
                      <line x1="185" y1="490" x2="400" y2="490" stroke="currentColor" strokeWidth="2" />
                      
                      {/* Features Column */}
                      <g transform="translate(400, 100)">
                        {/* Browse Schemes */}
                        <rect width="150" height="50" rx="8" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                        <text x="75" y="30" textAnchor="middle" fill="currentColor" fontSize="11">Browse Schemes</text>
                        
                        {/* View Events */}
                        <g transform="translate(0, 70)">
                          <rect width="150" height="50" rx="8" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="75" y="30" textAnchor="middle" fill="currentColor" fontSize="11">View Events</text>
                        </g>
                        
                        {/* Network */}
                        <g transform="translate(0, 140)">
                          <rect width="150" height="50" rx="8" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="75" y="30" textAnchor="middle" fill="currentColor" fontSize="11">Connect Network</text>
                        </g>
                        
                        {/* Resources */}
                        <g transform="translate(0, 210)">
                          <rect width="150" height="50" rx="8" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="75" y="30" textAnchor="middle" fill="currentColor" fontSize="11">Access Resources</text>
                        </g>
                        
                        {/* Forum */}
                        <g transform="translate(0, 280)">
                          <rect width="150" height="50" rx="8" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="75" y="30" textAnchor="middle" fill="currentColor" fontSize="11">Forum Discussion</text>
                        </g>
                      </g>

                      {/* Connecting lines to features */}
                      <line x1="400" y1="490" x2="400" y2="125" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowFlow)" />
                      <line x1="400" y1="195" x2="400" y2="170" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
                      <line x1="400" y1="265" x2="400" y2="240" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
                      <line x1="400" y1="335" x2="400" y2="310" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
                      <line x1="400" y1="405" x2="400" y2="380" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />

                      {/* Scheme Application Flow */}
                      <g transform="translate(620, 100)">
                        <line x1="0" y1="25" x2="-70" y2="25" stroke="currentColor" strokeWidth="2" />
                        
                        <rect width="180" height="50" rx="8" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2" />
                        <text x="90" y="30" textAnchor="middle" fill="currentColor" fontSize="11">View Scheme Details</text>
                        
                        <line x1="90" y1="50" x2="90" y2="90" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowFlow)" />
                        
                        <g transform="translate(0, 90)">
                          <polygon points="90,0 180,35 90,70 0,35" fill="hsl(var(--accent))" stroke="hsl(var(--foreground))" strokeWidth="2" />
                          <text x="90" y="40" textAnchor="middle" fill="currentColor" fontSize="10">Eligible?</text>
                        </g>
                        
                        {/* Yes - Apply */}
                        <line x1="180" y1="125" x2="250" y2="125" stroke="currentColor" strokeWidth="2" />
                        <line x1="250" y1="125" x2="250" y2="200" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowFlow)" />
                        <text x="200" y="115" fill="currentColor" fontSize="10">Yes</text>
                        
                        <g transform="translate(170, 200)">
                          <rect width="160" height="50" rx="8" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2" />
                          <text x="80" y="30" textAnchor="middle" fill="currentColor" fontSize="11">Submit Application</text>
                        </g>
                        
                        <line x1="250" y1="250" x2="250" y2="290" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowFlow)" />
                        
                        <g transform="translate(170, 290)">
                          <rect width="160" height="50" rx="8" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2" />
                          <text x="80" y="30" textAnchor="middle" fill="currentColor" fontSize="11">Track Status</text>
                        </g>
                        
                        {/* No - Back */}
                        <line x1="0" y1="125" x2="-50" y2="125" stroke="currentColor" strokeWidth="2" />
                        <line x1="-50" y1="125" x2="-50" y2="25" stroke="currentColor" strokeWidth="2" />
                        <line x1="-50" y1="25" x2="-70" y2="25" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowFlow)" />
                        <text x="-30" y="115" fill="currentColor" fontSize="10">No</text>
                      </g>

                      {/* End */}
                      <g transform="translate(780, 450)">
                        <ellipse cx="60" cy="30" rx="60" ry="30" fill="hsl(var(--destructive))" />
                        <text x="60" y="35" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">END</text>
                      </g>
                      <line x1="870" y1="390" x2="840" y2="420" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowFlow)" />

                      {/* Legend */}
                      <g transform="translate(900, 100)">
                        <rect width="200" height="200" rx="8" fill="hsl(var(--muted))" opacity="0.5" stroke="hsl(var(--border))" />
                        <text x="20" y="30" fill="currentColor" fontWeight="bold" fontSize="14">Legend</text>
                        
                        <ellipse cx="35" cy="60" rx="20" ry="12" fill="hsl(var(--primary))" />
                        <text x="65" y="65" fill="currentColor" fontSize="11">Start/End</text>
                        
                        <rect x="15" y="85" width="40" height="25" rx="4" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
                        <text x="65" y="102" fill="currentColor" fontSize="11">Process</text>
                        
                        <polygon points="35,130 55,142 35,155 15,142" fill="hsl(var(--accent))" stroke="hsl(var(--foreground))" />
                        <text x="65" y="147" fill="currentColor" fontSize="11">Decision</text>
                        
                        <line x1="15" y1="175" x2="55" y2="175" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowFlow)" />
                        <text x="65" y="180" fill="currentColor" fontSize="11">Flow Direction</text>
                      </g>

                      <defs>
                        <marker id="arrowFlow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                          <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Block Diagram */}
            <TabsContent value="block-diagram" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    Block Diagram
                  </CardTitle>
                  <CardDescription>
                    High-level system modules and their interconnections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <svg viewBox="0 0 1000 600" className="w-full min-w-[700px] h-auto">
                      {/* Presentation Layer */}
                      <g transform="translate(50, 30)">
                        <rect width="900" height="120" rx="12" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="2" />
                        <text x="450" y="25" textAnchor="middle" fill="hsl(var(--primary))" fontWeight="bold" fontSize="16">PRESENTATION LAYER</text>
                        
                        <g transform="translate(30, 45)">
                          <rect width="120" height="55" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="60" y="25" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="500">Landing Page</text>
                          <text x="60" y="42" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Home, About</text>
                        </g>
                        
                        <g transform="translate(170, 45)">
                          <rect width="120" height="55" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="60" y="25" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="500">Auth Module</text>
                          <text x="60" y="42" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Login, Signup</text>
                        </g>
                        
                        <g transform="translate(310, 45)">
                          <rect width="120" height="55" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="60" y="25" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="500">Dashboard</text>
                          <text x="60" y="42" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">User Overview</text>
                        </g>
                        
                        <g transform="translate(450, 45)">
                          <rect width="120" height="55" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="60" y="25" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="500">Schemes</text>
                          <text x="60" y="42" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Browse, Apply</text>
                        </g>
                        
                        <g transform="translate(590, 45)">
                          <rect width="120" height="55" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="60" y="25" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="500">Network</text>
                          <text x="60" y="42" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Connect, Chat</text>
                        </g>
                        
                        <g transform="translate(730, 45)">
                          <rect width="120" height="55" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="60" y="25" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="500">Admin Panel</text>
                          <text x="60" y="42" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Management</text>
                        </g>
                      </g>

                      {/* Arrow down */}
                      <g transform="translate(480, 150)">
                        <line x1="20" y1="0" x2="20" y2="30" stroke="currentColor" strokeWidth="2" />
                        <polygon points="20,40 10,25 30,25" fill="currentColor" />
                      </g>

                      {/* Business Logic Layer */}
                      <g transform="translate(50, 200)">
                        <rect width="900" height="120" rx="12" fill="hsl(var(--secondary))" opacity="0.1" stroke="hsl(var(--secondary))" strokeWidth="2" />
                        <text x="450" y="25" textAnchor="middle" fill="hsl(var(--secondary))" fontWeight="bold" fontSize="16">BUSINESS LOGIC LAYER</text>
                        
                        <g transform="translate(50, 45)">
                          <rect width="150" height="55" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="75" y="25" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="500">Authentication</text>
                          <text x="75" y="42" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Supabase Auth</text>
                        </g>
                        
                        <g transform="translate(220, 45)">
                          <rect width="150" height="55" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="75" y="25" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="500">Scheme Manager</text>
                          <text x="75" y="42" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">CRUD, Filter, Search</text>
                        </g>
                        
                        <g transform="translate(390, 45)">
                          <rect width="150" height="55" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="75" y="25" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="500">Event Manager</text>
                          <text x="75" y="42" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Events, Registration</text>
                        </g>
                        
                        <g transform="translate(560, 45)">
                          <rect width="150" height="55" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="75" y="25" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="500">Network Manager</text>
                          <text x="75" y="42" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Connections, Profiles</text>
                        </g>
                        
                        <g transform="translate(730, 45)">
                          <rect width="120" height="55" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="60" y="25" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="500">Forum</text>
                          <text x="60" y="42" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Threads, Replies</text>
                        </g>
                      </g>

                      {/* Arrow down */}
                      <g transform="translate(480, 320)">
                        <line x1="20" y1="0" x2="20" y2="30" stroke="currentColor" strokeWidth="2" />
                        <polygon points="20,40 10,25 30,25" fill="currentColor" />
                      </g>

                      {/* API Layer */}
                      <g transform="translate(50, 370)">
                        <rect width="900" height="80" rx="12" fill="hsl(var(--accent))" opacity="0.2" stroke="hsl(var(--foreground))" strokeWidth="2" />
                        <text x="450" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="16">API LAYER (Next.js API Routes)</text>
                        
                        <g transform="translate(80, 40)">
                          <rect width="100" height="30" rx="4" fill="hsl(var(--primary))" />
                          <text x="50" y="20" textAnchor="middle" fill="white" fontSize="10">/api/schemes</text>
                        </g>
                        
                        <g transform="translate(200, 40)">
                          <rect width="100" height="30" rx="4" fill="hsl(var(--primary))" />
                          <text x="50" y="20" textAnchor="middle" fill="white" fontSize="10">/api/events</text>
                        </g>
                        
                        <g transform="translate(320, 40)">
                          <rect width="120" height="30" rx="4" fill="hsl(var(--primary))" />
                          <text x="60" y="20" textAnchor="middle" fill="white" fontSize="10">/api/forum/threads</text>
                        </g>
                        
                        <g transform="translate(460, 40)">
                          <rect width="130" height="30" rx="4" fill="hsl(var(--primary))" />
                          <text x="65" y="20" textAnchor="middle" fill="white" fontSize="10">/api/network/profiles</text>
                        </g>
                        
                        <g transform="translate(610, 40)">
                          <rect width="100" height="30" rx="4" fill="hsl(var(--primary))" />
                          <text x="50" y="20" textAnchor="middle" fill="white" fontSize="10">/api/resources</text>
                        </g>
                        
                        <g transform="translate(730, 40)">
                          <rect width="100" height="30" rx="4" fill="hsl(var(--primary))" />
                          <text x="50" y="20" textAnchor="middle" fill="white" fontSize="10">/auth/callback</text>
                        </g>
                      </g>

                      {/* Arrow down */}
                      <g transform="translate(480, 450)">
                        <line x1="20" y1="0" x2="20" y2="30" stroke="currentColor" strokeWidth="2" />
                        <polygon points="20,40 10,25 30,25" fill="currentColor" />
                      </g>

                      {/* Data Layer */}
                      <g transform="translate(50, 500)">
                        <rect width="900" height="80" rx="12" fill="hsl(var(--destructive))" opacity="0.1" stroke="hsl(var(--destructive))" strokeWidth="2" />
                        <text x="450" y="25" textAnchor="middle" fill="hsl(var(--destructive))" fontWeight="bold" fontSize="16">DATA LAYER</text>
                        
                        <g transform="translate(150, 35)">
                          <rect width="200" height="35" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="100" y="23" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="500">Supabase PostgreSQL</text>
                        </g>
                        
                        <g transform="translate(400, 35)">
                          <rect width="200" height="35" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="100" y="23" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="500">Supabase Storage</text>
                        </g>
                        
                        <g transform="translate(650, 35)">
                          <rect width="200" height="35" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="100" y="23" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="500">Static Data (lib/data.ts)</text>
                        </g>
                      </g>
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* DFD */}
            <TabsContent value="dfd" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Data Flow Diagram (Level 0 & Level 1)
                  </CardTitle>
                  <CardDescription>
                    Shows how data moves through the system
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Level 0 DFD */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Level 0 - Context Diagram</h3>
                    <div className="overflow-x-auto">
                      <svg viewBox="0 0 800 400" className="w-full min-w-[600px] h-auto">
                        {/* External Entities */}
                        <g transform="translate(50, 150)">
                          <rect width="120" height="60" rx="0" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="2" />
                          <text x="60" y="35" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="12">Entrepreneur</text>
                        </g>
                        
                        <g transform="translate(50, 280)">
                          <rect width="120" height="60" rx="0" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="2" />
                          <text x="60" y="35" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="12">Admin</text>
                        </g>
                        
                        <g transform="translate(630, 150)">
                          <rect width="120" height="60" rx="0" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="2" />
                          <text x="60" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="12">Government</text>
                          <text x="60" y="42" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="12">Portal</text>
                        </g>

                        {/* Central Process */}
                        <g transform="translate(300, 150)">
                          <circle cx="100" cy="60" r="80" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="3" />
                          <text x="100" y="50" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="14">EnterNet</text>
                          <text x="100" y="70" textAnchor="middle" fill="currentColor" fontSize="12">MSME Platform</text>
                        </g>

                        {/* Data Flows */}
                        {/* Entrepreneur to System */}
                        <line x1="170" y1="165" x2="220" y2="180" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowDFD)" />
                        <text x="160" y="155" fill="currentColor" fontSize="10">Profile Data, Applications</text>
                        
                        <line x1="220" y1="200" x2="170" y2="195" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowDFD)" />
                        <text x="160" y="220" fill="currentColor" fontSize="10">Schemes, Events, Resources</text>

                        {/* Admin to System */}
                        <line x1="170" y1="295" x2="300" y2="230" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowDFD)" />
                        <text x="200" y="280" fill="currentColor" fontSize="10">Manage Content</text>
                        
                        <line x1="300" y1="240" x2="170" y2="320" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowDFD)" />
                        <text x="200" y="310" fill="currentColor" fontSize="10">Reports, Analytics</text>

                        {/* System to Government Portal */}
                        <line x1="480" y1="180" x2="630" y2="180" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowDFD)" />
                        <text x="520" y="170" fill="currentColor" fontSize="10">Application Data</text>
                        
                        <line x1="630" y1="200" x2="480" y2="200" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowDFD)" />
                        <text x="520" y="220" fill="currentColor" fontSize="10">Scheme Updates</text>

                        <defs>
                          <marker id="arrowDFD" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
                          </marker>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Level 1 DFD */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Level 1 - Detailed DFD</h3>
                    <div className="overflow-x-auto">
                      <svg viewBox="0 0 1000 600" className="w-full min-w-[800px] h-auto">
                        {/* External Entity - User */}
                        <g transform="translate(20, 250)">
                          <rect width="100" height="50" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="2" />
                          <text x="50" y="30" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="11">User</text>
                        </g>

                        {/* Process 1 - Authentication */}
                        <g transform="translate(180, 50)">
                          <circle cx="50" cy="40" r="40" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2" />
                          <text x="50" y="35" textAnchor="middle" fill="currentColor" fontSize="10">1.0</text>
                          <text x="50" y="50" textAnchor="middle" fill="currentColor" fontSize="10">Auth</text>
                        </g>

                        {/* Process 2 - Scheme Management */}
                        <g transform="translate(350, 150)">
                          <circle cx="50" cy="40" r="40" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2" />
                          <text x="50" y="35" textAnchor="middle" fill="currentColor" fontSize="10">2.0</text>
                          <text x="50" y="50" textAnchor="middle" fill="currentColor" fontSize="10">Schemes</text>
                        </g>

                        {/* Process 3 - Event Management */}
                        <g transform="translate(350, 280)">
                          <circle cx="50" cy="40" r="40" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2" />
                          <text x="50" y="35" textAnchor="middle" fill="currentColor" fontSize="10">3.0</text>
                          <text x="50" y="50" textAnchor="middle" fill="currentColor" fontSize="10">Events</text>
                        </g>

                        {/* Process 4 - Network */}
                        <g transform="translate(350, 410)">
                          <circle cx="50" cy="40" r="40" fill="hsl(var(--accent))" opacity="0.3" stroke="hsl(var(--foreground))" strokeWidth="2" />
                          <text x="50" y="35" textAnchor="middle" fill="currentColor" fontSize="10">4.0</text>
                          <text x="50" y="50" textAnchor="middle" fill="currentColor" fontSize="10">Network</text>
                        </g>

                        {/* Process 5 - Forum */}
                        <g transform="translate(550, 220)">
                          <circle cx="50" cy="40" r="40" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2" />
                          <text x="50" y="35" textAnchor="middle" fill="currentColor" fontSize="10">5.0</text>
                          <text x="50" y="50" textAnchor="middle" fill="currentColor" fontSize="10">Forum</text>
                        </g>

                        {/* Data Stores */}
                        <g transform="translate(750, 80)">
                          <line x1="0" y1="0" x2="150" y2="0" stroke="currentColor" strokeWidth="2" />
                          <line x1="0" y1="35" x2="150" y2="35" stroke="currentColor" strokeWidth="2" />
                          <text x="75" y="23" textAnchor="middle" fill="currentColor" fontSize="11">D1 | Profiles</text>
                        </g>

                        <g transform="translate(750, 160)">
                          <line x1="0" y1="0" x2="150" y2="0" stroke="currentColor" strokeWidth="2" />
                          <line x1="0" y1="35" x2="150" y2="35" stroke="currentColor" strokeWidth="2" />
                          <text x="75" y="23" textAnchor="middle" fill="currentColor" fontSize="11">D2 | Schemes</text>
                        </g>

                        <g transform="translate(750, 240)">
                          <line x1="0" y1="0" x2="150" y2="0" stroke="currentColor" strokeWidth="2" />
                          <line x1="0" y1="35" x2="150" y2="35" stroke="currentColor" strokeWidth="2" />
                          <text x="75" y="23" textAnchor="middle" fill="currentColor" fontSize="11">D3 | Events</text>
                        </g>

                        <g transform="translate(750, 320)">
                          <line x1="0" y1="0" x2="150" y2="0" stroke="currentColor" strokeWidth="2" />
                          <line x1="0" y1="35" x2="150" y2="35" stroke="currentColor" strokeWidth="2" />
                          <text x="75" y="23" textAnchor="middle" fill="currentColor" fontSize="11">D4 | Connections</text>
                        </g>

                        <g transform="translate(750, 400)">
                          <line x1="0" y1="0" x2="150" y2="0" stroke="currentColor" strokeWidth="2" />
                          <line x1="0" y1="35" x2="150" y2="35" stroke="currentColor" strokeWidth="2" />
                          <text x="75" y="23" textAnchor="middle" fill="currentColor" fontSize="11">D5 | Forum_Threads</text>
                        </g>

                        {/* Data Flows */}
                        {/* User to Auth */}
                        <line x1="120" y1="260" x2="180" y2="90" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowDFD)" />
                        <text x="130" y="170" fill="currentColor" fontSize="9">Credentials</text>

                        {/* Auth to Profiles */}
                        <line x1="270" y1="70" x2="750" y2="97" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowDFD)" />
                        <text x="500" y="70" fill="currentColor" fontSize="9">User Data</text>

                        {/* User to Schemes */}
                        <line x1="120" y1="275" x2="310" y2="190" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowDFD)" />
                        <text x="180" y="220" fill="currentColor" fontSize="9">Search/Filter</text>

                        {/* Schemes to D2 */}
                        <line x1="440" y1="177" x2="750" y2="177" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowDFD)" />
                        <text x="580" y="170" fill="currentColor" fontSize="9">Scheme Data</text>

                        {/* User to Events */}
                        <line x1="120" y1="285" x2="310" y2="310" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowDFD)" />
                        <text x="180" y="310" fill="currentColor" fontSize="9">Register</text>

                        {/* Events to D3 */}
                        <line x1="440" y1="310" x2="750" y2="257" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowDFD)" />
                        <text x="580" y="280" fill="currentColor" fontSize="9">Event Data</text>

                        {/* User to Network */}
                        <line x1="120" y1="295" x2="310" y2="440" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowDFD)" />
                        <text x="160" y="380" fill="currentColor" fontSize="9">Connect Request</text>

                        {/* Network to D4 */}
                        <line x1="440" y1="437" x2="750" y2="337" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowDFD)" />
                        <text x="580" y="390" fill="currentColor" fontSize="9">Connection Data</text>

                        {/* User to Forum */}
                        <line x1="120" y1="275" x2="510" y2="260" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowDFD)" />
                        <text x="300" y="255" fill="currentColor" fontSize="9">Post/Reply</text>

                        {/* Forum to D5 */}
                        <line x1="640" y1="260" x2="750" y2="417" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowDFD)" />
                        <text x="680" y="340" fill="currentColor" fontSize="9">Thread Data</text>
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* System Architecture */}
            <TabsContent value="architecture" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-primary" />
                    System Architecture
                  </CardTitle>
                  <CardDescription>
                    Complete technical architecture showing all components and their interactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <svg viewBox="0 0 1100 700" className="w-full min-w-[900px] h-auto">
                      {/* Client Layer */}
                      <g transform="translate(50, 30)">
                        <rect width="1000" height="100" rx="12" fill="hsl(var(--primary))" opacity="0.05" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
                        <text x="500" y="25" textAnchor="middle" fill="hsl(var(--primary))" fontWeight="bold" fontSize="14">CLIENT LAYER</text>
                        
                        <g transform="translate(50, 40)">
                          <rect width="180" height="50" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="90" y="30" textAnchor="middle" fill="currentColor" fontSize="12">Web Browser</text>
                        </g>
                        
                        <g transform="translate(280, 40)">
                          <rect width="180" height="50" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="90" y="30" textAnchor="middle" fill="currentColor" fontSize="12">Mobile Browser</text>
                        </g>
                        
                        <g transform="translate(510, 40)">
                          <rect width="180" height="50" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="90" y="30" textAnchor="middle" fill="currentColor" fontSize="12">React Components</text>
                        </g>
                        
                        <g transform="translate(740, 40)">
                          <rect width="180" height="50" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="90" y="30" textAnchor="middle" fill="currentColor" fontSize="12">Client State (SWR)</text>
                        </g>
                      </g>

                      {/* CDN / Edge */}
                      <g transform="translate(50, 150)">
                        <rect width="1000" height="60" rx="12" fill="hsl(var(--secondary))" opacity="0.1" stroke="hsl(var(--secondary))" strokeWidth="2" />
                        <text x="500" y="38" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="14">CDN / EDGE NETWORK (Vercel Edge)</text>
                      </g>

                      {/* Application Server */}
                      <g transform="translate(50, 230)">
                        <rect width="1000" height="180" rx="12" fill="hsl(var(--accent))" opacity="0.1" stroke="hsl(var(--foreground))" strokeWidth="2" />
                        <text x="500" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="14">APPLICATION SERVER (Next.js 16 on Vercel)</text>
                        
                        {/* Server Components */}
                        <g transform="translate(30, 45)">
                          <rect width="200" height="120" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="100" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="11">Server Components</text>
                          <text x="100" y="50" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- Page Rendering</text>
                          <text x="100" y="70" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- Data Fetching</text>
                          <text x="100" y="90" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- Server Actions</text>
                          <text x="100" y="110" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- Streaming</text>
                        </g>
                        
                        {/* API Routes */}
                        <g transform="translate(260, 45)">
                          <rect width="200" height="120" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="100" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="11">API Routes</text>
                          <text x="100" y="50" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- /api/schemes</text>
                          <text x="100" y="70" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- /api/events</text>
                          <text x="100" y="90" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- /api/forum</text>
                          <text x="100" y="110" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- /api/network</text>
                        </g>
                        
                        {/* Middleware */}
                        <g transform="translate(490, 45)">
                          <rect width="200" height="120" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="100" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="11">Middleware</text>
                          <text x="100" y="50" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- Auth Verification</text>
                          <text x="100" y="70" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- Route Protection</text>
                          <text x="100" y="90" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- Request Logging</text>
                          <text x="100" y="110" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- CORS Handling</text>
                        </g>
                        
                        {/* Static Assets */}
                        <g transform="translate(720, 45)">
                          <rect width="200" height="120" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="100" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="11">Static Assets</text>
                          <text x="100" y="50" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- lib/data.ts</text>
                          <text x="100" y="70" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- Public Images</text>
                          <text x="100" y="90" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- CSS/Fonts</text>
                          <text x="100" y="110" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">- Icons</text>
                        </g>
                      </g>

                      {/* Backend Services */}
                      <g transform="translate(50, 430)">
                        <rect width="1000" height="120" rx="12" fill="hsl(var(--destructive))" opacity="0.05" stroke="hsl(var(--destructive))" strokeWidth="2" />
                        <text x="500" y="25" textAnchor="middle" fill="hsl(var(--destructive))" fontWeight="bold" fontSize="14">BACKEND SERVICES</text>
                        
                        <g transform="translate(80, 40)">
                          <rect width="250" height="65" rx="8" fill="#3ECF8E" opacity="0.2" stroke="#3ECF8E" strokeWidth="2" />
                          <text x="125" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="12">Supabase</text>
                          <text x="125" y="45" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">PostgreSQL + Auth + Storage</text>
                        </g>
                        
                        <g transform="translate(380, 40)">
                          <rect width="250" height="65" rx="8" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2" />
                          <text x="125" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="12">Vercel Analytics</text>
                          <text x="125" y="45" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Performance Monitoring</text>
                        </g>
                        
                        <g transform="translate(680, 40)">
                          <rect width="250" height="65" rx="8" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2" />
                          <text x="125" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="12">External APIs</text>
                          <text x="125" y="45" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Government Portals</text>
                        </g>
                      </g>

                      {/* Database Layer */}
                      <g transform="translate(50, 570)">
                        <rect width="1000" height="100" rx="12" fill="hsl(var(--muted))" opacity="0.5" stroke="hsl(var(--border))" strokeWidth="2" />
                        <text x="500" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="14">DATA PERSISTENCE LAYER</text>
                        
                        <g transform="translate(100, 40)">
                          <rect width="180" height="45" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="90" y="28" textAnchor="middle" fill="currentColor" fontSize="11">Profiles Table</text>
                        </g>
                        
                        <g transform="translate(310, 40)">
                          <rect width="180" height="45" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="90" y="28" textAnchor="middle" fill="currentColor" fontSize="11">Schemes Table</text>
                        </g>
                        
                        <g transform="translate(520, 40)">
                          <rect width="180" height="45" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="90" y="28" textAnchor="middle" fill="currentColor" fontSize="11">Events Table</text>
                        </g>
                        
                        <g transform="translate(730, 40)">
                          <rect width="180" height="45" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="90" y="28" textAnchor="middle" fill="currentColor" fontSize="11">Forum Tables</text>
                        </g>
                      </g>

                      {/* Connection Arrows */}
                      <line x1="550" y1="130" x2="550" y2="150" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowArch)" />
                      <line x1="550" y1="210" x2="550" y2="230" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowArch)" />
                      <line x1="550" y1="410" x2="550" y2="430" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowArch)" />
                      <line x1="550" y1="550" x2="550" y2="570" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowArch)" />

                      <defs>
                        <marker id="arrowArch" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                          <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
                        </marker>
                      </defs>
                    </svg>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Frontend</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>Next.js 16 (App Router)</li>
                          <li>React 19.2</li>
                          <li>Tailwind CSS v4</li>
                          <li>shadcn/ui Components</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="border-secondary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Backend</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>Next.js API Routes</li>
                          <li>Server Components</li>
                          <li>Server Actions</li>
                          <li>Middleware</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="border-green-500/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Database</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>Supabase PostgreSQL</li>
                          <li>Row Level Security</li>
                          <li>Real-time Subscriptions</li>
                          <li>Storage Buckets</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="border-destructive/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Infrastructure</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>Vercel Hosting</li>
                          <li>Edge Functions</li>
                          <li>CDN Distribution</li>
                          <li>Analytics</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Site Map */}
            <TabsContent value="sitemap" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Map className="h-5 w-5 text-primary" />
                    Site Map
                  </CardTitle>
                  <CardDescription>
                    Complete navigation structure of the EnterNet platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <svg viewBox="0 0 1200 800" className="w-full min-w-[900px] h-auto">
                      {/* Root - Homepage */}
                      <g transform="translate(500, 30)">
                        <rect width="200" height="50" rx="8" fill="hsl(var(--primary))" />
                        <Home x="25" y="15" className="h-5 w-5" />
                        <text x="100" y="32" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">Homepage</text>
                        <text x="100" y="45" textAnchor="middle" fill="white" opacity="0.8" fontSize="10">/</text>
                      </g>

                      {/* Level 1 connections */}
                      <line x1="600" y1="80" x2="600" y2="110" stroke="currentColor" strokeWidth="2" />
                      <line x1="100" y1="110" x2="1100" y2="110" stroke="currentColor" strokeWidth="2" />
                      
                      {/* Vertical lines to level 1 */}
                      <line x1="100" y1="110" x2="100" y2="140" stroke="currentColor" strokeWidth="2" />
                      <line x1="250" y1="110" x2="250" y2="140" stroke="currentColor" strokeWidth="2" />
                      <line x1="400" y1="110" x2="400" y2="140" stroke="currentColor" strokeWidth="2" />
                      <line x1="550" y1="110" x2="550" y2="140" stroke="currentColor" strokeWidth="2" />
                      <line x1="700" y1="110" x2="700" y2="140" stroke="currentColor" strokeWidth="2" />
                      <line x1="850" y1="110" x2="850" y2="140" stroke="currentColor" strokeWidth="2" />
                      <line x1="1000" y1="110" x2="1000" y2="140" stroke="currentColor" strokeWidth="2" />

                      {/* Level 1 - Main Pages */}
                      {/* Schemes */}
                      <g transform="translate(25, 140)">
                        <rect width="150" height="45" rx="6" fill="hsl(var(--secondary))" />
                        <text x="75" y="25" textAnchor="middle" fill="white" fontWeight="500" fontSize="12">Schemes</text>
                        <text x="75" y="38" textAnchor="middle" fill="white" opacity="0.8" fontSize="9">/schemes</text>
                      </g>

                      {/* Events */}
                      <g transform="translate(175, 140)">
                        <rect width="150" height="45" rx="6" fill="hsl(var(--secondary))" />
                        <text x="75" y="25" textAnchor="middle" fill="white" fontWeight="500" fontSize="12">Events</text>
                        <text x="75" y="38" textAnchor="middle" fill="white" opacity="0.8" fontSize="9">/events</text>
                      </g>

                      {/* Network */}
                      <g transform="translate(325, 140)">
                        <rect width="150" height="45" rx="6" fill="hsl(var(--secondary))" />
                        <text x="75" y="25" textAnchor="middle" fill="white" fontWeight="500" fontSize="12">Network</text>
                        <text x="75" y="38" textAnchor="middle" fill="white" opacity="0.8" fontSize="9">/network</text>
                      </g>

                      {/* Resources */}
                      <g transform="translate(475, 140)">
                        <rect width="150" height="45" rx="6" fill="hsl(var(--secondary))" />
                        <text x="75" y="25" textAnchor="middle" fill="white" fontWeight="500" fontSize="12">Resources</text>
                        <text x="75" y="38" textAnchor="middle" fill="white" opacity="0.8" fontSize="9">/resources</text>
                      </g>

                      {/* Forum */}
                      <g transform="translate(625, 140)">
                        <rect width="150" height="45" rx="6" fill="hsl(var(--secondary))" />
                        <text x="75" y="25" textAnchor="middle" fill="white" fontWeight="500" fontSize="12">Forum</text>
                        <text x="75" y="38" textAnchor="middle" fill="white" opacity="0.8" fontSize="9">/forum</text>
                      </g>

                      {/* Blog */}
                      <g transform="translate(775, 140)">
                        <rect width="150" height="45" rx="6" fill="hsl(var(--secondary))" />
                        <text x="75" y="25" textAnchor="middle" fill="white" fontWeight="500" fontSize="12">Blog</text>
                        <text x="75" y="38" textAnchor="middle" fill="white" opacity="0.8" fontSize="9">/blog</text>
                      </g>

                      {/* About */}
                      <g transform="translate(925, 140)">
                        <rect width="150" height="45" rx="6" fill="hsl(var(--secondary))" />
                        <text x="75" y="25" textAnchor="middle" fill="white" fontWeight="500" fontSize="12">About</text>
                        <text x="75" y="38" textAnchor="middle" fill="white" opacity="0.8" fontSize="9">/about</text>
                      </g>

                      {/* Level 2 - Schemes Sub Pages */}
                      <line x1="100" y1="185" x2="100" y2="230" stroke="currentColor" strokeWidth="1.5" />
                      <g transform="translate(25, 230)">
                        <rect width="150" height="40" rx="4" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
                        <text x="75" y="25" textAnchor="middle" fill="currentColor" fontSize="11">Scheme Details</text>
                      </g>
                      <g transform="translate(25, 280)">
                        <rect width="150" height="40" rx="4" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
                        <text x="75" y="25" textAnchor="middle" fill="currentColor" fontSize="11">/schemes/[id]</text>
                      </g>

                      {/* Auth Section */}
                      <g transform="translate(50, 380)">
                        <rect width="200" height="180" rx="8" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="2" />
                        <text x="100" y="25" textAnchor="middle" fill="hsl(var(--primary))" fontWeight="bold" fontSize="12">Authentication</text>
                        
                        <g transform="translate(25, 40)">
                          <rect width="150" height="35" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="75" y="22" textAnchor="middle" fill="currentColor" fontSize="10">/login</text>
                        </g>
                        <g transform="translate(25, 85)">
                          <rect width="150" height="35" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="75" y="22" textAnchor="middle" fill="currentColor" fontSize="10">/signup</text>
                        </g>
                        <g transform="translate(25, 130)">
                          <rect width="150" height="35" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="75" y="22" textAnchor="middle" fill="currentColor" fontSize="10">/auth/callback</text>
                        </g>
                      </g>

                      {/* Dashboard Section */}
                      <g transform="translate(300, 380)">
                        <rect width="250" height="180" rx="8" fill="hsl(var(--secondary))" opacity="0.1" stroke="hsl(var(--secondary))" strokeWidth="2" />
                        <text x="125" y="25" textAnchor="middle" fill="hsl(var(--secondary))" fontWeight="bold" fontSize="12">Dashboard (Protected)</text>
                        
                        <g transform="translate(25, 40)">
                          <rect width="200" height="35" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="100" y="22" textAnchor="middle" fill="currentColor" fontSize="10">/dashboard</text>
                        </g>
                        <g transform="translate(25, 85)">
                          <rect width="200" height="35" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="100" y="22" textAnchor="middle" fill="currentColor" fontSize="10">/dashboard/settings</text>
                        </g>
                        <g transform="translate(25, 130)">
                          <rect width="200" height="35" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="100" y="22" textAnchor="middle" fill="currentColor" fontSize="10">/dashboard/applications</text>
                        </g>
                      </g>

                      {/* Admin Section */}
                      <g transform="translate(600, 380)">
                        <rect width="250" height="220" rx="8" fill="hsl(var(--destructive))" opacity="0.1" stroke="hsl(var(--destructive))" strokeWidth="2" />
                        <text x="125" y="25" textAnchor="middle" fill="hsl(var(--destructive))" fontWeight="bold" fontSize="12">Admin Panel (Protected)</text>
                        
                        <g transform="translate(25, 40)">
                          <rect width="200" height="35" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="100" y="22" textAnchor="middle" fill="currentColor" fontSize="10">/admin</text>
                        </g>
                        <g transform="translate(25, 85)">
                          <rect width="200" height="35" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="100" y="22" textAnchor="middle" fill="currentColor" fontSize="10">/admin/schemes</text>
                        </g>
                        <g transform="translate(25, 130)">
                          <rect width="200" height="35" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="100" y="22" textAnchor="middle" fill="currentColor" fontSize="10">/admin/events</text>
                        </g>
                        <g transform="translate(25, 175)">
                          <rect width="200" height="35" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="100" y="22" textAnchor="middle" fill="currentColor" fontSize="10">/admin/users</text>
                        </g>
                      </g>

                      {/* Static Pages */}
                      <g transform="translate(900, 380)">
                        <rect width="200" height="220" rx="8" fill="hsl(var(--muted))" opacity="0.5" stroke="hsl(var(--border))" strokeWidth="2" />
                        <text x="100" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="12">Static Pages</text>
                        
                        <g transform="translate(25, 40)">
                          <rect width="150" height="30" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="75" y="20" textAnchor="middle" fill="currentColor" fontSize="10">/contact</text>
                        </g>
                        <g transform="translate(25, 80)">
                          <rect width="150" height="30" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="75" y="20" textAnchor="middle" fill="currentColor" fontSize="10">/careers</text>
                        </g>
                        <g transform="translate(25, 120)">
                          <rect width="150" height="30" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="75" y="20" textAnchor="middle" fill="currentColor" fontSize="10">/privacy</text>
                        </g>
                        <g transform="translate(25, 160)">
                          <rect width="150" height="30" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="75" y="20" textAnchor="middle" fill="currentColor" fontSize="10">/terms</text>
                        </g>
                        <g transform="translate(25, 200)">
                          <rect width="150" height="30" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="75" y="20" textAnchor="middle" fill="currentColor" fontSize="10">/cookies</text>
                        </g>
                      </g>

                      {/* Legend */}
                      <g transform="translate(50, 650)">
                        <rect width="400" height="80" rx="8" fill="hsl(var(--muted))" opacity="0.3" stroke="hsl(var(--border))" />
                        <text x="20" y="25" fill="currentColor" fontWeight="bold" fontSize="12">Legend</text>
                        
                        <rect x="20" y="40" width="20" height="15" rx="2" fill="hsl(var(--primary))" />
                        <text x="50" y="52" fill="currentColor" fontSize="10">Public Page</text>
                        
                        <rect x="130" y="40" width="20" height="15" rx="2" fill="hsl(var(--secondary))" />
                        <text x="160" y="52" fill="currentColor" fontSize="10">Protected Page</text>
                        
                        <rect x="260" y="40" width="20" height="15" rx="2" fill="hsl(var(--destructive))" opacity="0.5" />
                        <text x="290" y="52" fill="currentColor" fontSize="10">Admin Only</text>
                      </g>
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Wireframes */}
            <TabsContent value="wireframes" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layout className="h-5 w-5 text-primary" />
                    Wireframes
                  </CardTitle>
                  <CardDescription>
                    Low-fidelity wireframes showing layout structure of key pages
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Homepage Wireframe */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      Homepage Wireframe
                    </h3>
                    <div className="border rounded-lg p-4 bg-muted/20">
                      <svg viewBox="0 0 800 600" className="w-full max-w-3xl mx-auto">
                        {/* Navbar */}
                        <rect x="0" y="0" width="800" height="60" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                        <rect x="20" y="15" width="100" height="30" rx="4" fill="hsl(var(--primary))" opacity="0.3" />
                        <text x="70" y="35" textAnchor="middle" fill="currentColor" fontSize="10">Logo</text>
                        <rect x="500" y="20" width="60" height="20" rx="2" fill="hsl(var(--border))" />
                        <rect x="570" y="20" width="60" height="20" rx="2" fill="hsl(var(--border))" />
                        <rect x="640" y="20" width="60" height="20" rx="2" fill="hsl(var(--border))" />
                        <rect x="710" y="15" width="70" height="30" rx="4" fill="hsl(var(--primary))" />

                        {/* Hero Section */}
                        <rect x="0" y="60" width="800" height="200" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--border))" strokeWidth="2" />
                        <rect x="200" y="90" width="400" height="30" rx="4" fill="hsl(var(--muted))" />
                        <text x="400" y="112" textAnchor="middle" fill="currentColor" fontSize="12">Hero Title</text>
                        <rect x="250" y="130" width="300" height="15" rx="2" fill="hsl(var(--border))" />
                        <rect x="280" y="150" width="240" height="15" rx="2" fill="hsl(var(--border))" />
                        <rect x="300" y="180" width="80" height="35" rx="4" fill="hsl(var(--primary))" />
                        <rect x="400" y="180" width="100" height="35" rx="4" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />

                        {/* Stats */}
                        <g transform="translate(100, 280)">
                          <rect width="120" height="60" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="60" y="35" textAnchor="middle" fill="currentColor" fontSize="10">Stat 1</text>
                        </g>
                        <g transform="translate(240, 280)">
                          <rect width="120" height="60" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="60" y="35" textAnchor="middle" fill="currentColor" fontSize="10">Stat 2</text>
                        </g>
                        <g transform="translate(380, 280)">
                          <rect width="120" height="60" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="60" y="35" textAnchor="middle" fill="currentColor" fontSize="10">Stat 3</text>
                        </g>
                        <g transform="translate(520, 280)">
                          <rect width="120" height="60" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="60" y="35" textAnchor="middle" fill="currentColor" fontSize="10">Stat 4</text>
                        </g>

                        {/* Features */}
                        <rect x="0" y="360" width="800" height="150" fill="hsl(var(--muted))" opacity="0.3" />
                        <text x="400" y="385" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="12">Features Section</text>
                        <g transform="translate(50, 400)">
                          <rect width="160" height="90" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="80" y="50" textAnchor="middle" fill="currentColor" fontSize="10">Feature 1</text>
                        </g>
                        <g transform="translate(230, 400)">
                          <rect width="160" height="90" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="80" y="50" textAnchor="middle" fill="currentColor" fontSize="10">Feature 2</text>
                        </g>
                        <g transform="translate(410, 400)">
                          <rect width="160" height="90" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="80" y="50" textAnchor="middle" fill="currentColor" fontSize="10">Feature 3</text>
                        </g>
                        <g transform="translate(590, 400)">
                          <rect width="160" height="90" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="80" y="50" textAnchor="middle" fill="currentColor" fontSize="10">Feature 4</text>
                        </g>

                        {/* Footer */}
                        <rect x="0" y="530" width="800" height="70" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                        <text x="400" y="570" textAnchor="middle" fill="currentColor" fontSize="10">Footer</text>
                      </svg>
                    </div>
                  </div>

                  {/* Schemes Page Wireframe */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Schemes List Page Wireframe
                    </h3>
                    <div className="border rounded-lg p-4 bg-muted/20">
                      <svg viewBox="0 0 800 600" className="w-full max-w-3xl mx-auto">
                        {/* Navbar */}
                        <rect x="0" y="0" width="800" height="60" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                        <rect x="20" y="15" width="100" height="30" rx="4" fill="hsl(var(--primary))" opacity="0.3" />
                        
                        {/* Page Header */}
                        <rect x="20" y="80" width="200" height="25" rx="4" fill="hsl(var(--muted))" />
                        <text x="120" y="98" textAnchor="middle" fill="currentColor" fontSize="12">Page Title</text>
                        
                        {/* Search Bar */}
                        <rect x="20" y="120" width="760" height="45" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                        <Search x="35" y="130" className="h-6 w-6" />
                        <text x="70" y="148" fill="hsl(var(--muted-foreground))" fontSize="10">Search schemes...</text>

                        {/* Layout */}
                        <g transform="translate(20, 180)">
                          {/* Filters Sidebar */}
                          <rect width="200" height="400" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
                          <text x="100" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="11">Filters</text>
                          <rect x="15" y="40" width="170" height="30" rx="4" fill="hsl(var(--muted))" />
                          <rect x="15" y="80" width="170" height="30" rx="4" fill="hsl(var(--muted))" />
                          <rect x="15" y="120" width="170" height="30" rx="4" fill="hsl(var(--muted))" />
                          <rect x="15" y="160" width="170" height="30" rx="4" fill="hsl(var(--muted))" />

                          {/* Schemes Grid */}
                          <g transform="translate(220, 0)">
                            <rect width="250" height="120" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                            <text x="125" y="65" textAnchor="middle" fill="currentColor" fontSize="10">Scheme Card 1</text>
                          </g>
                          <g transform="translate(490, 0)">
                            <rect width="250" height="120" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                            <text x="125" y="65" textAnchor="middle" fill="currentColor" fontSize="10">Scheme Card 2</text>
                          </g>
                          <g transform="translate(220, 140)">
                            <rect width="250" height="120" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                            <text x="125" y="65" textAnchor="middle" fill="currentColor" fontSize="10">Scheme Card 3</text>
                          </g>
                          <g transform="translate(490, 140)">
                            <rect width="250" height="120" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                            <text x="125" y="65" textAnchor="middle" fill="currentColor" fontSize="10">Scheme Card 4</text>
                          </g>
                          <g transform="translate(220, 280)">
                            <rect width="250" height="120" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                            <text x="125" y="65" textAnchor="middle" fill="currentColor" fontSize="10">Scheme Card 5</text>
                          </g>
                          <g transform="translate(490, 280)">
                            <rect width="250" height="120" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                            <text x="125" y="65" textAnchor="middle" fill="currentColor" fontSize="10">Scheme Card 6</text>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>

                  {/* Dashboard Wireframe */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Dashboard Wireframe
                    </h3>
                    <div className="border rounded-lg p-4 bg-muted/20">
                      <svg viewBox="0 0 800 600" className="w-full max-w-3xl mx-auto">
                        {/* Sidebar */}
                        <rect x="0" y="0" width="200" height="600" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2" />
                        <rect x="20" y="20" width="160" height="40" rx="4" fill="hsl(var(--primary))" opacity="0.3" />
                        <text x="100" y="45" textAnchor="middle" fill="currentColor" fontSize="11">Logo</text>
                        
                        <rect x="15" y="80" width="170" height="35" rx="4" fill="hsl(var(--primary))" />
                        <text x="100" y="102" textAnchor="middle" fill="white" fontSize="10">Dashboard</text>
                        
                        <rect x="15" y="125" width="170" height="35" rx="4" fill="transparent" stroke="hsl(var(--border))" />
                        <text x="100" y="147" textAnchor="middle" fill="currentColor" fontSize="10">Schemes</text>
                        
                        <rect x="15" y="170" width="170" height="35" rx="4" fill="transparent" stroke="hsl(var(--border))" />
                        <text x="100" y="192" textAnchor="middle" fill="currentColor" fontSize="10">Events</text>
                        
                        <rect x="15" y="215" width="170" height="35" rx="4" fill="transparent" stroke="hsl(var(--border))" />
                        <text x="100" y="237" textAnchor="middle" fill="currentColor" fontSize="10">Network</text>
                        
                        <rect x="15" y="260" width="170" height="35" rx="4" fill="transparent" stroke="hsl(var(--border))" />
                        <text x="100" y="282" textAnchor="middle" fill="currentColor" fontSize="10">Settings</text>

                        {/* Main Content */}
                        <g transform="translate(220, 20)">
                          {/* Header */}
                          <rect width="560" height="50" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                          <text x="20" y="32" fill="currentColor" fontWeight="bold" fontSize="12">Welcome, User!</text>

                          {/* Stats Row */}
                          <g transform="translate(0, 70)">
                            <rect width="130" height="80" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                            <text x="65" y="45" textAnchor="middle" fill="currentColor" fontSize="10">Stat 1</text>
                          </g>
                          <g transform="translate(145, 70)">
                            <rect width="130" height="80" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                            <text x="65" y="45" textAnchor="middle" fill="currentColor" fontSize="10">Stat 2</text>
                          </g>
                          <g transform="translate(290, 70)">
                            <rect width="130" height="80" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                            <text x="65" y="45" textAnchor="middle" fill="currentColor" fontSize="10">Stat 3</text>
                          </g>
                          <g transform="translate(435, 70)">
                            <rect width="130" height="80" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                            <text x="65" y="45" textAnchor="middle" fill="currentColor" fontSize="10">Stat 4</text>
                          </g>

                          {/* Content Cards */}
                          <g transform="translate(0, 170)">
                            <rect width="270" height="200" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                            <text x="135" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="11">Recommended Schemes</text>
                            <rect x="15" y="40" width="240" height="45" rx="2" fill="hsl(var(--muted))" />
                            <rect x="15" y="95" width="240" height="45" rx="2" fill="hsl(var(--muted))" />
                            <rect x="15" y="150" width="240" height="45" rx="2" fill="hsl(var(--muted))" />
                          </g>
                          
                          <g transform="translate(290, 170)">
                            <rect width="270" height="200" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                            <text x="135" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="11">Upcoming Events</text>
                            <rect x="15" y="40" width="240" height="45" rx="2" fill="hsl(var(--muted))" />
                            <rect x="15" y="95" width="240" height="45" rx="2" fill="hsl(var(--muted))" />
                            <rect x="15" y="150" width="240" height="45" rx="2" fill="hsl(var(--muted))" />
                          </g>

                          <g transform="translate(0, 390)">
                            <rect width="270" height="170" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                            <text x="135" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="11">Connections</text>
                          </g>
                          
                          <g transform="translate(290, 390)">
                            <rect width="270" height="170" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                            <text x="135" y="25" textAnchor="middle" fill="currentColor" fontWeight="bold" fontSize="11">Activity Feed</text>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
