import AdmissionProcess from "../components/Academics/AdmissionProcess";
import Enroll from "../components/Academics/Enroll";
import Payment from "../components/Payment";
import ReasonsToChoose from "../components/ReasonsToChoose";

const Admission = () => {
  return (
    <div>
      <ReasonsToChoose />
      <Payment />
      <AdmissionProcess />
      <Enroll />
    </div>
  );
};

export default Admission;
