import React from 'react';
import { categories } from '../data/products';
import CategorySection from './CategorySection';

export default function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      {categories.map((category) => (
        <CategorySection key={category.name} category={category} />
      ))}
    </div>
  );
}
