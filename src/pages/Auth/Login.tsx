import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard"); // Redirect on success
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <div className="p-10">
        <h1 className="text-4xl font-poppins font-bold text-primary">Login</h1>
        <p className="text-lg font-sora">Sign in to your account!!</p>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-primary text-white p-2 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
}
