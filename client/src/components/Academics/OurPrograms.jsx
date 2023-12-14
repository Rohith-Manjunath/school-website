import { programsData } from "../../data/OurProgramsData";
import { Link } from "react-router-dom";

const OurPrograms = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-8 p-5">
      <h2 className="font-bold text-2xl">Our Programs</h2>
      <p className="text-center w-[50%] max-lg:w-[80%]">
        At Mysore International School, our mission is to offer affordable,
        high-quality education and childcare services across all childhood
        stages. Committed to fostering growth and success, we ensure every child
        thrives in a nurturing environment.
      </p>
      <div className="w-[70%] h-auto flex gap-5 max-lg:flex-col max-md:gap-10 max-md:w-full">
        {programsData.map((item) => {
          return (
            <Link
              key={item.id}
              className="border rounded-md overflow-hidden hover:scale-105 transition-all duration-200 hover:mx-3"
            >
              <div className="w-full">
                <img
                  src="https://assets.telegraphindia.com/telegraph/2022/Dec/1670380679_new-project-2022-12-07t080748-004.jpg"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-3 ">
                <div className="w-full flex  flex-col gap-4 p-2 border-b-2">
                  <h2 className="font-bold ">{item.title}</h2>
                  <p className="max-md:text-[14px]">{item.description}</p>
                </div>
                <div className="flex items-center justify-between w-full p-2 ">
                  <div className="w-1/2 flex flex-col gap-2">
                    <span className=" flex items-center justify-center font-semibold">
                      Age
                    </span>
                    <span className="flex items-center justify-center text-red-600 text-[13px] max-md:text-[12px]">
                      {item.age}
                    </span>
                  </div>
                  <div className="w-1/2  flex flex-col gap-2">
                    <span className=" flex items-center justify-center font-semibold ">
                      Schedule
                    </span>
                    <span className=" flex items-center justify-center text-red-600 text-[13px] max-md:text-[12px]">
                      {item.schedule}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default OurPrograms;
