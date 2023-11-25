import React, { useState } from "react";
import News from "./News";
import Events from "./Events";

const NewsAndEvents = () => {
  const [show, setShow] = useState(true);
  const [bg, setBG] = useState("ebebeb"); // Enclose string in quotes

  const setBackground = () => {
    setShow(true);
    setBG("c0bcbc"); // Enclose string in quotes
  };

  const setBackgroundChange = () => {
    setShow(false);
    setBG("c0bcbc"); // Enclose string in quotes
  };

  return (
    <div className={`bg-[#${bg}] text-[#01416f] py-[5rem]`}>
      <div className="flex items-center justify-around">
        <h4
          onClick={setBackground}
          className={`text-2xl font-bold w-1/2 text-center hover:cursor-pointer hover:bg-[#c0bcbc] focus:bg-[#c0bcbc] focus:outline-none`}
        >
          News
        </h4>
        <h4
          onClick={setBackgroundChange}
          className={`text-2xl font-bold w-1/2 text-center hover:cursor-pointer hover:bg-[#c0bcbc] focus:bg-[#c0bcbc] focus:outline-none`}
        >
          Events
        </h4>
      </div>

      {show ? <News /> : <Events />}
    </div>
  );
};

export default NewsAndEvents;
