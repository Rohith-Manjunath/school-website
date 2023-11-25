import React from "react";
import { Link } from "react-router-dom";
import { data2 } from "../data/info2";

const News = () => {
  return (
    <div className="w-full p-5 flex items-center justify-around mt-10">
      {data2.map((item) => {
        return (
          <div
            className="card w-[20%] flex flex-col border border-slate-400 rounded-lg "
            key={item.id}
          >
            <img
              src={item.src}
              alt=""
              className="w-[100%] h-[50%] rounded-lg"
            />
            <span className="font-bold p-2">{item.date}</span>
            <h2 className="font-bold p-2">{item.title}</h2>
            <h3 className="font-bold p-2">{item.author}</h3>
            <Link className="font-bold p-2">Read More</Link>
          </div>
        );
      })}
    </div>
  );
};

export default News;
