import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import  {Home}  from "@/pages/Home";
import {About} from "@/pages/About";
import { Login } from "@/pages/Auth/Login";
import { Dashboard } from "@/pages/Dashboard/Dashboard";
import NotFound from "@/pages/404NotFound";
import { Home } from "@/pages/Home";
import Discover from "@/pages/Discover";
import { Stories } from "@/pages/Dashboard/Stories/Stories";
import { Bookings } from "@/pages/Dashboard/Bookings/Bookings";
import { DMessages } from "@/pages/Dashboard/DirectMessages";
import CreateItinerary from "@/pages/Dashboard/Stories/CreateItinerary";
import { Payments } from "@/pages/Dashboard/Payments/Payments";

import { ManageServicePage } from "@/pages/Dashboard/Services/ManageServicePage";
import { CreateServicePage } from "@/pages/Dashboard/Services/CreateService";
import { Services } from "@/pages/Dashboard/Services/Services";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/discover" element={<Discover />} />

        {/* Protected Routes */}
        <Route>
          <Route path="/dashboard">
            <Route index element={<Dashboard />} />
            <Route path="stories" element={<Stories />} />
            <Route path="stories/:id/create-itinerary" element={<CreateItinerary />} />
            <Route path="stories/create" element={<CreateServicePage />} />
            <Route path="stories/manage/:id" element={<ManageServicePage />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="services" element={<Services />} />
            <Route path="services/create" element={<CreateServicePage />} />
            <Route path="services/manage/:id" element={<ManageServicePage />} />
            <Route path="direct-messages" element={<DMessages/>} />
            <Route path="payments" element={<Payments/>} />
          </Route>
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
