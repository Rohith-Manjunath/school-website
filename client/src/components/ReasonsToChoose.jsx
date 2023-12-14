import { ReasonToChoose } from "../data/ReasonsToChoose";

const ReasonsToChoose = () => {
  return (
    <div className="pt-10">
      <h2 className="text-3xl font-bold text-center">A few reason to choose</h2>
      <div className="flex items-center justify-evenly p-5 gap-32 px-20">
        {ReasonToChoose.map((item) => {
          return (
            <div key={item.id}>
              <div className="text-center flex items-center justify-center h-[15rem]">
                <img src={item.img} alt="" />
              </div>
              <div className="text-center flex flex-col gap-5">
                <h2 className="font-semibold text-xl">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReasonsToChoose;
