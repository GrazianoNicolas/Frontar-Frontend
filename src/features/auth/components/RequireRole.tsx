import{Navigate,Outlet,useLocation }from 'react-router';
import {useAuth} from '../hooks/useAuth';
import type { Role } from '../types';

export function RequireRole  ({roles}:{ roles: Role[] }){
    const {user}=useAuth()

    if(!user || !roles.includes(user.role)) return <Navigate to="/" replace/>

  return <Outlet/>
}


