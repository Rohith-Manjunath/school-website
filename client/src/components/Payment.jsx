import Image from "../assets/Payment/undraw_Stripe_payments_re_chlm.png";

const Payment = () => {
  return (
    <div className="p-20">
      <div className="flex p-2">
        <div className="w-1/2 flex flex-col items-start gap-10 justify-start">
          <h2 className="text-5xl font-semibold w-1/2">Online Fee Payment</h2>
          <p className="font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            aperiam iusto ad nostrum inventore reprehenderit voluptas eos
            pariatur accusantium illum consequuntur sunt, neque veritatis non ea
            soluta facilis aliquid itaque.
          </p>
          <a
            href="https://www.google.com/maps/@12.2291753,76.5867069,3a,90y,9.72h,90.02t/data=!3m7!1e1!3m5!1sAF1QipMc3j45DwgTUz5qLOpMenxniJsUA6-V2ipfptzO!2e10!3e12!7i6720!8i3360?entry=ttu
"
            className="w-1/4 bg-primary text-center text-white font-semibold p-2 rounded-sm hover:scale-105 transition-all duration-300 hover:text-primary hover:bg-white hover:border hover:border-slate-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pay Now
          </a>
        </div>

        <div className="w-1/2 flex items-start justify-start">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
