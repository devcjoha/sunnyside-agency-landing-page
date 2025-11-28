import { useState } from "react";
import logo from "../../assets/logo.svg";
import iconHamburger from "../../assets/icon-hamburger.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className="header-container items-center lg:h-full h-20 lg:pt-0 
      grid row-1 grid-cols-2
      lg:grid-cols-4 lg:col-span-4
      relative z-50"
    >
      {/* LOGO */}
      <div
        className="hearder-logo-container gap-5 items-center flex flex-row  lg:w-full 
        lg:col-start-1 lg:col-end-2 lg:pl-8 lg:pt-0
        pl-7 pt-6"
      >
        <img src={logo} alt="logo-nav" className="header-image-logo lg:w-40" />
      </div>

      {/* NAV desktop */}
      <nav className="nav-desktop hidden lg:flex lg:col-start-3 lg:col-end-5 h-full">
        <ul
          className="navbar-desktop  gap-12  h-full w-full
          flex flex-row col-start-3 lg:col-end-5 
        items-center justify-center pl-34
        text-white opacity-90 font-family-Barlow font-barlow-600 text-[1.1rem]"
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#testimonials">Projects</a>
          </li>
          <li className="flex items-center justify-center w-[138px] h-14  bg-white rounded-[3rem]  lg:hover:bg-White/30">
            <a href="#contact" className="flex h-full w-full items-center justify-center font-family-Fraunces font-fraunces-700 text-size-16 text-black lg:hover:text-white uppercase ">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Button Hamburger */}
      <button
        data-collapse-toggle="navbar-hamburger"
        aria-controls="navbar-hamburger"
        aria-expanded="false"
        className="lg:hidden inline-flex items-center justify-self-end pr-7 pt-6 row-1 col-start-2"
        type="button"
        onClick={handleSideBar}
      >
        <img
          src={iconHamburger}
          alt="icon-hamburger"
          className={`icon-hamburger  ${isOpen ? "opacity-60" : ""}`}
        />
      </button>

      {/* SIDEBAR mobile */}
      <nav
        className={`nav-mobile  lg:hidden fixed top-28 left-[25px] h-full
    ${
      isOpen
        ? "translate-x-0"
        : "translate-x-full opacity-0 pointer-events-none"
    }
    transition-all duration-300 ease-in-out`}
      >
        {/* Triángulo llamado */}
        <div
          className="absolute -top-3 left-74 
          w-6 h-6
        bg-white
          rotate-90
         [clip-path:polygon(100%_0,0_0,100%_100%)] "
        />
        <div
          id="navbar-hamburger"
          className="w-80 h-78 absolute  
            border-t-10 border-t-transparent
            shadow-xl z-50 font-family-Barlow"
        >
          <ul
            className="navbar-mobile bg-white  flex flex-col gap-7 h-full 
        items-center justify-center
        text-gray-400 font-medium text-size-20"
          >
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </li>

            <li>
              <a href="#testimonials" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li className="flex items-center justify-center w-[138px] h-14 font-family-Fraunces font-fraunces-900 text-size-16 bg-Yellow-500 text-black  uppercase rounded-[3rem]">
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
