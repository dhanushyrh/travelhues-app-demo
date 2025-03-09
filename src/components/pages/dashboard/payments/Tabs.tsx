import { useState } from "react";

export const PaymentTabs: React.FC<{ onTabChange: (tab: string) => void }> = ({
  onTabChange,
}) => {
  const tabs = ["Summary", "Transactions", "Withdrawals", "Incentives"];
  const [currentTab, setCurrentTab] = useState("Summary");
  return (
    <div className="flex gap-4 mt-4 pb-2 px-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 text-gray-700 border-1 border-gray-400 rounded-full hover:bg-gray-200 ${
            currentTab === tab
              ? "text-gray-700 border-2 border-gray-600"
              : "border-gray-300 text-gray-600"
          }`}
          onClick={() => {
            setCurrentTab(tab);
            onTabChange(currentTab);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
