import type { Load, LoadsPage, LoadsParams, LoadsSummary } from '../types'
import { DEMO_LOADS } from './demoLoads'
​
// 30 fake loads, built from the sample ones.
const ALL_LOADS: Load[] = Array.from({ length: 30 }, (_, i) => {
  const base = DEMO_LOADS[i % DEMO_LOADS.length]
  return { ...base, id: String(i + 1), mic: `MIC-${1235 + i}` }
})
​
function matchesSearch(load: Load, text: string) {
  if (text === '') return true
  const fields = [load.mic, load.company, load.origin.city, load.destination.city, ...load.crts]
  return fields.some((field) => field.toLowerCase().includes(text))
}
​
function summarize(loads: Load[]): LoadsSummary {
  return {
    all: loads.length,
    delivered: loads.filter((load) => load.status === 'delivered').length,
    in_transit: loads.filter((load) => load.status === 'in_transit').length,
    customs: loads.filter((load) => load.status === 'customs').length,
    waybills: loads.reduce((sum, load) => sum + load.crts.length, 0),
  }
}
​
// Simulates GET /api/loads?page=1&limit=12&search=...&status=...
export function getLoads({ page, limit, search = '', status }: LoadsParams): Promise<LoadsPage> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const text = search.trim().toLowerCase()
      const matches = ALL_LOADS.filter((load) => matchesSearch(load, text)).filter(
        (load) => status === undefined || load.status === status,
      )
      const start = (page - 1) * limit
      resolve({
        items: matches.slice(start, start + limit),
        total: matches.length,
        summary: summarize(ALL_LOADS),
      })
    }, 500)
  })
}