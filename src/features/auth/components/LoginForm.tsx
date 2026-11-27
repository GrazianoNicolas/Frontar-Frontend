import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { FormField } from '@/shared/components/FormField'
import { PasswordInput } from '@/shared/components/PasswordInput'
import { useLoginForm } from '../hooks/useLoginForm'
import { Logo } from '@/components/Logo'
export function LoginForm() {
  const { values, errors, loading, serverError, setField, handleSubmit } = useLoginForm()
​
 return (
  <form onSubmit={handleSubmit} noValidate className="grid gap-6">
    <Logo className="text-brand lg:hidden" />

    <div className="grid gap-2">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
        Tu espacio de trabajo
      </p>
      <h2 className="text-3xl font-bold text-brand">Bienvenido a FRONTAR</h2>
      <p className="text-sm text-slate-600">Ingresá para continuar con tus operaciones.</p>
    </div>

    <FormField id="email" label="Correo electrónico" error={errors.email}>
      <Input
        id="email"
        type="email"
        placeholder="frontar@test.com"
        value={values.email}
        disabled={loading}
        aria-invalid={!!errors.email}
        onChange={(e) => setField('email', e.target.value)}
      />
    </FormField>

    <FormField id="password" label="Contraseña" error={errors.password}>
      <PasswordInput
        id="password"
        value={values.password}
        disabled={loading}
        aria-invalid={!!errors.password}
        onChange={(e) => setField('password', e.target.value)}
      />
    </FormField>

    {serverError && <p className="text-sm text-red-600">{serverError}</p>}

    <Button
      type="submit"
      size="lg"
      className="w-full bg-blue-600 hover:bg-blue-700"
      disabled={loading}
    >
      {loading ? 'Ingresando…' : 'Ingresar a FRONTAR →'}
    </Button>

  
  </form>
)
}