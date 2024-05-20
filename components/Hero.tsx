import HeroSlide from "./HeroSlide";

const Hero = () => {
  return (
    <div
      className="z-20 h-[70svh] bg-hero bg-cover bg-left  text-white md:h-[80vh] lg:h-[100vh]  "
      id="home"
    >
      <div className="container mx-auto h-full">
        <HeroSlide />
      </div>
    </div>
  );
};
export default Hero;
