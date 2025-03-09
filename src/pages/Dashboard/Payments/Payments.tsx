import { DashboardLayout } from "@/components/layout/DashboardLayout";
import PaymentsPage from "@/components/pages/dashboard/payments/Page";



export const Payments = () => {
  return (
    <DashboardLayout>
      <PaymentsPage />
    </DashboardLayout>
  );
};
