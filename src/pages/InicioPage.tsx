import { useAuth } from '@/features/auth'
​
export function InicioPage() {
  const { user } = useAuth()
​
  return (
    <section className="grid gap-2">
      <h1 className="text-2xl font-semibold">Inicio</h1>
      <p>Bienvenido, {user?.name}. Desde el menú de arriba podés moverte por la app.</p>
    </section>
  )
}