import { LoadsHeader, PaginatedLoads } from '@/features/trackload'
​
export function TruckloadPage() {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <LoadsHeader />
      <PaginatedLoads />
    </div>
  )
}