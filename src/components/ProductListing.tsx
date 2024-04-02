import React from "react";
import Product from "./Product";

const ProductListing = () => {
  const listings = [
    {
      img: "/assets/images/img1.jpeg",
      title: "Batteries",
      amount: "300",
      productCode: "1234",
    },
    {
      img: "/assets/images/img2.jpeg",
      title: "Batteries",
      amount: "600",
      productCode: "198798dslkjf",
    },
    {
      img: "/assets/images/img3.jpeg",
      title: "Batteries",
      amount: "600",
      productCode: "198798dslkjf",
    },
    {
      img: "/assets/images/img4.jpeg",
      title: "Batteries",
      amount: "600",
      productCode: "198798dslkjf",
    },
    {
      img: "/assets/images/img5.jpeg",
      title: "Batteries",
      amount: "600",
      productCode: "198798dslkjf",
    },
    {
      img: "/assets/images/img6.jpeg",
      title: "Batteries",
      amount: "600",
      productCode: "198798dslkjf",
    },
    {
      img: "/assets/images/img1.jpeg",
      title: "Batteries",
      amount: "600",
      productCode: "198798dslkjf",
    },
    {
      img: "/assets/images/img2.jpeg",
      title: "Batteries",
      amount: "600",
      productCode: "198798dslkjf",
    },
    {
      img: "/assets/images/img3.jpeg",
      title: "Batteries",
      amount: "600",
      productCode: "198798dslkjf",
    },
    {
      img: "/assets/images/img4.jpeg",
      title: "Batteries",
      amount: "600",
      productCode: "198798dslkjf",
    },
    {
      img: "/assets/images/img5.jpeg",
      title: "Batteries",
      amount: "600",
      productCode: "198798dslkjf",
    },
  ];

  return (
    <div className="grid tablet:grid-cols-3 laptop:grid-cols-4 grid-cols-2 tablet:gap-8 gap-3 w-full">
      {listings.map((listing, index) => (
        <Product
          key={index}
          img={listing.img}
          title={listing.title}
          amount={listing.amount}
          productCode={listing.productCode}
        />
      ))}
    </div>
  );
};

export default ProductListing;
