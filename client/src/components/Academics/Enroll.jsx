const Enroll = () => {
  return (
    <div className="flex items-center justify-center h-auto gap-16 mb-20">
      <div className="w-[40%] flex flex-col gap-5">
        <div className=" flex flex-col items-start justify-center  gap-2 font-semibold">
          <h2 className="capitalize text-orange-500 border-b-2">
            communicate with us
          </h2>
          <h1 className="uppercase text-2xl ">
            How to <span className="text-blue-500">enroll?</span>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            asperiores, praesentium velit enim voluptates ad debitis! Amet,
            consectetur rem atque sed quidem, nesciunt veritatis architecto
            eveniet ad corrupti inventore suscipit?
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque atque
            sit eveniet, soluta sed quod alias quae illo voluptatem, velit
            magni. Facere perspiciatis praesentium dicta iusto culpa veritatis
            quod molestias!
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-blue-500 hover:underline hover:underline-offset-4 hover:cursor-pointer">
            Primary School
          </span>
          <span className="font-bold text-blue-500 hover:underline hover:underline-offset-4 hover:cursor-pointer">
            Junior High School
          </span>
          <span className="font-bold text-blue-500 hover:underline hover:underline-offset-4 hover:cursor-pointer">
            High School
          </span>
        </div>
      </div>
      <div className="w-[50%] p-8 bg-[#580b57] rounded-lg flex flex-col items-center justify-between">
        <h2 className="uppercase text-center text-white text-2xl font-bold mb-5">
          enrollment form
        </h2>
        <form className="flex items-center justify-center gap-10 w-full">
          <div className="flex flex-col items-center justify-between gap-10 w-1/2">
            <input
              type="text"
              className="p-1 bg-transparent text-white outline outline-[1px] rounded-sm placeholder:text-white w-full border-none focus:outline-[2px] focus:outline-white"
              placeholder="Parent's Name"
            />
            <input
              type="text"
              className="p-1 bg-transparent text-white outline outline-[1px] rounded-sm placeholder:text-white w-full border-none focus:outline-[2px] focus:outline-white"
              placeholder="Phone Number"
            />
            <input
              type="email"
              className="p-1 bg-transparent text-white outline outline-[1px] rounded-sm placeholder:text-white w-full border-none focus:outline-[2px] focus:outline-white"
              placeholder="Email"
            />
          </div>{" "}
          <div className="w-1/2">
            <textarea
              className="p-4 bg-transparent text-white outline outline-[1px] rounded-sm placeholder:text-white w-full border-none focus:outline-[2px] h-[11rem] focus:outline-none focus:outline-white"
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="Message"
            ></textarea>
          </div>
        </form>
        <button className="text-center w-[40%] bg-orange-500 text-white p-2 mt-5 font-bold tracking-wide rounded-lg hover:scale-95 transition-all duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Enroll;
