import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Load } from '../types'
import { StatusBadge } from './StatusBadge'

type LoadCardProps = {
  load: Load
}

export function LoadCard({ load }: LoadCardProps) {
  const { mic, company, origin, destination, location, status, crts, products } = load

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold">{mic}</CardTitle>
        <CardDescription>{company}</CardDescription>
        <CardAction>
          <StatusBadge status={status} />
        </CardAction>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{origin.country}</p>
            <p className="font-semibold">{origin.city}</p>
          </div>
          <ArrowRight className="mb-1 size-4 text-muted-foreground" />
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{destination.country}</p>
            <p className="font-semibold">{destination.city}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
          <MapPin className="size-4 text-teal-600" />
          {location}
        </div>

        <ul className="flex gap-2">
          {crts.map((crt) => (
            <li key={crt} className="flex-1 rounded-md border py-2 text-center text-sm text-muted-foreground transition-colors hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 cursor-pointer ">
              {crt}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="justify-between border-t text-xs">
        <span className="text-muted-foreground">
          {crts.length} CRT · {products} productos
        </span>
        <Link to={`/loads/${load.id}`} className="font-medium text-blue-700 hover:underline">
          Ver operación →
        </Link>
      </CardFooter>
    </Card>
  )
}