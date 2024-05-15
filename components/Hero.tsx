import HeroSlide from "./HeroSlide";

const Hero = () => {
  return (
    <div
      className="z-20 h-[100svh] bg-hero bg-cover bg-left  text-white md:h-[800px] lg:h-[800px]  "
      id="home"
    >
      <div className="container mx-auto h-full">
        <HeroSlide />
      </div>
    </div>
  );
};
export default Hero;
