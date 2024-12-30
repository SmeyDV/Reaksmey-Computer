'use client';
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
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-900 text-gray-100 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image
              src="/picture/logo.png"
              alt="Reaksmey Computer Logo"
              width={90}
              height={90}
              className="mr-2"
            />
          </div>
        </Link>

        {/* Search Box (hidden on mobile) */}
        <div className="hidden lg:flex flex-1 mx-4">
          <Input
            type="search"
            placeholder="Search products, services, deals..."
            className="w-full px-4 py-2 text-gray-900 bg-gray-50 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Hamburger Menu (Mobile Toggle) */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {/* Products Menu */}
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="hover:text-blue-400">Products</MenubarTrigger>
              <MenubarContent className="bg-gray-800 text-gray-100 border border-gray-700 shadow-lg">
                <Link href="/laptop" passHref>
                  <MenubarItem asChild>
                    <span className="hover:bg-blue-500 hover:text-white cursor-pointer">
                      Laptops
                    </span>
                  </MenubarItem>
                </Link>
                <Link href="/desktop" passHref>
                  <MenubarItem asChild>
                    <span className="hover:bg-blue-500 hover:text-white cursor-pointer">
                      Desktops
                    </span>
                  </MenubarItem>
                </Link>
                <Link href="/pccomponents" passHref>
                  <MenubarItem asChild>
                    <span className="hover:bg-blue-500 hover:text-white cursor-pointer">
                      PC Components
                    </span>
                  </MenubarItem>
                </Link>
                <MenubarSeparator />
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
              <MenubarTrigger className="hover:text-blue-400">Deals</MenubarTrigger>
              <MenubarContent className="bg-gray-800 text-gray-100 border border-gray-700 shadow-lg">
                <MenubarItem className="hover:bg-blue-500 hover:text-white">Daily Deals</MenubarItem>
                <MenubarItem className="hover:bg-blue-500 hover:text-white">Clearance</MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="hover:bg-blue-500 hover:text-white">Student Discounts</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            {/* Account Menu */}
            <MenubarMenu>
              <MenubarTrigger className="hover:text-blue-400">Account</MenubarTrigger>
              <MenubarContent className="bg-gray-800 text-gray-100 border border-gray-700 shadow-lg">
                <MenubarItem className="hover:bg-blue-500 hover:text-white">Sign In</MenubarItem>
                <MenubarItem className="hover:bg-blue-500 hover:text-white">Register</MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="hover:bg-blue-500 hover:text-white">Order History</MenubarItem>
                <MenubarItem className="hover:bg-blue-500 hover:text-white">Wishlist</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-800 text-gray-100 px-4 pb-4">
          {/* Search Box */}
          <div className="my-2">
            <Input
              type="search"
              placeholder="Search products, services, deals..."
              className="w-full px-4 py-2 text-gray-900 bg-gray-50 rounded-md"
            />
          </div>

          {/* Menu Items */}
          <ul className="space-y-2">
            <li>
              <Link href="/laptop" passHref>
                <span className="block py-2 px-4 hover:bg-blue-600 rounded">Laptops</span>
              </Link>
            </li>
            <li>
              <Link href="/desktop" passHref>
                <span className="block py-2 px-4 hover:bg-blue-600 rounded">Desktops</span>
              </Link>
            </li>
            <li>
              <Link href="/pccomponents" passHref>
                <span className="block py-2 px-4 hover:bg-blue-600 rounded">PC Components</span>
              </Link>
            </li>
            <li>
              <Link href="/accessories" passHref>
                <span className="block py-2 px-4 hover:bg-blue-600 rounded">Accessories</span>
              </Link>
            </li>
            <li>
              <span className="block py-2 px-4 hover:bg-blue-600 rounded">Daily Deals</span>
            </li>
            <li>
              <span className="block py-2 px-4 hover:bg-blue-600 rounded">Sign In</span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
