import { Plus } from 'lucide-react'
import { Link } from 'react-router'
import { buttonVariants } from '@/components/ui/button'

export function LoadsHeader() {
  return (
    <header className="flex items-start justify-between gap-3">
      <div>
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Mis cargas</h1>
        <p className="mt-1 text-sm text-muted-foreground">Seguimiento de viajes y documentación internacional.</p>
      </div>
      <Link to="/loads/new" className={buttonVariants({ className: 'shrink-0' })}>
        <Plus />
        Nueva<span className="hidden sm:inline"> carga</span>
      </Link>
    </header>
  )
}