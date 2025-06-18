import { Button, Card, Divider } from "@mui/material";
import React from "react";
import TransactionTable from "./Transaction";

const Payment = () => {
  return (
    <div className="space-y-5">
      <Card className="rounded-md space-y-4 p-5">
        <h1 className="text-gray-600 font-medium">Total Earning</h1>
        <h1 className="text-xl pb-1 font-bold">1000000 vnđ</h1>
        <Divider />
        <p className="text-gray-600 font-medium pt-1">
          Last payment: <strong>0 vnđ</strong>
        </p>
      </Card>
      <div className="pt-20 space-y-3">
        <Button variant="contained">Transaction</Button>
        <TransactionTable />
      </div>
    </div>
  );
};

export default Payment;
