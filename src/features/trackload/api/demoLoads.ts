
import type { Load } from '../types'
​
// Sample data until we have the backend.
export const DEMO_LOADS: Load[] = [
  {
    id: '1',
    mic: 'MIC-1235',
    company: 'Andes Trading S.A.',
    origin: { city: 'Santiago', country: 'Chile' },
    destination: { city: 'Mendoza', country: 'Argentina' },
    location: 'Paso Los Libertadores',
    status: 'in_transit',
    crts: ['CRT-987', 'CRT-754', 'CRT-342'],
    products: 6,
  },
  {
    id: '2',
    mic: 'MIC-1236',
    company: 'Patagonia Export SRL',
    origin: { city: 'Neuquén', country: 'Argentina' },
    destination: { city: 'Valparaíso', country: 'Chile' },
    location: 'Complejo Pino Hachado',
    status: 'customs',
    crts: ['CRT-221', 'CRT-222'],
    products: 2,
  },
    {
    id: '3',
    mic: 'MIC-1237',
    company: 'Cuyo Logística S.A.',
    origin: { city: 'San Juan', country: 'Argentina' },
    destination: { city: 'La Serena', country: 'Chile' },
    location: 'Paso Agua Negra',
    status: 'in_transit',
    crts: ['CRT-410'],
    products: 3,
  },
]