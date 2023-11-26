import React from "react";
import { Link } from "react-router-dom";
import { data2 } from "../data/info2";

const News = () => {
  return (
    <div className="flex flex-wrap justify-around p-10 mt-10 font-extrabold">
      {data2.map((item) => (
        <div
          key={item.id}
          className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8 p-4 border border-slate-400 rounded-lg shadow-xl transform transition-all duration-500 hover:cursor-pointer hover:shadow-2xl hover:translate-x-[-2px] hover:translate-y-[-2px]"
        >
          <img
            src={item.src}
            alt=""
            className="w-full h-40 sm:h-48 object-cover rounded-lg"
          />
          <span className="p-2 text-xs">{item.date}</span>
          <h2 className="p-2 text-lg">{item.title}</h2>
          <h3 className="p-2 text-sm">{item.author}</h3>
          <Link className="p-2 tracking-widest">READ MORE</Link>
        </div>
      ))}
    </div>
  );
};

export default News;
