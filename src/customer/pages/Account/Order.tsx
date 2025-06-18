import React from "react";
import OrderItem from "./OrderItem";
import OrderDetail from "./OrderDetail";

const Order = () => {
  return (
    <div className="text-sm min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">All orders</h1>
        <p>from any time</p>
      </div>
      <div className="space-y-2">
        {[1, 1, 1, 1, 1].map((item) => (
          // <OrderItem />
          <OrderDetail />
        ))}
      </div>
    </div>
  );
};

export default Order;
