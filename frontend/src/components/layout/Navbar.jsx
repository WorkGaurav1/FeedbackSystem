import { useLocation } from "react-router-dom";

import ProfileDropdown from "./ProfileDropdown";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { navItems } from "@/constants/navigation";

function Navbar() {
  const location = useLocation();

  const pageTitle =
    navItems.find((item) => item.url === location.pathname)?.title ??
    "CDIS Feedback Portal";

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6">
      {/* Left */}
      <div className="flex items-center gap-2">
        {/* Mobile only — on desktop the toggle lives in the sidebar */}
        <SidebarTrigger className="-ml-1 md:hidden" />

        <Separator orientation="vertical" className="mr-2 h-5 md:hidden" />

        <h1 className="text-lg font-semibold text-slate-900">
          {pageTitle}
        </h1>
      </div>

      {/* Right */}
      <ProfileDropdown />
    </header>
  );
}

export default Navbar;
