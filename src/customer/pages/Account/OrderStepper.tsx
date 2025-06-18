import {
  CheckCircle,
  CheckCircleOutline,
  FiberManualRecord,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const steps = [
  { name: "Order placed", description: "Thứ 3 10/6", value: "PLACED" },
  {
    name: "Packed",
    description: "NGười bán đang chuẩn bị hàng",
    value: "CONFIRM",
  },
  { name: "Shipped", description: "Thứ 4 11/6", value: "SHIPPED" },
  { name: "Arriving", description: "Thú 5 12/6", value: "ARRIVING" },
  { name: "Arrived", description: "Thứ 6 13/6", value: "DELIVERED" },
];

const canceledStep = [
  { name: "Order placed", description: "Thứ 3 10/6", value: "PLACED" },
  { name: "Order canceled", description: "Thứ 3 10/6", value: "CANCELED" },
];

const currentStep = 2;

const OrderStepper = ({ orderStatus }: any) => {
  const [statusStep, setStatusStep] = useState(steps);
  useEffect(() => {
    if (orderStatus === "CANCELED") {
      setStatusStep(canceledStep);
    } else {
      setStatusStep(steps);
    }
  }, [orderStatus]);
  return (
    <Box className="mx-auto my-10">
      {statusStep.map((step, index) => (
        <>
          <div key={index} className={`flex px-4`}>
            <div className="flex flex-col items-center">
              <Box
                sx={{ zIndex: -1 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                  // index <= currentStep
                  //   ? "bg-gray-200 text-teal-500"
                  //   : "bg-gray-300 text-teal-600"
                  index < currentStep
                    ? "bg-gray-200 text-teal-500"
                    : index === currentStep
                    ? "bg-gray-200 text-teal-500"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {step.value === orderStatus ? (
                  <CheckCircle />
                ) : (
                  <FiberManualRecord sx={{ zIndex: -1 }} />
                )}
                {/* {index < currentStep ? (
                  <CheckCircle fontSize="small" />
                ) : index === currentStep ? (
                  <CheckCircleOutline fontSize="small" />
                ) : (
                  <FiberManualRecord fontSize="small" />
                )} */}
              </Box>
              {statusStep.length - 1 != index && (
                <div
                  className={`border h-20 w-[2px] ${
                    index < currentStep
                      ? "bg-primary-color"
                      : "bg-gray-300 text-gray-600"
                  }`}
                ></div>
              )}
            </div>
            <div className={`ml-2 w-full`}>
              <div
                className={`${
                  step.value === orderStatus
                    ? "bg-primary-color p-2 text-white font-medium rounded-md -translate-y-3"
                    : ""
                } ${
                  orderStatus === "CANCELED" && step.value === orderStatus
                    ? "bg-red-500"
                    : ""
                } w-full`}
              >
                <p className={``}>{step.name}</p>
                <p
                  className={`${
                    step.value === orderStatus
                      ? "text-gray-200"
                      : "text-gray-500"
                  } text-xs`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </Box>
  );
};

export default OrderStepper;
