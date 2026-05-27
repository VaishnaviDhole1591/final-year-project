'use client'

import { Button } from '@/components/ui/button'
import { Printer, Download } from 'lucide-react'

export default function FinalReportPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white text-black print:p-0">
      {/* Print Controls - Hidden when printing */}
      <div className="fixed top-4 right-4 flex gap-2 print:hidden z-50">
        <Button onClick={handlePrint} className="shadow-lg">
          <Printer className="mr-2 h-4 w-4" />
          Print / Save as PDF
        </Button>
      </div>

      {/* Document Content */}
      <div className="max-w-[210mm] mx-auto p-8 print:p-0 print:max-w-none">
        
        {/* Cover Page */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center page-break-after">
          <div className="space-y-8">
            <div className="border-4 border-black p-8">
              <h1 className="text-4xl font-bold uppercase tracking-wider">EnterNet</h1>
              <p className="text-xl mt-2">MSME Entrepreneur Networking Platform</p>
            </div>
            
            <div className="space-y-4 text-lg">
              <p className="font-semibold">System Design Documentation</p>
              <p>Final Year Project Report</p>
            </div>

            <div className="space-y-2 text-base mt-16">
              <p><strong>Submitted By:</strong></p>
              <p>Vaishnavi Dhole</p>
            </div>

            <div className="mt-16 text-sm">
              <p>Department of Computer Science</p>
              <p>Academic Year 2024-2025</p>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="min-h-screen py-12 page-break-after">
          <h2 className="text-3xl font-bold border-b-2 border-black pb-4 mb-8">Table of Contents</h2>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between border-b border-dashed border-gray-400 pb-2">
              <span>1. Introduction</span>
              <span>3</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-gray-400 pb-2">
              <span>2. System Overview</span>
              <span>4</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-gray-400 pb-2">
              <span>3. Entity-Relationship Diagram (ER Diagram)</span>
              <span>5</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-gray-400 pb-2">
              <span>4. Data Flow Diagram (DFD)</span>
              <span>7</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-gray-400 pb-2">
              <span>5. Flow Diagram</span>
              <span>9</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-gray-400 pb-2">
              <span>6. Block Diagram</span>
              <span>11</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-gray-400 pb-2">
              <span>7. System Architecture</span>
              <span>13</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-gray-400 pb-2">
              <span>8. Site Map</span>
              <span>15</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-gray-400 pb-2">
              <span>9. Wireframes</span>
              <span>17</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-gray-400 pb-2">
              <span>10. Database Schema</span>
              <span>21</span>
            </div>
          </div>
        </section>

        {/* 1. Introduction */}
        <section className="min-h-screen py-12 page-break-after">
          <h2 className="text-3xl font-bold border-b-2 border-black pb-4 mb-8">1. Introduction</h2>
          
          <div className="space-y-6 text-justify leading-relaxed">
            <h3 className="text-xl font-semibold mt-6">1.1 Project Overview</h3>
            <p>
              EnterNet is a comprehensive web-based platform designed to support Micro, Small, and Medium Enterprises (MSMEs) 
              in India. The platform serves as a one-stop solution for entrepreneurs to discover government schemes, 
              network with fellow business owners, participate in events, and access valuable resources for business growth.
            </p>

            <h3 className="text-xl font-semibold mt-6">1.2 Problem Statement</h3>
            <p>
              MSMEs in India face significant challenges in accessing information about government schemes, 
              connecting with potential business partners, and finding relevant resources for growth. 
              The fragmented nature of information and lack of a unified platform leads to missed opportunities 
              and slower business development.
            </p>

            <h3 className="text-xl font-semibold mt-6">1.3 Objectives</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide a centralized platform for discovering 70+ government MSME schemes</li>
              <li>Enable networking and collaboration among entrepreneurs</li>
              <li>Facilitate event participation and knowledge sharing</li>
              <li>Offer curated resources for business development</li>
              <li>Create a community forum for discussions and support</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">1.4 Scope</h3>
            <p>
              The platform covers scheme discovery, user networking, event management, forum discussions, 
              and resource sharing. It is built using modern web technologies including Next.js, React, 
              TypeScript, and Supabase for a scalable and maintainable architecture.
            </p>

            <h3 className="text-xl font-semibold mt-6">1.5 Technology Stack</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border p-4">
                <h4 className="font-semibold">Frontend</h4>
                <ul className="text-sm mt-2 space-y-1">
                  <li>Next.js 15 (App Router)</li>
                  <li>React 19</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>shadcn/ui Components</li>
                </ul>
              </div>
              <div className="border p-4">
                <h4 className="font-semibold">Backend</h4>
                <ul className="text-sm mt-2 space-y-1">
                  <li>Supabase (PostgreSQL)</li>
                  <li>Supabase Auth</li>
                  <li>Next.js API Routes</li>
                  <li>Row Level Security</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. System Overview */}
        <section className="min-h-screen py-12 page-break-after">
          <h2 className="text-3xl font-bold border-b-2 border-black pb-4 mb-8">2. System Overview</h2>
          
          <div className="space-y-6 text-justify leading-relaxed">
            <h3 className="text-xl font-semibold">2.1 Modules</h3>
            
            <div className="grid gap-4">
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-semibold">User Management Module</h4>
                <p className="text-sm">Handles user registration, authentication, profile management, and session handling using Supabase Auth.</p>
              </div>
              
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-semibold">Schemes Module</h4>
                <p className="text-sm">Comprehensive database of 70+ government schemes with advanced filtering, search, and application tracking.</p>
              </div>
              
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-semibold">Networking Module</h4>
                <p className="text-sm">Enables entrepreneurs to connect, send connection requests, and build professional relationships.</p>
              </div>
              
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-semibold">Events Module</h4>
                <p className="text-sm">Lists workshops, seminars, and networking events with registration functionality.</p>
              </div>
              
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-semibold">Forum Module</h4>
                <p className="text-sm">Community discussion platform for entrepreneurs to share knowledge and seek advice.</p>
              </div>
              
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-semibold">Resources Module</h4>
                <p className="text-sm">Curated collection of guides, templates, and learning materials for MSMEs.</p>
              </div>
              
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-semibold">Dashboard Module</h4>
                <p className="text-sm">Personalized dashboard showing scheme applications, connections, and activity feed.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8">2.2 User Roles</h3>
            <table className="w-full border-collapse border border-black mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-black p-3 text-left">Role</th>
                  <th className="border border-black p-3 text-left">Permissions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-3 font-medium">Guest</td>
                  <td className="border border-black p-3">View schemes, events, resources (read-only)</td>
                </tr>
                <tr>
                  <td className="border border-black p-3 font-medium">Registered User</td>
                  <td className="border border-black p-3">All guest permissions + apply for schemes, network, participate in forum, access dashboard</td>
                </tr>
                <tr>
                  <td className="border border-black p-3 font-medium">Admin</td>
                  <td className="border border-black p-3">All user permissions + manage schemes, moderate forum, manage events</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-xl font-semibold mt-8">2.3 Key Features</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Advanced scheme filtering by category, industry, funding type, and location</li>
              <li>Real-time connection requests and notifications</li>
              <li>Event registration with capacity management</li>
              <li>Threaded forum discussions with replies</li>
              <li>Responsive design for mobile and desktop</li>
              <li>Dark mode support</li>
              <li>Secure authentication with email verification</li>
            </ul>
          </div>
        </section>

        {/* 3. ER Diagram */}
        <section className="min-h-screen py-12 page-break-after">
          <h2 className="text-3xl font-bold border-b-2 border-black pb-4 mb-8">3. Entity-Relationship Diagram</h2>
          
          <div className="space-y-6">
            <p className="text-justify leading-relaxed">
              The Entity-Relationship diagram illustrates the database structure of the EnterNet platform, 
              showing all entities, their attributes, and the relationships between them.
            </p>

            <div className="border-2 border-black p-4 bg-white">
              <svg viewBox="0 0 1000 700" className="w-full h-auto">
                {/* Profiles Entity */}
                <g transform="translate(50, 30)">
                  <rect width="180" height="200" fill="white" stroke="black" strokeWidth="2" />
                  <rect width="180" height="30" fill="black" />
                  <text x="90" y="20" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">PROFILES</text>
                  <text x="10" y="50" fontSize="10" fontWeight="bold">PK id: UUID</text>
                  <text x="10" y="70" fontSize="10">email: VARCHAR(255)</text>
                  <text x="10" y="90" fontSize="10">first_name: VARCHAR(100)</text>
                  <text x="10" y="110" fontSize="10">last_name: VARCHAR(100)</text>
                  <text x="10" y="130" fontSize="10">avatar_url: TEXT</text>
                  <text x="10" y="150" fontSize="10">industry: VARCHAR(100)</text>
                  <text x="10" y="170" fontSize="10">location: VARCHAR(200)</text>
                  <text x="10" y="190" fontSize="10">created_at: TIMESTAMP</text>
                </g>

                {/* Schemes Entity */}
                <g transform="translate(400, 30)">
                  <rect width="180" height="220" fill="white" stroke="black" strokeWidth="2" />
                  <rect width="180" height="30" fill="black" />
                  <text x="90" y="20" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">SCHEMES</text>
                  <text x="10" y="50" fontSize="10" fontWeight="bold">PK id: VARCHAR</text>
                  <text x="10" y="70" fontSize="10">title: VARCHAR(255)</text>
                  <text x="10" y="90" fontSize="10">description: TEXT</text>
                  <text x="10" y="110" fontSize="10">eligibility: TEXT</text>
                  <text x="10" y="130" fontSize="10">benefits: JSONB</text>
                  <text x="10" y="150" fontSize="10">industry: VARCHAR(100)</text>
                  <text x="10" y="170" fontSize="10">funding_type: VARCHAR(50)</text>
                  <text x="10" y="190" fontSize="10">category: VARCHAR(100)</text>
                  <text x="10" y="210" fontSize="10">ministry: VARCHAR(200)</text>
                </g>

                {/* Events Entity */}
                <g transform="translate(750, 30)">
                  <rect width="180" height="200" fill="white" stroke="black" strokeWidth="2" />
                  <rect width="180" height="30" fill="black" />
                  <text x="90" y="20" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">EVENTS</text>
                  <text x="10" y="50" fontSize="10" fontWeight="bold">PK id: UUID</text>
                  <text x="10" y="70" fontSize="10">title: VARCHAR(255)</text>
                  <text x="10" y="90" fontSize="10">description: TEXT</text>
                  <text x="10" y="110" fontSize="10">date: TIMESTAMP</text>
                  <text x="10" y="130" fontSize="10">mode: VARCHAR(50)</text>
                  <text x="10" y="150" fontSize="10">location: VARCHAR(200)</text>
                  <text x="10" y="170" fontSize="10" fontWeight="bold">FK organizer_id: UUID</text>
                  <text x="10" y="190" fontSize="10">capacity: INTEGER</text>
                </g>

                {/* User_Scheme_Applications Junction */}
                <g transform="translate(225, 300)">
                  <rect width="200" height="130" fill="#f0f0f0" stroke="black" strokeWidth="2" />
                  <rect width="200" height="30" fill="#666" />
                  <text x="100" y="20" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">USER_SCHEME_APPLICATIONS</text>
                  <text x="10" y="50" fontSize="10" fontWeight="bold">PK id: UUID</text>
                  <text x="10" y="70" fontSize="10" fontWeight="bold">FK user_id: UUID</text>
                  <text x="10" y="90" fontSize="10" fontWeight="bold">FK scheme_id: VARCHAR</text>
                  <text x="10" y="110" fontSize="10">status: VARCHAR(50)</text>
                </g>

                {/* Connections Entity */}
                <g transform="translate(50, 300)">
                  <rect width="150" height="110" fill="#f0f0f0" stroke="black" strokeWidth="2" />
                  <rect width="150" height="30" fill="#666" />
                  <text x="75" y="20" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">CONNECTIONS</text>
                  <text x="10" y="50" fontSize="10" fontWeight="bold">PK id: UUID</text>
                  <text x="10" y="70" fontSize="10" fontWeight="bold">FK requester_id: UUID</text>
                  <text x="10" y="90" fontSize="10" fontWeight="bold">FK receiver_id: UUID</text>
                </g>

                {/* Forum_Threads Entity */}
                <g transform="translate(50, 480)">
                  <rect width="160" height="150" fill="white" stroke="black" strokeWidth="2" />
                  <rect width="160" height="30" fill="black" />
                  <text x="80" y="20" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">FORUM_THREADS</text>
                  <text x="10" y="50" fontSize="10" fontWeight="bold">PK id: UUID</text>
                  <text x="10" y="70" fontSize="10">title: VARCHAR(255)</text>
                  <text x="10" y="90" fontSize="10">content: TEXT</text>
                  <text x="10" y="110" fontSize="10" fontWeight="bold">FK author_id: UUID</text>
                  <text x="10" y="130" fontSize="10">category: VARCHAR(50)</text>
                </g>

                {/* Forum_Replies Entity */}
                <g transform="translate(250, 480)">
                  <rect width="160" height="130" fill="white" stroke="black" strokeWidth="2" />
                  <rect width="160" height="30" fill="black" />
                  <text x="80" y="20" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">FORUM_REPLIES</text>
                  <text x="10" y="50" fontSize="10" fontWeight="bold">PK id: UUID</text>
                  <text x="10" y="70" fontSize="10" fontWeight="bold">FK thread_id: UUID</text>
                  <text x="10" y="90" fontSize="10" fontWeight="bold">FK author_id: UUID</text>
                  <text x="10" y="110" fontSize="10">content: TEXT</text>
                </g>

                {/* Resources Entity */}
                <g transform="translate(450, 480)">
                  <rect width="160" height="150" fill="white" stroke="black" strokeWidth="2" />
                  <rect width="160" height="30" fill="black" />
                  <text x="80" y="20" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">RESOURCES</text>
                  <text x="10" y="50" fontSize="10" fontWeight="bold">PK id: UUID</text>
                  <text x="10" y="70" fontSize="10">title: VARCHAR(255)</text>
                  <text x="10" y="90" fontSize="10">category: VARCHAR(100)</text>
                  <text x="10" y="110" fontSize="10">url: TEXT</text>
                  <text x="10" y="130" fontSize="10" fontWeight="bold">FK creator_id: UUID</text>
                </g>

                {/* Event_Registrations Entity */}
                <g transform="translate(650, 300)">
                  <rect width="180" height="110" fill="#f0f0f0" stroke="black" strokeWidth="2" />
                  <rect width="180" height="30" fill="#666" />
                  <text x="90" y="20" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">EVENT_REGISTRATIONS</text>
                  <text x="10" y="50" fontSize="10" fontWeight="bold">PK id: UUID</text>
                  <text x="10" y="70" fontSize="10" fontWeight="bold">FK user_id: UUID</text>
                  <text x="10" y="90" fontSize="10" fontWeight="bold">FK event_id: UUID</text>
                </g>

                {/* Relationship Lines */}
                {/* Profiles to Connections */}
                <line x1="140" y1="230" x2="125" y2="300" stroke="black" strokeWidth="1.5" />
                <text x="100" y="265" fontSize="9">1</text>
                <text x="115" y="295" fontSize="9">N</text>

                {/* Profiles to User_Scheme_Applications */}
                <line x1="230" y1="180" x2="280" y2="300" stroke="black" strokeWidth="1.5" />
                <text x="235" y="220" fontSize="9">1</text>
                <text x="270" y="290" fontSize="9">N</text>

                {/* Schemes to User_Scheme_Applications */}
                <line x1="400" y1="200" x2="380" y2="300" stroke="black" strokeWidth="1.5" />
                <text x="395" y="230" fontSize="9">1</text>
                <text x="375" y="290" fontSize="9">N</text>

                {/* Profiles to Forum_Threads */}
                <line x1="100" y1="230" x2="100" y2="480" stroke="black" strokeWidth="1.5" />
                <text x="85" y="350" fontSize="9">1</text>
                <text x="85" y="470" fontSize="9">N</text>

                {/* Forum_Threads to Forum_Replies */}
                <line x1="210" y1="550" x2="250" y2="550" stroke="black" strokeWidth="1.5" />
                <text x="215" y="545" fontSize="9">1</text>
                <text x="240" y="545" fontSize="9">N</text>

                {/* Profiles to Events (organizer) */}
                <path d="M 230 100 L 750 100" fill="none" stroke="black" strokeWidth="1.5" strokeDasharray="5,3" />
                <text x="240" y="95" fontSize="9">1</text>
                <text x="730" y="95" fontSize="9">N</text>

                {/* Profiles to Event_Registrations */}
                <path d="M 230 180 Q 450 250 650 340" fill="none" stroke="black" strokeWidth="1.5" />
                <text x="300" y="200" fontSize="9">1</text>
                <text x="620" y="330" fontSize="9">N</text>

                {/* Events to Event_Registrations */}
                <line x1="840" y1="230" x2="780" y2="300" stroke="black" strokeWidth="1.5" />
                <text x="825" y="250" fontSize="9">1</text>
                <text x="775" y="295" fontSize="9">N</text>

                {/* Profiles to Resources */}
                <path d="M 180 230 Q 350 400 500 480" fill="none" stroke="black" strokeWidth="1.5" strokeDasharray="5,3" />
                <text x="220" y="280" fontSize="9">1</text>
                <text x="480" y="470" fontSize="9">N</text>

                {/* Legend */}
                <g transform="translate(700, 480)">
                  <rect width="250" height="150" fill="white" stroke="black" strokeWidth="1" />
                  <text x="125" y="25" textAnchor="middle" fontWeight="bold" fontSize="12">LEGEND</text>
                  <line x1="20" y1="50" x2="80" y2="50" stroke="black" strokeWidth="1.5" />
                  <text x="90" y="55" fontSize="10">One-to-Many Relationship</text>
                  <line x1="20" y1="80" x2="80" y2="80" stroke="black" strokeWidth="1.5" strokeDasharray="5,3" />
                  <text x="90" y="85" fontSize="10">Foreign Key Reference</text>
                  <rect x="20" y="100" width="15" height="15" fill="white" stroke="black" />
                  <text x="45" y="112" fontSize="10">Entity Table</text>
                  <rect x="20" y="125" width="15" height="15" fill="#f0f0f0" stroke="black" />
                  <text x="45" y="137" fontSize="10">Junction Table</text>
                </g>
              </svg>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Entity Descriptions:</h3>
              <table className="w-full border-collapse border border-black text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-black p-2 text-left">Entity</th>
                    <th className="border border-black p-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-black p-2 font-medium">Profiles</td><td className="border border-black p-2">Stores user information and entrepreneur profiles</td></tr>
                  <tr><td className="border border-black p-2 font-medium">Schemes</td><td className="border border-black p-2">Government MSME schemes with detailed information</td></tr>
                  <tr><td className="border border-black p-2 font-medium">Events</td><td className="border border-black p-2">Workshops, seminars, and networking events</td></tr>
                  <tr><td className="border border-black p-2 font-medium">Connections</td><td className="border border-black p-2">Professional connections between users</td></tr>
                  <tr><td className="border border-black p-2 font-medium">Forum_Threads</td><td className="border border-black p-2">Discussion threads created by users</td></tr>
                  <tr><td className="border border-black p-2 font-medium">Forum_Replies</td><td className="border border-black p-2">Replies to forum threads</td></tr>
                  <tr><td className="border border-black p-2 font-medium">Resources</td><td className="border border-black p-2">Learning materials and guides</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. DFD */}
        <section className="min-h-screen py-12 page-break-after">
          <h2 className="text-3xl font-bold border-b-2 border-black pb-4 mb-8">4. Data Flow Diagram (DFD)</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">4.1 Level 0 - Context Diagram</h3>
              <p className="text-justify mb-4">
                The context diagram shows the system as a single process with its external entities and data flows.
              </p>
              
              <div className="border-2 border-black p-4 bg-white">
                <svg viewBox="0 0 800 400" className="w-full h-auto">
                  {/* External Entities */}
                  <rect x="50" y="150" width="120" height="60" fill="white" stroke="black" strokeWidth="2" />
                  <text x="110" y="185" textAnchor="middle" fontSize="12" fontWeight="bold">MSME</text>
                  <text x="110" y="200" textAnchor="middle" fontSize="10">Entrepreneur</text>

                  <rect x="630" y="50" width="120" height="60" fill="white" stroke="black" strokeWidth="2" />
                  <text x="690" y="85" textAnchor="middle" fontSize="12" fontWeight="bold">Government</text>
                  <text x="690" y="100" textAnchor="middle" fontSize="10">Schemes DB</text>

                  <rect x="630" y="280" width="120" height="60" fill="white" stroke="black" strokeWidth="2" />
                  <text x="690" y="315" textAnchor="middle" fontSize="12" fontWeight="bold">Admin</text>

                  {/* Central Process */}
                  <circle cx="400" cy="180" r="80" fill="white" stroke="black" strokeWidth="2" />
                  <text x="400" y="175" textAnchor="middle" fontSize="12" fontWeight="bold">EnterNet</text>
                  <text x="400" y="195" textAnchor="middle" fontSize="10">Platform</text>

                  {/* Data Flows */}
                  <line x1="170" y1="165" x2="320" y2="165" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                  <text x="245" y="155" textAnchor="middle" fontSize="9">Registration, Profile Data</text>

                  <line x1="320" y1="195" x2="170" y2="195" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                  <text x="245" y="220" textAnchor="middle" fontSize="9">Schemes, Events, Resources</text>

                  <line x1="630" y1="80" x2="480" y2="150" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                  <text x="540" y="100" textAnchor="middle" fontSize="9">Scheme Data</text>

                  <line x1="480" y1="220" x2="630" y2="290" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                  <text x="540" y="280" textAnchor="middle" fontSize="9">Reports, Analytics</text>

                  <line x1="630" y1="310" x2="480" y2="220" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                  <text x="580" y="245" textAnchor="middle" fontSize="9">Management</text>

                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="page-break-before">
              <h3 className="text-xl font-semibold mb-4">4.2 Level 1 - Detailed DFD</h3>
              <p className="text-justify mb-4">
                The Level 1 DFD shows the main processes within the system and their interactions with data stores.
              </p>
              
              <div className="border-2 border-black p-4 bg-white">
                <svg viewBox="0 0 900 600" className="w-full h-auto">
                  {/* External Entity */}
                  <rect x="20" y="250" width="100" height="50" fill="white" stroke="black" strokeWidth="2" />
                  <text x="70" y="280" textAnchor="middle" fontSize="11" fontWeight="bold">User</text>

                  {/* Processes */}
                  <circle cx="200" cy="100" r="45" fill="white" stroke="black" strokeWidth="2" />
                  <text x="200" y="95" textAnchor="middle" fontSize="10" fontWeight="bold">1.0</text>
                  <text x="200" y="110" textAnchor="middle" fontSize="9">User Mgmt</text>

                  <circle cx="400" cy="100" r="45" fill="white" stroke="black" strokeWidth="2" />
                  <text x="400" y="95" textAnchor="middle" fontSize="10" fontWeight="bold">2.0</text>
                  <text x="400" y="110" textAnchor="middle" fontSize="9">Scheme Mgmt</text>

                  <circle cx="600" cy="100" r="45" fill="white" stroke="black" strokeWidth="2" />
                  <text x="600" y="95" textAnchor="middle" fontSize="10" fontWeight="bold">3.0</text>
                  <text x="600" y="110" textAnchor="middle" fontSize="9">Event Mgmt</text>

                  <circle cx="200" cy="350" r="45" fill="white" stroke="black" strokeWidth="2" />
                  <text x="200" y="345" textAnchor="middle" fontSize="10" fontWeight="bold">4.0</text>
                  <text x="200" y="360" textAnchor="middle" fontSize="9">Network</text>

                  <circle cx="400" cy="350" r="45" fill="white" stroke="black" strokeWidth="2" />
                  <text x="400" y="345" textAnchor="middle" fontSize="10" fontWeight="bold">5.0</text>
                  <text x="400" y="360" textAnchor="middle" fontSize="9">Forum</text>

                  <circle cx="600" cy="350" r="45" fill="white" stroke="black" strokeWidth="2" />
                  <text x="600" y="345" textAnchor="middle" fontSize="10" fontWeight="bold">6.0</text>
                  <text x="600" y="360" textAnchor="middle" fontSize="9">Resources</text>

                  {/* Data Stores */}
                  <g transform="translate(750, 80)">
                    <line x1="0" y1="0" x2="120" y2="0" stroke="black" strokeWidth="2" />
                    <line x1="0" y1="30" x2="120" y2="30" stroke="black" strokeWidth="2" />
                    <text x="60" y="20" textAnchor="middle" fontSize="10">D1 | Profiles</text>
                  </g>

                  <g transform="translate(750, 150)">
                    <line x1="0" y1="0" x2="120" y2="0" stroke="black" strokeWidth="2" />
                    <line x1="0" y1="30" x2="120" y2="30" stroke="black" strokeWidth="2" />
                    <text x="60" y="20" textAnchor="middle" fontSize="10">D2 | Schemes</text>
                  </g>

                  <g transform="translate(750, 220)">
                    <line x1="0" y1="0" x2="120" y2="0" stroke="black" strokeWidth="2" />
                    <line x1="0" y1="30" x2="120" y2="30" stroke="black" strokeWidth="2" />
                    <text x="60" y="20" textAnchor="middle" fontSize="10">D3 | Events</text>
                  </g>

                  <g transform="translate(750, 320)">
                    <line x1="0" y1="0" x2="120" y2="0" stroke="black" strokeWidth="2" />
                    <line x1="0" y1="30" x2="120" y2="30" stroke="black" strokeWidth="2" />
                    <text x="60" y="20" textAnchor="middle" fontSize="10">D4 | Connections</text>
                  </g>

                  <g transform="translate(750, 390)">
                    <line x1="0" y1="0" x2="120" y2="0" stroke="black" strokeWidth="2" />
                    <line x1="0" y1="30" x2="120" y2="30" stroke="black" strokeWidth="2" />
                    <text x="60" y="20" textAnchor="middle" fontSize="10">D5 | Forum</text>
                  </g>

                  <g transform="translate(750, 460)">
                    <line x1="0" y1="0" x2="120" y2="0" stroke="black" strokeWidth="2" />
                    <line x1="0" y1="30" x2="120" y2="30" stroke="black" strokeWidth="2" />
                    <text x="60" y="20" textAnchor="middle" fontSize="10">D6 | Resources</text>
                  </g>

                  {/* Data Flows from User */}
                  <line x1="120" y1="260" x2="165" y2="140" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
                  <line x1="120" y1="275" x2="355" y2="130" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
                  <line x1="120" y1="285" x2="165" y2="320" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
                  <line x1="120" y1="290" x2="355" y2="340" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />

                  {/* Data Flows to Data Stores */}
                  <line x1="245" y1="100" x2="355" y2="100" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
                  <line x1="445" y1="100" x2="555" y2="100" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
                  <line x1="645" y1="100" x2="750" y2="95" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
                  <line x1="445" y1="115" x2="750" y2="165" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
                  <line x1="645" y1="115" x2="750" y2="235" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
                  <line x1="245" y1="350" x2="750" y2="335" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
                  <line x1="445" y1="365" x2="750" y2="405" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
                  <line x1="645" y1="365" x2="750" y2="475" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Flow Diagram */}
        <section className="min-h-screen py-12 page-break-after">
          <h2 className="text-3xl font-bold border-b-2 border-black pb-4 mb-8">5. Flow Diagram</h2>
          
          <div className="space-y-6">
            <p className="text-justify leading-relaxed">
              The flow diagram illustrates the user journey through the EnterNet platform, 
              from initial visit to scheme application and networking activities.
            </p>

            <div className="border-2 border-black p-4 bg-white">
              <svg viewBox="0 0 800 900" className="w-full h-auto">
                {/* Start */}
                <ellipse cx="400" cy="30" rx="50" ry="25" fill="black" />
                <text x="400" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">START</text>

                {/* Visit Homepage */}
                <line x1="400" y1="55" x2="400" y2="80" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <rect x="300" y="80" width="200" height="40" fill="white" stroke="black" strokeWidth="2" />
                <text x="400" y="105" textAnchor="middle" fontSize="11">Visit Homepage</text>

                {/* Decision: Has Account */}
                <line x1="400" y1="120" x2="400" y2="150" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <polygon points="400,150 470,190 400,230 330,190" fill="white" stroke="black" strokeWidth="2" />
                <text x="400" y="195" textAnchor="middle" fontSize="10">Has Account?</text>

                {/* No - Register */}
                <line x1="330" y1="190" x2="200" y2="190" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="265" y="185" fontSize="9">No</text>
                <rect x="100" y="170" width="100" height="40" fill="white" stroke="black" strokeWidth="2" />
                <text x="150" y="195" textAnchor="middle" fontSize="10">Register</text>

                <line x1="150" y1="210" x2="150" y2="260" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <rect x="75" y="260" width="150" height="40" fill="white" stroke="black" strokeWidth="2" />
                <text x="150" y="285" textAnchor="middle" fontSize="10">Create Profile</text>

                <line x1="225" y1="280" x2="330" y2="280" stroke="black" strokeWidth="1.5" />

                {/* Yes - Login */}
                <line x1="470" y1="190" x2="600" y2="190" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="535" y="185" fontSize="9">Yes</text>
                <rect x="550" y="170" width="100" height="40" fill="white" stroke="black" strokeWidth="2" />
                <text x="600" y="195" textAnchor="middle" fontSize="10">Login</text>

                <line x1="600" y1="210" x2="600" y2="280" stroke="black" strokeWidth="1.5" />
                <line x1="600" y1="280" x2="470" y2="280" stroke="black" strokeWidth="1.5" />

                {/* Access Dashboard */}
                <line x1="400" y1="230" x2="400" y2="260" stroke="black" strokeWidth="1.5" />
                <line x1="330" y1="280" x2="470" y2="280" stroke="black" strokeWidth="1.5" />
                <line x1="400" y1="280" x2="400" y2="310" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <rect x="300" y="310" width="200" height="40" fill="white" stroke="black" strokeWidth="2" />
                <text x="400" y="335" textAnchor="middle" fontSize="11">Access Dashboard</text>

                {/* Decision: Action */}
                <line x1="400" y1="350" x2="400" y2="380" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <polygon points="400,380 500,430 400,480 300,430" fill="white" stroke="black" strokeWidth="2" />
                <text x="400" y="435" textAnchor="middle" fontSize="10">Select Action</text>

                {/* Browse Schemes */}
                <line x1="300" y1="430" x2="150" y2="430" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="225" y="420" fontSize="9">Schemes</text>
                <rect x="75" y="410" width="150" height="40" fill="white" stroke="black" strokeWidth="2" />
                <text x="150" y="435" textAnchor="middle" fontSize="10">Browse Schemes</text>

                <line x1="150" y1="450" x2="150" y2="490" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <polygon points="150,490 200,520 150,550 100,520" fill="white" stroke="black" strokeWidth="2" />
                <text x="150" y="525" textAnchor="middle" fontSize="9">Apply?</text>

                <line x1="150" y1="550" x2="150" y2="590" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="160" y="575" fontSize="9">Yes</text>
                <rect x="75" y="590" width="150" height="40" fill="white" stroke="black" strokeWidth="2" />
                <text x="150" y="615" textAnchor="middle" fontSize="10">Submit Application</text>

                {/* Network */}
                <line x1="400" y1="480" x2="400" y2="520" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="410" y="500" fontSize="9">Network</text>
                <rect x="325" y="520" width="150" height="40" fill="white" stroke="black" strokeWidth="2" />
                <text x="400" y="545" textAnchor="middle" fontSize="10">Browse Network</text>

                <line x1="400" y1="560" x2="400" y2="600" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <rect x="325" y="600" width="150" height="40" fill="white" stroke="black" strokeWidth="2" />
                <text x="400" y="625" textAnchor="middle" fontSize="10">Send Connection</text>

                {/* Events */}
                <line x1="500" y1="430" x2="650" y2="430" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="575" y="420" fontSize="9">Events</text>
                <rect x="575" y="410" width="150" height="40" fill="white" stroke="black" strokeWidth="2" />
                <text x="650" y="435" textAnchor="middle" fontSize="10">View Events</text>

                <line x1="650" y1="450" x2="650" y2="490" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <rect x="575" y="490" width="150" height="40" fill="white" stroke="black" strokeWidth="2" />
                <text x="650" y="515" textAnchor="middle" fontSize="10">Register for Event</text>

                {/* Forum */}
                <line x1="650" y1="530" x2="650" y2="570" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <rect x="575" y="570" width="150" height="40" fill="white" stroke="black" strokeWidth="2" />
                <text x="650" y="595" textAnchor="middle" fontSize="10">Participate Forum</text>

                {/* Converge */}
                <line x1="150" y1="630" x2="150" y2="700" stroke="black" strokeWidth="1.5" />
                <line x1="400" y1="640" x2="400" y2="700" stroke="black" strokeWidth="1.5" />
                <line x1="650" y1="610" x2="650" y2="700" stroke="black" strokeWidth="1.5" />
                <line x1="150" y1="700" x2="650" y2="700" stroke="black" strokeWidth="1.5" />

                {/* Decision: Continue */}
                <line x1="400" y1="700" x2="400" y2="730" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <polygon points="400,730 470,770 400,810 330,770" fill="white" stroke="black" strokeWidth="2" />
                <text x="400" y="775" textAnchor="middle" fontSize="10">Continue?</text>

                {/* Loop back */}
                <line x1="330" y1="770" x2="250" y2="770" stroke="black" strokeWidth="1.5" />
                <text x="290" y="760" fontSize="9">Yes</text>
                <line x1="250" y1="770" x2="250" y2="340" stroke="black" strokeWidth="1.5" />
                <line x1="250" y1="340" x2="300" y2="340" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

                {/* End */}
                <line x1="400" y1="810" x2="400" y2="850" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="420" y="835" fontSize="9">No</text>
                <ellipse cx="400" cy="875" rx="50" ry="25" fill="black" />
                <text x="400" y="880" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">END</text>
              </svg>
            </div>
          </div>
        </section>

        {/* 6. Block Diagram */}
        <section className="min-h-screen py-12 page-break-after">
          <h2 className="text-3xl font-bold border-b-2 border-black pb-4 mb-8">6. Block Diagram</h2>
          
          <div className="space-y-6">
            <p className="text-justify leading-relaxed">
              The block diagram shows the modular architecture of the EnterNet platform, 
              illustrating how different components interact with each other.
            </p>

            <div className="border-2 border-black p-4 bg-white">
              <svg viewBox="0 0 900 600" className="w-full h-auto">
                {/* Presentation Layer */}
                <rect x="50" y="30" width="800" height="100" fill="#f5f5f5" stroke="black" strokeWidth="2" />
                <text x="450" y="55" textAnchor="middle" fontSize="14" fontWeight="bold">PRESENTATION LAYER (Client)</text>
                
                <rect x="70" y="70" width="120" height="45" fill="white" stroke="black" strokeWidth="1" />
                <text x="130" y="97" textAnchor="middle" fontSize="10">Home Page</text>
                
                <rect x="210" y="70" width="120" height="45" fill="white" stroke="black" strokeWidth="1" />
                <text x="270" y="97" textAnchor="middle" fontSize="10">Schemes Page</text>
                
                <rect x="350" y="70" width="120" height="45" fill="white" stroke="black" strokeWidth="1" />
                <text x="410" y="97" textAnchor="middle" fontSize="10">Network Page</text>
                
                <rect x="490" y="70" width="120" height="45" fill="white" stroke="black" strokeWidth="1" />
                <text x="550" y="97" textAnchor="middle" fontSize="10">Events Page</text>
                
                <rect x="630" y="70" width="100" height="45" fill="white" stroke="black" strokeWidth="1" />
                <text x="680" y="97" textAnchor="middle" fontSize="10">Forum Page</text>
                
                <rect x="750" y="70" width="80" height="45" fill="white" stroke="black" strokeWidth="1" />
                <text x="790" y="97" textAnchor="middle" fontSize="10">Dashboard</text>

                {/* Arrow to Business Layer */}
                <line x1="450" y1="130" x2="450" y2="160" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <line x1="450" y1="200" x2="450" y2="170" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Business Logic Layer */}
                <rect x="50" y="170" width="800" height="120" fill="#e8e8e8" stroke="black" strokeWidth="2" />
                <text x="450" y="195" textAnchor="middle" fontSize="14" fontWeight="bold">BUSINESS LOGIC LAYER (Next.js App Router)</text>
                
                <rect x="70" y="210" width="130" height="60" fill="white" stroke="black" strokeWidth="1" />
                <text x="135" y="235" textAnchor="middle" fontSize="10" fontWeight="bold">Auth Module</text>
                <text x="135" y="250" textAnchor="middle" fontSize="9">Login, Register</text>
                <text x="135" y="262" textAnchor="middle" fontSize="9">Session Mgmt</text>
                
                <rect x="220" y="210" width="130" height="60" fill="white" stroke="black" strokeWidth="1" />
                <text x="285" y="235" textAnchor="middle" fontSize="10" fontWeight="bold">Scheme Module</text>
                <text x="285" y="250" textAnchor="middle" fontSize="9">Search, Filter</text>
                <text x="285" y="262" textAnchor="middle" fontSize="9">Applications</text>
                
                <rect x="370" y="210" width="130" height="60" fill="white" stroke="black" strokeWidth="1" />
                <text x="435" y="235" textAnchor="middle" fontSize="10" fontWeight="bold">Network Module</text>
                <text x="435" y="250" textAnchor="middle" fontSize="9">Connections</text>
                <text x="435" y="262" textAnchor="middle" fontSize="9">Recommendations</text>
                
                <rect x="520" y="210" width="130" height="60" fill="white" stroke="black" strokeWidth="1" />
                <text x="585" y="235" textAnchor="middle" fontSize="10" fontWeight="bold">Event Module</text>
                <text x="585" y="250" textAnchor="middle" fontSize="9">Listings</text>
                <text x="585" y="262" textAnchor="middle" fontSize="9">Registration</text>
                
                <rect x="670" y="210" width="160" height="60" fill="white" stroke="black" strokeWidth="1" />
                <text x="750" y="235" textAnchor="middle" fontSize="10" fontWeight="bold">Forum Module</text>
                <text x="750" y="250" textAnchor="middle" fontSize="9">Threads, Replies</text>
                <text x="750" y="262" textAnchor="middle" fontSize="9">Search</text>

                {/* Arrow to API Layer */}
                <line x1="450" y1="290" x2="450" y2="320" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <line x1="450" y1="360" x2="450" y2="330" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* API Layer */}
                <rect x="50" y="330" width="800" height="80" fill="#d8d8d8" stroke="black" strokeWidth="2" />
                <text x="450" y="355" textAnchor="middle" fontSize="14" fontWeight="bold">API LAYER (Server Actions & Route Handlers)</text>
                
                <rect x="100" y="370" width="100" height="30" fill="white" stroke="black" strokeWidth="1" />
                <text x="150" y="390" textAnchor="middle" fontSize="9">/api/auth</text>
                
                <rect x="220" y="370" width="100" height="30" fill="white" stroke="black" strokeWidth="1" />
                <text x="270" y="390" textAnchor="middle" fontSize="9">/api/schemes</text>
                
                <rect x="340" y="370" width="100" height="30" fill="white" stroke="black" strokeWidth="1" />
                <text x="390" y="390" textAnchor="middle" fontSize="9">/api/network</text>
                
                <rect x="460" y="370" width="100" height="30" fill="white" stroke="black" strokeWidth="1" />
                <text x="510" y="390" textAnchor="middle" fontSize="9">/api/events</text>
                
                <rect x="580" y="370" width="100" height="30" fill="white" stroke="black" strokeWidth="1" />
                <text x="630" y="390" textAnchor="middle" fontSize="9">/api/forum</text>
                
                <rect x="700" y="370" width="100" height="30" fill="white" stroke="black" strokeWidth="1" />
                <text x="750" y="390" textAnchor="middle" fontSize="9">/api/resources</text>

                {/* Arrow to Data Layer */}
                <line x1="450" y1="410" x2="450" y2="440" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <line x1="450" y1="480" x2="450" y2="450" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Data Layer */}
                <rect x="50" y="450" width="800" height="120" fill="#c8c8c8" stroke="black" strokeWidth="2" />
                <text x="450" y="475" textAnchor="middle" fontSize="14" fontWeight="bold">DATA LAYER (Supabase)</text>
                
                <rect x="100" y="490" width="130" height="60" fill="white" stroke="black" strokeWidth="1" />
                <text x="165" y="515" textAnchor="middle" fontSize="10" fontWeight="bold">PostgreSQL</text>
                <text x="165" y="530" textAnchor="middle" fontSize="9">Tables, Views</text>
                <text x="165" y="542" textAnchor="middle" fontSize="9">Functions</text>
                
                <rect x="260" y="490" width="130" height="60" fill="white" stroke="black" strokeWidth="1" />
                <text x="325" y="515" textAnchor="middle" fontSize="10" fontWeight="bold">Auth Service</text>
                <text x="325" y="530" textAnchor="middle" fontSize="9">JWT Tokens</text>
                <text x="325" y="542" textAnchor="middle" fontSize="9">Sessions</text>
                
                <rect x="420" y="490" width="130" height="60" fill="white" stroke="black" strokeWidth="1" />
                <text x="485" y="515" textAnchor="middle" fontSize="10" fontWeight="bold">Storage</text>
                <text x="485" y="530" textAnchor="middle" fontSize="9">Avatars</text>
                <text x="485" y="542" textAnchor="middle" fontSize="9">Documents</text>
                
                <rect x="580" y="490" width="130" height="60" fill="white" stroke="black" strokeWidth="1" />
                <text x="645" y="515" textAnchor="middle" fontSize="10" fontWeight="bold">Row Level</text>
                <text x="645" y="530" textAnchor="middle" fontSize="10" fontWeight="bold">Security</text>
                <text x="645" y="542" textAnchor="middle" fontSize="9">Policies</text>
                
                <rect x="740" y="490" width="90" height="60" fill="white" stroke="black" strokeWidth="1" />
                <text x="785" y="515" textAnchor="middle" fontSize="10" fontWeight="bold">Realtime</text>
                <text x="785" y="535" textAnchor="middle" fontSize="9">Subscriptions</text>
              </svg>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Layer Descriptions:</h3>
              <table className="w-full border-collapse border border-black text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-black p-2 text-left">Layer</th>
                    <th className="border border-black p-2 text-left">Technology</th>
                    <th className="border border-black p-2 text-left">Responsibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-black p-2">Presentation</td><td className="border border-black p-2">React, Tailwind CSS</td><td className="border border-black p-2">User interface rendering</td></tr>
                  <tr><td className="border border-black p-2">Business Logic</td><td className="border border-black p-2">Next.js App Router</td><td className="border border-black p-2">Application logic, routing</td></tr>
                  <tr><td className="border border-black p-2">API</td><td className="border border-black p-2">Server Actions, Route Handlers</td><td className="border border-black p-2">HTTP endpoints, data validation</td></tr>
                  <tr><td className="border border-black p-2">Data</td><td className="border border-black p-2">Supabase (PostgreSQL)</td><td className="border border-black p-2">Data persistence, authentication</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. System Architecture */}
        <section className="min-h-screen py-12 page-break-after">
          <h2 className="text-3xl font-bold border-b-2 border-black pb-4 mb-8">7. System Architecture</h2>
          
          <div className="space-y-6">
            <p className="text-justify leading-relaxed">
              The system architecture diagram provides a comprehensive view of the technical infrastructure, 
              showing how different services and components are deployed and interconnected.
            </p>

            <div className="border-2 border-black p-4 bg-white">
              <svg viewBox="0 0 900 650" className="w-full h-auto">
                {/* Client Layer */}
                <rect x="50" y="20" width="800" height="80" fill="#f0f8ff" stroke="black" strokeWidth="2" rx="5" />
                <text x="450" y="45" textAnchor="middle" fontSize="12" fontWeight="bold">CLIENT LAYER</text>
                
                <rect x="80" y="55" width="100" height="35" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="130" y="77" textAnchor="middle" fontSize="9">Web Browser</text>
                
                <rect x="200" y="55" width="100" height="35" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="250" y="77" textAnchor="middle" fontSize="9">Mobile Browser</text>
                
                <rect x="320" y="55" width="100" height="35" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="370" y="77" textAnchor="middle" fontSize="9">React Components</text>
                
                <rect x="440" y="55" width="100" height="35" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="490" y="77" textAnchor="middle" fontSize="9">SWR Cache</text>
                
                <rect x="560" y="55" width="120" height="35" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="620" y="77" textAnchor="middle" fontSize="9">Local State (Zustand)</text>
                
                <rect x="700" y="55" width="130" height="35" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="765" y="77" textAnchor="middle" fontSize="9">Tailwind CSS</text>

                {/* CDN/Edge */}
                <line x1="450" y1="100" x2="450" y2="130" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                
                <rect x="200" y="130" width="500" height="50" fill="#fff8dc" stroke="black" strokeWidth="2" rx="5" />
                <text x="450" y="160" textAnchor="middle" fontSize="12" fontWeight="bold">CDN / EDGE NETWORK (Vercel Edge)</text>

                {/* Application Server */}
                <line x1="450" y1="180" x2="450" y2="210" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                
                <rect x="50" y="210" width="800" height="130" fill="#f0fff0" stroke="black" strokeWidth="2" rx="5" />
                <text x="450" y="235" textAnchor="middle" fontSize="12" fontWeight="bold">APPLICATION SERVER (Next.js 15)</text>
                
                <rect x="70" y="250" width="150" height="75" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="145" y="275" textAnchor="middle" fontSize="10" fontWeight="bold">App Router</text>
                <text x="145" y="295" textAnchor="middle" fontSize="9">Server Components</text>
                <text x="145" y="310" textAnchor="middle" fontSize="9">Client Components</text>
                
                <rect x="240" y="250" width="150" height="75" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="315" y="275" textAnchor="middle" fontSize="10" fontWeight="bold">API Routes</text>
                <text x="315" y="295" textAnchor="middle" fontSize="9">Route Handlers</text>
                <text x="315" y="310" textAnchor="middle" fontSize="9">Server Actions</text>
                
                <rect x="410" y="250" width="150" height="75" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="485" y="275" textAnchor="middle" fontSize="10" fontWeight="bold">Middleware</text>
                <text x="485" y="295" textAnchor="middle" fontSize="9">Auth Protection</text>
                <text x="485" y="310" textAnchor="middle" fontSize="9">Request Handling</text>
                
                <rect x="580" y="250" width="130" height="75" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="645" y="275" textAnchor="middle" fontSize="10" fontWeight="bold">Static Assets</text>
                <text x="645" y="295" textAnchor="middle" fontSize="9">Images</text>
                <text x="645" y="310" textAnchor="middle" fontSize="9">Fonts</text>
                
                <rect x="730" y="250" width="100" height="75" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="780" y="275" textAnchor="middle" fontSize="10" fontWeight="bold">Caching</text>
                <text x="780" y="295" textAnchor="middle" fontSize="9">ISR</text>
                <text x="780" y="310" textAnchor="middle" fontSize="9">SSG</text>

                {/* Backend Services */}
                <line x1="450" y1="340" x2="450" y2="370" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                
                <rect x="50" y="370" width="800" height="130" fill="#fff0f5" stroke="black" strokeWidth="2" rx="5" />
                <text x="450" y="395" textAnchor="middle" fontSize="12" fontWeight="bold">BACKEND SERVICES (Supabase)</text>
                
                <rect x="70" y="410" width="170" height="75" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="155" y="435" textAnchor="middle" fontSize="10" fontWeight="bold">Auth Service</text>
                <text x="155" y="455" textAnchor="middle" fontSize="9">Email/Password Auth</text>
                <text x="155" y="470" textAnchor="middle" fontSize="9">JWT Sessions</text>
                
                <rect x="260" y="410" width="170" height="75" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="345" y="435" textAnchor="middle" fontSize="10" fontWeight="bold">Database API</text>
                <text x="345" y="455" textAnchor="middle" fontSize="9">PostgREST</text>
                <text x="345" y="470" textAnchor="middle" fontSize="9">GraphQL (Optional)</text>
                
                <rect x="450" y="410" width="170" height="75" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="535" y="435" textAnchor="middle" fontSize="10" fontWeight="bold">Storage Service</text>
                <text x="535" y="455" textAnchor="middle" fontSize="9">File Upload</text>
                <text x="535" y="470" textAnchor="middle" fontSize="9">CDN Delivery</text>
                
                <rect x="640" y="410" width="190" height="75" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="735" y="435" textAnchor="middle" fontSize="10" fontWeight="bold">Realtime Service</text>
                <text x="735" y="455" textAnchor="middle" fontSize="9">WebSocket Connections</text>
                <text x="735" y="470" textAnchor="middle" fontSize="9">Live Subscriptions</text>

                {/* Data Persistence */}
                <line x1="450" y1="500" x2="450" y2="530" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                
                <rect x="150" y="530" width="600" height="80" fill="#f5f5dc" stroke="black" strokeWidth="2" rx="5" />
                <text x="450" y="555" textAnchor="middle" fontSize="12" fontWeight="bold">DATA PERSISTENCE LAYER</text>
                
                <rect x="180" y="570" width="160" height="30" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="260" y="590" textAnchor="middle" fontSize="10">PostgreSQL Database</text>
                
                <rect x="370" y="570" width="160" height="30" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="450" y="590" textAnchor="middle" fontSize="10">Row Level Security</text>
                
                <rect x="560" y="570" width="160" height="30" fill="white" stroke="black" strokeWidth="1" rx="3" />
                <text x="640" y="590" textAnchor="middle" fontSize="10">Object Storage (S3)</text>
              </svg>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="border p-3">
                <h4 className="font-semibold">Deployment Platform</h4>
                <p>Vercel (Serverless Functions, Edge Network)</p>
              </div>
              <div className="border p-3">
                <h4 className="font-semibold">Database</h4>
                <p>Supabase PostgreSQL (Managed)</p>
              </div>
              <div className="border p-3">
                <h4 className="font-semibold">Authentication</h4>
                <p>Supabase Auth (JWT-based)</p>
              </div>
              <div className="border p-3">
                <h4 className="font-semibold">Storage</h4>
                <p>Supabase Storage (S3-compatible)</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Site Map */}
        <section className="min-h-screen py-12 page-break-after">
          <h2 className="text-3xl font-bold border-b-2 border-black pb-4 mb-8">8. Site Map</h2>
          
          <div className="space-y-6">
            <p className="text-justify leading-relaxed">
              The site map shows the complete navigation structure of the EnterNet platform, 
              including all pages, their hierarchy, and access levels.
            </p>

            <div className="border-2 border-black p-4 bg-white">
              <svg viewBox="0 0 900 700" className="w-full h-auto">
                {/* Root */}
                <rect x="375" y="20" width="150" height="40" fill="black" stroke="black" strokeWidth="2" rx="5" />
                <text x="450" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">EnterNet</text>

                {/* Level 1 connections */}
                <line x1="450" y1="60" x2="450" y2="90" stroke="black" strokeWidth="1.5" />
                <line x1="100" y1="90" x2="800" y2="90" stroke="black" strokeWidth="1.5" />
                
                {/* Vertical lines to Level 1 */}
                <line x1="100" y1="90" x2="100" y2="120" stroke="black" strokeWidth="1.5" />
                <line x1="230" y1="90" x2="230" y2="120" stroke="black" strokeWidth="1.5" />
                <line x1="360" y1="90" x2="360" y2="120" stroke="black" strokeWidth="1.5" />
                <line x1="490" y1="90" x2="490" y2="120" stroke="black" strokeWidth="1.5" />
                <line x1="620" y1="90" x2="620" y2="120" stroke="black" strokeWidth="1.5" />
                <line x1="750" y1="90" x2="750" y2="120" stroke="black" strokeWidth="1.5" />

                {/* Level 1 - Public Pages */}
                <rect x="40" y="120" width="120" height="35" fill="white" stroke="black" strokeWidth="2" rx="3" />
                <text x="100" y="142" textAnchor="middle" fontSize="10" fontWeight="bold">Home</text>
                <text x="100" y="152" textAnchor="middle" fontSize="8">/</text>

                <rect x="170" y="120" width="120" height="35" fill="white" stroke="black" strokeWidth="2" rx="3" />
                <text x="230" y="142" textAnchor="middle" fontSize="10" fontWeight="bold">Schemes</text>
                <text x="230" y="152" textAnchor="middle" fontSize="8">/schemes</text>

                <rect x="300" y="120" width="120" height="35" fill="white" stroke="black" strokeWidth="2" rx="3" />
                <text x="360" y="142" textAnchor="middle" fontSize="10" fontWeight="bold">Network</text>
                <text x="360" y="152" textAnchor="middle" fontSize="8">/network</text>

                <rect x="430" y="120" width="120" height="35" fill="white" stroke="black" strokeWidth="2" rx="3" />
                <text x="490" y="142" textAnchor="middle" fontSize="10" fontWeight="bold">Events</text>
                <text x="490" y="152" textAnchor="middle" fontSize="8">/events</text>

                <rect x="560" y="120" width="120" height="35" fill="white" stroke="black" strokeWidth="2" rx="3" />
                <text x="620" y="142" textAnchor="middle" fontSize="10" fontWeight="bold">Forum</text>
                <text x="620" y="152" textAnchor="middle" fontSize="8">/forum</text>

                <rect x="690" y="120" width="120" height="35" fill="white" stroke="black" strokeWidth="2" rx="3" />
                <text x="750" y="142" textAnchor="middle" fontSize="10" fontWeight="bold">Resources</text>
                <text x="750" y="152" textAnchor="middle" fontSize="8">/resources</text>

                {/* Level 2 - Schemes subpages */}
                <line x1="230" y1="155" x2="230" y2="180" stroke="black" strokeWidth="1" />
                <line x1="170" y1="180" x2="290" y2="180" stroke="black" strokeWidth="1" />
                <line x1="170" y1="180" x2="170" y2="200" stroke="black" strokeWidth="1" />
                <line x1="290" y1="180" x2="290" y2="200" stroke="black" strokeWidth="1" />
                
                <rect x="120" y="200" width="100" height="30" fill="#f0f0f0" stroke="black" strokeWidth="1" rx="2" />
                <text x="170" y="218" textAnchor="middle" fontSize="9">Scheme List</text>
                
                <rect x="240" y="200" width="100" height="30" fill="#f0f0f0" stroke="black" strokeWidth="1" rx="2" />
                <text x="290" y="218" textAnchor="middle" fontSize="9">Scheme Detail</text>
                <text x="290" y="228" textAnchor="middle" fontSize="7">/schemes/[id]</text>

                {/* Level 2 - Events subpages */}
                <line x1="490" y1="155" x2="490" y2="180" stroke="black" strokeWidth="1" />
                <line x1="440" y1="180" x2="540" y2="180" stroke="black" strokeWidth="1" />
                <line x1="440" y1="180" x2="440" y2="200" stroke="black" strokeWidth="1" />
                <line x1="540" y1="180" x2="540" y2="200" stroke="black" strokeWidth="1" />
                
                <rect x="390" y="200" width="100" height="30" fill="#f0f0f0" stroke="black" strokeWidth="1" rx="2" />
                <text x="440" y="218" textAnchor="middle" fontSize="9">Event List</text>
                
                <rect x="490" y="200" width="100" height="30" fill="#f0f0f0" stroke="black" strokeWidth="1" rx="2" />
                <text x="540" y="218" textAnchor="middle" fontSize="9">Event Detail</text>
                <text x="540" y="228" textAnchor="middle" fontSize="7">/events/[id]</text>

                {/* Level 2 - Forum subpages */}
                <line x1="620" y1="155" x2="620" y2="180" stroke="black" strokeWidth="1" />
                <line x1="560" y1="180" x2="680" y2="180" stroke="black" strokeWidth="1" />
                <line x1="560" y1="180" x2="560" y2="200" stroke="black" strokeWidth="1" />
                <line x1="620" y1="180" x2="620" y2="200" stroke="black" strokeWidth="1" />
                <line x1="680" y1="180" x2="680" y2="200" stroke="black" strokeWidth="1" />
                
                <rect x="510" y="200" width="100" height="30" fill="#f0f0f0" stroke="black" strokeWidth="1" rx="2" />
                <text x="560" y="218" textAnchor="middle" fontSize="9">Thread List</text>
                
                <rect x="570" y="200" width="100" height="30" fill="#f0f0f0" stroke="black" strokeWidth="1" rx="2" />
                <text x="620" y="218" textAnchor="middle" fontSize="9">Thread Detail</text>
                
                <rect x="630" y="200" width="100" height="30" fill="#f0f0f0" stroke="black" strokeWidth="1" rx="2" />
                <text x="680" y="218" textAnchor="middle" fontSize="9">New Thread</text>

                {/* Auth Pages */}
                <text x="100" y="290" fontSize="11" fontWeight="bold">Authentication Pages</text>
                <rect x="50" y="300" width="100" height="30" fill="#e6f3ff" stroke="black" strokeWidth="1" rx="2" />
                <text x="100" y="318" textAnchor="middle" fontSize="9">Login</text>
                <text x="100" y="328" textAnchor="middle" fontSize="7">/auth/login</text>
                
                <rect x="170" y="300" width="100" height="30" fill="#e6f3ff" stroke="black" strokeWidth="1" rx="2" />
                <text x="220" y="318" textAnchor="middle" fontSize="9">Register</text>
                <text x="220" y="328" textAnchor="middle" fontSize="7">/auth/register</text>
                
                <rect x="290" y="300" width="120" height="30" fill="#e6f3ff" stroke="black" strokeWidth="1" rx="2" />
                <text x="350" y="318" textAnchor="middle" fontSize="9">Forgot Password</text>
                <text x="350" y="328" textAnchor="middle" fontSize="7">/auth/forgot-password</text>

                {/* Protected Pages */}
                <text x="100" y="380" fontSize="11" fontWeight="bold">Protected Pages (Requires Login)</text>
                
                <rect x="50" y="390" width="130" height="40" fill="#fff0e6" stroke="black" strokeWidth="2" rx="3" />
                <text x="115" y="412" textAnchor="middle" fontSize="10" fontWeight="bold">Dashboard</text>
                <text x="115" y="425" textAnchor="middle" fontSize="8">/dashboard</text>

                {/* Dashboard subpages */}
                <line x1="115" y1="430" x2="115" y2="450" stroke="black" strokeWidth="1" />
                <line x1="50" y1="450" x2="400" y2="450" stroke="black" strokeWidth="1" />
                
                <line x1="50" y1="450" x2="50" y2="470" stroke="black" strokeWidth="1" />
                <line x1="115" y1="450" x2="115" y2="470" stroke="black" strokeWidth="1" />
                <line x1="190" y1="450" x2="190" y2="470" stroke="black" strokeWidth="1" />
                <line x1="275" y1="450" x2="275" y2="470" stroke="black" strokeWidth="1" />
                <line x1="360" y1="450" x2="360" y2="470" stroke="black" strokeWidth="1" />

                <rect x="10" y="470" width="80" height="30" fill="#ffe6cc" stroke="black" strokeWidth="1" rx="2" />
                <text x="50" y="490" textAnchor="middle" fontSize="8">Overview</text>

                <rect x="75" y="470" width="80" height="30" fill="#ffe6cc" stroke="black" strokeWidth="1" rx="2" />
                <text x="115" y="488" textAnchor="middle" fontSize="8">My Schemes</text>

                <rect x="150" y="470" width="80" height="30" fill="#ffe6cc" stroke="black" strokeWidth="1" rx="2" />
                <text x="190" y="488" textAnchor="middle" fontSize="8">Connections</text>

                <rect x="235" y="470" width="80" height="30" fill="#ffe6cc" stroke="black" strokeWidth="1" rx="2" />
                <text x="275" y="488" textAnchor="middle" fontSize="8">My Events</text>

                <rect x="320" y="470" width="80" height="30" fill="#ffe6cc" stroke="black" strokeWidth="1" rx="2" />
                <text x="360" y="488" textAnchor="middle" fontSize="8">Settings</text>

                {/* Profile */}
                <rect x="210" y="390" width="130" height="40" fill="#fff0e6" stroke="black" strokeWidth="2" rx="3" />
                <text x="275" y="412" textAnchor="middle" fontSize="10" fontWeight="bold">Profile</text>
                <text x="275" y="425" textAnchor="middle" fontSize="8">/profile</text>

                <line x1="275" y1="430" x2="275" y2="470" stroke="black" strokeWidth="1" />
                <rect x="430" y="470" width="80" height="30" fill="#ffe6cc" stroke="black" strokeWidth="1" rx="2" />
                <text x="470" y="488" textAnchor="middle" fontSize="8">Edit Profile</text>

                {/* Admin Pages */}
                <text x="550" y="380" fontSize="11" fontWeight="bold">Admin Pages (Admin Only)</text>
                
                <rect x="500" y="390" width="130" height="40" fill="#ffe6e6" stroke="black" strokeWidth="2" rx="3" />
                <text x="565" y="412" textAnchor="middle" fontSize="10" fontWeight="bold">Admin Panel</text>
                <text x="565" y="425" textAnchor="middle" fontSize="8">/admin</text>

                <line x1="565" y1="430" x2="565" y2="450" stroke="black" strokeWidth="1" />
                <line x1="480" y1="450" x2="700" y2="450" stroke="black" strokeWidth="1" />
                
                <line x1="480" y1="450" x2="480" y2="470" stroke="black" strokeWidth="1" />
                <line x1="565" y1="450" x2="565" y2="470" stroke="black" strokeWidth="1" />
                <line x1="650" y1="450" x2="650" y2="470" stroke="black" strokeWidth="1" />

                <rect x="440" y="470" width="80" height="30" fill="#ffcccc" stroke="black" strokeWidth="1" rx="2" />
                <text x="480" y="488" textAnchor="middle" fontSize="8">Users</text>

                <rect x="525" y="470" width="80" height="30" fill="#ffcccc" stroke="black" strokeWidth="1" rx="2" />
                <text x="565" y="488" textAnchor="middle" fontSize="8">Schemes</text>

                <rect x="610" y="470" width="80" height="30" fill="#ffcccc" stroke="black" strokeWidth="1" rx="2" />
                <text x="650" y="488" textAnchor="middle" fontSize="8">Events</text>

                {/* Legend */}
                <rect x="550" y="550" width="300" height="120" fill="white" stroke="black" strokeWidth="1" />
                <text x="700" y="575" textAnchor="middle" fontWeight="bold" fontSize="11">LEGEND</text>
                
                <rect x="570" y="590" width="20" height="15" fill="white" stroke="black" strokeWidth="2" />
                <text x="600" y="602" fontSize="9">Public Page</text>
                
                <rect x="570" y="615" width="20" height="15" fill="#e6f3ff" stroke="black" strokeWidth="1" />
                <text x="600" y="627" fontSize="9">Auth Page</text>
                
                <rect x="700" y="590" width="20" height="15" fill="#fff0e6" stroke="black" strokeWidth="2" />
                <text x="730" y="602" fontSize="9">Protected Page</text>
                
                <rect x="700" y="615" width="20" height="15" fill="#ffe6e6" stroke="black" strokeWidth="2" />
                <text x="730" y="627" fontSize="9">Admin Page</text>
                
                <rect x="570" y="640" width="20" height="15" fill="#f0f0f0" stroke="black" strokeWidth="1" />
                <text x="600" y="652" fontSize="9">Sub Page</text>
              </svg>
            </div>
          </div>
        </section>

        {/* 9. Wireframes */}
        <section className="min-h-screen py-12 page-break-after">
          <h2 className="text-3xl font-bold border-b-2 border-black pb-4 mb-8">9. Wireframes</h2>
          
          <div className="space-y-8">
            <p className="text-justify leading-relaxed">
              The wireframes provide low-fidelity visual representations of the key pages, 
              showing layout structure, content placement, and UI element positioning.
            </p>

            {/* Homepage Wireframe */}
            <div>
              <h3 className="text-xl font-semibold mb-4">9.1 Homepage Wireframe</h3>
              <div className="border-2 border-black p-2 bg-white">
                <svg viewBox="0 0 800 500" className="w-full h-auto">
                  {/* Browser Frame */}
                  <rect x="0" y="0" width="800" height="500" fill="white" stroke="black" strokeWidth="2" />
                  
                  {/* Header/Navbar */}
                  <rect x="10" y="10" width="780" height="40" fill="#f0f0f0" stroke="black" strokeWidth="1" />
                  <rect x="20" y="20" width="80" height="20" fill="#ddd" stroke="black" strokeWidth="1" />
                  <text x="60" y="34" textAnchor="middle" fontSize="10">Logo</text>
                  
                  <rect x="500" y="20" width="50" height="20" fill="#ddd" stroke="black" strokeWidth="1" />
                  <text x="525" y="34" textAnchor="middle" fontSize="8">Home</text>
                  <rect x="560" y="20" width="60" height="20" fill="#ddd" stroke="black" strokeWidth="1" />
                  <text x="590" y="34" textAnchor="middle" fontSize="8">Schemes</text>
                  <rect x="630" y="20" width="60" height="20" fill="#ddd" stroke="black" strokeWidth="1" />
                  <text x="660" y="34" textAnchor="middle" fontSize="8">Network</text>
                  <rect x="700" y="20" width="50" height="20" fill="black" stroke="black" strokeWidth="1" />
                  <text x="725" y="34" textAnchor="middle" fill="white" fontSize="8">Login</text>
                  
                  {/* Hero Section */}
                  <rect x="10" y="60" width="780" height="150" fill="#e8e8e8" stroke="black" strokeWidth="1" />
                  <text x="400" y="110" textAnchor="middle" fontSize="16" fontWeight="bold">Hero Section</text>
                  <text x="400" y="130" textAnchor="middle" fontSize="10">Main headline and tagline</text>
                  <rect x="320" y="150" width="80" height="30" fill="black" stroke="black" strokeWidth="1" />
                  <text x="360" y="170" textAnchor="middle" fill="white" fontSize="10">Get Started</text>
                  <rect x="410" y="150" width="80" height="30" fill="#ddd" stroke="black" strokeWidth="1" />
                  <text x="450" y="170" textAnchor="middle" fontSize="10">Learn More</text>
                  
                  {/* Stats Section */}
                  <rect x="10" y="220" width="780" height="60" fill="#f5f5f5" stroke="black" strokeWidth="1" />
                  <rect x="50" y="235" width="150" height="30" fill="white" stroke="black" strokeWidth="1" />
                  <text x="125" y="255" textAnchor="middle" fontSize="9">70+ Schemes</text>
                  <rect x="230" y="235" width="150" height="30" fill="white" stroke="black" strokeWidth="1" />
                  <text x="305" y="255" textAnchor="middle" fontSize="9">10,000+ Users</text>
                  <rect x="410" y="235" width="150" height="30" fill="white" stroke="black" strokeWidth="1" />
                  <text x="485" y="255" textAnchor="middle" fontSize="9">500+ Connections</text>
                  <rect x="590" y="235" width="150" height="30" fill="white" stroke="black" strokeWidth="1" />
                  <text x="665" y="255" textAnchor="middle" fontSize="9">100+ Events</text>
                  
                  {/* Featured Schemes */}
                  <rect x="10" y="290" width="780" height="130" fill="white" stroke="black" strokeWidth="1" />
                  <text x="400" y="310" textAnchor="middle" fontSize="12" fontWeight="bold">Featured Schemes</text>
                  
                  <rect x="30" y="325" width="170" height="80" fill="#f8f8f8" stroke="black" strokeWidth="1" />
                  <text x="115" y="365" textAnchor="middle" fontSize="9">Scheme Card 1</text>
                  
                  <rect x="220" y="325" width="170" height="80" fill="#f8f8f8" stroke="black" strokeWidth="1" />
                  <text x="305" y="365" textAnchor="middle" fontSize="9">Scheme Card 2</text>
                  
                  <rect x="410" y="325" width="170" height="80" fill="#f8f8f8" stroke="black" strokeWidth="1" />
                  <text x="495" y="365" textAnchor="middle" fontSize="9">Scheme Card 3</text>
                  
                  <rect x="600" y="325" width="170" height="80" fill="#f8f8f8" stroke="black" strokeWidth="1" />
                  <text x="685" y="365" textAnchor="middle" fontSize="9">Scheme Card 4</text>
                  
                  {/* Footer */}
                  <rect x="10" y="430" width="780" height="60" fill="#333" stroke="black" strokeWidth="1" />
                  <text x="400" y="465" textAnchor="middle" fill="white" fontSize="10">Footer - Links, Contact, Social Media</text>
                </svg>
              </div>
            </div>

            {/* Schemes Page Wireframe */}
            <div className="page-break-before">
              <h3 className="text-xl font-semibold mb-4">9.2 Schemes Page Wireframe</h3>
              <div className="border-2 border-black p-2 bg-white">
                <svg viewBox="0 0 800 500" className="w-full h-auto">
                  <rect x="0" y="0" width="800" height="500" fill="white" stroke="black" strokeWidth="2" />
                  
                  {/* Header */}
                  <rect x="10" y="10" width="780" height="40" fill="#f0f0f0" stroke="black" strokeWidth="1" />
                  <rect x="20" y="20" width="80" height="20" fill="#ddd" stroke="black" strokeWidth="1" />
                  <text x="60" y="34" textAnchor="middle" fontSize="10">Logo</text>
                  
                  {/* Page Title */}
                  <text x="400" y="75" textAnchor="middle" fontSize="14" fontWeight="bold">Government Schemes for MSMEs</text>
                  
                  {/* Search Bar */}
                  <rect x="200" y="90" width="400" height="35" fill="white" stroke="black" strokeWidth="1" rx="3" />
                  <text x="220" y="112" fontSize="10" fill="#888">Search schemes...</text>
                  <rect x="560" y="93" width="35" height="29" fill="black" stroke="black" strokeWidth="1" />
                  <text x="577" y="112" textAnchor="middle" fill="white" fontSize="10">Go</text>
                  
                  {/* Filters */}
                  <rect x="10" y="140" width="180" height="350" fill="#f8f8f8" stroke="black" strokeWidth="1" />
                  <text x="100" y="165" textAnchor="middle" fontSize="11" fontWeight="bold">Filters</text>
                  
                  <text x="25" y="190" fontSize="10" fontWeight="bold">Category</text>
                  <rect x="20" y="200" width="160" height="25" fill="white" stroke="black" strokeWidth="1" />
                  <text x="100" y="217" textAnchor="middle" fontSize="9">All Categories</text>
                  
                  <text x="25" y="245" fontSize="10" fontWeight="bold">Industry</text>
                  <rect x="20" y="255" width="160" height="25" fill="white" stroke="black" strokeWidth="1" />
                  <text x="100" y="272" textAnchor="middle" fontSize="9">All Industries</text>
                  
                  <text x="25" y="300" fontSize="10" fontWeight="bold">Funding Type</text>
                  <rect x="20" y="310" width="160" height="25" fill="white" stroke="black" strokeWidth="1" />
                  <text x="100" y="327" textAnchor="middle" fontSize="9">All Types</text>
                  
                  <rect x="20" y="360" width="160" height="30" fill="black" stroke="black" strokeWidth="1" />
                  <text x="100" y="380" textAnchor="middle" fill="white" fontSize="10">Apply Filters</text>
                  
                  <rect x="20" y="400" width="160" height="25" fill="white" stroke="black" strokeWidth="1" />
                  <text x="100" y="417" textAnchor="middle" fontSize="9">Clear All</text>
                  
                  {/* Scheme Cards Grid */}
                  <rect x="200" y="140" width="280" height="110" fill="white" stroke="black" strokeWidth="1" />
                  <text x="340" y="190" textAnchor="middle" fontSize="10">Scheme Card 1</text>
                  <rect x="210" y="220" width="80" height="20" fill="#e0e0e0" stroke="black" strokeWidth="1" />
                  <text x="250" y="234" textAnchor="middle" fontSize="8">Grant</text>
                  
                  <rect x="500" y="140" width="280" height="110" fill="white" stroke="black" strokeWidth="1" />
                  <text x="640" y="190" textAnchor="middle" fontSize="10">Scheme Card 2</text>
                  <rect x="510" y="220" width="80" height="20" fill="#e0e0e0" stroke="black" strokeWidth="1" />
                  <text x="550" y="234" textAnchor="middle" fontSize="8">Loan</text>
                  
                  <rect x="200" y="260" width="280" height="110" fill="white" stroke="black" strokeWidth="1" />
                  <text x="340" y="310" textAnchor="middle" fontSize="10">Scheme Card 3</text>
                  <rect x="210" y="340" width="80" height="20" fill="#e0e0e0" stroke="black" strokeWidth="1" />
                  <text x="250" y="354" textAnchor="middle" fontSize="8">Subsidy</text>
                  
                  <rect x="500" y="260" width="280" height="110" fill="white" stroke="black" strokeWidth="1" />
                  <text x="640" y="310" textAnchor="middle" fontSize="10">Scheme Card 4</text>
                  <rect x="510" y="340" width="80" height="20" fill="#e0e0e0" stroke="black" strokeWidth="1" />
                  <text x="550" y="354" textAnchor="middle" fontSize="8">Equity</text>
                  
                  {/* Pagination */}
                  <rect x="350" y="390" width="30" height="25" fill="black" stroke="black" strokeWidth="1" />
                  <text x="365" y="407" textAnchor="middle" fill="white" fontSize="10">1</text>
                  <rect x="385" y="390" width="30" height="25" fill="white" stroke="black" strokeWidth="1" />
                  <text x="400" y="407" textAnchor="middle" fontSize="10">2</text>
                  <rect x="420" y="390" width="30" height="25" fill="white" stroke="black" strokeWidth="1" />
                  <text x="435" y="407" textAnchor="middle" fontSize="10">3</text>
                  <rect x="455" y="390" width="50" height="25" fill="white" stroke="black" strokeWidth="1" />
                  <text x="480" y="407" textAnchor="middle" fontSize="10">Next</text>
                  
                  {/* Results count */}
                  <text x="640" y="465" textAnchor="middle" fontSize="9">Showing 1-10 of 70 schemes</text>
                </svg>
              </div>
            </div>

            {/* Dashboard Wireframe */}
            <div className="page-break-before">
              <h3 className="text-xl font-semibold mb-4">9.3 Dashboard Wireframe</h3>
              <div className="border-2 border-black p-2 bg-white">
                <svg viewBox="0 0 800 500" className="w-full h-auto">
                  <rect x="0" y="0" width="800" height="500" fill="white" stroke="black" strokeWidth="2" />
                  
                  {/* Header */}
                  <rect x="10" y="10" width="780" height="40" fill="#f0f0f0" stroke="black" strokeWidth="1" />
                  <rect x="20" y="20" width="80" height="20" fill="#ddd" stroke="black" strokeWidth="1" />
                  <text x="60" y="34" textAnchor="middle" fontSize="10">Logo</text>
                  <rect x="700" y="17" width="80" height="26" fill="white" stroke="black" strokeWidth="1" rx="3" />
                  <circle cx="720" cy="30" r="10" fill="#ddd" stroke="black" strokeWidth="1" />
                  <text x="755" y="34" textAnchor="middle" fontSize="9">Profile</text>
                  
                  {/* Sidebar */}
                  <rect x="10" y="60" width="160" height="430" fill="#f5f5f5" stroke="black" strokeWidth="1" />
                  <text x="90" y="90" textAnchor="middle" fontSize="11" fontWeight="bold">Dashboard</text>
                  
                  <rect x="20" y="110" width="140" height="30" fill="#ddd" stroke="black" strokeWidth="1" />
                  <text x="90" y="130" textAnchor="middle" fontSize="9">Overview</text>
                  
                  <rect x="20" y="150" width="140" height="30" fill="white" stroke="black" strokeWidth="1" />
                  <text x="90" y="170" textAnchor="middle" fontSize="9">My Schemes</text>
                  
                  <rect x="20" y="190" width="140" height="30" fill="white" stroke="black" strokeWidth="1" />
                  <text x="90" y="210" textAnchor="middle" fontSize="9">My Connections</text>
                  
                  <rect x="20" y="230" width="140" height="30" fill="white" stroke="black" strokeWidth="1" />
                  <text x="90" y="250" textAnchor="middle" fontSize="9">My Events</text>
                  
                  <rect x="20" y="270" width="140" height="30" fill="white" stroke="black" strokeWidth="1" />
                  <text x="90" y="290" textAnchor="middle" fontSize="9">Settings</text>
                  
                  {/* Main Content */}
                  <text x="500" y="85" textAnchor="middle" fontSize="14" fontWeight="bold">Welcome, User!</text>
                  
                  {/* Stats Cards */}
                  <rect x="185" y="100" width="145" height="80" fill="white" stroke="black" strokeWidth="1" />
                  <text x="257" y="130" textAnchor="middle" fontSize="10" fontWeight="bold">Applications</text>
                  <text x="257" y="160" textAnchor="middle" fontSize="20" fontWeight="bold">5</text>
                  
                  <rect x="340" y="100" width="145" height="80" fill="white" stroke="black" strokeWidth="1" />
                  <text x="412" y="130" textAnchor="middle" fontSize="10" fontWeight="bold">Connections</text>
                  <text x="412" y="160" textAnchor="middle" fontSize="20" fontWeight="bold">23</text>
                  
                  <rect x="495" y="100" width="145" height="80" fill="white" stroke="black" strokeWidth="1" />
                  <text x="567" y="130" textAnchor="middle" fontSize="10" fontWeight="bold">Events</text>
                  <text x="567" y="160" textAnchor="middle" fontSize="20" fontWeight="bold">3</text>
                  
                  <rect x="650" y="100" width="130" height="80" fill="white" stroke="black" strokeWidth="1" />
                  <text x="715" y="130" textAnchor="middle" fontSize="10" fontWeight="bold">Resources</text>
                  <text x="715" y="160" textAnchor="middle" fontSize="20" fontWeight="bold">12</text>
                  
                  {/* Recent Activity */}
                  <rect x="185" y="195" width="400" height="200" fill="white" stroke="black" strokeWidth="1" />
                  <text x="385" y="220" textAnchor="middle" fontSize="11" fontWeight="bold">Recent Activity</text>
                  <line x1="195" y1="235" x2="575" y2="235" stroke="#ddd" strokeWidth="1" />
                  
                  <rect x="195" y="245" width="380" height="35" fill="#f9f9f9" stroke="#ddd" strokeWidth="1" />
                  <text x="205" y="267" fontSize="9">Applied to MUDRA Loan Scheme</text>
                  
                  <rect x="195" y="285" width="380" height="35" fill="white" stroke="#ddd" strokeWidth="1" />
                  <text x="205" y="307" fontSize="9">Connected with Rahul Sharma</text>
                  
                  <rect x="195" y="325" width="380" height="35" fill="#f9f9f9" stroke="#ddd" strokeWidth="1" />
                  <text x="205" y="347" fontSize="9">Registered for MSME Workshop</text>
                  
                  <rect x="195" y="365" width="380" height="25" fill="white" stroke="black" strokeWidth="1" />
                  <text x="385" y="382" textAnchor="middle" fontSize="9">View All Activity</text>
                  
                  {/* Recommended Schemes */}
                  <rect x="595" y="195" width="185" height="200" fill="white" stroke="black" strokeWidth="1" />
                  <text x="687" y="220" textAnchor="middle" fontSize="10" fontWeight="bold">Recommended</text>
                  <line x1="605" y1="235" x2="770" y2="235" stroke="#ddd" strokeWidth="1" />
                  
                  <rect x="605" y="245" width="165" height="45" fill="#f9f9f9" stroke="#ddd" strokeWidth="1" />
                  <text x="687" y="272" textAnchor="middle" fontSize="8">PMEGP Scheme</text>
                  
                  <rect x="605" y="295" width="165" height="45" fill="white" stroke="#ddd" strokeWidth="1" />
                  <text x="687" y="322" textAnchor="middle" fontSize="8">Stand-Up India</text>
                  
                  <rect x="605" y="345" width="165" height="45" fill="#f9f9f9" stroke="#ddd" strokeWidth="1" />
                  <text x="687" y="372" textAnchor="middle" fontSize="8">CGTMSE</text>
                  
                  {/* Quick Actions */}
                  <text x="300" y="425" fontSize="11" fontWeight="bold">Quick Actions</text>
                  <rect x="185" y="435" width="120" height="35" fill="black" stroke="black" strokeWidth="1" />
                  <text x="245" y="457" textAnchor="middle" fill="white" fontSize="9">Browse Schemes</text>
                  
                  <rect x="315" y="435" width="120" height="35" fill="white" stroke="black" strokeWidth="1" />
                  <text x="375" y="457" textAnchor="middle" fontSize="9">Find Connections</text>
                  
                  <rect x="445" y="435" width="120" height="35" fill="white" stroke="black" strokeWidth="1" />
                  <text x="505" y="457" textAnchor="middle" fontSize="9">View Events</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Database Schema */}
        <section className="min-h-screen py-12">
          <h2 className="text-3xl font-bold border-b-2 border-black pb-4 mb-8">10. Database Schema</h2>
          
          <div className="space-y-6">
            <p className="text-justify leading-relaxed">
              Detailed database schema showing all tables, columns, data types, and constraints.
            </p>

            <h3 className="text-lg font-semibold mt-6">10.1 Profiles Table</h3>
            <table className="w-full border-collapse border border-black text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-black p-2">Column</th>
                  <th className="border border-black p-2">Type</th>
                  <th className="border border-black p-2">Constraints</th>
                  <th className="border border-black p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-black p-2">id</td><td className="border border-black p-2">UUID</td><td className="border border-black p-2">PRIMARY KEY</td><td className="border border-black p-2">Unique identifier</td></tr>
                <tr><td className="border border-black p-2">email</td><td className="border border-black p-2">VARCHAR(255)</td><td className="border border-black p-2">UNIQUE, NOT NULL</td><td className="border border-black p-2">User email address</td></tr>
                <tr><td className="border border-black p-2">first_name</td><td className="border border-black p-2">VARCHAR(100)</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">First name</td></tr>
                <tr><td className="border border-black p-2">last_name</td><td className="border border-black p-2">VARCHAR(100)</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Last name</td></tr>
                <tr><td className="border border-black p-2">avatar_url</td><td className="border border-black p-2">TEXT</td><td className="border border-black p-2">NULLABLE</td><td className="border border-black p-2">Profile picture URL</td></tr>
                <tr><td className="border border-black p-2">industry</td><td className="border border-black p-2">VARCHAR(100)</td><td className="border border-black p-2">NULLABLE</td><td className="border border-black p-2">Business industry</td></tr>
                <tr><td className="border border-black p-2">location</td><td className="border border-black p-2">VARCHAR(200)</td><td className="border border-black p-2">NULLABLE</td><td className="border border-black p-2">User location</td></tr>
                <tr><td className="border border-black p-2">bio</td><td className="border border-black p-2">TEXT</td><td className="border border-black p-2">NULLABLE</td><td className="border border-black p-2">User biography</td></tr>
                <tr><td className="border border-black p-2">created_at</td><td className="border border-black p-2">TIMESTAMP</td><td className="border border-black p-2">DEFAULT NOW()</td><td className="border border-black p-2">Creation timestamp</td></tr>
              </tbody>
            </table>

            <h3 className="text-lg font-semibold mt-6">10.2 Schemes Table</h3>
            <table className="w-full border-collapse border border-black text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-black p-2">Column</th>
                  <th className="border border-black p-2">Type</th>
                  <th className="border border-black p-2">Constraints</th>
                  <th className="border border-black p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-black p-2">id</td><td className="border border-black p-2">VARCHAR(50)</td><td className="border border-black p-2">PRIMARY KEY</td><td className="border border-black p-2">Scheme identifier</td></tr>
                <tr><td className="border border-black p-2">title</td><td className="border border-black p-2">VARCHAR(255)</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Scheme title</td></tr>
                <tr><td className="border border-black p-2">description</td><td className="border border-black p-2">TEXT</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Detailed description</td></tr>
                <tr><td className="border border-black p-2">eligibility</td><td className="border border-black p-2">TEXT</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Eligibility criteria</td></tr>
                <tr><td className="border border-black p-2">benefits</td><td className="border border-black p-2">JSONB</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Array of benefits</td></tr>
                <tr><td className="border border-black p-2">industry</td><td className="border border-black p-2">VARCHAR(100)</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Target industry</td></tr>
                <tr><td className="border border-black p-2">funding_type</td><td className="border border-black p-2">VARCHAR(50)</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Grant/Loan/Subsidy</td></tr>
                <tr><td className="border border-black p-2">category</td><td className="border border-black p-2">VARCHAR(100)</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Scheme category</td></tr>
                <tr><td className="border border-black p-2">ministry</td><td className="border border-black p-2">VARCHAR(200)</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Issuing ministry</td></tr>
                <tr><td className="border border-black p-2">application_steps</td><td className="border border-black p-2">JSONB</td><td className="border border-black p-2">NULLABLE</td><td className="border border-black p-2">Application steps</td></tr>
                <tr><td className="border border-black p-2">external_link</td><td className="border border-black p-2">TEXT</td><td className="border border-black p-2">NULLABLE</td><td className="border border-black p-2">Official website</td></tr>
              </tbody>
            </table>

            <h3 className="text-lg font-semibold mt-6">10.3 User_Scheme_Applications Table</h3>
            <table className="w-full border-collapse border border-black text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-black p-2">Column</th>
                  <th className="border border-black p-2">Type</th>
                  <th className="border border-black p-2">Constraints</th>
                  <th className="border border-black p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-black p-2">id</td><td className="border border-black p-2">UUID</td><td className="border border-black p-2">PRIMARY KEY</td><td className="border border-black p-2">Application ID</td></tr>
                <tr><td className="border border-black p-2">user_id</td><td className="border border-black p-2">UUID</td><td className="border border-black p-2">FK (profiles.id)</td><td className="border border-black p-2">Applicant reference</td></tr>
                <tr><td className="border border-black p-2">scheme_id</td><td className="border border-black p-2">VARCHAR(50)</td><td className="border border-black p-2">FK (schemes.id)</td><td className="border border-black p-2">Scheme reference</td></tr>
                <tr><td className="border border-black p-2">status</td><td className="border border-black p-2">VARCHAR(50)</td><td className="border border-black p-2">DEFAULT pending</td><td className="border border-black p-2">Application status</td></tr>
                <tr><td className="border border-black p-2">applied_at</td><td className="border border-black p-2">TIMESTAMP</td><td className="border border-black p-2">DEFAULT NOW()</td><td className="border border-black p-2">Application date</td></tr>
              </tbody>
            </table>

            <h3 className="text-lg font-semibold mt-6">10.4 Connections Table</h3>
            <table className="w-full border-collapse border border-black text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-black p-2">Column</th>
                  <th className="border border-black p-2">Type</th>
                  <th className="border border-black p-2">Constraints</th>
                  <th className="border border-black p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-black p-2">id</td><td className="border border-black p-2">UUID</td><td className="border border-black p-2">PRIMARY KEY</td><td className="border border-black p-2">Connection ID</td></tr>
                <tr><td className="border border-black p-2">requester_id</td><td className="border border-black p-2">UUID</td><td className="border border-black p-2">FK (profiles.id)</td><td className="border border-black p-2">Request sender</td></tr>
                <tr><td className="border border-black p-2">receiver_id</td><td className="border border-black p-2">UUID</td><td className="border border-black p-2">FK (profiles.id)</td><td className="border border-black p-2">Request receiver</td></tr>
                <tr><td className="border border-black p-2">status</td><td className="border border-black p-2">VARCHAR(20)</td><td className="border border-black p-2">DEFAULT pending</td><td className="border border-black p-2">Connection status</td></tr>
                <tr><td className="border border-black p-2">created_at</td><td className="border border-black p-2">TIMESTAMP</td><td className="border border-black p-2">DEFAULT NOW()</td><td className="border border-black p-2">Request timestamp</td></tr>
              </tbody>
            </table>

            <h3 className="text-lg font-semibold mt-6">10.5 Events Table</h3>
            <table className="w-full border-collapse border border-black text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-black p-2">Column</th>
                  <th className="border border-black p-2">Type</th>
                  <th className="border border-black p-2">Constraints</th>
                  <th className="border border-black p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-black p-2">id</td><td className="border border-black p-2">UUID</td><td className="border border-black p-2">PRIMARY KEY</td><td className="border border-black p-2">Event ID</td></tr>
                <tr><td className="border border-black p-2">title</td><td className="border border-black p-2">VARCHAR(255)</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Event title</td></tr>
                <tr><td className="border border-black p-2">description</td><td className="border border-black p-2">TEXT</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Event description</td></tr>
                <tr><td className="border border-black p-2">date</td><td className="border border-black p-2">TIMESTAMP</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Event date/time</td></tr>
                <tr><td className="border border-black p-2">mode</td><td className="border border-black p-2">VARCHAR(20)</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Online/Offline</td></tr>
                <tr><td className="border border-black p-2">location</td><td className="border border-black p-2">VARCHAR(200)</td><td className="border border-black p-2">NULLABLE</td><td className="border border-black p-2">Event location</td></tr>
                <tr><td className="border border-black p-2">organizer_id</td><td className="border border-black p-2">UUID</td><td className="border border-black p-2">FK (profiles.id)</td><td className="border border-black p-2">Event organizer</td></tr>
                <tr><td className="border border-black p-2">capacity</td><td className="border border-black p-2">INTEGER</td><td className="border border-black p-2">NULLABLE</td><td className="border border-black p-2">Max participants</td></tr>
              </tbody>
            </table>

            <h3 className="text-lg font-semibold mt-6">10.6 Forum_Threads Table</h3>
            <table className="w-full border-collapse border border-black text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-black p-2">Column</th>
                  <th className="border border-black p-2">Type</th>
                  <th className="border border-black p-2">Constraints</th>
                  <th className="border border-black p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-black p-2">id</td><td className="border border-black p-2">UUID</td><td className="border border-black p-2">PRIMARY KEY</td><td className="border border-black p-2">Thread ID</td></tr>
                <tr><td className="border border-black p-2">title</td><td className="border border-black p-2">VARCHAR(255)</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Thread title</td></tr>
                <tr><td className="border border-black p-2">content</td><td className="border border-black p-2">TEXT</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Thread content</td></tr>
                <tr><td className="border border-black p-2">author_id</td><td className="border border-black p-2">UUID</td><td className="border border-black p-2">FK (profiles.id)</td><td className="border border-black p-2">Thread author</td></tr>
                <tr><td className="border border-black p-2">category</td><td className="border border-black p-2">VARCHAR(50)</td><td className="border border-black p-2">NOT NULL</td><td className="border border-black p-2">Thread category</td></tr>
                <tr><td className="border border-black p-2">created_at</td><td className="border border-black p-2">TIMESTAMP</td><td className="border border-black p-2">DEFAULT NOW()</td><td className="border border-black p-2">Creation time</td></tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .page-break-after {
            page-break-after: always;
          }
          .page-break-before {
            page-break-before: always;
          }
          @page {
            margin: 1.5cm;
            size: A4;
          }
        }
      `}</style>
    </div>
  )
}
