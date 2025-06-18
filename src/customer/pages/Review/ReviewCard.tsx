import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid2, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid2 container spacing={9}>
        <Grid2 size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            ></Avatar>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">PhucChinh</p>
              <p className="opacity-70">07-06-2025 17:39</p>
            </div>
          </div>
          <Rating readOnly value={4.5} precision={0.5} />
          <p>Sản phẩm tốt, dùng rất thích</p>
          <div>
            <img
              className="w-24 h-24 object-cover"
              src="https://down-vn.img.susercontent.com/file/vn-11134103-7qukw-lf7twmdo33iid7@resize_w144_nl.webp"
              alt=""
            />
          </div>
        </Grid2>
      </Grid2>
      <div>
        <IconButton>
          <Delete sx={{ color: red[700] }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
