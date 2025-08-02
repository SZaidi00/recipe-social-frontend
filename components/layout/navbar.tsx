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
  Airplay,
  X
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
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleMobileSearchToggle = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  const handleMobileSearchClose = () => {
    setIsMobileSearchOpen(false);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center h-16">
        {/* Mobile Search Overlay */}
        {isMobileSearchOpen && (
          <div className="flex items-center w-full md:hidden">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-emerald-300" />
              </div>
              <input
                id="mobile-search-bar"
                type="text"
                placeholder="Search for recipes or users"
                className="w-full pl-10 pr-4 py-2 bg-emerald-700 border border-emerald-600 rounded-4xl text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                autoFocus
              />
            </div>
            <button
              onClick={handleMobileSearchClose}
              className="ml-3 p-2 text-emerald-200 hover:text-white hover:bg-emerald-700 rounded-lg transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Normal Navbar Content */}
        {!isMobileSearchOpen && (
          <>
            {/* Left section with Logo and Search */}
            <div className="flex items-center space-x-4">
              {/* Logo/Brand - Show icon only on mobile, both on desktop */}
              <div className="flex items-center space-x-2">
                <Airplay className="h-5 w-5" />
                <button
                  onClick={() => handleNavigation("/feed")}
                  className="hidden sm:block text-white text-xl font-bold hover:cursor-pointer"
                >
                  Tarkeeb
                </button>
              </div>

              {/* Desktop Search Bar */}
              <div className="relative hidden md:block">
                <div
                  className={`relative transition-all duration-300 ${
                    isSearchExpanded ? "w-80" : "w-auto"
                  }`}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-emerald-300" />
                  </div>
                  <input
                    id="search-bar"
                    type="text"
                    placeholder={
                      isSearchExpanded ? "Search for recipes or users" : "Search"
                    }
                    className="w-full pl-10 pr-4 py-2 bg-emerald-700 border border-emerald-600 rounded-4xl text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    onFocus={() => setIsSearchExpanded(true)}
                    onBlur={() => setIsSearchExpanded(false)}
                  />
                </div>
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-1 sm:space-x-2 ml-auto">
              {/* Mobile Search Icon */}
              <button
                onClick={handleMobileSearchToggle}
                className="md:hidden p-2 hover:cursor-pointer text-emerald-200 hover:text-white hover:bg-emerald-700 rounded-lg transition-colors duration-200"
                title="Search"
              >
                <Search className="h-6 w-6" />
              </button>

              <button
                id="friends-nav"
                onClick={() => handleNavigation("/friends")}
                className="p-2 hover:cursor-pointer text-emerald-200 hover:text-white hover:bg-emerald-700 rounded-lg transition-colors duration-200"
                title="Friends"
              >
                <Users className="h-6 w-6" />
              </button>

              <button
                id="my-recipe-nav"
                onClick={() => handleNavigation("/my-recipes")}
                className="p-2 hover:cursor-pointer text-emerald-200 hover:text-white hover:bg-emerald-700 rounded-lg transition-colors duration-200"
                title="My Recipes"
              >
                <BookOpen className="h-6 w-6" />
              </button>

              <button
                id="notifications-nav"
                onClick={() => handleNavigation("/notifications")}
                className="p-2 hover:cursor-pointer text-emerald-200 hover:text-white hover:bg-emerald-700 rounded-lg transition-colors duration-200 relative"
                title="Notifications"
              >
                <Bell className="h-6 w-6" />
                {/* Notification badge */}
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>

              <button
                id="explore-nav"
                onClick={() => handleNavigation("/explore")}
                className="p-2 hover:cursor-pointer text-emerald-200 hover:text-white hover:bg-emerald-700 rounded-lg transition-colors duration-200"
                title="Explore"
              >
                <Compass className="h-6 w-6" />
              </button>

              {/* User Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    id="user-icon-nav"
                    className="p-2 text-emerald-200 hover:text-white hover:bg-emerald-700 rounded-lg transition-colors duration-200 outline-0"
                  >
                    <User className="h-6 w-6" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-gray-50">
                  <DropdownMenuItem
                    className="hover:bg-gray-200"
                    onClick={() => handleNavigation("/settings")}
                    id="settings-dropdown"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="hover:bg-gray-200"
                    onClick={() => console.log("Logging out...")}
                    id="logout-dropdown"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </>
        )}
      </div>
    </div>
  );
}