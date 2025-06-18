import React from "react";

const DealCart = () => {
  return (
    <div className="w-[13rem] cursor-pointer">
      <img
        className="border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top"
        src="https://product.hstatic.net/200000551679/product/1_9a902ed946f545cfa47ba19439bfdddf_large.png"
        alt=""
      />
      <div className="border-4 border-black bg-black text-white p-2 text-center">
        <p className="text-lg font-semibold">Mặt nạ giấy</p>
        <p className="text-2xl font-bold">10% off</p>
        <p className="text-balance text-lg">Mua ngay</p>
      </div>
    </div>
  );
};

export default DealCart;
