import React from "react";
import { data } from "../data/info";

const Reason = () => {
  return (
    <div className="bg-[#01416f] flex flex-col items-start justify-center gap-1 p-10">
      <p className="text-white text-xl pl-6">Reason to pursue</p>
      <h2 className="text-4xl text-[#fff200] font-semibold tracking-wider pl-6">
        MYSURU INTERNATIONAL SCHOOL
      </h2>
      <div className="flex w-[100%] justify-around text-white">
        {data.map((item) => {
          return (
            <div
              className="w-[25%] flex flex-col  p-5 gap-5 items-start justify-center "
              key={item.id}
            >
              <img src={item.src} alt="" className="w-[30%] " />
              <h4 className="font-bold text-xl">{item.title}</h4>
              <p className="text-justify">{item.description}</p>
              <button className=" rounded-md font-semibold w-[40%]  text-start ">
                Read More
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reason;
