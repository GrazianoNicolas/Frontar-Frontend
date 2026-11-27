import { Link } from 'react-router'
​
export function NotFoundPage() {
  return (
    <section className="grid gap-2">
      <h1 className="text-2xl font-semibold">Página no encontrada</h1>
      <Link to="/" className="underline">
        Volver al inicio
      </Link>
    </section>
  )
}