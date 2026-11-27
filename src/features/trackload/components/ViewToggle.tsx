import { LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { LoadsView } from '../types';

const OPTIONS = [
  { value: 'cards', label: 'Tarjetas', Icon: LayoutGrid },
  { value: 'rows', label: 'Filas', Icon: List },
] as const

type ViewToggleProps = {
  view: LoadsView,
  onChange: (view: LoadsView) => void
}

export function ViewToggle({ view, onChange }: ViewToggleProps) {
  return (
    <div className="inline-flex gap-1 rounded-lg border bg-card p-1" role="group" aria-label="Cómo ver las cargas">
      {OPTIONS.map(({ value, label, Icon }) => (
        <Button
          key={value}
          size="sm"
          variant={view === value ? 'secondary' : 'ghost'}
          aria-pressed={view === value}
          onClick={() => onChange(value)}
        >
          <Icon />
          {label}
        </Button>
      ))}
    </div>
  )
}