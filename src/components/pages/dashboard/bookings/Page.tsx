import { useState } from "react";
import { EmptyBookings } from "./EmptyBooking";
import PageHeader from "../../common/PageHeader";
import PageCategoriesFilter from "../../common/PageCategories";
import PageTabs from "../../common/PageTabs";

export const BookingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <div className="p-6 bg-white min-h-screen w-screen">
    <PageHeader title="Bookings" />
    <PageCategoriesFilter 
      categories={["1:1 Calls", "Package/Subscriptions", "Webinar", "Digital Product"]}
      onCategoryChange={() => console.log("Selected category:", activeTab)}
    />
    <PageTabs 
      tabs={["Upcoming", "Completed"]} 
      onTabChange={setActiveTab} 
    />
    <EmptyBookings />
  </div>
  );
};
