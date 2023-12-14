const AdmissionProcess = () => {
  return (
    <div className="p-20 flex flex-col gap-5 items-start justify-center">
      <div className="flex flex-col items-start justify-center gap-2">
        <h2 className="text-2xl">Admission Process</h2>
        <div className="flex flex-col items-start justify-center gap-3">
          <p>
            Admissions at Mysore international School is as per the following
            procedure.
          </p>
          <div className="flex flex-col items-start justify-center gap-2">
            <span>1. Filling Application Form @ Campus</span>
            <span>2. Attend Counselling @ Campus</span>
            <span>3. Confirmation of Admission</span>
            <ul className="ml-10 ">
              <li className="list-disc mt-1">Campus Tour</li>
              <li className="list-disc mt-1">Online Test</li>
              <li className="list-disc mt-1">Parents & Students Interaction</li>
            </ul>
            <span>4. Registration of Admission</span>
            <span>
              5. Congratulations! Your ward is in Mysore international school!
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <h2 className="text-2xl">
          Documents Required at the time of Admission
        </h2>
        <div className="flex flex-col items-start justify-center gap-3">
          <div className="flex flex-col items-start justify-center gap-2">
            <span>
              1. Copy of Aadhar Card of Student / Copy of Passport in case of
              International Student.
            </span>
            <span>2. Two passport size photos of the student</span>
            <span>
              3. Proof of age of the student (Birth Certificate for admission to
              LKG to V Grade). Original transfer certificate from the previous
              School before reporting to School.
            </span>
            <span>
              4. It is mandatory to bring a counter signed document given by the
              education authority in the case of the admissions from outside the
              State or Country.
            </span>
            <span>
              5. Congratulations! Your ward is in Mysore international school!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
