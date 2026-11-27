import {Navigate, useLocation} from 'react-router';
import {LoginForm,useAuth} from '@/features/auth';
import { AuthLayout } from '@/components/layout/AuthLayout'


export function LoginPage(){
    const {user}=useAuth();
    const location = useLocation()
    const from = (location.state as { from?: string } | null)?.from ?? '/'

    if (user) return <Navigate to={from} replace/>

    return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}