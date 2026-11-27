import { Link } from 'react-router'
import { Logo } from '@/components/Logo'
import { MobileNav } from './MobileNav'
import { NAV_ITEMS } from './NavItems'
import { NavItemLink } from './NavItemLink'
import { UserMenu } from './UserMenu'

export function Navbar() {
  return (
    <header className="bg-brand text-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 lg:px-8">
        <MobileNav />

        <Link to="/" className="mr-4">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavItemLink key={item.to} item={item} />
          ))}
        </div>

        <div className="ml-auto">
          <UserMenu />
        </div>
      </nav>
    </header>
  )
}