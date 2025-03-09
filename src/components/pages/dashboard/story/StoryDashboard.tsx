import { useState } from "react";
import { StoryGrid } from "./StoryGrid";
import { StoryHeader } from "./StoryHeader";
import { StoryTabs } from "./StoryTabs";

export const StoryDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Tasks");
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <StoryHeader />
        <StoryTabs onTabChange={setActiveTab} />
        <StoryGrid />
      </div>
    );
  };
  