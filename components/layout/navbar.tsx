"use client";
import { useState } from "react";
import {
  Search,
  Users,
  BookOpen,
  Bell,
  Compass,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn_components/dropdown-menu";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center mr-auto h-16">
        {/* Left section with Logo and Search */}
        <div className="flex items-center space-x-4">
          {/* Logo/Brand */}
          <button
            onClick={() => handleNavigation("/feed")}
            className="text-white text-xl font-bold hover:text-emerald-200 transition-colors duration-200"
          >
            Tarkeeb
          </button>

          {/* Search Bar */}
          <div className="relative">
            <div
              className={`relative transition-all duration-300 ${
                isSearchExpanded ? "w-80" : "w-48"
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-emerald-300" />
              </div>
              <input
                type="text"
                placeholder="Search recipes, ingredients..."
                className="w-full pl-10 pr-4 py-2 bg-emerald-700 border border-emerald-600 rounded-lg text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                onFocus={() => setIsSearchExpanded(true)}
                onBlur={() => setIsSearchExpanded(false)}
              />
            </div>
          </div>
        </div>

        {/* Center Navigation Icons */}
        <div className=" ml-auto flex items-center justify-center space-x-4">
          <button
            onClick={() => handleNavigation("/friends")}
            className="p-2 text-emerald-200 hover:text-white hover:bg-emerald-700 rounded-lg transition-colors duration-200"
            title="Friends"
          >
            <Users className="h-6 w-6" />
          </button>

          <button
            onClick={() => handleNavigation("/my-recipes")}
            className="p-2 text-emerald-200 hover:text-white hover:bg-emerald-700 rounded-lg transition-colors duration-200"
            title="My Recipes"
          >
            <BookOpen className="h-6 w-6" />
          </button>

          <button
            onClick={() => handleNavigation("/notifications")}
            className="p-2 text-emerald-200 hover:text-white hover:bg-emerald-700 rounded-lg transition-colors duration-200 relative"
            title="Notifications"
          >
            <Bell className="h-6 w-6" />
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>

          <button
            onClick={() => handleNavigation("/explore")}
            className="p-2 text-emerald-200 hover:text-white hover:bg-emerald-700 rounded-lg transition-colors duration-200"
            title="Explore"
          >
            <Compass className="h-6 w-6" />
          </button>
        </div>

        {/* User Dropdown */}
        <div className="flex-shrink-0 ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 text-emerald-200 hover:text-white hover:bg-emerald-700 rounded-lg transition-colors duration-200">
                <User className="h-6 w-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-gray-50">
              <DropdownMenuItem
                className="hover:bg-gray-200"
                onClick={() => handleNavigation("/settings")}
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="hover:bg-gray-200"
                onClick={() => console.log("Logging out...")}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
