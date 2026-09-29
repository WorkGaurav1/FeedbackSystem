import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AuthService from "@/services/authService";
import { navItems } from "@/constants/navigation";

import cdisLogo from "@/assets/images/cdis_logo.png";

function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    AuthService.logout();
    navigate("/");
  };

  return (
    <Sidebar collapsible="icon">
      {/* Brand */}
      <SidebarHeader className="flex-row items-center group-data-[collapsible=icon]:flex-col">
        <SidebarMenu className="min-w-0 flex-1">
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              tooltip="CDIS Feedback Portal"
              render={<NavLink to="/dashboard" />}
            >
              <img
                src={cdisLogo}
                alt="CDIS Logo"
                className="size-8 shrink-0 object-contain"
              />

              <div className="grid flex-1 text-left leading-tight">
                <span className="truncate font-bold text-slate-900">
                  CDIS
                </span>
                <span className="truncate text-xs text-slate-500">
                  Feedback Portal
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarTrigger className="shrink-0 text-slate-500" />
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={location.pathname === item.url}
                    render={<NavLink to={item.url} />}
                    className="data-active:bg-indigo-50 data-active:text-indigo-600"
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Sign Out"
              onClick={handleSignOut}
              className="text-red-600 hover:bg-red-50 hover:text-red-700"
            >
              <LogOut />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}

export default AppSidebar;
