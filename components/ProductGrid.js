import React from 'react';
import { categories } from '../data/products';
import CategorySection from './CategorySection';

export default function ProductGrid({ pageType }) {
  // Filter categories based on the pageType
  const filteredCategories = categories.filter((category) => {
    switch (pageType) {
      case 'CPU':
        return category.name === 'CPU';
      case 'GPU':
        return category.name === 'GPU';
      case 'Laptop':
        return category.name === 'Laptop';
      case 'Accessories':
        return category.name === 'Accessories';
      case 'GamingGears':
        return category.name === 'GamingGears';
      case 'Monitor':
        return category.name === 'Monitor';
      case 'Components':
        return category.name === 'Components';
      default:
        return true; 
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category) => (
          <CategorySection key={category.name} category={category} />
        ))
      ) : (
        <p className="text-center text-gray-500">No products found for this category.</p>
      )}
    </div>
  );
}
