const TestimonialsCard = ({ img, alt, text, name, role }) => (
  <article className="testimonial-card flex flex-col items-center justify-centertracking-wide leading-[30px] lg:w-[355px] w-screen 
  lg:p-5 p-10">
    <div className="testimonial-img w-18 h-18 lg:mb-[71px] mb-10">
      <img src={img} alt={alt} className="rounded-full" />
    </div>
    <p className="testimonial-text font-family-Barlow font-barlow-600 text-Grey-550 text-center mb-[30px] ">
      {text}
    </p>
    <h1 className="testimonial-name font-family-Fraunces font-fraunces-900 ">
      {name}
    </h1>
    <h2 className="testimonial-role font-family-Barlow text-Grey-400 font-medium text-[.8rem]">
      {role}
    </h2>
  </article>
);
export default TestimonialsCard;