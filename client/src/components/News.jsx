import React from "react";
import { Link } from "react-router-dom";
import { data2 } from "../data/info2";

const News = () => {
  return (
    <div className="flex flex-wrap justify-around p-10 mt-10 font-extrabold">
      {data2.map((item) => (
        <div
          key={item.id}
          className="card  mb-8 p-4 border border-slate-400 rounded-lg shadow-xl transform transition-all duration-500 hover:cursor-pointer hover:shadow-2xl hover:translate-x-[-2px] hover:translate-y-[-2px] bg-white h-[24rem] flex flex-col justify-around"
        >
          <img
            src={item.src}
            alt=""
            className="w-full h-40 sm:h-38 object-cover rounded-lg mb-[1rem]"
          />
          <div className="flex flex-col gap-3">
            <span className="pt-2 pb-2 text-xs underline">{item.date}</span>
            <div className="flex flex-col">
              <h2 className="text-lg">{item.title}</h2>
              <h3 className="text-sm">{item.author}</h3>
            </div>
            <Link className="pt-[0.1rem] pb-[0.1rem] text-xs tracking-widest">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
