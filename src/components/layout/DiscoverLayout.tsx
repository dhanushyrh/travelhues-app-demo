import Headers from "../common/Header";

interface DiscoverLayoutProps {
  children: React.ReactNode;
}

export function DiscoverLayout({ children }: DiscoverLayoutProps) {
  return (
    <div className=" text-white min-h-screen min-w-full">
      <Headers />
      
      <main className="p-6">{children}</main>
    </div>
  );
}

