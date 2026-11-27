import type {AuthService, Credentials, User } from '../types'

const FAKE_USERS: Array<User & {password:string}>=[
    {id:'1', email:'nico@test.com', name:'Nico', role:'admin', password:'123456'},
    {id:'2', email:'ana@test.com', name:'Ana', role:'operador', password:'abcdef'},
]

function wait(ms:number){
    return new Promise((resolve)=>setTimeout(resolve,ms))
}

export const fakeAuthService:AuthService={
    async login ({email,password}:Credentials){
        await wait(1000);
        const found=FAKE_USERS.find((user)=> user.email===email && user.password === password)
        if(!found) throw new Error('Email o contraseña incorrectos');
        return{id: found.id, email:found.email, name:found.name, role:found.role}
    },

    async logout(){
        await wait(300)
    },
}