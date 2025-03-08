import { HomeLayout } from "@/components/layout/HomeLayout";
import Products from "@/components/pages/discover/Products";
import Features from "@/components/pages/home/Features";
import GridWall from "@/components/pages/home/GridWall";
import Stats from "@/components/pages/home/Stats";
import { Hero } from "@/components/pages/home/Test";
import Testimonials from "@/components/pages/home/Testimonial";

export const Home = () => {
  return (
    <HomeLayout>
      <section id="Hero" className="Hero">
        {/* Hero Section */}
        <Hero />
      </section>
      <section id="Feature">
        {/* Feature Section */}
        <Features />
      </section>
      <Products />
      <Products />
      <section>
        <GridWall />
        <Stats />
        <Testimonials />

      </section>
    </HomeLayout>
  );
};