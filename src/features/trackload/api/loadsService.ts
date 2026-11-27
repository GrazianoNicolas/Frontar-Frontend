import type { Load, LoadsPage, LoadsParams } from '../types'
import { DEMO_LOADS } from './demoLoads'
​
// 30 fake loads, built from the sample ones.
const ALL_LOADS: Load[] = Array.from({ length: 30 }, (_, i) => {
  const base = DEMO_LOADS[i % DEMO_LOADS.length]
  return { ...base, id: String(i + 1), mic: `MIC-${1235 + i}` }
})
​
// Simulates GET /api/loads?page=1&limit=12
export function getLoads({ page, limit }: LoadsParams): Promise<LoadsPage> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * limit
      resolve({ items: ALL_LOADS.slice(start, start + limit), total: ALL_LOADS.length })
    }, 500)
  })
}