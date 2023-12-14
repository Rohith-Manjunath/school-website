import Image from "../assets/images/Children.jpg";
import Button from "./Button";

const WhatAreWe = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#ebebeb] items-center justify-between gap-8 lg:p-20 p-10">
      <div className="lg:w-1/2">
        <img src={Image} alt="Students" className="w-full rounded-2xl" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-4xl max-md:text-2xl lg:text-5xl tracking-[2px] font-bold">
            Who We Are?
          </h2>
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
          for life&#39;s challenges.
        </p>
        <Button title="Know More" width="1/4" />
      </div>
    </div>
  );
};

export default WhatAreWe;
