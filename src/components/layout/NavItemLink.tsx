import { NavLink } from 'react-router'
import { cn } from '@/lib/utils'
import type { NavItem } from './NavItems'
​
type NavItemLinkProps = {
  item: NavItem
  onNavigate?: () => void
}
​
export function NavItemLink({ item, onNavigate }: NavItemLinkProps) {
  const { to, label, icon: Icon } = item
​
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white',
          isActive && 'bg-white/15 text-white',
        )
      }
    >
      <Icon className="size-4" />
      {label}
    </NavLink>
  )
}