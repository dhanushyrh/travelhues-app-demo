import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import  {Home}  from "@/pages/Home";
import {About} from "@/pages/About";
import { Login } from "@/pages/Auth/Login";
import { PrivateRoute } from "./ProtectedeRoutes";
import { Dashboard } from "@/pages/Dashboard";
import NotFound from "@/pages/404NotFound";
import { Home } from "@/pages/Home";
import Discover from "@/pages/Discover";

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
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
