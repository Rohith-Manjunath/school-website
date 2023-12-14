import { NavLink } from "react-router-dom";
import logoImage from "../assets/images/logo-2-v2.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleNavbar = () => {
    setShow(!show);
  };

  return (
    <header className="flex items-center justify-center bg-primary p-1 h-auto sticky z-20 top-0 max-md:h-[5rem]">
      {!show ? (
        <li
          className="font-bold text-[2rem] hidden text-white relative max-md:block max-md:self-start m-[2rem] hover:cursor-pointer "
          onClick={toggleNavbar}
        >
          <RxHamburgerMenu />
        </li>
      ) : (
        <li
          className="font-bold text-[2rem] hidden text-white relative max-md:block max-md:self-start m-[2rem] hover:cursor-pointer "
          onClick={toggleNavbar}
        >
          <IoMdClose />
        </li>
      )}
      <nav className="flex items-center justify-around w-full max-md:h-full max-md:justify-center max-md:items-center ">
        <ul
          className={`flex items-center justify-around w-full max-md:flex-row max-md:h-screen max-md:${
            show ? "translate-x-[-10rem]" : "-translate-x-full"
          } transition-all duration-500 max-md:absolute max-md:top-[5rem] max-md:left-0 max-md:bg-primary max-md:w-[100vw] max-md:flex-col`}
        >
          <li className="font-bold text-[1.1rem] text-white relative">
            <NavLink
              to="/"
              className="max-md:text-[0.8rem] tracking-[1px] relative after:content-[''] after:h-[2px] after:scale-x-0 after:rounded-md after:bg-white after:block hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-center"
            >
              Home
            </NavLink>
          </li>
          <li className="font-bold text-[1.1rem] text-white relative">
            <NavLink
              to="/admissions"
              className="max-md:text-[0.8rem] tracking-[1px] relative after:content-[''] after:h-[2px] after:scale-x-0 after:rounded-md after:bg-white after:block hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-center"
            >
              Admissions
            </NavLink>
          </li>
          <li className="font-bold text-[1.1rem] text-white relative">
            <NavLink
              to="/academics"
              className="max-md:text-[0.8rem] tracking-[1px] relative after:content-[''] after:h-[2px] after:scale-x-0 after:rounded-md after:bg-white after:block hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-center"
            >
              Academics
            </NavLink>
          </li>
          <li className="font-semibold text-white max-md:hidden">
            <img
              src={logoImage}
              className="transition-all duration-500 w-[7rem] py-2"
              alt="website-logo"
              loading="lazy"
            />
          </li>
          <li className="font-bold text-[1.1rem] text-white relative">
            <NavLink
              to="/our-team"
              className="max-md:text-[0.8rem] tracking-[1px] relative after:content-[''] after:h-[2px] after:scale-x-0 after:rounded-md after:bg-white after:block hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-center"
            >
              OurTeam
            </NavLink>
          </li>
          <li className="font-bold text-[1.1rem] text-white relative">
            <NavLink
              to="/"
              className="max-md:text-[0.8rem] tracking-[1px] relative after:content-[''] after:h-[2px] after:scale-x-0 after:rounded-md after:bg-white after:block hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-center"
            >
              About Us
            </NavLink>
          </li>
          <li className="font-bold text-[1.1rem] text-white relative">
            <NavLink
              to="/"
              className="max-md:text-[0.8rem] tracking-[1px] relative after:content-[''] after:h-[2px] after:scale-x-0 after:rounded-md after:bg-white after:block hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-center"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
