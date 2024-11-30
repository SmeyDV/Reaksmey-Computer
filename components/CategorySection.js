import ProductCard from "./ProductCard";

export default function CategorySection({ category }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">{category.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {category.children.map((brand) =>
          brand.children.models.map((model) => (
            <ProductCard key={model.modelId} model={model} />
          ))
        )}
      </div>
    </div>
  );
}
