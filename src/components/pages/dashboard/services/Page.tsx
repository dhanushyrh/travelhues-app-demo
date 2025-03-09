import { useState } from "react";
import PageHeader from "../../common/PageHeader";
import PageCategoriesFilter from "../../common/PageCategories";
import { ServiceCard } from "./ServiceCard";


const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("1:1 Call");

  return (
    <div className="p-6 bg-white w-screen min-h-screen">
      <PageHeader title="Services" />
      <PageCategoriesFilter 
        categories={["1:1 Call", "Webinar", "Priority DM", "Digital Product", "Package"]}
        onCategoryChange={() => {
          console.log(selectedCategory);
          setSelectedCategory
        }}
      />
      <div className="m-4 py-8 space-y-4">
        <ServiceCard title="Quick Chat" duration="30 mins" price="500" isPublic={true} views={5} bookings={0} earnings="₹0" conversion="0.00%"/>
        <ServiceCard title="LinkedIn Branding" duration="30 mins" price="500" isPublic={true} views={3} bookings={1} earnings="₹500" conversion="33.3%"/>
        <ServiceCard title="Discovery Call" duration="15 mins" price="0" isPublic={true} views={10} bookings={2} earnings="₹0" conversion="20.0%"/>
      </div>
    </div>
  );
};

export default ServicesPage;
