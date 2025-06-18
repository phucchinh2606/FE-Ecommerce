import React from "react";
import "./ShopByCategory.css";

const ShopByCategoryCard = () => {
  return (
    <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
      <div className="custom-border w-[150px] h-[150px] rounded-full lg:w-[249px] lg:h-[249px] bg-primary-color">
        <img
          className="rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full"
          src="https://product.hstatic.net/200000551679/product/1_d23c31fd0a3a40ec8435f975f48b3a69_large.png"
          alt=""
        />
      </div>
      <h1>Trang điểm</h1>
    </div>
  );
};

export default ShopByCategoryCard;
