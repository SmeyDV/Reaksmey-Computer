'use client';

import React from "react";

const categories = [
  { label: "Laptop" },
  { label: "Desktop" },
  { label: "Monitor" },
  { label: "PC Components" },
  { label: "Accessories" },
  { label: "Gaming Gear" },
];

const Aside = () => {
  return (
    <aside className="w-64 h-auto bg-gray-600 text-white p-4 mx-2 my-2 rounded-xl">
      <h2 className="text-xl font-bold mb-4">CATEGORIES</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded cursor-pointer"
          >
            <span className="text-white">{category.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
