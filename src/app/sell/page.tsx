import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdOutlineMyLocation } from "react-icons/md";



const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center tablet:p-24 px-6 pt-24 bg-[#F5F5F5]">
      <h1 className="text-2xl font-semibold w-full text-start">
        Add a new product
      </h1>
      <div className="grid tablet:grid-cols-2 grid-cols-1 mt-10 gap-8 w-full">
        {/* left container */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-lg font-medium my-4">Description</h3>
            <div className="border border-[#949494] rounded-md px-3 py-3 flex flex-col gap-3 ">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Product Name</Label>
                <Input type="text" id="productName" />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Product Brand</Label>
                <Input type="text" id="productName" />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Time Used {"(in months)"}</Label>
                <Input type="text" id="productName" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium my-4">Other Information</h3>
            <div className="border border-[#949494] rounded-md px-3 py-3 flex flex-col gap-3 ">
              <div className="grid w-full  items-center gap-1.5">
                <Label htmlFor="email">Product Categroy</Label>
                <Input type="text" id="productName" />
              </div>

              <div className="grid w-full  items-center gap-1.5">
                <Label htmlFor="email">Power Source</Label>
                <Input type="text" id="productName" />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Wattage</Label>
                <Input type="text" id="productName" />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Battery Capacity</Label>
                <Input type="text" id="productName" />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Address</Label>
                <div className="flex items-center gap-2 ">
                  <Input type="text" id="productName" />
                  <div className="bg-gray-300 hover:bg-gray-400 hover:text-white text-xs px-3 py-1 rounded-lg text-black flex items-center ">
                    <MdOutlineMyLocation className=" text-2xl text-blue-600" />
                    <button>
                      Detect my location
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right container */}
        <div>
          <div>
            <h3 className="text-lg font-medium my-4">Upload Product Image</h3>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 px-3"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <div className="flex items-center justify-center w-full">
                  <input
                    type="file"
                    name="images"
                    accept=".jpg, .png, .jpeg"
                    className="form_input"
                    max="3"
                    multiple
                    id="dropzone-file"
                    required
                  />
                </div>
              </label>
            </div>
          </div>
          <div className="my-10">
            <h3 className="text-lg font-medium my-4">Pricing</h3>
            <div className="flex flex-col justify-center">
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Selling Price</Label>
                  <div className="flex items-center justify-center gap-3">
                    <p>Rs</p>
                    <Input type="text" id="price" className="outline-none" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 my-8">
                <button className="w-full bg-[#5F8638] hover:bg-green-700 py-3 text-white rounded-xl">
                  Add Item
                </button>
                <button className="w-full bg-gray-400 hover:bg-gray-600 py-3 text-white rounded-xl">
                  Discard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
