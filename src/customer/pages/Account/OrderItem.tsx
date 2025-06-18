import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-primary-color">Chưa thanh toán</h1>
          <p>Ngày dự kiến giao hàng 10/6/2025</p>
        </div>
      </div>
      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
          <img
            className="w-[70px]"
            src="https://product.hstatic.net/200000551679/product/ay_da_chet_ca_phe_dak_lak_200ml_8baa54c46758467f9a507412c88c2305_large_e9ca101e96f2468f9a9baa52762fcc89_large.png"
            alt=""
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">Tẩy da chết cơ thể</h1>
          <p>
            [01.06 - 30.06] Mua 1 Cocoon Tẩy da chết cà phê Đak Lak (200ml)
            (IP02) Tặng 1 QT Cocoon Tẩy da chết cà phê Đak Lak (200ml) (IP02)
          </p>
          <p>
            <strong>Size: </strong>none
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
