import { Radio } from "@mui/material";
import React from "react";

const AddressCard = () => {
  const handleChange = (e: any) => {
    console.log(e.target.checked);
  };
  return (
    <div className="p-5 border rounded-md flex">
      <div>
        <Radio
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-button"
        />
      </div>
      <div>
        <h1 className="space-y-3">PhucChinh</h1>
        <p className="w-[320px]">Lien Ha Dong Anh Ha Noi</p>
        <p>
          <strong>Số điện thoại: </strong>
          0123456789
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
