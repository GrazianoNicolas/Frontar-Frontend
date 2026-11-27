export type Role= 'admin' | 'operador'

export type User={
    id: string;
    email:string;
    name: string;
    role: Role;
}

export type Credentials={
    email:string
    password:string
}

export interface AuthService{
    login(credentials:Credentials):Promise<User>
    logout():Promise<void>
}