import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl text-primary font-bold font-sora ">
        Hello world!
      </h1>
      <p className="read-the-docs color-text font-poppins text-text-medium">
        Welcome to TravelHues
      </p>
      <Button
        onClick={() => toast.success("Test Success")}
        className="bg-red-500 text-white p-2 rounded-md"
      >
        Toast
      </Button>
    </div>
  );
}
