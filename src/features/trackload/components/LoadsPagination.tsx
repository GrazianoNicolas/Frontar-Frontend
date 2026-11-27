import type { MouseEvent } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { cn } from '@/lib/utils'

type LoadsPaginationProps = {
  page: number
  totalPages: number
  onChange: (page: number) => void
}

export function LoadsPagination({ page, totalPages, onChange }: LoadsPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const isFirst = page === 1
  const isLast = page === totalPages

  function goTo(destination: number) {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      if (destination >= 1 && destination <= totalPages) onChange(destination)
    }
  }
  
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={goTo(page - 1)}
            aria-disabled={isFirst}
            className={cn(isFirst && 'pointer-events-none opacity-50')}
          />
        </PaginationItem>

        {pages.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink href="#" isActive={pageNumber === page} onClick={goTo(pageNumber)}>
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={goTo(page + 1)}
            aria-disabled={isLast}
            className={cn(isLast && 'pointer-events-none opacity-50')}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}