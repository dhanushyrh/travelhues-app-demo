import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
}

export const StoryCard: React.FC<CardProps> = ({ title, subtitle, image }) => {
  return (
    <div className="w-48 bg-white shadow-sm rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-32 object-cover" />
      <div className="p-3">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};
