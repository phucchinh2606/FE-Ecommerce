import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../State/Store";
import { paymentSuccess } from "../../State/customer/orderSlice";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { orderId } = useParams();
  const getQueryParams = (key: string) => {
    const query = new URLSearchParams(location.search);
    return query.get(key);
  };
  useEffect(() => {
    const paymentId = getQueryParams("razorpay_payment_id");
    const paymentLinkId = getQueryParams("razorpay_payment_link_id");
    dispatch(
      paymentSuccess({
        paymentId: paymentId || "",
        jwt: localStorage.getItem("jwt") || "",
        paymentLinkId: paymentLinkId || "",
      })
    );
  }, [orderId]);
  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <div
        className="bg-primary-color text-white p-8 w-[90%] lg:w-[25%] border rounded-md h-[40vh]
      flex flex-col gap-7 items-center justify-center"
      >
        <h1 className="text-3xl font-semibold">Chúc mừng</h1>
        <h1 className="text-2xl font-semibold">Đơn hàng được đặt thành công</h1>
        <div>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => navigate("/")}
          >
            Mua thêm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
