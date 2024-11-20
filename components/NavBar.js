import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Input } from "@/components/ui/input";
import React from "react";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-blue-900 text-gray-100 h-40">
      <div className="container mx-auto flex items-center py-2">
        {/* Logo */}
        <div className="flex items-center mr-4">
          <Image
            src="/picture/logo.png"
            alt="Reaksmey Computer Logo"
            width={150}
            height={150}
            className="mr-1"
          />
        </div>

        {/* Search Box */}
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search products, services, deals..."
            className="w-full px-4 py-2 text-gray-900 bg-gray-50 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Menubar */}
        <Menubar className="flex gap-4 ml-4">
          <MenubarMenu>
            <MenubarTrigger className="hover:text-blue-400 text-gray-100">Products</MenubarTrigger>
            <MenubarContent className="bg-gray-800 text-gray-100 border border-gray-700 shadow-lg">
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Laptops</MenubarItem>
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Desktops</MenubarItem>
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Components</MenubarItem>
              <MenubarSeparator className="border-gray-600" />
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Accessories</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="hover:text-blue-400 text-gray-100">Services</MenubarTrigger>
            <MenubarContent className="bg-gray-800 text-gray-100 border border-gray-700 shadow-lg">
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Repairs</MenubarItem>
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Custom Builds</MenubarItem>
              <MenubarSeparator className="border-gray-600" />
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Warranty</MenubarItem>
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Technical Support</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="hover:text-blue-400 text-gray-100">Deals</MenubarTrigger>
            <MenubarContent className="bg-gray-800 text-gray-100 border border-gray-700 shadow-lg">
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Daily Deals</MenubarItem>
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Clearance</MenubarItem>
              <MenubarSeparator className="border-gray-600" />
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Student Discounts</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="hover:text-blue-400 text-gray-100">Account</MenubarTrigger>
            <MenubarContent className="bg-gray-800 text-gray-100 border border-gray-700 shadow-lg">
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Sign In</MenubarItem>
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Register</MenubarItem>
              <MenubarSeparator className="border-gray-600" />
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Order History</MenubarItem>
              <MenubarItem className="hover:bg-blue-500 hover:text-white">Wishlist</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </nav>
  );
}
