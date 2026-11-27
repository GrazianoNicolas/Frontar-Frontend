import type {Role} from '@/features/auth'
export type NavItem={
    to:string
    label:string
    roles?:Role[]

}

export const NAV_ITEMS:NavItem[]=[
    {to:'/',label:'Inicio'},
    {to:'/perfil',label:'Mi Perfil'},
    {to:'/cargas',label:'Cargas'},
    {to:'/empresas',label:'Empresas'},
    {to:'/configuracion',label:'Configuracion',roles:['admin']},
]