import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import BecomeSeller from "./BecomeSeller";
import BecomeSellerFormStep1 from "./BecomeSellerFormStep1";
import { useFormik } from "formik";
import BecomeSellerFormStep2 from "./BecomeSellerFormStep2";
import BecomeSellerFormStep3 from "./BecomeSellerFormStep3";
import BecomeSellerFormStep4 from "./BecomeSellerFormStep4";

const steps = [
  "chi tiết thuế và điện thoại di động",
  "địa chỉ nhận hàng",
  "chi tiết ngân hàng",
  "chi tiết nhà cung cấp",
];
const SellerAccountForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleStep = (value: number) => () => {
    (activeStep < steps.length - 1 || (activeStep > 0 && value == -1)) &&
      setActiveStep(activeStep + value);
    activeStep == steps.length - 1 && handleCreateAccount();
  };
  const handleCreateAccount = () => {};
  const formik = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
      gstin: "",
      pickupAddress: {
        name: "",
        mobile: "",
        pincode: "",
        address: "",
        locality: "",
        city: "",
        state: "",
      },
      bankDetails: {
        accountNumber: "",
        ifscCode: "",
        accountHolderName: "",
      },
      sellerName: "",
      email: "",
      businessDetails: {
        businessName: "",
        businessEmail: "",
        businessMobile: "",
        logo: "",
        banner: "",
        businessAddress: "",
      },
      password: "",
    },
    onSubmit: (values) => {},
  });
  return (
    <div>
      <Stepper className="mt-10" activeStep={activeStep} alternativeLabel>
        {steps.map((lable, index) => (
          <Step key={lable}>
            <StepLabel>{lable}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <section className="mt-20 space-y-10 p-5">
        <div>
          {activeStep == 0 ? (
            <BecomeSellerFormStep1 formik={formik} />
          ) : activeStep == 1 ? (
            <BecomeSellerFormStep2 formik={formik} />
          ) : activeStep == 2 ? (
            <BecomeSellerFormStep3 formik={formik} />
          ) : (
            <BecomeSellerFormStep4 formik={formik} />
          )}
        </div>
        <div className="flex items-center justify-between">
          <Button
            onClick={handleStep(-1)}
            variant="contained"
            disabled={activeStep == 0}
          >
            Back
          </Button>
          <Button onClick={handleStep(1)} variant="contained">
            {activeStep == steps.length - 1 ? "Create Account" : "Continue"}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SellerAccountForm;
