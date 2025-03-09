import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { UserTable } from "@/components/pages/dashboard/table";


export const Dashboard = () => {
  return (
    <DashboardLayout>
      <UserTable />
    </DashboardLayout>
  );
};
