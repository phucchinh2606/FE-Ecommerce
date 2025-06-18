import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { teal } from "@mui/material/colors";
import { Button, Divider } from "@mui/material";

import {
  Add,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md border"
                alt=""
                src="https://file.hstatic.net/200000551679/file/la_roche-posay_nuoc_can_bang_da_nhay_cam__1__fddb5e0467b148c38b871666e33f2a7d_grande.jpg"
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md border"
              src="https://product.hstatic.net/200000551679/product/untitled-13-01_6a56a96c2be44eae847fdbf8e2f575d5_large.jpg"
              alt=""
            />
          </div>
        </section>
        <section>
          <h1 className="font-bold text-lg text-primary-color">Title</h1>
          <p className="text-gray-500 font-semibold">name product</p>
          <div className="flex justify-between items-center py-2 border px-3 mt-5 w-[180px]">
            <div className="flex w-1 items-center">
              <span>4</span>
              <StarIcon sx={{ color: teal[500], fontSize: "17px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>234 ratings</span>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">100000vnđ</span>
              <span className="thin-line-through text-gray-400">150000vnđ</span>
              <span className="text-primary-color font-semibold">30%</span>
            </div>
            <p className="text-sm">Freeship khi thanh toán online</p>
          </div>
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p>Chính hãng và đảm bảo chất lượng</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>Hoàn tiền lên đến 100%</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Miễn phí vận chuyển</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p>Thanh toán COD hoặc CardVisit</p>
            </div>
          </div>
          <div className="mt-7 space-y-2">
            <h1>Quantity</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button
                disabled={quantity == 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
            >
              Thêm vào giỏ hàng
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              Thêm vào yêu thích
            </Button>
          </div>
          <div>
            <p className="mt-5">
              Nước cân bằng La Roche-Posay Soothing Lotion Sensitive Skin với
              thành phần chính từ nước khoáng thiên nhiên, không cồn, không xà
              phòng giúp làm dịu da, cân bằng độ pH và dưỡng ẩm cực tốt cho
              những làn da siêu mẫn cảm.
            </p>
          </div>
          <div className="mt-12 space-y-5">
            <ReviewCard />
            <Divider />
          </div>
        </section>
      </div>
      <div className="mt-20">
        <h1 className="text-lg font-bold">Sản phẩm tương tự</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
