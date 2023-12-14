import PaymentImage from "../assets/images/QR_code.png";
import Button from "./Button";

const VirtualTour = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#ebebeb] items-center justify-between gap-8 lg:p-20 p-10 ">
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-4xl max-md:text-2xl lg:text-5xl tracking-[2px] font-bold capitalize">
            Virtual school tour
          </h2>
          <p className="tracking-[1px] font-semibold">
            Your window to the exterior beauty and architectural grace of Mysore
            International School.
          </p>
        </div>
        <p className="tracking-[1px] text-justify">
          Unlock the doors to Mysore International School by scanning the QR
          code on the left. Immerse yourself in a virtual stroll around our
          campus, exploring the architecture, surroundings, and the unique charm
          of our school from the outside. Get a sneak peek into the world of
          learning that awaits within.
        </p>

        <a
          href="https://www.google.com/maps/@12.2291753,76.5867069,3a,90y,9.72h,90.02t/data=!3m7!1e1!3m5!1sAF1QipMc3j45DwgTUz5qLOpMenxniJsUA6-V2ipfptzO!2e10!3e12!7i6720!8i3360?entry=ttu
"
          className="w-1/4 bg-primary text-center text-white font-semibold p-2 rounded-sm hover:scale-105 transition-all duration-300 hover:text-primary hover:bg-white hover:border hover:border-slate-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Know More
        </a>
      </div>
      <div className="lg:w-1/2 flex items-center justify-end pr-20">
        <img
          src={PaymentImage}
          alt="Students"
          className="rounded-[10px] w-[15rem] h-[20rem]"
        />
      </div>
    </div>
  );
};

export default VirtualTour;
