import SelectCategory from "@/components/SelectCategory";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import ProductListing from "@/components/ProductListing";
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
        <Link href="/sell" className="bg-[#5F8638] px-6 py-2 rounded-full text-white">
          Sell
        </Link>
      </div>
      <div className="mt-20 w-full">
        <ProductListing />
      </div>
    </main>
  );
};

export default page;
