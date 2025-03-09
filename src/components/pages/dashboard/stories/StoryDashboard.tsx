import { useState } from "react";
import { StoryGrid } from "./StoryGrid";
import { StoryHeader } from "./StoryHeader";
import { StoryTabs } from "./StoryTabs";
import PageHeader from "../../common/PageHeader";

export const StoryDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Tasks");
    console.log(activeTab)
    return (
      <div className="p-6 bg-white min-h-screen w-screen">
        <PageHeader title="Stories" />
        <StoryHeader />
        <StoryTabs onTabChange={setActiveTab} />
        <StoryGrid />
      </div>
    );
  };
  