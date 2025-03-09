import { useState } from "react";

interface CategoriesProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
}

const PageCategoriesFilter: React.FC<CategoriesProps> = ({
  categories,
  onCategoryChange,
}) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="flex gap-4 p-2">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 border font-semibold font-sora rounded-full text-sm ${
            activeCategory === category
              ? "border-2 border-gray-600 text-gray-600"
              : "border-gray-300 text-gray-600"
          }`}
          onClick={() => {
            setActiveCategory(category);
            onCategoryChange(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default PageCategoriesFilter;
