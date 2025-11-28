import TestimonialsCard from "../common/TestimonialsCard";
import imageEmily from "../../assets/image-emily.jpg";
import imageJennie from "../../assets/image-Jennie.jpg";
import imageThomas from "../../assets/image-thomas.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      img: imageEmily,
      alt: "Emily R.",
      text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      role: "Marketing Director",
    },
    {
      img: imageThomas,
      alt: "Thomas S.",
      text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      role: "Chief Operating Officer",
    },
    {
      img: imageJennie,
      alt: "Jennie F.",
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      role: "Business Owner",
    },
  ];

  return (
    <section
      id="testimonials"
      className="testimonials-section flex flex-col w-screen items-center
      lg:h-[777px] bg-White pb-10 lg:pb-0"
    >
      <h1 className="testimonials-title  uppercase font-family-Fraunces font-fraunces-900 tracking-[.25rem] text-Grey-400 
      lg:text-[1.2rem] lg:tracking-[.5rem] lg:mt-[166px] lg:mb-[85px]  
      mt-[69px] mb-7 ">
        Client testimonials
      </h1>
      <div className="testimonials-grid flex lg:flex-row flex-col ">
        {testimonialsData.map((t, index) => (
          <TestimonialsCard
            key={index}
            img={t.img}
            alt={t.alt}
            text={t.text}
            name={t.name}
            role={t.role}
          />
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
