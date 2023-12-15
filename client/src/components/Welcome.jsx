import logoImage from "../assets/images/logo-2-v2.png";
import Image from "../assets/Background/background_1.svg";
import CTCButton from "./CTCButton";

const Welcome = () => {
  return (
    <div
      className="h-auto flex flex-col lg:flex-row justify-around mx-auto bg-[#01416f] p-5 py-10 text-white bg-cover"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <div className="flex flex-col items-start justify-center gap-5 lg:w-[50%]">
        <div className="flex flex-col gap-1">
          <h2 className="text-white tracking-[2px] max-md:text-3xl text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Welcome to{" "}
            <span className="school-name text-[#d3d3d3] tracking-widest">
              MIS
            </span>
          </h2>

          <p className="text-white text-2xl tracking-[2px] font-semibold">
            Empower. Excel. Educate
          </p>
        </div>
        <p className="tracking-[1px] text-justify">
          Welcome to Mysore International School, a place where every
          student&#39;s journey is crafted with care and purpose. Here,
          education goes beyond textbooks, shaping young minds into confident,
          curious learners. Our vibrant community of educators and students
          fosters an environment of collaboration and growth. As you embark on
          this educational adventure with us, you&#39;ll discover not just a
          school but a supportive family, dedicated to unlocking the full
          potential of each individual.
        </p>

        <CTCButton title="Enroll Today" />
      </div>
      <div className="logo mt-5 lg:mt-0 hidden lg:flex">
        <img
          src={logoImage}
          alt="website-logo"
          className="w-[20rem]"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Welcome;
