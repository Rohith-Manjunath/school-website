import React from "react";
import { Link } from "react-router-dom";
import { data3 } from "../data/info3";

const Events = () => {
  return (
    <div className="flex flex-wrap justify-around p-5 mt-10">
      {data3.map((item) => (
        <div
          key={item.id}
          className="card flex flex-col justify-between border border-slate-200 font-extrabold text-center h-[300px] mb-8 transition-transform transform hover:shadow-lg hover:cursor-pointer hover:-translate-y-2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/5"
        >
          <h3 className="underline underline-offset-8 p-4">{item.title}</h3>
          <div className="w-full p-4 bg-blue-600 text-white">
            <h4>{item.date}</h4>
            <h2 className="text-7xl">{item.number}</h2>
          </div>
          <span className="text-xs p-4">{item.time}</span>
        </div>
      ))}
    </div>
  );
};

export default Events;
