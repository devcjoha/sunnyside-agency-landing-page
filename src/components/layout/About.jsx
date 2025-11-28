const About = () => {
  const textContainer =
    "flex flex-col items-center lg:items-left justify-center h-[437px] p-5 gap-7 lg:h-150 lg:p-32";
  const title =
    "font-family-Fraunces font-fraunces-900 lg:text-[2.5rem] text-[2rem] lg:text-left text-center text-Grey-950 leading-12 lg:pr-4";
  const paragraph =
    "text-center lg:text-left text-[1.1rem] leading-7 text-Grey-550 font-family-Barlow font-barlow-600";
  const anchor = "relative flex w-full justify-center lg:justify-start";
  const anchorText =
    "flex lg:pl-2 w-full justify-center lg:justify-start text-center font-family-Fraunces uppercase font-fraunces-900 text-[1rem] text-Grey-950 z-40";
  const anchorSpan =
    "absolute w-34 top-[.95rem] border-b-10 rounded-xl z-0 opacity-20 group-hover:opacity-100 transition duration-200";
  return (
    <>
      <section
        id="about"
        className="about-section w-screen h-auto grid
        lg:grid-cols-[1-2] lg:grid-rows-[1-2]
        grid-cols-1 grid-rows-[1-4]"
      >
        {/* EGG */}
        <article
          className="grid grid-cols-1 grid-rows-[1-2]
        lg:grid-cols-2 lg:row-1 col-1"
        >
          {/* Texto */}
          <div
            className={`about-egg-text ${textContainer} 
             order-2 lg:order-1`}
          >
            <h1 className={title}>Transform your brand</h1>
            <p className={paragraph}>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>

            <a href="#" className={`${anchor} group`}>
              <span className={anchorText}>Learn more</span>
              <span className={`border-Yellow-500 ${anchorSpan}`}></span>
            </a>
          </div>

          {/* Imagen */}
          <div
            className="about-egg-image 
            order-1 lg:order-2 lg:h-150 h-[312px]
            bg-cover bg-center bg-no-repeat 
            bg-[url('assets/images/mobile/image-transform.jpg')] 
            lg:bg-[url('assets/images/desktop/image-transform.jpg')]"
          ></div>
        </article>

        {/* CUP */}
        <article
          className="grid grid-cols-1 
          lg:grid-cols-2 lg:row-2 row-span-[2-4] "
        >
          {/* Imagen */}
          <div
            className="about-cup-image bg-cover bg-center bg-no-repeat 
          bg-[url('assets/images/mobile/image-stand-out.jpg')] lg:bg-[url('assets/images/desktop/image-stand-out.jpg')] 
          lg:order lg:h-150 h-[312px]"
          ></div>
          {/* Texto */}
          <div className={`about-text-cup ${textContainer}`}>
            <h1 className={title}>Stand out to the right audience</h1>
            <p className={paragraph}>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>

            <a href="#" className={`${anchor} group`}>
              <span className={anchorText}>Learn more</span>
              <span className={`border-Red-400 ${anchorSpan}`}></span>
            </a>
          </div>
        </article>
      </section>
    </>
  );
};
export default About;
