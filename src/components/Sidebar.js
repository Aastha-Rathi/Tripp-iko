import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, MagnifyingGlassIcon, PlusCircleIcon, UserIcon, InformationCircleIcon, Cog6ToothIcon, ChatBubbleLeftRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", path: "/home", icon: HomeIcon },
  { name: "Explore", path: "/explore", icon: MagnifyingGlassIcon },
  { name: "Create", path: "/create", icon: PlusCircleIcon },
  { name: "Profile", path: "/profile", icon: UserIcon },
  { name: "About", path: "/about", icon: InformationCircleIcon },
  { name: "Contact Us", path: "/contact", icon: ChatBubbleLeftRightIcon },
  { name: "Settings", path: "/settings", icon: Cog6ToothIcon },
  { name: "Live Location", path: "/live-location", icon: MapPinIcon },
];

const Sidebar = () => (
  <aside className="w-20 md:w-64 bg-trippiko-dark text-trippiko-light flex flex-col items-center py-6 min-h-screen">
    <img src={logo} alt="Trippiko Logo" className="w-12 h-12 mb-8" />
    <nav className="flex flex-col gap-4 w-full">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
              isActive ? "bg-trippiko-accent text-trippiko-dark font-bold" : "hover:bg-trippiko-card"
            }`
          }
        >
          <item.icon className="w-6 h-6" />
          <span className="hidden md:inline">{item.name}</span>
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Sidebar;