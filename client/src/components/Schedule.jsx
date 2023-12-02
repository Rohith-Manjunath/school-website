import React from "react";
import Image from "../assets/Background/bg3.svg";

const Schedule = () => {
  return (
    <div className="flex justify-center bg-primary text-white font-bold p-4 lg:p-12 text-center bg-cover"
    style={{
      backgroundImage: `url(${Image})`,
    }}>
      <h2 className="text-xl lg:text-2xl  lg:px-8 py-2 lg:py-3">
        Schedule a visit at Mysore International School
      </h2>
      <button className="bg-secondary text-primary px-6 lg:px-8 py-2 lg:py-3 rounded-md border border-solid border-white p-4 hover:bg-primary hover:text-secondary hover:scale-105 transition-all duration-300">
        Schedule a visit &gt;
      </button>
    </div>
  );
};

export default Schedule;
