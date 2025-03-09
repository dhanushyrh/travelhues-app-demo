import React, { useState } from "react";

const tabs = [
  { name: "Tasks", count: 201 },
  { name: "Itineraries", count: 2 },
  { name: "Travel Notes", count: 2 },
];

export const StoryTabs: React.FC<{ onTabChange: (tab: string) => void }> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("Tasks");

  return (
    <div className="border-b mt-6">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`py-2 text-sm font-semibold ${activeTab === tab.name ? "border-b-2 border-black" : "text-gray-500"}`}
            onClick={() => {
              setActiveTab(tab.name);
              onTabChange(tab.name);
            }}
          >
            {tab.name} ({tab.count})
          </button>
        ))}
      </div>
    </div>
  );
};
