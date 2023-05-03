import { useState } from "react";

import Image from "next/image";
import { Inter } from "next/font/google";
import { AlignJustify, Search } from "react-feather";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const sizes = ["xs", "sm", "md", "lg", "xl", "1x", "2x", "3x"];

  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className} bg-white`}
    >
      <div className="z-10 w-full  max-w-5xl items-center justify-between font-mono text-sm lg:flex ">
        <div className="fixed left-0 top-0 h-16 px-5 flex w-full justify-between border-b border-gray-300 bg-white  from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <div className="flex justify-between items-center w-[20%]">
            <AlignJustify size={24} />
            <Search size={24} />
          </div>
          {/* 
          <Image
            src={"/finesseAssets/logo.png"}
            alt="Finesse Logo"
            width={100}
            height={30}
          /> */}
          <div className="flex justify-center items-center">Cart</div>
        </div>
      </div>

      <div className=" w-full h-[500px] bg-gray-300 mt-20  lg:mb-0 lg:grid-cols-4 lg:text-left pt-0">
        CLOTHING
      </div>

      <div className=" w-full flex flex-col px-5 py-10">
        {/* name section */}
        <div className="flex justify-between">
          <div className="font-bold">Sandie Tie Dye Print Dress</div>
          <div className="text-gray-400">$500</div>
        </div>
        {/* sizing section */}
        <div className="flex flex-col">
          <div className="text-[12px]">Size</div>
          <div className="grid grid-cols-4 grid-rows-2 gap-1">
            {sizes.map((size) => (
              <div
                className="text-[14px] h-8 border border-black flex justify-center items-center rounded-md"
                key={size}
              >
                {size}
              </div>
            ))}
          </div>

          <div className="border flex justify-center items-center mt-4 h-10 border-black rounded-md">
            <div className="flex justify-center w-1/3 "> - </div>
            <div className="flex justify-center items-center w-1/3 border-l border-r h-full border-black font-bold">
              1
            </div>
            <div className="flex justify-center w-1/3 "> +</div>
          </div>

          <div className="border flex justify-center items-center mt-4 h-10 border-black rounded-md font-bold text-white bg-black">
            ADD TO CART
          </div>
          <div className="border flex justify-center items-center mt-4 h-10 border-black rounded-md font-bold text-white bg-black">
            BUY WITH
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

        <div className="border rounded-md overflow-hidden">
          <div
            className="px-4 py-3 flex justify-between items-center cursor-pointer"
            onClick={toggleAccordion}
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
            <div className="bg-gray-100 px-4 py-3">
              <p className="text-gray-800">WOW THIS IS COOL STUFF</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
