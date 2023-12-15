import { GrSecure } from "react-icons/gr";
import { LuClock } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";

export const ReasonToChoose = [
  {
    id: 1,
    title: "Secure Transactions",
    description: `Our online platform ensures the confidentiality and security of your payment information.`,
    img: <GrSecure className="text-[4rem] text-[#580b67]" />,
  },
  {
    id: 2,
    title: "Time-Saving",
    description: `Skip the queues and complete your transactions swiftly, allowing you more time for what matters.`,
    img: <LuClock className="text-[4rem] text-[#580b67]" />,
  },
  {
    id: 3,
    title: "Convenience",
    description: `Pay fees anytime, anywhere, without the need to visit the school in person.`,
    img: <GrMapLocation className="text-[4rem] text-[#580b67]" />,
  },
];
