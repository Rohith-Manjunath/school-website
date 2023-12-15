import React from "react";
import { Link } from "react-router-dom";
import { data3 } from "../data/info3";

const Events = () => {
  return (
    <div className="flex flex-wrap justify-around p-5 mt-10 bg-[#d3d3d3]">
      {data3.map((item) => (
        <div
          key={item.id}
          className="card flex flex-col h-[24rem] justify-around border border-slate-200 font-extrabold text-center mb-8 transition-transform transform hover:shadow-lg hover:cursor-pointer hover:-translate-y-2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/5 rounded-md bg-white"
        >
          <h3 className="underline underline-offset-8 p-4 text-[#580b57]">
            {item.title}
          </h3>
          <div className="w-full p-10 bg-[#580b57] text-white">
            <h4>{item.date}</h4>
            <h2 className="text-7xl">{item.number}</h2>
          </div>
          <span className="text-xs p-2 text-[#580b57]">{item.time}</span>
        </div>
      ))}
    </div>
  );
};

export default Events;
