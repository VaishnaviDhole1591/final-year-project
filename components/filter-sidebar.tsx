'use client'

import { useState } from 'react'
import { Filter, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'

interface FilterOption {
  id: string
  label: string
}

interface FilterGroup {
  name: string
  options: FilterOption[]
}

interface FilterSidebarProps {
  filters: FilterGroup[]
  selectedFilters: Record<string, string[]>
  onFilterChange: (groupName: string, optionId: string, checked: boolean) => void
  onClearAll: () => void
}

export function FilterSidebar({ filters, selectedFilters, onFilterChange, onClearAll }: FilterSidebarProps) {
  const totalSelected = Object.values(selectedFilters).flat().length

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-20 rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Filters</h3>
            {totalSelected > 0 && (
              <Button variant="ghost" size="sm" onClick={onClearAll} className="h-auto p-1 text-xs">
                Clear all
              </Button>
            )}
          </div>
          <div className="space-y-6">
            {filters.map((group, idx) => (
              <div key={group.name}>
                {idx > 0 && <Separator className="mb-4" />}
                <h4 className="text-sm font-medium mb-3">{group.name}</h4>
                <div className="space-y-2">
                  {group.options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`${group.name}-${option.id}`}
                        checked={selectedFilters[group.name]?.includes(option.id) || false}
                        onCheckedChange={(checked) => 
                          onFilterChange(group.name, option.id, checked as boolean)
                        }
                      />
                      <Label
                        htmlFor={`${group.name}-${option.id}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile filter sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="lg:hidden">
            <Filter className="mr-2 h-4 w-4" />
            Filters
            {totalSelected > 0 && (
              <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                {totalSelected}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <SheetDescription>
              Filter results by category
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-6">
            {totalSelected > 0 && (
              <Button variant="outline" size="sm" onClick={onClearAll} className="w-full">
                <X className="mr-2 h-4 w-4" />
                Clear all filters
              </Button>
            )}
            {filters.map((group, idx) => (
              <div key={group.name}>
                {idx > 0 && <Separator className="mb-4" />}
                <h4 className="text-sm font-medium mb-3">{group.name}</h4>
                <div className="space-y-2">
                  {group.options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`mobile-${group.name}-${option.id}`}
                        checked={selectedFilters[group.name]?.includes(option.id) || false}
                        onCheckedChange={(checked) => 
                          onFilterChange(group.name, option.id, checked as boolean)
                        }
                      />
                      <Label
                        htmlFor={`mobile-${group.name}-${option.id}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
