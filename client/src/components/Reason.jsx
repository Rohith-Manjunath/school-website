import React, { useState } from "react";
import { data } from "../data/info.jsx";

const Reason = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleDescription = (itemId) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  return (
    <div className="bg-[#01416f] flex flex-col items-start justify-center gap-1 sm:p-4 md:p-3 lg:p-5 xl:p-10">
      <p className="text-white text-xl pl-6">Reason to pursue</p>
      <h2 className="text-4xl text-[#fff200] font-semibold tracking-wider pl-6">
        MYSURU INTERNATIONAL SCHOOL
      </h2>
      <div className="flex flex-wrap w-[100%] justify-around text-white p-[1rem] mt-[2rem]">
        {data.map((item) => {
          const isExpanded = expandedItems.includes(item.id);

          return (
            <div
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 flex flex-col p-5 sm:p-2 gap-5 items-start justify-center"
              key={item.id}
            >
              <img src={item.src} alt="icons" className="w-[30%] " />
              <h4 className="font-bold text-xl">{item.title}</h4>
              <div
                className={`text-start overflow-hidden transition-max-height ${
                  isExpanded ? "max-h-full" : "max-h-[4.3rem]"
                }`}
              >
                <p>{item.description}</p>
              </div>
              <button
                onClick={() => toggleDescription(item.id)}
                className="rounded-md font-semibold w-[40%] text-start"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reason;
