import React from "react";
import { NavLink } from "react-router-dom";
import { 
  HomeIcon, UsersIcon, CalendarIcon, DocumentIcon, ChartPieIcon, PuzzlePieceIcon
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Stories", href: "/dashboard/stories", icon: UsersIcon },
  { name: "Services", href: "/dashboard/services", icon: PuzzlePieceIcon },
  { name: "Bookings", href: "/dashboard/bookings", icon: CalendarIcon },
  { name: "Payments", href: "/dashboard/payments", icon: DocumentIcon },
  { name: "Reports", href: "/dashboard/reports", icon: ChartPieIcon },
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
      <div className="flex-1 p-6 overflow-y-auto">
        <div className=" border-gray-300 rounded-lg h-full flex  ">
          {children}
        </div>
      </div>
    </div>
  );
}
