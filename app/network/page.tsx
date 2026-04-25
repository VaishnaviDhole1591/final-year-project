'use client'

import { useState, useMemo } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { EntrepreneurCard } from '@/components/entrepreneur-card'
import { SearchInput } from '@/components/search-input'
import { FilterSidebar } from '@/components/filter-sidebar'
import { NoEntrepreneursFound } from '@/components/empty-state'
import { entrepreneurs } from '@/lib/data'

const filters = [
  {
    name: 'Industry',
    options: [
      { id: 'cleantech', label: 'CleanTech' },
      { id: 'fintech', label: 'FinTech' },
      { id: 'healthtech', label: 'HealthTech' },
      { id: 'agritech', label: 'AgriTech' },
      { id: 'edtech', label: 'EdTech' },
      { id: 'logistics', label: 'Logistics' },
    ]
  },
  {
    name: 'Location',
    options: [
      { id: 'bangalore', label: 'Bangalore' },
      { id: 'mumbai', label: 'Mumbai' },
      { id: 'delhi', label: 'Delhi' },
      { id: 'hyderabad', label: 'Hyderabad' },
      { id: 'pune', label: 'Pune' },
      { id: 'chennai', label: 'Chennai' },
    ]
  }
]

export default function NetworkPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})

  const handleFilterChange = (groupName: string, optionId: string, checked: boolean) => {
    setSelectedFilters(prev => {
      const current = prev[groupName] || []
      if (checked) {
        return { ...prev, [groupName]: [...current, optionId] }
      }
      return { ...prev, [groupName]: current.filter(id => id !== optionId) }
    })
  }

  const handleClearAll = () => {
    setSelectedFilters({})
  }

  const filteredEntrepreneurs = useMemo(() => {
    return entrepreneurs.filter(entrepreneur => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch = 
          entrepreneur.name.toLowerCase().includes(query) ||
          entrepreneur.company.toLowerCase().includes(query) ||
          entrepreneur.industry.toLowerCase().includes(query) ||
          entrepreneur.bio.toLowerCase().includes(query)
        if (!matchesSearch) return false
      }

      // Industry filter
      const industryFilters = selectedFilters['Industry'] || []
      if (industryFilters.length > 0) {
        const matchesIndustry = industryFilters.some(f => 
          entrepreneur.industry.toLowerCase().includes(f.toLowerCase())
        )
        if (!matchesIndustry) return false
      }

      // Location filter
      const locationFilters = selectedFilters['Location'] || []
      if (locationFilters.length > 0) {
        const matchesLocation = locationFilters.some(f => 
          entrepreneur.location.toLowerCase().includes(f.toLowerCase())
        )
        if (!matchesLocation) return false
      }

      return true
    })
  }, [searchQuery, selectedFilters])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight">Entrepreneur Network</h1>
            <p className="mt-2 text-muted-foreground">
              Connect with founders, mentors, and innovators across India
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search by name, company, or industry..."
                className="flex-1 max-w-xl"
              />
              <div className="lg:hidden">
                <FilterSidebar
                  filters={filters}
                  selectedFilters={selectedFilters}
                  onFilterChange={handleFilterChange}
                  onClearAll={handleClearAll}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex gap-8">
              <FilterSidebar
                filters={filters}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
                onClearAll={handleClearAll}
              />

              <div className="flex-1">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredEntrepreneurs.length} of {entrepreneurs.length} entrepreneurs
                  </p>
                </div>

                {filteredEntrepreneurs.length === 0 ? (
                  <NoEntrepreneursFound />
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredEntrepreneurs.map((entrepreneur) => (
                      <EntrepreneurCard key={entrepreneur.id} entrepreneur={entrepreneur} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
