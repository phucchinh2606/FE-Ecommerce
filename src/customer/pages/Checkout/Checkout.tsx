import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import PricingCart from "../Cart/PricingCart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const paymentGatewayList = [
  {
    value: "VNPAY",
    image:
      "data:image/png;base64,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",
    label: "",
  },
  {
    value: "STRIPE",
    image:
      "data:image/jpeg;base64,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",
    label: "",
  },
];

const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paymentGateway, setPaymentGateway] = useState("VNPAY");
  const handlePaymentChange = (e: any) => {
    setPaymentGateway(e.target.value);
  };
  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Chọn địa chỉ</h1>
              <Button onClick={handleOpen}>Thêm địa chỉ</Button>
            </div>
            <div className="text-xs font-medium space-y-5">
              <p>Địa chỉ đã lưu</p>
              <div className="space-y-5">
                {[1, 1, 1].map((item) => (
                  <AddressCard />
                ))}
              </div>
            </div>
            <div className="py-4 px-5 rounded-md border">
              <Button onClick={handleOpen}>Thêm địa chỉ</Button>
            </div>
          </div>
          <div>
            <div>
              <div className="space-y-3 border p-5 rounded-md">
                <h1 className="text-primary-color font-medium pb-2 text-center">
                  Chọn cổng thanh toán
                </h1>
                <RadioGroup
                  className="flex justify-between pr-0"
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={handlePaymentChange}
                  value={paymentGateway}
                >
                  {paymentGatewayList.map((item) => (
                    <FormControlLabel
                      className="border w-[45%] pr-2 rounded-md flex justify-center"
                      value={item.value}
                      control={<Radio />}
                      label={
                        <img
                          className={`${
                            item.value == "stripe" ? "w-14" : ""
                          } object-cover`}
                          src={item.image}
                          alt={item.label}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className="border rounded-md">
              <PricingCart />
              <div className="p-5">
                <Button sx={{ py: "11px" }} variant="contained" fullWidth>
                  Thanh toán
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm paymentGateway={paymentGateway} />
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;
