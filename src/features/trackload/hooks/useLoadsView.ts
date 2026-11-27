import { useEffect, useState } from 'react'
import type { LoadsView } from '../types'
​
function isView(value: string | null): value is LoadsView {
  return value === 'cards' || value === 'rows'
}
​
function readView(key: string): LoadsView {
  try {
    const stored = localStorage.getItem(key)
    return isView(stored) ? stored : 'cards'
  } catch {
    return 'cards'
  }
}
​
export function useLoadsView(userId: string) {
  const key = `frontar.loadsView.${userId}`
  const [view, setView] = useState<LoadsView>(() => readView(key))
​
  useEffect(() => {
    try {
      localStorage.setItem(key, view)
    } catch {
      // If the browser won't let us save, the app still works.
    }
  }, [key, view])
​
  return [view, setView] as const
}