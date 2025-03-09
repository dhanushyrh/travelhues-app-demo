import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StoryDashboard } from "@/components/pages/dashboard/stories/StoryDashboard";


export const StoryDetails = () => {
  return (
    <DashboardLayout>
      <StoryDashboard />
    </DashboardLayout>
  );
};
