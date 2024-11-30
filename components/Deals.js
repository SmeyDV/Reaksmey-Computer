import React from 'react';
import ProductGrid from '@/components/ProductGrid';
import ProductCard from '@/components/ProductCard';
import { categories } from '../data/products';

export default function Deals() {
  // Helper function to extract all products excluding "CPU" and "GPU"
  const getAllProductsExcluding = (categories, excludedCategories) => {
    return categories
      .filter((category) => !excludedCategories.includes(category.name)) // Exclude specified categories
      .flatMap((category) =>
        category.children.flatMap((brand) =>
          brand.children.models.map((model) => ({
            ...model,
            category: category.name,
            brand: brand.BrandName,
          }))
        )
      );
  };

  // Function to select six random products
  const getRandomProducts = (products, count) => {
    return products.sort(() => Math.random() - 0.5).slice(0, count);
  };

  const excludedCategories = ['CPU', 'GPU'];
  const allProducts = getAllProductsExcluding(categories, excludedCategories);
  const randomProducts = getRandomProducts(allProducts, 6);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Today's Deals</h1>
      <ProductGrid>
        {randomProducts.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.img || '/placeholder.png'} // Provide a placeholder if img is empty
            description={product.description}
            category={product.category}
            brand={product.brand}
          />
        ))}
      </ProductGrid>
    </div>
  );
}
