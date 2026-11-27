import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { STATUS_LABELS } from '../constants'
import type { LoadsSummary, StatusFilter } from '../types'

type LoadsToolbarProps = {
  search: string
  onSearchChange: (search: string) => void
  status: StatusFilter
  onStatusChange: (status: StatusFilter) => void
  summary?: LoadsSummary
}

const FILTERS: { value: StatusFilter; label: string }[] = [
  { value: 'all', label: 'Todas' },
  { value: 'in_transit', label: STATUS_LABELS.in_transit },
  { value: 'customs', label: STATUS_LABELS.customs },
]

export function LoadsToolbar({ search, onSearchChange, status, onStatusChange, summary }: LoadsToolbarProps) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative lg:w-80">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Buscar MIC, CRT, empresa o destino"
          aria-label="Buscar cargas"
          className="pl-9"
        />
      </div>

      <div className="-mx-4 flex gap-1 overflow-x-auto px-4 lg:mx-0 lg:px-0" role="group" aria-label="Filtrar por estado">
        {FILTERS.map(({ value, label }) => (
          <Button
            key={value}
            size="sm"
            variant={status === value ? 'secondary' : 'ghost'}
            aria-pressed={status === value}
            onClick={() => onStatusChange(value)}
            className="shrink-0"
          >
            {label}
            {summary && <span className="text-muted-foreground">({summary[value]})</span>}
          </Button>
        ))}
      </div>
    </div>
  )
}