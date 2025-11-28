const Services = () => {
  const textContainer =
    "flex flex-col items-center h-56 w-full lg:h-100 lg:p-48 p-6";
  const title =
    "font-family-Fraunces font-fraunces-900 lg:text-[1.8rem] text-[2rem] leading-12 lg:mb-5 mb-5 ";
  const paragraph =
    "text-center lg:text-[16px] text-[1rem] lg:tracking-normal tracking-tight leading-7 font-family-Barlow font-barlow-600";
  return (
    <>
      <section
        id="services"
        className="services-section w-screen h-auto grid
        lg:grid-cols-[1-2] lg:grid-rows-1
        grid-cols-1 grid-rows-[1-2]"
      >
        {/* CHERRY-ORANGE */}
        <article
          className="grid grid-cols-1 grid-rows-[1-2]
        lg:grid-cols-2 lg:rows-1 "
        >
          {/* Cherry */}
          <div
            className={`service bg-cover bg-center bg-no-repeat 
          bg-[url('assets/images/mobile/image-graphic-design.jpg')] lg:bg-[url('assets/images/desktop/image-graphic-design.jpg')]
          lg:h-full h-150 flex flex-col justify-end`}
          >
            <div className={`service-text ${textContainer} `}>
              <h1 className={`text-Green-800 ${title}`}>Graphic design</h1>
              <p className={`text-Green-800 ${paragraph}`}>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </div>

          {/* orange */}
          <div
            className="service-1-image bg-cover bg-center bg-no-repeat 
          bg-[url('assets/images/mobile/image-photography.jpg')] lg:bg-[url('assets/images/desktop/image-photography.jpg')] lg:h-150 h-150  flex flex-col justify-end"
          >
            <div className={`service-text ${textContainer} `}>
              <h1 className={`text-Blue-800 ${title}`}>Photography</h1>
              <p className={`text-Blue-800 ${paragraph}`}>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.{" "}
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Services;
