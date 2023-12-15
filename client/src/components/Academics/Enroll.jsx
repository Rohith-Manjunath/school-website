const Enroll = () => {
  return (
    <div className="flex items-center justify-center h-auto gap-16  py-[1rem] bg-[#580b57] text-white">
      <div className="w-[40%] flex flex-col gap-5">
        <div className=" flex flex-col items-start justify-center  gap-2 font-semibold">
          <h2 className="capitalize border-b-2">communicate with us</h2>
          <h1 className="uppercase text-2xl ">
            How to <span className="">enroll?</span>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <p className="text-justify">
            Welcome to the enrollment gateway of Mysore International School—a
            place where educational journeys begin. We are thrilled to embark on
            this exciting adventure with you. Please complete the enrollment
            form below to initiate the enrollment process for your child.
          </p>
          <p>
            If you have any questions or need assistance during the enrollment
            process, our friendly admissions team is here to help. Feel free to
            reach out to us.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold hover:underline hover:underline-offset-4 hover:cursor-pointer">
            Primary School
          </span>
          <span className="font-bold  hover:underline hover:underline-offset-4 hover:cursor-pointer">
            Junior High School
          </span>
          <span className="font-bold  hover:underline hover:underline-offset-4 hover:cursor-pointer">
            High School
          </span>
        </div>
      </div>
      <div className="w-[50%] p-8  rounded-lg flex flex-col items-center justify-between bg-[#d3d3d3]">
        <h2 className="uppercase text-center text-[#580b57] text-2xl font-bold mb-5">
          enrollment form
        </h2>
        <form className="flex items-center justify-center gap-10 w-full border border-[#580b57] rounded-md p-10 ">
          <div className="flex flex-col items-center justify-between gap-10 w-1/2">
            <input
              type="text"
              className="p-1 bg-transparent text-[#580b57] outline outline-[1px] outline-[#580b57] rounded-sm placeholder:text-[#580b57] w-full border-none focus:outline-[2px] focus:outline-[#580b57]"
              placeholder="Parent's Name"
            />
            <input
              type="text"
              className="p-1 bg-transparent text-[#580b57] outline outline-[1px] outline-[#580b57] rounded-sm placeholder:text-[#580b57] w-full border-none focus:outline-[2px] focus:outline-[#580b57]"
              placeholder="Phone Number"
            />
            <input
              type="email"
              className="p-1 bg-transparent text-[#580b57] outline outline-[1px] placeholder:text-[#580b57] outline-[#580b57] rounded-sm w-full border-none focus:outline-[2px] focus:outline-[#580b57]"
              placeholder="Email"
            />
          </div>{" "}
          <div className="w-1/2">
            <textarea
              className="p-4 bg-transparent text-[#580b57] outline placeholder:text-[#580b57] outline-[1px] rounded-sm  outline-[#580b57] white w-full border-none focus:outline-[2px] h-[11rem] focus:outline-none focus:outline-[#580b57]"
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="Message"
            ></textarea>
          </div>
        </form>
        <button className="text-center w-[40%] bg-[#580b57] text-white p-2 mt-5 font-bold tracking-wide rounded-lg hover:scale-95 transition-all duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Enroll;
