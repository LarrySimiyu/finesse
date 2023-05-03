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
import { MainMenu } from "@/components/MainMenu";
import { ShoppingCart } from "@/components/ShoppingCart";
import { ShippingAndReturns } from "@/components/ShippingAndReturns";
import { SizeGuide } from "@/components/SizeGuide";
import { FooterMenu } from "@/components/FooterMenu";
import { BenefitsSection } from "@/components/BenefitsSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState("sm");
  const [cartItems, setCartItems] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);
  const [item, setItem] = useState({
    name: "Sadie Tie Dye Print Dress",
    size: "sm",
    cost: 37,
    quantity: 1,
  });

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

  const likeSuggestions = [
    {
      name: "Sadie Tie Dye Print Dress",
      cost: 34,
      limited: true,
    },
    {
      name: "Sadie Tie Dye Print Dress",
      cost: 89,
    },
    {
      name: "Sadie Tie Dye Print Dress",
      cost: 66,
      limited: true,
    },
    {
      name: "Sadie Tie Dye Print Dress",
      cost: 78,
    },
  ];

  const imageNames = ["/front.png", "/side.png", "/back.png", "/model.png"];

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
            <MainMenu
              menuVisible={menuVisible}
              setMenuVisible={setMenuVisible}
            />
          )}
          <div className="flex justify-center items-center">
            <Image src="/logo.png" alt="Buy with icon" width={90} height={80} />
          </div>

          <div
            className="flex justify-center items-center font-semibold"
            onClick={() => setCartVisible(!cartVisible)}
          >
            {`Cart${cartItems.length > 0 ? `(${totalQuantity})` : ""}`}
          </div>
          {cartVisible && (
            <ShoppingCart
              totalCost={totalCost}
              cartVisible={cartVisible}
              setCartVisible={setCartVisible}
              cartItems={cartItems}
              increaseQuantity={increaseQuantity}
              reduceQuantity={reduceQuantity}
              handleDeleteItem={handleDeleteItem}
            />
          )}
        </div>
      </div>

      <div class="w-full h-[500px] bg-gray-200 mt-20  overflow-x-auto flex justify-center items-center ">
        <div class="scroll-snap-type-x-mandatory flex flex-row">
          {imageNames.map((name) => {
            return (
              <Image
                key={name}
                src={name}
                alt="Buy with icon"
                width={400}
                height={450}
                className="ml-2 border rounded-md"
              />
            );
          })}
        </div>
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
        <ShippingAndReturns isOpen={isOpen} toggleShipping={toggleShipping} />
        <SizeGuide
          sizeGuideOpen={sizeGuideOpen}
          toggleSizeGuide={toggleSizeGuide}
        />
        <BenefitsSection />
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-[22px]">You May Like...</h1>
          <a href="https://finesse.us/collections/all?sort_by=best-selling">
            <ArrowRight size={22} />
          </a>
        </div>
        {/* horizantal scroll */}
        <div className="flex overflow-x-auto w-full  h-[350px] scrollbar-track-black scrollbar-thumb-black mb-5 pt-8">
          {likeSuggestions.map((item) => {
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
                <div className=" flex justify-between items-center mt-2 pl-2 ">
                  ${item.cost}
                  {item.limited && (
                    <div className="text-[12px]  bg-yellow-300 rounded-sm px-1 font-semibold">
                      Limited Stock
                    </div>
                  )}
                </div>
                <div className=" flex justify-end mt-2  pl-2 font-semibold">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>{" "}
        <div
          className="w-full h-[75px] border-t border-b flex justify-center items-center mt-5 font-semibold text-[14px]"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back To The Top <ChevronUp size={20} />
        </div>
        <FooterMenu />
        <div className="text-gray-200 border-t text-[12px] flex justify-center pt-5 items-center">
          Copyright Finesse Inc. 2023, All Rights Reserved.
        </div>
      </div>
    </main>
  );
}
