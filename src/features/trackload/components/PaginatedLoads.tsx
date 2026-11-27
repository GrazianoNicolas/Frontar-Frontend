import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useDebouncedValue } from '@/shared/hooks/useDeboundcedValue'
import { useIsDesktop } from '@/shared/hooks/useIsDesktop'
import { useLoads } from '../hooks/useLoads'
import type { LoadsParams, StatusFilter } from '../types'
import { LoadsList } from './LoadsList'
import { LoadsPagination } from './LoadsPagination'
import { LoadsSummaryCards } from './LoadsSummaryCards'
import { LoadsToolbar } from './LoadToolbar'

const PAGE_SIZE = 12

export function PaginatedLoads() {
  const isDesktop = useIsDesktop()
  const [page, setPage] = useState(1)
  const [mobilePages, setMobilePages] = useState(1)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<StatusFilter>('all')
  const debouncedSearch = useDebouncedValue(search)

  const params: LoadsParams = {
    ...(isDesktop ? { page, limit: PAGE_SIZE } : { page: 1, limit: PAGE_SIZE * mobilePages }),
    search: debouncedSearch,
    status: status === 'all' ? undefined : status,
  }

  const { loads, total, summary, loading, error } = useLoads(params)
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))

  function backToFirstPage() {
    setPage(1)
    setMobilePages(1)
  }

  function changeSearch(value: string) {
    setSearch(value)
    backToFirstPage()
  }

  function changeStatus(value: StatusFilter) {
    setStatus(value)
    backToFirstPage()
  }

  let content
  if (error) {
    content = <p className="text-destructive">{error}</p>
  } else if (loading && loads.length === 0) {
    content = <p className="text-muted-foreground">Cargando cargas…</p>
  } else if (total === 0) {
    content = <p className="text-muted-foreground">No encontramos cargas con esos filtros.</p>
  } else {
    content = <LoadsList loads={loads} total={total} />
  }

  return (
    <div className="flex flex-1 flex-col gap-5">
      {summary && <LoadsSummaryCards summary={summary} />}

      <LoadsToolbar
        search={search}
        onSearchChange={changeSearch}
        status={status}
        onStatusChange={changeStatus}
        summary={summary}
      />

      {content}

      {total > 0 &&
        (isDesktop ? (
          <LoadsPagination page={page} totalPages={totalPages} onChange={setPage} />
        ) : (
          loads.length < total && (
            <Button variant="outline" disabled={loading} onClick={() => setMobilePages((n) => n + 1)}>
              {loading ? 'Cargando…' : 'Cargar más'}
            </Button>
          )
        ))}
    </div>
  )
}