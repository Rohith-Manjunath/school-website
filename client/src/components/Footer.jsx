import React from "react";
import Image from "../assets/images/logo-2-v2.png";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import { links } from "../data/footerLinks";
import { links2 } from "../data/footerLinks2";
import Image2 from "../assets/Background/Curve_Line.svg";

const Footer = () => {
  return (
    <footer
      className="bg-primary text-white px-5 py-10 text-[12px] bg-cover"
      style={{
        backgroundImage: `url(${Image2})`,
      }}
    >
      <div className="flex justify-around mx-auto gap-10">
        <div className="w-1/8 flex flex-col">
          <img src={Image} alt="logo" className="w-[5rem]" />
        </div>
        <div className="w-1/4 flex flex-col items-start justify-start">
          <p className="text-justify">
            Mount Litera Zee School 92/1-3, HD Kote Road, Rayanakere Post, 5
            Minutes from Srirampura Ring Road, Mysore – 570008
          </p>

          <Link
            to="https://maps.app.goo.gl/8cqpSDwtusGQiUNp8"
            className="hover:translate-x-2 transition-all duration-200"
          >
            Direction >
          </Link>

          <div className="mt-5 flex flex-col gap-3">
            <p>PH : 0821 2971010</p>
            <p>Mobile : 8884 300 400</p>
          </div>
        </div>
        <div className="w-auto flex flex-col gap-2 items-start justify-start">
          {links.map((link, i) => (
            <Link className="relative" key={i}>
              <span className="">{link}</span>
            </Link>
          ))}
        </div>

        <div className="w-auto flex flex-col gap-3 items-start justify-start">
          {links2.map((item, i) => (
            <Link className="relative" key={item.id}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex mx-auto w-[80%] mt-5">
        <div className="w-1/2 text-start flex items-center justify-start gap-2">
          <FaRegCopyright />
          Mysore International School 2023 | All rights reserved | Legal Notice
        </div>
        <div className="w-1/2 text-end">Developed by webstor labs.</div>
      </div>
    </footer>
  );
};

export default Footer;
