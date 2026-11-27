
import { Outlet } from "react-router";
import { Navbar } from './Navbar';

export function AppLayout(){
    return(
        <div className="min-h-screen">
            <Navbar/>
            <main className="mx-auto max-w-5xl px-4 py-8"></main>
            <Outlet />
        </div>
    )
}