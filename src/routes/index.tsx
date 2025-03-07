import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {Home}  from "@/pages/Home";
import {About} from "@/pages/About";
import { Login } from "@/pages/Auth/Login";
import { Dashboard } from "@/pages/Dashboard";
import { PrivateRoute } from "./ProtectedeRoutes";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  );
}
