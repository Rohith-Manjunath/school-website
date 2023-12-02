import React from "react";
import logoImage from "../assets/images/logo-2-v2.png";
import Image from "../assets/Background/ss1.svg";

const Welcome = () => {
  return (
    <div className="h-auto flex flex-col lg:flex-row justify-around mx-auto bg-[#01416f] p-5 text-white bg-cover"
    style={{
      backgroundImage: `url(${Image})`,
    }}>
      <div className="flex flex-col items-start justify-center gap-5 lg:w-[50%]">
        <div className="flex flex-col gap-1">
          <h2 className="text-white tracking-[2px] text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Welcome to <span className="school-name text-[#fff200]">MIS</span>
          </h2>

          <p className="text-[#fff200] text-2xl tracking-[2px] font-semibold">
            Empower. Excel. Educate
          </p>
        </div>
        <p className="tracking-[1px] text-justify">
          Welcome to Mysore International School, a place where every student's
          journey is crafted with care and purpose. Here, education goes beyond
          textbooks, shaping young minds into confident, curious learners. Our
          vibrant community of educators and students fosters an environment of
          collaboration and growth. As you embark on this educational adventure
          with us, you'll discover not just a school but a supportive family,
          dedicated to unlocking the full potential of each individual.
        </p>
        <button className="bg-red-500 font-bold tracking-wider p-2 rounded-md shadow-sm hover:cursor-pointer active:translate-x-1 active:translate-y-1 transition-all duration-100">
          Enroll today
        </button>
      </div>
      <div className="logo mt-5 lg:mt-0 hidden lg:flex">
        <img src={logoImage} alt="website-logo" className="w-[20rem]" />
      </div>
    </div>
  );
};

export default Welcome;
