import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { BookingsPage } from "@/components/pages/dashboard/bookings/Page";


export const Bookings = () => {
  return (
    <DashboardLayout>
      <BookingsPage />
    </DashboardLayout>
  );
};
