
import { Outlet } from "react-router";
import { Navbar } from './Navbar';

export function AppLayout(){
    return(
        <div className="flex min-h-screen flex-col bg-muted/40">
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-6 lg:px-8">
        <Outlet />
      </main>
    </div>
    )
}