import { useState } from "react";

export const BookingTabs: React.FC<{ onTabChange: (tab: string) => void }> = ({
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <div className="border-b mt-2">
      <div className="flex space-x-6 p-4">
        {["Upcoming", "Completed"].map((tab) => (
          <button
            key={tab}
            className={`text-sm font-semibold pb-2 ${
              activeTab === tab ? "border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => {
              setActiveTab(tab);
              onTabChange(tab);
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
