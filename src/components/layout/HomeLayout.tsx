import { Footer } from "../common/Footer";
import Headers from "../common/Header";
// import { Footer } from "@/components/Footer";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="bg-white text-black">
      <Headers />
        <main className="p-6">{children}</main>
      <Footer />
    </div>
  );
}
