import { ChevronDown, Plus, User, Lock, LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const currentUser = {
  name: "Gaurav Sharma",
  avatarUrl: "",
};

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-full py-1 pr-1 pl-1 outline-none hover:bg-slate-50">
        <Avatar size="default">
          <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
          <AvatarFallback>{getInitials(currentUser.name)}</AvatarFallback>
        </Avatar>

        <span className="text-sm font-semibold text-slate-900">
          {currentUser.name}
        </span>

        <ChevronDown className="text-slate-400" size={16} />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 p-2">
        <DropdownMenuItem className="gap-2 py-2 font-medium text-indigo-600">
          <Plus size={16} />
          Create New Feedback
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-2 py-2">
          <User size={16} />
          Edit Profile
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-2 py-2">
          <Lock size={16} />
          Change Password
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive" className="gap-2 py-2">
          <LogOut size={16} />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileDropdown;
