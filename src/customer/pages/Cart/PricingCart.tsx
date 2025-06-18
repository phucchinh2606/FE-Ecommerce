import { Divider } from "@mui/material";
import React from "react";

const PricingCart = () => {
  return (
    <>
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center">
          <span>Giá sản phẩm</span>
          <span>100000 vnđ</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Giảm</span>
          <span>20000 vnđ</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Phí ship</span>
          <span>0 vnđ</span>
        </div>
        {/* <div className="flex justify-between items-center">
          <span>Phí sàn</span>
          <span>0 vnđ</span>
        </div> */}
      </div>
      <Divider />
      <div className="flex justify-between items-center p-5 text-primary-color">
        <span>Tổng</span>
        <span>80000 vnđ</span>
      </div>
    </>
  );
};

export default PricingCart;
