import React, { useState } from "react";
import News from "./News";
import Events from "./Events";

const NewsAndEvents = () => {
  const [show, setShow] = useState(true);

  const setBackground = () => {
    setShow(true);
  };

  const setBackgroundChange = () => {
    setShow(false);
  };

  return (
    <div className={`text-[#384ccf] py-[5rem] h-aut`}>
      <div className="flex items-center justify-around">
        <button
          onClick={setBackground}
          className={`text-2xl w-1/2 text-center hover:cursor-pointer ${
            show ? "bg-[#c0bcbc]" : ""
          } focus:bg-[#c0bcbc] focus:outline-slate-500 font-extrabold p-2 m-[1px] duration-200`}
        >
          NEWS
        </button>
        <button
          onClick={setBackgroundChange}
          className={`text-2xl w-1/2 text-center hover:cursor-pointer ${
            !show ? "bg-[#c0bcbc]" : ""
          } focus:bg-[#c0bcbc] focus:outline-slate-500 font-extrabold p-2 m-[1px] duration-200`}
        >
          EVENTS
        </button>
      </div>

      {show ? <News /> : <Events />}
    </div>
  );
};

export default NewsAndEvents;
