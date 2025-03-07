import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

export function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  
  return (
    <nav className="p-4 flex justify-between items-center bg-background">
      <Link to="/" className="text-primary font-heading text-xl">
        TravelHues
      </Link>

      <div>
        <Link to="/" className="text-text-medium mr-4">Home</Link>
        <Link to="/about" className="text-text-medium mr-4">About</Link>
        <Link to="/login" className="text-primary">Login</Link>
      </div>
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <span className="text-text">{user?.name}</span>
            {user?.avatar && <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />}
            <button onClick={logout} className="bg-primary text-white px-3 py-1 rounded-md">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="text-primary">
            Login
          </Link>
        )}
      </div>
      <ThemeToggle />
    </nav>
  );
}
