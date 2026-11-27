import type { ReactNode } from 'react'
import { Truck } from 'lucide-react'
import { Logo } from '@/components/Logo'

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <aside className="hidden flex-col justify-between bg-brand p-12 text-white lg:flex">
        <Logo />

        <div className="max-w-md space-y-6">
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            Tus operaciones,
            <br />
            siempre conectadas.
          </h1>
          <p className="text-slate-300">
            Cargas, documentos y seguimiento internacional en un solo espacio de trabajo.
          </p>
          <RouteCard />
        </div>

        <p className="text-xs text-slate-400">FRONTAR · Gestión y trazabilidad logística</p>
      </aside>

      <main className="flex items-center justify-center bg-slate-50 p-6">
        <div className="w-full max-w-sm">{children}</div>
      </main>
    </div>
  )
}

function RouteCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Una operación. Todo conectado.</p>
        <Truck className="size-4" />
      </div>

      <div className="mt-5 flex items-center gap-3 text-sm">
        <span className="size-2 rounded-full bg-emerald-400" />
        Origen
        <span className="h-px flex-1 bg-white/20" />
        Destino
        <span className="size-2 rounded-full bg-emerald-400" />
      </div>

      <div className="mt-5 flex gap-2">
        {['MIC', 'CRT', 'Documentación'].map((tag) => (
          <span key={tag} className="rounded-md border border-white/20 px-2 py-1 text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}