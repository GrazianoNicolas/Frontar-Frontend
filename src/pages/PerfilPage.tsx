import { useAuth } from '@/features/auth'
​
export function PerfilPage() {
  const { user } = useAuth()
​
  return (
    <section className="grid gap-2">
      <h1 className="text-2xl font-semibold">Mi perfil</h1>
      <p>Email: {user?.email}</p>
      <p>Rol: {user?.role}</p>
    </section>
  )
}