import type { LucideIcon } from 'lucide-react'
import { Building2, FileText, Route, Truck } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { LoadsSummary } from '../types'

type LoadsSummaryCardsProps = {
  summary: LoadsSummary
}

type Stat = {
  label: string
  value: number
  Icon: LucideIcon
  color: string
}

export function LoadsSummaryCards({ summary }: LoadsSummaryCardsProps) {
  const stats: Stat[] = [
    { label: 'Cargas activas', value: summary.all, Icon: Truck, color: 'bg-muted text-foreground' },
    { label: 'En tránsito', value: summary.in_transit, Icon: Route, color: 'bg-emerald-50 text-emerald-700' },
    { label: 'En aduana', value: summary.customs, Icon: Building2, color: 'bg-amber-50 text-amber-700' },
    { label: 'Cartas de porte', value: summary.waybills, Icon: FileText, color: 'bg-blue-50 text-blue-700' },
  ]

  return (
    <section className="hidden gap-4 lg:grid lg:grid-cols-4">
      {stats.map(({ label, value, Icon, color }) => (
        <Card key={label}>
          <CardContent className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-2xl font-semibold tabular-nums">{String(value).padStart(2, '0')}</p>
            </div>
            <span className={cn('grid size-9 place-items-center rounded-lg', color)}>
              <Icon className="size-4" />
            </span>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}