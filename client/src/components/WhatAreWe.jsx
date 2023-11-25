import React from "react";
import Image from "../assets/images/Children.jpg";

const WhatAreWe = () => {
  return (
    <div className="flex bg-[#ebebeb] items-center justify-between gap-20 p-20 ">
      <div className="">
        <img src={Image} alt="children" className="w-[30rem] rounded-2xl" />
      </div>
      <div className="w-[60%] flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-5xl tracking-[2px] font-bold">Who We Are?</h2>
          <p className="tracking-[1px] font-semibold">
            At Mysore International School, we are a vibrant community dedicated
            to fostering academic excellence and holistic development.
          </p>
        </div>
        <p className="tracking-[1px] text-justify">
          At the heart of Mysore International School is a belief in the
          transformative power of education. Our approach is unique, focusing
          not only on imparting knowledge but also on nurturing essential life
          skills. We are a close-knit community that values collaboration,
          diversity, and personal growth. As we embrace a future-driven
          perspective, our students are not just prepared for exams but equipped
          for life's challenges.
        </p>
        <button className="text-white p-2 rounded-md font-semibold w-[20%] bg-[#01416f] tracking-wider">
          Know More
        </button>
      </div>
    </div>
  );
};

export default WhatAreWe;