import { PlusCircle, Rewind, MessageCircle, CreditCard } from "react-feather";
export const BenefitsSection = () => {
  return (
    <div className="bg-[#C3B1E1] h-[175px] rounded-md my-10 text-white px-5 flex flex-col items-center justify-center">
      <div className="flex justify-between">
        <div className="flex items-center justify-center w-[450%] ">
          <PlusCircle size={45} color="white" />
          <p className="ml-2 text-[10px] font-semibold  ">
            SIZE INCLUSIVE UP TO 3X
          </p>
        </div>
        <div className="flex items-center justify-center w-[450%] ">
          <Rewind size={45} color="white" />
          <p className="ml-2 text-[10px] font-semibold  ">
            EASY RETUNRS & EXCHANGES
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex items-center justify-center w-[450%] ">
          <MessageCircle size={45} color="white" />
          <p className="ml-2 text-[10px] font-semibold  ">
            24/7 CUSTOMER SERVICE{" "}
          </p>
        </div>
        <div className="flex items-center justify-center w-[450%] ">
          <CreditCard size={45} color="white" />
          <p className="ml-2 text-[10px] font-semibold  ">
            FLEXIBLE PAYMENT OPTIONS{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
