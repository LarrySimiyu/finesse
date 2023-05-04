import { X } from "react-feather";

export const MainMenu = ({ menuVisible, setMenuVisible }) => {
  const menuItems = [
    "Home",
    "Products",
    "Home",
    "Shop By Occasion",
    "About",
    "Track Your Order",
    "Exchange & Refunds",
  ];
  return (
    <div className="bg-white w-[70vw] h-[100vh] absolute top-0 left-0 flex justify-between flex-col border-r border-black">
      <div>
        <div className="border-b h-14 pl-5 flex  items-center">
          <X
            size={24}
            onClick={() => {
              setMenuVisible(!menuVisible);
            }}
          />
        </div>
        <div>
          {menuItems.map((item) => {
            return (
              <div className="border-b h-14 pl-5 flex  items-center" key={item}>
                {item}
              </div>
            );
          })}
        </div>{" "}
      </div>

      <div className="flex justify-evenly mb-10 ">
        <div>Log In</div>
        <div className="border" />
        <div>Sign Up</div>
      </div>
    </div>
  );
};
