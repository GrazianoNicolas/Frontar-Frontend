import { useState } from "react";
import type {ReactNode} from 'react';
import { AuthContext } from "./AuthContext";
import { fakeAuthService } from "../api/fakeAuthService";
import type { AuthService,Credentials,User } from "../types";

type AuthProviderProps={
    children: ReactNode,
    service?: AuthService
}

export function AuthProvider({children,service=fakeAuthService}:AuthProviderProps){
    const [user,setUser]= useState<User|null>(null);

    async function login(credentials:Credentials){
        const loggerUser=await service.login(credentials)
        setUser(loggerUser)
    }
    async function logout(){
        await service.logout()
        setUser(null)
    }
    return <AuthContext value={{user,login,logout}}>{children}</AuthContext>
}