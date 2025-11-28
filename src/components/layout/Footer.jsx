import Logo from "../../assets/logoSunny.svg?react";
import Facebook from "../../assets/icon-facebook.svg?react";
import Instagram from "../../assets/icon-instagram.svg?react";
import Pinterest from "../../assets/icon-pinterest.svg?react";
import Twitter from "../../assets/icon-twitter.svg?react";

const socialNetStyle = "fill-Green-800 hover:fill-White";
const Footer = () => {
  return (
    <footer id="contact" className="bg-footer text-white ">
      <article className="h-[350px] flex flex-col items-center text-Green-800">
        <Logo
          className="w-40 h-auto fill-current text-green-800 
        lg:mt-20 mt-[73px]
        "
        />
        <nav className="lg:flex flex-col mt-10">
          <ul className="flex flex-row gap-12 items-center justify-center text-[1.1rem] font-barlow-600 opacity-90 text-Green-800">
            <li>
              <a href="#about" className="hover:text-White">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-White">Services</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-White">Projects</a>
            </li>
          </ul>
          <ul className="flex flex-row gap-7 items-center justify-center mt-21">
            <li>
              <a href="#">
              <Facebook className={socialNetStyle} alt="icon-facebook"/>
              </a>
            </li>
            <li>
              <a href="#">
               <Instagram className={socialNetStyle} alt="icon-instagram"/>
              </a>
            </li>
            <li>
              <a href="#">
                <Twitter className={socialNetStyle} alt="icon-twitter"/>
              </a>
            </li>
            <li>
              <a href="#">
                <Pinterest className={socialNetStyle} alt="icon-pinterest" />
              </a>
            </li>
          </ul>
        </nav>
      </article>
      <div className="attribution flex flex-wrap items-center justify-center gap-2 w-full text-center text-green-800 pb-6">
  <span>
    Challenge by{" "}
    <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      rel="noreferrer"
      className="font-semibold underline hover:text-White transition-colors"
    >
      Frontend Mentor
    </a>
    .
  </span>
  <span>
    Coded by{" "}
    <a
      href="https://github.com/devcjoha"
      target="_blank"
      rel="noreferrer"
      className="font-semibold underline hover:text-White transition-colors"
    >
      Carla Johanna
    </a>
    .
  </span>
</div>
    </footer>
  );
};

export default Footer;