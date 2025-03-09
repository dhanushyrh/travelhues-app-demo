import React from "react";
import { NavLink } from "react-router-dom";
import { 
  HomeIcon, UsersIcon, CalendarIcon, ChartPieIcon, PuzzlePieceIcon, TrophyIcon, CurrencyDollarIcon, ForwardIcon
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Stories", href: "/dashboard/stories", icon: ForwardIcon },
  { name: "Services", href: "/dashboard/services", icon: PuzzlePieceIcon },
  { name: "Bookings", href: "/dashboard/bookings", icon: CalendarIcon },
  { name: "Payments", href: "/dashboard/payments", icon: CurrencyDollarIcon },
  { name: "Analytics", href: "/dashboard/reports", icon: ChartPieIcon },
  { name: "Achievements", href: "/dashboard/achievements", icon: TrophyIcon },
  { name: "Profile", href: "/dashboard/profile", icon: UsersIcon },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md flex flex-col">
        <div className="flex items-center px-6 py-5">
          <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=rose&shade=600" alt="TravelHues" className="h-8 w-auto" />
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-4 mt-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition ${
                  isActive ? "bg-gray-200 text-gray-900 font-semibold" : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* User Profile */}
        <div className="border-t px-4 py-4 flex items-center space-x-3">
          <img className="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/10.jpg" alt="User" />
          <span className="text-gray-900 font-medium">Tom Cook</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-6 overflow-y-auto">
        <div className=" border-gray-300 rounded-lg h-full flex  ">
          {children}
        </div>
      </div>
    </div>
  );
}
