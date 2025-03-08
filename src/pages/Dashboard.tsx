import Features from "@/components/pages/home/Features";
import GridWall from "@/components/pages/home/GridWall";
import Hero from "@/components/pages/home/Hero";
import Stats from "@/components/pages/home/Stats";
import Testimonials from "@/components/pages/home/Testimonial";

export const Dashboard = () => {
  return (
    <>
      <section id="Hero" className="Hero">
        {/* Hero Section */}
        <Hero />
      </section>
      <section id="Feature">
        {/* Feature Section */}
        <Features />
      </section>
      <section>
        <GridWall />
      </section>
        <Stats />
        <Testimonials />
    </>
  );
};
