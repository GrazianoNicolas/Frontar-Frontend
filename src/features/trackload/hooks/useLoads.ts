import { useEffect, useState } from 'react'
import { getLoads } from '../api/loadsService'
import type { LoadsPage, LoadsParams } from '../types'

type Result = {
  key: string
  data?: LoadsPage
  error?: string
}

export function useLoads({ page, limit }: LoadsParams) {
  const key = `${page}:${limit}`
  const [result, setResult] = useState<Result>({ key: '' })

  useEffect(() => {
    let active = true

    getLoads({ page, limit })
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
  }, [key, page, limit])

  return {
    loads: result.data?.items ?? [],
    total: result.data?.total ?? 0,
    loading: result.key !== key,
    error: result.error,
  }
}