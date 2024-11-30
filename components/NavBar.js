import Link from "next/link";
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
    <nav className="bg-blue-900 text-gray-100 h-32 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center py-2 mb-10">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="flex items-center mr-4 cursor-pointer">
            <Image
              src="/picture/logo.png"
              alt="Reaksmey Computer Logo"
              width={150}
              height={150}
              className="mr-1"
            />
          </div>
        </Link>

        {/* Search Box */}
        <div className="flex-1 w-full sm:w-auto mt-4 sm:mt-0">
          <Input
            type="search"
            placeholder="Search products, services, deals..."
            className="w-full px-4 py-2 text-gray-900 bg-gray-50 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Menubar */}
        <Menubar className="flex gap-4 ml-4">
          {/* Products Menu */}
          <MenubarMenu>
            <MenubarTrigger className="hover:text-blue-400 text-gray-100">
              Products
            </MenubarTrigger>
            <MenubarContent className="bg-gray-800 text-gray-100 border border-gray-700 shadow-lg">
              {/* Laptops */}
              <Link href="/laptop" passHref>
                <MenubarItem asChild>
                  <span className="hover:bg-blue-500 hover:text-white cursor-pointer">
                    Laptops
                  </span>
                </MenubarItem>
              </Link>

              {/* Desktops */}
              <Link href="/desktop" passHref>
                <MenubarItem asChild>
                  <span className="hover:bg-blue-500 hover:text-white cursor-pointer">
                    Desktops
                  </span>
                </MenubarItem>
              </Link>

              {/* Components */}
              <Link href="/components" passHref>
                <MenubarItem asChild>
                  <span className="hover:bg-blue-500 hover:text-white cursor-pointer">
                    Components
                  </span>
                </MenubarItem>
              </Link>

              <MenubarSeparator className="border-gray-600" />

              {/* Accessories */}
              <Link href="/accessories" passHref>
                <MenubarItem asChild>
                  <span className="hover:bg-blue-500 hover:text-white cursor-pointer">
                    Accessories
                  </span>
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>

          {/* Deals Menu */}
          <MenubarMenu>
            <MenubarTrigger className="hover:text-blue-400 text-gray-100">
              Deals
            </MenubarTrigger>
            <MenubarContent className="bg-gray-800 text-gray-100 border border-gray-700 shadow-lg">
              <MenubarItem className="hover:bg-blue-500 hover:text-white">
                Daily Deals
              </MenubarItem>
              <MenubarItem className="hover:bg-blue-500 hover:text-white">
                Clearance
              </MenubarItem>
              <MenubarSeparator className="border-gray-600" />
              <MenubarItem className="hover:bg-blue-500 hover:text-white">
                Student Discounts
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* Account Menu */}
          <MenubarMenu>
            <MenubarTrigger className="hover:text-blue-400 text-gray-100">
              Account
            </MenubarTrigger>
            <MenubarContent className="bg-gray-800 text-gray-100 border border-gray-700 shadow-lg">
              <MenubarItem className="hover:bg-blue-500 hover:text-white">
                Sign In
              </MenubarItem>
              <MenubarItem className="hover:bg-blue-500 hover:text-white">
                Register
              </MenubarItem>
              <MenubarSeparator className="border-gray-600" />
              <MenubarItem className="hover:bg-blue-500 hover:text-white">
                Order History
              </MenubarItem>
              <MenubarItem className="hover:bg-blue-500 hover:text-white">
                Wishlist
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </nav>
  );
}
