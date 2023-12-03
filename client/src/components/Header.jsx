import { NavLink } from "react-router-dom";
import logoImage from "../assets/images/logo-2-v2.png";

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-[#084463] p-1 h-auto sticky z-20 top-0">
      <nav className="flex items-center justify-around w-full">
        <ul className="flex items-center justify-around w-full">
          <li className="font-bold text-[1.1rem] text-white relative">
            <NavLink
              to="/"
              className="tracking-[1px] relative after:content-[''] after:h-[2px] after:scale-x-0 after:rounded-md after:bg-white after:block hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-center"
            >
              Home
            </NavLink>
          </li>
          <li className="font-bold text-[1.1rem] text-white relative">
            <NavLink
              to="/admissions"
              className="tracking-[1px] relative after:content-[''] after:h-[2px] after:scale-x-0 after:rounded-md after:bg-white after:block hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-center"
            >
              Admissions
            </NavLink>
          </li>
          <li className="font-bold text-[1.1rem] text-white relative">
            <NavLink
              to="/academics"
              className="tracking-[1px] relative after:content-[''] after:h-[2px] after:scale-x-0 after:rounded-md after:bg-white after:block hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-center"
            >
              Academics
            </NavLink>
          </li>
          <li className="font-semibold text-white">
            <img
              src={logoImage}
              className="transition-all duration-500 w-[8rem]"
              alt="website-logo"
              loading="lazy"
            />
          </li>
          <li className="font-bold text-[1.1rem] text-white relative">
            <NavLink
              to="/our-team"
              className="tracking-[1px] relative after:content-[''] after:h-[2px] after:scale-x-0 after:rounded-md after:bg-white after:block hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-center"
            >
              OurTeam
            </NavLink>
          </li>
          <li className="font-bold text-[1.1rem] text-white relative">
            <NavLink
              to="/"
              className="tracking-[1px] relative after:content-[''] after:h-[2px] after:scale-x-0 after:rounded-md after:bg-white after:block hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-center"
            >
              About Us
            </NavLink>
          </li>
          <li className="font-bold text-[1.1rem] text-white relative">
            <NavLink
              to="/"
              className="tracking-[1px] relative after:content-[''] after:h-[2px] after:scale-x-0 after:rounded-md after:bg-white after:block hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-center"
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
