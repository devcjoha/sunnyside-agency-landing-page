import Header from "../common/Header";
import iconArrow from "../../assets/icon-arrow-down.svg";
const Hero = () => {
  return (
    <section
      className="hero-container  w-screen lg:h-[799px] h-132 bg-cover bg-center bg-no-repeat bg-[url('assets/images/mobile/image-header.jpg')] md:bg-[url('assets/images/desktop/image-header.jpg')]
        grid 
        lg:grid-cols-[1fr_1fr_1fr_1fr]
        lg:grid-rows-[7.9rem_4.85rem_6.6rem_3rem_7.2rem_1fr] 
        grid-cols-[1fr] grid-rows-[5.6rem_3.125rem_6.25rem_3.125rem_6.9rem_1fr] "
    >
      <Header />
      {/* TITLE */}
      <div className="hero-title-container leading-13 lg:col-span-full row-3 gap-y-5 ">
        <h1 className="hero-title text-white font-family-Fraunces font-fraunces-900 lg:text-[3.7rem] text-[2.6rem] lg:tracking-[.6rem] tracking-[.4rem] text-center">
          WE ARE CREATIVES
        </h1>
      </div>
      {/*ARROW */}
      <div
        className="hero-arrow-container flex w-full h-full justify-center
        lg:col-start-2 lg:col-end-4 
        row-5
       "
      >
        <img
          src={iconArrow}
          alt="hero-icon-arrow "
          className="icon-arrow col-span-[2-4]"
        />
      </div>
    </section>
  );
};

export default Hero;
