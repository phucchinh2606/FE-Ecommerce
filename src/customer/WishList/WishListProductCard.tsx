import React from "react";
import { Product } from "../../types/ProductTypes";
import { Close } from "@mui/icons-material";
import { useAppDispatch } from "../../State/Store";
import { addProductToWishlist } from "../../State/customer/wishlistSlice";
import { teal } from "@mui/material/colors";

const WishListProductCard = ({ item }: { item: Product }) => {
  const dispatch = useAppDispatch();
  const handleWishList = () => {
    // event.stopProbagation();
    item.id && dispatch(addProductToWishlist({ productId: item.id }));
  };
  return (
    <div className="w-60 relative">
      <div className="w-full">
        <img src={item.images[0]} className="object-top w-full" alt="" />
      </div>
      <div className="pt-3 space-y-1 rounded-md">
        <p>{item.title}</p>
        <div className="price flex items-center gap-3">
          <span className="font-sans text-gray-800">
            {item.sellingPrice} VNĐ
          </span>
          <span className="thin-line-through text-gray-400">
            {item.mrpPrice} VNĐ
          </span>
          <span className="text-primary-color">{item.discountPercent}%</span>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <button onClick={handleWishList}>
          <Close
            className="cursor-pointer bg-white rounded-full p-1"
            sx={{ color: teal[500], fontSize: "2rem" }}
          />
        </button>
      </div>
    </div>
  );
};

export default WishListProductCard;
