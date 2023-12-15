import Image from '../assets/Payment/background/payment_bg.png';

const Payment = () => {
  return (
    <div className="p-20 border border-b-[#8a2d87] bg-[#580b57] text-white">
      <div className="flex p-2 ">
        <div className="w-1/2 flex flex-col items-start gap-10 justify-start">
          <h2 className="text-5xl font-semibold w-{5rem} tracking-wider">Online Fee Payment</h2>
          <p className="font-semibold tracking-wider">
          At Mysore International School, we believe in simplifying the school experience for parents. Opting for our secure Online Fees Payments not only streamlines the process but also brings a host of benefits to your fingertips.
          </p>
          <a
            href=""
            className=" border w-1/4 bg-white text-center text-[#580b57] font-semibold p-2 rounded-sm transition-all duration-300  hover:border hover:border-slate-400 hover:tracking-widest hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pay Now
          </a>
        </div>

        <div className="w-1/2 flex items-start justify-end">
          <img src={Image} alt="" className="w-[60%]" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
