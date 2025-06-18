import { Box, Button, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import { Payments } from "@mui/icons-material";

const OrderDetail = () => {
  const navigate = useNavigate();
  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[100px]"
          src={
            "https://product.hstatic.net/200000551679/product/lemonade_son_kem_perfect_couple_lip_-_5_years_2019_3e748b66c3f24357a5031261d53edce7_1024x1024.jpg"
          }
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">
            {"Lemonade Son kem Perfect Couple Lip - 5 years"}
          </h1>
          <p>
            Son kem Lemonade Perfect Couple Lip - 5 years là bộ sưu tập kỷ niệm
            5 năm tuổi của Lemonade với bộ đôi Perfect Couple Lip và Perfect
            Couple Blush.
          </p>
          <p>
            <strong>Size: </strong>M
          </p>
        </div>
        <div>
          <Button onClick={() => navigate(`reviews/${5}/create`)}>
            Đánh giá
          </Button>
        </div>
      </section>
      <section className="border p-5">
        <OrderStepper orderStatus={"SHIPPED"} />
      </section>
      <div className="border p-5">
        <h1 className="font-bold pb-3">Địa chỉ giao hàng</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p>{"Phuc Chinh"}</p>
            <Divider flexItem orientation="vertical" />
            <p>{"0984612345"}</p>
          </div>
          <p>Đông Anh Hà Nội - 100000</p>
        </div>
      </div>
      <div className="border space-y-4">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">Tổng tiền</p>
            <p>
              Bạn tiết kiệm được{" "}
              <span className="text-green-500 font-medium text-xs">
                15000 vnđ
              </span>{" "}
              cho sản phẩm này
            </p>
          </div>
          <p className="font-medium">{"100000 vnđ"}</p>
        </div>
        <div className="px-5">
          <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
            <Payments />
            <p>Thanh toán khi nhận hàng</p>
          </div>
        </div>
        <Divider />
        <div className="px-5 pb-5">
          <p className="text-xs">
            <strong>Được bán bởi: </strong>
            {"Sammi Shop"}
          </p>
        </div>
        <div className="p-10">
          <Button
            disabled={false}
            color="error"
            sx={{ py: "0.7rem" }}
            variant="outlined"
            fullWidth
          >
            {false ? "đơn hàng đã bị hủy" : "Hủy đơn hàng"}
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OrderDetail;
