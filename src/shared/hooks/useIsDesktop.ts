import { useEffect, useState } from 'react'

// Same breakpoint as Tailwind's lg: (1024 px).
const QUERY = '(min-width: 1024px)'

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(QUERY).matches)

  useEffect(() => {
    const media = window.matchMedia(QUERY)
    const handleChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches)
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  return isDesktop
}