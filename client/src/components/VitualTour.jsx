import PaymentImage from "../assets/images/undraw_Stripe_payments_re_chlm.png";
import Button from "./Button";
import OtherBtn1 from "./OtherBtn1";

const VirtualTour = () => {
  return (
    <div className="flex flex-col lg:flex-row  items-center justify-between gap-8 lg:p-20 p-10 bg-[#d3d3d3] border-y-[#8a2d87] text-[#580b57]">
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

        <OtherBtn1 />
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
