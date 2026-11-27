import{Navigate,Outlet,useLocation }from 'react-router';
import {useAuth} from '../hooks/useAuth';
import type { Role } from '../types';

export function RequireRole  ({roles}:{ roles: Role[] }){
    const {user}=useAuth()
const location = useLocation()
    if(!user || !roles.includes(user.role)) return <Navigate to="/" replace state={{ from: location.pathname }}/>

  return <Outlet/>
}


