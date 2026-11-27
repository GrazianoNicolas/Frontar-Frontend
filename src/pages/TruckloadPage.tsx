import { PaginatedLoads } from '@/features/trackload'

export function TruckloadPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 lg:px-8"> <div className="flex flex-1 flex-col gap-5">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Mis cargas</h1>
        <p className="text-sm text-muted-foreground">Seguimiento de viajes y documentación internacional.</p>
      </header>

      <PaginatedLoads />
    </div>
  </main>)
   
}