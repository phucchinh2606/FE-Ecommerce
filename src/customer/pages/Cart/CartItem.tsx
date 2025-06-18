import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import React from "react";

const CartItem = () => {
  const handleUpdateQuantity = () => {};
  return (
    <div className="border rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src="https://product.hstatic.net/200000551679/product/glamrr_q-06_f05e1b3da76a4183b34efe46c52f8565_large.jpg"
            alt=""
          />
        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-lg">Horus kẻ mắt</h1>
          <p className="text-gray-400 font-medium text-sm">
            Horus Kẻ mắt 4everyoung Colorful Gel Eyeliner 0.1g
          </p>
          <p className="text-gray-400 text-xs">
            <strong>Sold by: </strong>Horus
          </p>
          <p className="text-sm">Đổi trả trong vòng 15 ngày</p>
          <p className="text-sm text-gray-500">
            <strong>Số lượng:</strong> 5
          </p>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button onClick={handleUpdateQuantity} disabled={true}>
              <Remove />
            </Button>
            <span>{5}</span>
            <Button onClick={handleUpdateQuantity}>
              <Add />
            </Button>
          </div>
        </div>

        <div className="pr-5">
          <p className="text-gray-700 font-medium">200000 vnđ</p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton color="primary">
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
