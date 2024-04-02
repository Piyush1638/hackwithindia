import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";


const Product = ({
  img,
  title,
  amount,
  productCode,
}: {
  img: string;
  title: string;
  amount: string;
  productCode: string;
}) => {
  return (
    <div className="bg-white rounded-lg px-2 py-2 flex items-center flex-col gap-3">
      <Image src={img} alt={title} width={200} height={200} className="object-contain w-full" />
      <h3 className="text-[#5F8638] font-semibold uppercase w-full text-start">{title}</h3>
      <p className="text-sm w-full text-start text-red-600">Rs {amount}</p>
      <Link href={`/buy/${productCode}`} className="w-full bg-[#5F8638] text-white text-center rounded-full py-2 text-lg">Buy
      <MdOutlineArrowRightAlt className="inline-block mx-2" />
      </Link>
    </div>
  );
};

export default Product;
