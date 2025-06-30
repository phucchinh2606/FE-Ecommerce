import React, { useEffect } from "react";
import OrderItem from "./OrderItemCard";
import OrderDetail from "./OrderDetail";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchUserOrderHistory } from "../../../State/customer/orderSlice";

const Order = () => {
  const dispatch = useAppDispatch();
  const { order } = useAppSelector((store) => store);
  useEffect(() => {
    dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""));
  }, []);
  return (
    <div className="text-sm min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">All orders</h1>
        <p>from any time</p>
      </div>
      <div className="space-y-2">
        {order.orders.map((order) =>
          order.orderItems.map((item) => (
            <OrderItem order={order} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Order;
