export interface User {
    id: string;
    name: string;
    email: string;
    role: "user" | "admin"; // Example roles
    avatar?: string; // Optional profile picture
    createdAt: string;
    updatedAt: string;
  }
  