import Image from "../assets/Background/Contour_Line_bg_1.svg";

const PaymentIssue = () => {
  return (
    <div
      className="flex justify-center bg-[#8a2d87] text-white font-bold p-4 lg:p-12 text-center bg-cover max-md:flex-col"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <h2 className="text-xl lg:text-xl tracking-wider  lg:px-8 py-2 lg:py-3">
        Should you encounter any challenges or have questions about the online
        payment process{" "}
      </h2>
      <button className="bg-secondary text-[#8a2d87] px-6 lg:px-8 py-2 lg:py-3 rounded-md border border-solid border-white p-4 hover:bg-[#8a2d87] hover:text-secondary hover:scale-105 transition-all duration-300">
        Raise a Ticket &gt;
      </button>
    </div>
  );
};

export default PaymentIssue;
