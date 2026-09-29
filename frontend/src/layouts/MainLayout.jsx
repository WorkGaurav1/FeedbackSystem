import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import AppSidebar from "@/components/layout/AppSidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="min-h-screen bg-slate-100">
        <Navbar />

        <main className="w-full">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default MainLayout;
