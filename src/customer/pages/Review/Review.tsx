import React from "react";
import "../Product/ProductCard.css";
import ReviewCard from "./ReviewCard";
import { Divider } from "@mui/material";

const Review = () => {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className=" w-full md:w-1/2 lg:w-[30%] space-y-2">
        <img
          src="https://product.hstatic.net/200000551679/product/untitled-1-03_e5331ad0fc5a40c9bbf8db9a8e9972f5_large.jpg"
          alt=""
        />
        <div>
          <div>
            <p className="font-bold text-xl">Serum</p>
            <p className="text-lg text-gray-600">Oh Oh 20%</p>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">100000vnđ</span>
              <span className="thin-line-through text-gray-400">150000vnđ</span>
              <span className="text-primary-color font-semibold">30%</span>
            </div>
            <p className="text-sm">Freeship khi thanh toán online</p>
          </div>
        </div>
      </section>
      <section className="space-y-5 w-full">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <div className="space-y-3">
            <ReviewCard />
            <Divider />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Review;
