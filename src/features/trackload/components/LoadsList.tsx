
import type { Load } from '../types';
import { LoadCard } from './LoadCard';
import { LoadsTable } from './LoadsTable';
import { ViewToggle } from './ViewToggle';
import { useAuth } from '@/features/auth';
import { useLoadsView } from '../hooks/useLoadsView';

type LoadsListProps = {
  loads: Load[],
  total?: number
}

export function LoadsList({ loads,total }: LoadsListProps) {
  const { user } = useAuth()
  const [view, setView] = useLoadsView(user?.id ?? 'anonymous')
 
  if (loads.length === 0) {
      return <p className="text-muted-foreground">Todavía no tenés cargas.</p>
  }

  const cards = (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {loads.map((load) => (
        <LoadCard key={load.id} load={load} />
      ))}
    </div>
  )
  
  return (
    <section className="flex flex-1 flex-col gap-3">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        
         <span>{total ?? loads.length} cargas</span>
        <div className="hidden lg:block">
          <ViewToggle view={view} onChange={setView} />
        </div>
      </div>

      {view === 'cards' ? (
        cards
      ) : (
        <>
          <div className="lg:hidden">{cards}</div>
          <div className="hidden lg:block">
            <LoadsTable loads={loads} />
          </div>
        </>
      )}
    </section>
  )
}