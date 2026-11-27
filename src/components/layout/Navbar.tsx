import { NavLink } from 'react-router'
import { buttonVariants } from '@/components/ui/button'
import { NAV_ITEMS } from './NavItem'
import { UserMenu } from './UserMenu'
​import { useAuth } from '@/features/auth'

export function Navbar() {
  const { user } = useAuth()
  const items = NAV_ITEMS.filter(
    (item) => !item.roles || (user && item.roles.includes(user.role)),
  )
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-5xl items-center gap-1 px-4 py-2">
        <span className="mr-4 font-semibold">Frontar</span>
​
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              buttonVariants({ variant: isActive ? 'outline' : 'ghost' })
            }
          >
            {item.label}
          </NavLink>
        ))}
​
        <div className="ml-auto">
          <UserMenu />
        </div>
      </nav>
    </header>
  )
}