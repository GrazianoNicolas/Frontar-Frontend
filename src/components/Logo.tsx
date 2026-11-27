import { Route } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2 font-semibold tracking-widest', className)}>
      <span className="flex size-8 items-center justify-center rounded-md bg-current/10">
        <Route className="size-4" />
      </span>
      FRONTAR
    </div>
  )
}