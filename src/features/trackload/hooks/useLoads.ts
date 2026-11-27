import { useEffect, useState } from 'react'
import { getLoads } from '../api/loadsService'
import type { LoadsPage, LoadsParams } from '../types'

type Result = {
  key: string
  data?: LoadsPage
  error?: string
}

export function useLoads({ page, limit, search = '', status }: LoadsParams) {
  const key = `${page}:${limit}:${search}:${status ?? 'all'}`
  const [result, setResult] = useState<Result>({ key: '' })

  useEffect(() => {
    let active = true

    getLoads({ page, limit, search, status })
      .then((data) => {
        if (active) setResult({ key, data })
      })
      .catch((error: unknown) => {
        const message = error instanceof Error ? error.message : 'No se pudieron traer las cargas'
        if (active) setResult({ key, error: message })
      })

    return () => {
      active = false
    }
   }, [key, page, limit, search, status])

  return {
    loads: result.data?.items ?? [],
    total: result.data?.total ?? 0,
    summary: result.data?.summary,
    loading: result.key !== key,
    error: result.error,
  }
}