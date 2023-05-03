import { useState, useEffect } from "react";

import Image from "next/image";
import { Inter } from "next/font/google";
import {
  AlignJustify,
  Search,
  PlusCircle,
  Rewind,
  MessageCircle,
  CreditCard,
  ArrowRight,
  ChevronUp,
  X,
  ArrowLeft,
  Trash2,
} from "react-feather";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState("sm");
  const [cartItems, setCartItems] = useState([]);
  const [item, setItem] = useState({
    name: "Sadie Tie Dye Print Dress",
    size: "sm",
    cost: 37,
    quantity: 1,
  });
  // const [item, setItem] = useState({
  //   size: selectedSize,
  //   cost: 37,
  //   quantity: quantity,
  // });
  const [quantity, setQuantity] = useState(1);

  const toggleShipping = () => {
    setIsOpen(!isOpen);
  };

  const toggleSizeGuide = () => {
    setSizeGuideOpen(!sizeGuideOpen);
  };

  const handleAddToCart = () => {
    const itemExists = cartItems.some(
      (item) => item.name === item.name && item.size === selectedSize
    );

    if (itemExists) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.name === item.name && item.size === selectedSize) {
          return {
            ...item,
            quantity: item.quantity + quantity,
            itemTotal: item.cost * quantity,
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          name: item.name,
          size: selectedSize,
          cost: 37,
          quantity: quantity,
          itemTotal: item.cost * quantity,
        },
      ]);
    }
    setCartVisible(!cartVisible);
  };

  const totalCost = cartItems.reduce(
    (accumulator, currentItem) => accumulator + currentItem.itemTotal,
    0
  );
  const totalQuantity = cartItems.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );

  const sizes = ["xs", "sm", "md", "lg", "xl", "1x", "2x", "3x"];

  const menuItems = [
    "Home",
    "Products",
    "Home",
    "Shop By Occasion",
    "About",
    "Track Your Order",
    "Exchange & Refunds",
  ];

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

  const increaseQuantity = (itemName, itemSize) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.name === itemName && item.size === itemSize) {
        return {
          ...item,
          quantity: item.quantity + 1,
          itemTotal: item.cost * (item.quantity + 1),
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const reduceQuantity = (itemName, itemSize) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.name === itemName && item.size === itemSize) {
        return {
          ...item,
          quantity: item.quantity - 1,
          itemTotal: item.cost * (item.quantity - 1),
        };
      }
      return item;
    });
    setCartItems(updatedCartItems.filter((item) => item.quantity > 0));
  };

  const handleDeleteItem = (itemName, itemSize) => {
    const updatedCartItems = cartItems.filter(
      (item) => !(item.name === itemName && item.size === itemSize)
    );
    setCartItems(updatedCartItems);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className} bg-white`}
    >
      <div className="z-10 w-full  max-w-5xl items-center justify-between font-mono text-sm lg:flex ">
        <div className="fixed left-0 top-0 h-16 px-5 flex w-full justify-between border-b border-gray-300 bg-white  from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <div className="flex justify-between items-center w-[20%]">
            <AlignJustify
              size={24}
              onClick={() => {
                setMenuVisible(!menuVisible);
              }}
            />
            <Search size={24} />
          </div>

          {menuVisible && (
            <div className="bg-white w-[70vw] h-[100vh] absolute top-0 left-0">
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
                    <div
                      className="border-b h-14 pl-5 flex  items-center"
                      key={item}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>

              {/* <div className="flex justify-evenly pl-5 ">
                <div>Log In</div>
                <div className="border" />
                <div>Sign Up</div>
              </div> */}
            </div>
          )}
          <div
            className="flex justify-center items-center font-semibold"
            onClick={() => setCartVisible(!cartVisible)}
          >
            {`Cart${cartItems.length > 0 ? `(${totalQuantity})` : ""}`}
          </div>
          {cartVisible && (
            <div className="bg-white w-[90vw] h-[100vh] absolute top-0 right-0 overflow-auto">
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
                  {totalCost < 75 && (
                    <span className="font-bold">FREE SHIPPING!</span>
                  )}
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
                            item.quantity > 1 &&
                            reduceQuantity(item.name, item.size)
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
                <div className="font-bold text-[14px]">
                  Check out these fits...
                </div>
                <a href="https://finesse.us/collections/all?sort_by=best-selling">
                  <ArrowRight size={22} />
                </a>
              </div>
              {/* horizantal scroll */}
              <div className="flex overflow-x-auto w-full  h-[400px]  mb-5 pt-8">
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
                      <div className=" flex justify-start mt-2 pl-2 ">
                        ${item.cost}
                      </div>
                      <div className=" flex justify-end mt-2  pl-2 font-semibold">
                        {item.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className=" w-full h-[500px] bg-gray-300 mt-20  lg:mb-0 lg:grid-cols-4 lg:text-left pt-0">
        CLOTHING
      </div>

      <div className=" w-full flex flex-col px-5 py-10">
        {/* name section */}
        <div className="flex justify-between mb-3">
          <div className="font-bold">Sandie Tie Dye Print Dress</div>
          <div>$37</div>
        </div>
        {/* sizing section */}
        <div className="flex flex-col">
          <div className="text-[12px] mb-1">Size</div>
          <div className="grid grid-cols-4 grid-rows-2 gap-1">
            {sizes.map((size) => (
              <div
                className={`text-[14px] h-8 border border-black flex justify-center items-center rounded-md ${
                  selectedSize === size ? "bg-black text-white" : ""
                }`}
                key={size}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>

          <div className="border flex justify-center items-center mt-4 h-10 border-black rounded-md">
            <div
              className="flex justify-center w-1/3 "
              onClick={() =>
                quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)
              }
            >
              -
            </div>
            <div className="flex justify-center items-center w-1/3 border-l border-r h-full border-black font-bold">
              {quantity}
            </div>
            <div
              className="flex justify-center w-1/3 "
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </div>
          </div>

          <div
            className="border flex justify-center items-center mt-4 h-10 border-black rounded-md font-bold text-white bg-black"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </div>
          <div className="border flex justify-center items-center mt-4 h-10 border-black rounded-md font-bold text-white bg-black">
            BUY WITH
            <Image
              src="/gpay.png"
              alt="Buy with icon"
              width={50}
              height={50}
              className="ml-2"
            />
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <div className="font-bold">Product Details</div>
          <div className="text-[14px] mb-2">
            Angel on earth vibes - look otherworldly in this tie dye printed
            dress 🦋 Having them all trying to figure out where you came from…
            heaven, duh 😇
          </div>

          <div className="font-bold">Model</div>
          <div className="text-[14px] mb-2">
            Casey is 5'11" and is wearing a size S
          </div>

          <div className="font-bold">Material</div>
          <div className="text-[14px] mb-2">95% Polyester 5% Spandex</div>
        </div>

        <div className="border mb-3  border-black rounded-md overflow-hidden">
          <div
            className="px-4 py-3 flex justify-between items-center cursor-pointer h-8"
            onClick={toggleShipping}
          >
            <h3 className="text-sm text-gray-800">Shipping and Returns</h3>
            <svg
              className={`w-6 h-6 transition-transform transform ${
                isOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
              />
            </svg>
          </div>
          {isOpen && (
            <div className="border-t border-black  px-4 py-3">
              <div className="mb-5">
                <p className="text-gray-800 text-[14px]">
                  STANDARD SHIPPING <br />
                  Free for orders over $75. <br />
                  Within the US, the estimated transit period is 6-11 business
                  days, depending on the delivery address.
                  <br />
                  Within the AU & UK, the estimated transit period is 5-11
                  business days, depending on the delivery address. <br />
                  Within DE, the estimated transit period is 10-15 business
                  days, depending on the delivery address.
                  <br />
                </p>
              </div>
              <div className="mb-5">
                <p className="text-gray-800 text-[14px]">
                  EXPRESS SHIPPING <br />
                  Within the US, the estimated transit period is 2-5 business
                  days, depending on the delivery address. <br />
                  Within the UK, the estimated transit period is 2-5 business
                  days, depending on the delivery address
                  <br />
                  Express shipping is not yet available to customers in AU and
                  DE.
                  <br />
                </p>
              </div>

              <div>
                <p className="text-gray-800 text-[14px]">
                  FREE RETURNS & EXCHANGES <br />
                  You can return or exchange your items from domestic orders
                  easily with free shipping by clicking<span>&nbsp;</span>
                  <a
                    className="text-gray-500"
                    href="https://finesse.loopreturns.com/#/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    here
                  </a>
                  <span>&nbsp;</span>
                  and following the returns process.
                  <br />
                  For free international returns shipping, just shoot us an
                  email at<span>&nbsp;</span>
                  <a
                    className="text-gray-500"
                    href="mailto:rewind@finesse.us"
                    target="_blank"
                    title="rewind@finesse.us"
                    rel="noopener noreferrer"
                  >
                    rewind@finesse.us
                  </a>
                  <span>&nbsp;</span>
                  to get it started!
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="border  border-black rounded-md overflow-hidden">
          <div
            className="px-4 py-3 flex justify-between items-center cursor-pointer h-8"
            onClick={toggleSizeGuide}
          >
            <h3 className="text-sm text-gray-800">Size Guide</h3>
            <svg
              className={`w-6 h-6 transition-transform transform ${
                sizeGuideOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
              />
            </svg>
          </div>
          {sizeGuideOpen && (
            <div className="border-t border-black text-[12px] px-2 py-3">
              <div className="grid grid-cols-6 gap-2">
                <div className="font-bold">Size</div>
                <div className="font-bold">US</div>
                <div className="font-bold">Bust</div>
                <div className="font-bold">Waist</div>
                <div className="font-bold">Hip</div>
                <div className="font-bold">Inseam</div>

                <div>XS</div>
                <div>0-2</div>
                <div>33.5"</div>
                <div>25.5"</div>
                <div>36.5"</div>
                <div>32"</div>

                <div>S</div>
                <div>4-6</div>
                <div>35"</div>
                <div>27"</div>
                <div>38"</div>
                <div>32"</div>

                <div>M</div>
                <div>8-10</div>
                <div>37"</div>
                <div>29"</div>
                <div>40"</div>
                <div>32"</div>

                <div>L</div>
                <div>12-14</div>
                <div>39"</div>
                <div>31"</div>
                <div>42"</div>
                <div>32"</div>

                <div>XL</div>
                <div>14-16</div>
                <div>41"</div>
                <div>33"</div>
                <div>44"</div>
                <div>32"</div>

                <div>1X</div>
                <div>16-18</div>
                <div>45"</div>
                <div>40"</div>
                <div>50"</div>
                <div>33.5"</div>

                <div>2X</div>
                <div>18-20</div>
                <div>47"</div>
                <div>42"</div>
                <div>52"</div>
                <div>33.5"</div>

                <div>3X</div>
                <div>20-22</div>
                <div>49"</div>
                <div>44"</div>
                <div>54"</div>
                <div>33.5"</div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-[#C3B1E1] h-[200px] rounded-md my-10">
          {/* <div className="flex items-center justify-center border">
            <PlusCircle size={40} color="gray" />
            <p className="ml-2 text-[12px] font-bold text-gray-500">
              SIZE INCLUSIVE UP TO 3X
            </p>
          </div>
          <div className="flex items-center justify-start">
            <Rewind size={40} color="gray" />
            <p>EASY RETUNRS & EXCHANGES</p>
          </div>
          <div className="flex items-center justify-start">
            <MessageCircle size={40} color="gray" />
            <p>24/7 CUSTOMER SERVICE</p>
          </div>
          <div className="flex items-center justify-start">
            <CreditCard size={40} color="gray" />
            <p>FLEXIBLE PAYMENT OPTIONS</p>
          </div> */}
        </div>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-[22px]">You May Like...</h1>
          <a href="https://finesse.us/collections/all?sort_by=best-selling">
            <ArrowRight size={22} />
          </a>
        </div>
        {/* horizantal scroll */}
        <div className="w-full h-[300px] border mt-5"></div>
        <div
          className="w-full h-[75px] border-t border-b flex justify-center items-center mt-5 font-semibold text-[14px]"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back To The Top <ChevronUp size={20} />
        </div>
        <div className="flex my-10">
          <div className=" w-1/3 text-gray-500">
            <div className="font-bold text-[14px] text-black">Shop By</div>
            <p className="text-[10px] mb-1">Tops</p>
            <p className="text-[10px] mb-1">Bottoms</p>
            <p className="text-[10px] mb-1">Outerwear</p>
            <p className="text-[10px] mb-1">Sets</p>
            <p className="text-[10px] mb-1">Accessories</p>
            <p className="text-[10px] mb-1">Dresses</p>
          </div>
          <div className=" w-1/3 text-gray-500">
            <div className="font-bold text-[14px] text-black">Follow Us</div>
            <p className="text-[10px] mb-1">Instagram</p>
            <p className="text-[10px] mb-1">Facebook</p>
            <p className="text-[10px] mb-1">Twitter</p>
            <p className="text-[10px] mb-1">TikTok</p>
            <p className="text-[10px] mb-1">Snapchat</p>
            <p className="text-[10px] mb-1">Youtube</p>
          </div>

          <div className=" w-1/3 text-gray-500">
            <div className="font-bold text-[14px] text-black">Follow Us</div>
            <p className="text-[10px] mb-1">reqind@finesse.us</p>
            <p className="text-[10px] mb-1">Refunds & Returns</p>
            <p className="text-[10px] mb-1">Shipping & Returns</p>
            <p className="text-[10px] mb-1">Terms & Conditions</p>
            <p className="text-[10px] mb-1">Cali Privacy Rights</p>
          </div>
        </div>
        <div className="text-gray-200 border-t text-[12px] flex justify-center pt-5 items-center">
          Copyright Finesse Inc. 2023, All Rights Reserved.
        </div>
      </div>
    </main>
  );
}
