import { createContext, useContext, useEffect, useState } from "react";
import api from "@/lib/api";
import { User } from "@/types/User";
import { logError } from "@/lib/logger";
 // Import User type

// Define types for authentication context
interface AuthContextType {
  user: any | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider Component to wrap the app
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);

  // Check for existing token on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUser();
    }
  }, []);

  // Fetch user details using the stored token
  const fetchUser = async () => {
    try {
      const response = await api.get<User>("/auth/me"); // API should return user data
      setUser(response.data);
    } catch (error){
        logError(error, "Auth Fetch User Error");
      logout(); // If token is invalid, log out
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
    } catch (error) {
        logError(error, "Auth Login Error");
      throw new Error("Invalid email or password");
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/login"; // Redirect to login
  };

  // Provide authentication state and functions
  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use authentication context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
