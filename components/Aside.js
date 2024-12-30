'use client';

import React from 'react';
import Link from 'next/link';

const categories = [
  { label: 'Laptop', path: '/laptop' },
  { label: 'Desktop', path: '/desktop' },
  { label: 'Monitor', path: '/monitor' },
  { label: 'PC Components', path: '/pccomponents' },
  { label: 'Accessories', path: '/accessories' },
  { label: 'Gaming Gear', path: '/gaminggears' },
];

const Aside = () => {
  return (
    <aside className="w-64 h-auto bg-gray-600 text-white p-4 mx-2 my-2 rounded-xl">
      <h2 className="text-xl font-bold mb-4">CATEGORIES</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <Link href={category.path}>
              <span className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded cursor-pointer">
                {category.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
