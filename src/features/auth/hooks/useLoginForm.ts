import { useState } from 'react'
import type { FormEvent } from 'react'
import { useAuth } from './useAuth'
import { validateLogin } from '../utils/validateLogin'
import type { LoginErrors } from '../utils/validateLogin'
import type { Credentials } from '../types'

export function useLoginForm(){
    const {login}= useAuth()
    const [values,setValues]=useState<Credentials>({email:'',password:''});
    const [errors,setErrors]=useState<LoginErrors>({});
    const [loading,setLoading]=useState(false);
    const [serverError,setServerError]=useState('');

    function setField(field:keyof Credentials,value:string){
        setValues({...values,[field]:value});
        setErrors({...errors,[field]:undefined});
    }

    async function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        const newErrors=validateLogin(values);
        setErrors(newErrors);
        if(Object.keys(newErrors).length>0) return
        setLoading(true);
        setServerError('');
        try {
           await login(values) 
        } catch (error) {
            setServerError(error instanceof Error ? error.message:'Error Inesperado')
            
        }finally{
            setLoading(false)
        }

    }
        
    return{values,errors,loading,serverError,setField,handleSubmit}

}
