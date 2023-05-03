import Image from "next/image";
import { Inter } from "next/font/google";
import { AlignJustify, Search } from "react-feather";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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

      <div className=" w-full h-[500px] mt-20  lg:mb-0 lg:grid-cols-4 lg:text-left">
        CLOTHING
      </div>
      <div className="border border-green-500 w-full flex flex-col px-10">
        <div className="flex justify-between">
          <div className="font-bold">Sandie Tie Dye Print Dress</div>
          <div>$500</div>
        </div>
      </div>
    </main>
  );
}
