import React from "react";
import { CiGlobe } from "react-icons/ci";
import { IoCashOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { GiNuclearWaste } from "react-icons/gi";
import { LuBook } from "react-icons/lu";

const WhySellEWaste = () => {
  return (
    <div className="grid tablet:grid-cols-3 grid-cols-2 gap-2 my-10">
      {/* Environmental Impact */}
      <div className="bg-[#2d5645] p-3 rounded-lg w-[350px]">
        <div className="flex flex-col gap-3">
          <CiGlobe className="text-6xl text-white " />
          <h1 className="text-white text-2xl">Environmental Impact</h1>
          <p className="text-gray-200">
            Every device contains valuable materials that can be recycled,
            reducing the demand for new resources and minimizing environmental
            degradation.
          </p>
        </div>
      </div>

      {/* Earn Cash for your clutter*/}
      <div className="bg-[#2d5645] p-3 rounded-lg w-[350px]">
        <div className="flex flex-col gap-3">
          <IoCashOutline className="text-6xl text-white " />
          <h1 className="text-white text-2xl">Earn Cash for your clutter</h1>
          <p className="text-gray-200">
            Selling your e-waste not only clears up space in your home or office
            but also puts money back in your pocket.
          </p>
        </div>
      </div>

      {/* Stay tech-savy */}
      <div className="bg-[#2d5645] p-3 rounded-lg w-[350px]">
        <div className="flex flex-col gap-3">
          <IoPhonePortraitOutline className="text-6xl text-white " />
          <h1 className="text-white text-2xl">Stay tech-savy</h1>
          <p className="text-gray-200">
            Selling your outdated electronics allows you to keep up with the
            latest technology trends.
          </p>
        </div>
      </div>

      {/* Data Security */}
      <div className="bg-[#2d5645] p-3 rounded-lg w-[350px]">
        <div className="flex flex-col gap-3">
          <MdOutlineSecurity className="text-6xl text-white " />
          <h1 className="text-white text-2xl">Data Security</h1>
          <p className="text-gray-200">
            Selling your old electronics through a reputable platform ensures
            secure data destruction. Protect your personal information and
            sensitive information easily.
          </p>
        </div>
      </div>

      {/* Reduce E-waste landfills */}
      <div className="bg-[#2d5645] p-3 rounded-lg w-[350px]">
        <div className="flex flex-col gap-3">
          <GiNuclearWaste className="text-6xl text-white " />
          <h1 className="text-white text-2xl">Reduce E-waste landfills</h1>
          <p className="text-gray-200">
            Electronic waste in landfills poses significant environmental risks.
            By selling your e-waste, you contribute to the reduction Of
            landfills.
          </p>
        </div>
      </div>

      {/* Educate & inspire */}
      <div className="bg-[#2d5645] p-3 rounded-lg w-[350px]">
        <div className="flex flex-col gap-3">
          <LuBook className="text-6xl text-white " />
          <h1 className="text-white text-2xl">Educate & inspire</h1>
          <p className="text-gray-200">
            Selling e-waste isn't just a transaction; it's an opportunity to
            educate others about the importance of responsible disposal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhySellEWaste;
