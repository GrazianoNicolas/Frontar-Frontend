import type {Role} from '@/features/auth'
import { Building2, House, Settings, Truck, UserRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type NavItem={
    to:string
    label:string
    roles?:Role[]
    icon:LucideIcon

}

export const NAV_ITEMS:NavItem[]=[
    {to:'/',label:'Inicio',icon:House},
    {to:'/transportistas',label:'Transportistas',icon:Truck},
    {to:'/empresas',label:'Empresas',icon:Building2},
    {to:'/perfil',label:'Mi Perfil',icon:UserRound},
    {to:'/configuracion',label:'Configuracion',icon:Settings,roles:['admin']},
]