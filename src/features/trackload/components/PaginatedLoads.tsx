import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useIsDesktop } from '@/shared/hooks/useIsDesktop';
import { useLoads } from '../hooks/useLoads';
import { LoadsList } from './LoadsList';
import { LoadsPagination } from './LoadsPagination';

const PAGE_SIZE = 12

export function PaginatedLoads() {
  const isDesktop = useIsDesktop()
  const [page, setPage] = useState(1)
  const [mobilePages, setMobilePages] = useState(1)

  const params = isDesktop
    ? { page, limit: PAGE_SIZE }
    : { page: 1, limit: PAGE_SIZE * mobilePages }

  const { loads, total, loading, error } = useLoads(params)
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))

  if (error) return <p className="text-destructive">{error}</p>
  if (loading && loads.length === 0) return <p className="text-muted-foreground">Cargando cargas…</p>

  return (
    <div className="flex flex-1 flex-col gap-4">
      <LoadsList loads={loads} total={total} />

      {isDesktop ? (
        <LoadsPagination page={page} totalPages={totalPages} onChange={setPage} />
      ) : (
        loads.length < total && (
          <Button variant="outline" disabled={loading} onClick={() => setMobilePages((n) => n + 1)}>
            {loading ? 'Cargando…' : 'Cargar más'}
          </Button>
        )
      )}
    </div>
  )
}