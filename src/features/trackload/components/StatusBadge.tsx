import { cn } from '@/lib/utils';
import type { LoadStatus } from '../types';

const STATUSES: Record<LoadStatus, { label: string; className: string; dot: string }> = {
  in_transit: { label: 'En tránsito', className: 'bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500' },
  customs: { label: 'En aduana', className: 'bg-amber-50 text-amber-700', dot: 'bg-amber-500' },
  delivered: { label: 'Entregada', className: 'bg-blue-50 text-blue-700', dot: 'bg-blue-500' },
}

type StatusBadgeProps = {
  status: LoadStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, className, dot } = STATUSES[status];

  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium', className)}>
      <span className={cn('size-1.5 rounded-full', dot)} />
      {label}
    </span>
  )
}