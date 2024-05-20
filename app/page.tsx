import About from "@/components/About";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Blog />
      <Testimonials />
    </main>
  );
}
