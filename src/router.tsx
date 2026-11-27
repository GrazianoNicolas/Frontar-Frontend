import { createBrowserRouter } from 'react-router'
import { AppLayout } from '@/components/layout/AppLayout'
import { ProtectedRoute, RequireRole } from '@/features/auth'
import { ConfiguracionPage } from '@/pages/ConfiguracionPage'
import { InicioPage } from '@/pages/InicioPage'
import {LoginPage} from '@/pages/LoginPage';
import {NotFoundPage} from '@/pages/NotFoundPage';
import {PerfilPage} from '@/pages/PerfilPage';
import {TruckloadPage} from '@/pages/TruckloadPage';

export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { index: true, element: <InicioPage /> },
          { path: 'perfil', element: <PerfilPage /> },
          { path: 'Cargas', element: <TruckloadPage /> },
          { path: 'Empresas', element: <TruckloadPage /> },
          {
            element: <RequireRole roles={['admin']} />,
            children: [
              { path: 'configuracion', element: <ConfiguracionPage /> },
            ],
          },
        ],
      },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])