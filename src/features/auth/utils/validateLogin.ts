import type { Credentials } from "../types";
export type LoginErrors=Partial<Record<keyof Credentials,string>>

export function validateLogin({email, password}:Credentials):LoginErrors{
    const errors:LoginErrors={};
     if (email.trim() === '') errors.email = 'El email es obligatorio'
     else if (!email.includes('@')) errors.email = 'El email no parece válido'
​
    if (password === '') errors.password = 'La contraseña es obligatoria'
    else if (password.length < 6) errors.password = 'Mínimo 6 caracteres'
   
  return errors
}