import type { LoadStatus } from './types'

export const STATUS_LABELS: Record<LoadStatus, string> = {
  in_transit: 'En tránsito',
  customs: 'En aduana',
  delivered: 'Entregada',
}