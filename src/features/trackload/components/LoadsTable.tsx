import { ArrowRight, MapPin } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Load } from '../types';
import { StatusBadge } from './StatusBadge';

type LoadsTableProps = {
  loads: Load[]
}

export function LoadsTable({ loads }: LoadsTableProps) {
  return (
    <div className="rounded-xl border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>MIC / Empresa</TableHead>
            <TableHead>Recorrido</TableHead>
            <TableHead>Ubicación</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Cartas de porte</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loads.map((load) => (
            <TableRow key={load.id}>
              <TableCell>
                <p className="font-bold">{load.mic}</p>
                <p className="text-xs text-muted-foreground">{load.company}</p>
              </TableCell>
              <TableCell>
                <span className="flex items-center gap-2">
                  {load.origin.city}
                  <ArrowRight className="size-3.5 text-muted-foreground" />
                  {load.destination.city}
                </span>
              </TableCell>
              <TableCell>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="size-3.5 text-teal-600" />
                  {load.location}
                </span>
              </TableCell>
              <TableCell>
                <StatusBadge status={load.status} />
              </TableCell>
              <TableCell className="space-x-3 font-medium text-blue-700">
                {load.crts.map((crt) => (
                  <span key={crt}>{crt}</span>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}