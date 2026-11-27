import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { NAV_ITEMS } from './NavItems'
import { NavItemLink } from './NavItemLink'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Abrir menú"
        className={buttonVariants({
          variant: 'ghost',
          size: 'icon',
          className: 'text-white hover:bg-white/10 hover:text-white lg:hidden',
        })}
      >
        <Menu />
      </SheetTrigger>

      <SheetContent side="left" className="w-72 border-none bg-brand text-white">
        <SheetHeader>
          <SheetTitle className="text-white">
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <nav className="grid gap-1 px-4">
          {NAV_ITEMS.map((item) => (
            <NavItemLink key={item.to} item={item} onNavigate={() => setOpen(false)} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}