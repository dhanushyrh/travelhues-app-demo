import { useState } from "react";

interface TabsProps {
  tabs: string[];
  onTabChange: (tab: string) => void;
}

const PageTabs: React.FC<TabsProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="border-b mt-2">
      <div className="flex space-x-6 p-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sm font-semibold font-sora pb-2 ${
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

export default PageTabs;
