import { X, Trash2, ArrowRight, ArrowLeft } from "react-feather";
import Image from "next/image";

export const ShoppingCart = ({
  totalCost,
  cartVisible,
  setCartVisible,
  cartItems,
  reduceQuantity,
  increaseQuantity,
  handleDeleteItem,
}) => {
  const clothingSuggestions = [
    {
      name: "Sadie Tie Dye Print Dress",
      cost: 34,
    },
    {
      name: "Sadie Tie Dye Print Dress",
      cost: 89,
    },
    {
      name: "Sadie Tie Dye Print Dress",
      cost: 66,
    },
    {
      name: "Sadie Tie Dye Print Dress",
      cost: 78,
    },
  ];
  return (
    <div className="bg-white w-[90vw] h-[100vh] absolute top-0 right-0 overflow-auto border-l border-black">
      <div className="border-b h-16 pl-5 flex  items-center ">
        <ArrowLeft
          size={24}
          onClick={() => {
            setCartVisible(!cartVisible);
          }}
        />

        <div className="ml-5 text-[18px] font-bold">Shopping Bag</div>
      </div>
      <div className="w-full h-20  flex justify-center items-center flex-col  text-[14px] px-5  bg-[#C3B1E1] text-white">
        <div className="font-bold">
          {totalCost < 75 ? "Free Shipping!" : "CONGRATS!"}
        </div>
        <div className="text-[12px]">
          {totalCost < 75
            ? `You're $${75 - totalCost} USD away from `
            : "Shipping's free! You're welcome bb 😉 "}
          {totalCost < 75 && <span className="font-bold">FREE SHIPPING!</span>}
        </div>
      </div>
      {/* shopping item containers */}
      {cartItems.map((item) => {
        return (
          <div
            className="h-[150px] flex justify-between border-b mt-10 pr-3"
            key={item.size}
          >
            <div className="w-[25%] h-[70%] flex justify-center items-center">
              <Image
                src="/front.png"
                alt="Buy with icon"
                width={80}
                height={80}
                className="ml-2 border rounded-md"
              />{" "}
            </div>
            <div className=" w-[70%] ">
              <div className=" flex">
                <div>{item.name}</div>
                <div>Size: {item.size.toUpperCase()}</div>
              </div>
              <div className=" flex justify-between mt-5">
                <div>${item.cost}.00</div>
                <div>QTY: {item.quantity}</div>
              </div>
              <div className=" flex justify-between mt-1">
                <div
                  className={`w-2/5 border flex justify-center items-center h-10 rounded-md border-black ${
                    item.quantity === 1
                      ? "bg-gray-200 border-gray-200 text-gray-500"
                      : ""
                  }`}
                  onClick={() =>
                    item.quantity > 1 && reduceQuantity(item.name, item.size)
                  }
                >
                  -
                </div>
                <div
                  className="w-2/5 border flex justify-center items-center h-10 rounded-md border-black mx-2"
                  onClick={() => increaseQuantity(item.name, item.size)}
                >
                  +
                </div>
                <div
                  className="w-2/5 border flex justify-center items-center h-10 rounded-md border-black"
                  onClick={() => handleDeleteItem(item.name, item.size)}
                >
                  <Trash2 size={20} />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="w-full h-[75px]  flex justify-between items-center  text-[14px] px-5">
        <div>Total Price </div>
        <div>${totalCost} USD </div>
      </div>
      <div className="w-full h-24  flex justify-center items-center  text-[14px] px-5  bg-black">
        <button
          className="border rounded-2xl w-[90%] h-10 font-bold text-white text-[18px]"
          onClick={() => {
            console.log("checking out");
          }}
        >
          CHECKOUT
        </button>
      </div>
      <div className="flex items-center justify-between border-t mt-8 px-5 pt-5">
        <div className="font-bold text-[14px]">Check out these fits...</div>
        <a href="https://finesse.us/collections/all?sort_by=best-selling">
          <ArrowRight size={22} />
        </a>
      </div>
      {/* horizantal scroll */}
      <div className="flex overflow-x-auto w-full  h-[350px] scrollbar-track-black scrollbar-thumb-black mb-5 pt-8">
        {clothingSuggestions.map((item) => {
          return (
            <div key={item.cost} className=" min-w-[160px]">
              {" "}
              <Image
                src="/front.png"
                alt="Buy with icon"
                width={150}
                height={150}
                className="ml-2 border rounded-md"
              />{" "}
              <div className=" flex justify-start mt-2 pl-2 ">${item.cost}</div>
              <div className=" flex justify-end mt-2  pl-2 font-semibold">
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
