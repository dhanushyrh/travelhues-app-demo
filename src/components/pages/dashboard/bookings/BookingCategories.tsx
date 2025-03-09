import { useState } from "react";

const categories = [
  "1:1 Calls",
  "Package/Subscriptions",
  "Webinar",
  "Digital Product",
];

export const BookingCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("1:1 Calls");

  return (
    <div className="flex gap-4 p-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 border rounded-full text-sm ${
            activeCategory === category
              ? "bg-black text-white"
              : "border-gray-300 text-gray-600"
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
