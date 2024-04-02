import SelectCategory from "@/components/SelectCategory";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center tablet:p-24 px-6 pt-24 bg-[#F5F5F5]">
      <div className="flex items-center justify-center gap-10 w-full">
        <div className="flex items-center border border-[#5F8638] rounded-full pr-3 w-[600px]">
          <div>
            <SelectCategory />
          </div>
          <input
            type="text"
            placeholder="Search for a product"
            className="outline-none border-none bg-transparent text-[#5F8638] px-3 w-full"
          />
          <IoSearchOutline className="h-10 w-10 cursor-pointer" />
        </div>
        <Link
          href="/sell"
          className="bg-[#5F8638] px-6 py-2 rounded-full text-white tablet:block hidden"
        >
          Sell
        </Link>
      </div>

      <div className="w-full flex tablet:flex-row flex-col my-8 gap-4">
        <div className="tablet:w-1/2 w-full">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/img2.jpeg"
              alt="product"
              height={400}
              width={500}
              className="w-full"
            />
          </div>
          <div className="my-10 flex items-center justify-between gap-3">
            <button className="bg-[#5F8638] rounded-lg px-4 py-2 text-white w-1/2">
              Chat with Seller
            </button>
            <button className="bg-[#5F8638] rounded-lg px-4 py-2 text-white w-1/2">
              Buy Now
            </button>
          </div>
        </div>
        <div className="tablet:w-1/2 w-full">
          <h1 className="laptop:text-3xl tablet:text-2xl text-xl font-medium tablet:w-full max-w-lg bg-[#E0E0E0] px-3 py-3 rounded-md">
            Genus Hallabol GTT240 150 AH Tall Tubular Inverter Battery
          </h1>

          <div className="my-10 bg-[#E0E0E0] px-3 py-3 rounded-xl">
            <p>
              Rs. <span className="text-xl font-semibold text-[#3B6314]">1000</span>
            </p>
            <p>
              Brand <span className="text-xl font-semibold text-[#3B6314]">Xtreme</span>
            </p>
            <p>
              Time Used{" "}
              <span className="text-xl font-semibold text-[#3B6314]">26 Months</span>
            </p>
            <p>
              Power Source <span className="text-xl font-semibold text-[#3B6314]">DC</span>
            </p>
            <p>
              Wattage{" "}
              <span className="text-xl font-semibold text-[#3B6314]">1800 Watt Hours</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=18LZ4L4OGy3yxoDS5qnBcF-LFA7iYBgg&ehbc=2E312F"
          frameBorder="0"
          allowFullScreen
          className="w-full h-[600px]"
        />
      </div>
    </main>
  );
};

export default page;
