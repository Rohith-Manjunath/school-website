import AdmissionProcess from "../components/Academics/AdmissionProcess";
import Enroll from "../components/Academics/Enroll";
import Payment from "../components/Payment";
import ReasonsToChoose from "../components/ReasonsToChoose";
import Footer from "../components/Footer";
import PaymentIssue from "../components/PaymentIssue";
import Marquee from "../components/Marquee";

const Admission = () => {
  return (
    <div>
      <Payment />
      <ReasonsToChoose />
      <PaymentIssue />
      <AdmissionProcess />
      <Enroll />
      <Marquee />

      <Footer />
    </div>
  );
};

export default Admission;
