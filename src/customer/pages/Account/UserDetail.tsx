import React from "react";
import ProfileFieldCard from "../../../component/ProfileFieldCard";
import { Divider } from "@mui/material";

const UserDetail = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
        </div>
        <div className="">
          <ProfileFieldCard keys="Name" value={"Phuc Chinh"} />
          <Divider />
          <ProfileFieldCard keys="Email" value={"chinhdo266@gmail.com"} />
          <Divider />
          <ProfileFieldCard keys="Mobile" value={"0984235493"} />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
