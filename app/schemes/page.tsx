'use client'

import { useState, useMemo } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SchemeCard } from '@/components/scheme-card'
import { SearchInput } from '@/components/search-input'
import { FilterSidebar } from '@/components/filter-sidebar'
import { NoSchemesFound } from '@/components/empty-state'
import { schemes } from '@/lib/data'

const filters = [
  {
    name: 'Industry',
    options: [
      { id: 'all', label: 'All Industries' },
      { id: 'technology', label: 'Technology' },
      { id: 'manufacturing', label: 'Manufacturing' },
      { id: 'services', label: 'Services' },
    ]
  },
  {
    name: 'Location',
    options: [
      { id: 'pan-india', label: 'Pan India' },
      { id: 'state-specific', label: 'State Specific' },
    ]
  },
  {
    name: 'Funding Type',
    options: [
      { id: 'grant', label: 'Grant' },
      { id: 'loan', label: 'Loan' },
      { id: 'equity', label: 'Equity' },
      { id: 'guarantee', label: 'Guarantee' },
    ]
  }
]

export default function SchemesPage() {
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

  const filteredSchemes = useMemo(() => {
    return schemes.filter(scheme => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch = 
          scheme.title.toLowerCase().includes(query) ||
          scheme.description.toLowerCase().includes(query) ||
          scheme.industry.toLowerCase().includes(query)
        if (!matchesSearch) return false
      }

      // Funding type filter
      const fundingFilters = selectedFilters['Funding Type'] || []
      if (fundingFilters.length > 0) {
        const matchesFunding = fundingFilters.some(f => 
          scheme.fundingType.toLowerCase().includes(f.toLowerCase())
        )
        if (!matchesFunding) return false
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
            <h1 className="text-3xl font-bold tracking-tight">Government Schemes</h1>
            <p className="mt-2 text-muted-foreground">
              Discover funding opportunities and support programs for your startup
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search schemes by name, industry, or keyword..."
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
                    Showing {filteredSchemes.length} of {schemes.length} schemes
                  </p>
                </div>

                {filteredSchemes.length === 0 ? (
                  <NoSchemesFound />
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredSchemes.map((scheme) => (
                      <SchemeCard key={scheme.id} scheme={scheme} />
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
