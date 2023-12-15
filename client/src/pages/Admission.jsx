import AdmissionProcess from "../components/Academics/AdmissionProcess";
import Enroll from "../components/Academics/Enroll";
import Payment from "../components/Payment";
import ReasonsToChoose from "../components/ReasonsToChoose";
import Footer from "../components/Footer";

const Admission = () => {
  return (
    <div>
      <Payment />
      <ReasonsToChoose />
      <AdmissionProcess />
      <Enroll />
      <Footer />
    </div>
  );
};

export default Admission;
