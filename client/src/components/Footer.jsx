import Image from "../assets/images/logo-2-v2.png";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import { links } from "../data/footerLinks";
import { links2 } from "../data/footerLinks2";
import Image2 from "../assets/Background/Curve_Line.png";

const Footer = () => {
  return (
    <footer
      className="bg-primary text-white px-5 py-10 text-[12px] bg-cover"
      style={{ backgroundImage: `url(${Image2})` }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-around items-center gap-10">
        <div className="flex flex-col">
          <img
            src={Image}
            alt="website-logo"
            className="w-[5rem]"
            loading="lazy"
          />
        </div>
        <div className="w-full lg:w-1/4 flex flex-col items-start justify-start mt-5 lg:mt-0">
          <p className="text-justify">
            Mount Litera Zee School 92/1-3, HD Kote Road, Rayanakere Post, 5
            Minutes from Srirampura Ring Road, Mysore – 570008
          </p>

          <Link
            to="https://maps.app.goo.gl/8cqpSDwtusGQiUNp8"
            className="hover:translate-x-2 transition-all duration-200 mt-3 lg:mt-0"
          >
            Direction &gt;
          </Link>

          <div className="mt-5 flex flex-col">
            <p>PH : 0821 2971010</p>
            <p>Mobile : 8884 300 400</p>
            <Link
              to="https://maps.app.goo.gl/8cqpSDwtusGQiUNp8"
              className="hover:translate-x-2 transition-all duration-200 mt-3 lg:mt-0"
            >
              Call Us &gt;
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-auto flex flex-col gap-2 items-start justify-start mt-5 lg:mt-0">
          {links.map((link) => (
            <Link
              className="relative after:content-[''] after:h-[2px] after:scale-x-0 after:rounded-md after:bg-white after:block hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-center"
              key={link.id}
            >
              <span className="">{link.title}</span>
            </Link>
          ))}
        </div>

        <div className="w-full lg:w-auto flex flex-col gap-3 items-start justify-start mt-5 lg:mt-0">
          {links2.map((item) => (
            <Link
              className="relative after:content-[''] after:h-[2px] after:scale-x-0 after:rounded-md after:bg-white after:block hover:after:scale-x-100 after:transition-all after:duration-300 after:origin-center"
              key={item.id}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex mx-auto w-[80%] mt-5 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 text-start flex items-center justify-start gap-2">
          <FaRegCopyright />
          Mysore International School 2023 | All rights reserved | Legal Notice
        </div>
        <div className="w-full lg:w-1/2 text-end mt-3 lg:mt-0 ">
          Developed by webstor labs.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
