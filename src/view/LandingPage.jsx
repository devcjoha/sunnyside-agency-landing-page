import Hero from "../components/layout/Hero";
import Services from "../components/layout/Services";
import Testimonials from "../components/layout/Testimonials";
import Footer from "../components/layout/Footer";
import About from "../components/layout/About";
import GridGallery from "../components/layout/GridGallery";

function LandingPage() {
  
  return (
    <>
      <section className="landing-container w-screen min-h-screen">
        <Hero/>
        <About/>
        <Services/>
        <Testimonials/>
        <GridGallery/>
        <Footer/>
        </section>
    </>
  );
}
export default LandingPage;
