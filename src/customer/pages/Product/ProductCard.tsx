import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const images = [
  "https://product.hstatic.net/200000551679/product/untitled-16-06_aacd891e6b954a7999e355123442b139_grande.jpg",
  "https://file.hstatic.net/200000551679/file/mc_minh_ha_1_94f5d7f4e1ff4a01a133e38d61f122c3_grande.png",
  "https://file.hstatic.net/200000551679/file/photo_2022-06-02_16-04-32_88973c036519496782b3717a89768373_grande.jpg",
  "https://product.hstatic.net/200000551679/product/z6495019694860_38c3e44d360b17c475d3365eeef961c7_d4faf4ab541343ad9c0f700df15e44b9_1024x1024.jpg",
];
const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered]);
  return (
    <>
      <div className="group px-4 relative overflow-hidden">
        <div
          className="card relative overflow-hidden h-[300px] w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((item, index) => (
            <img
              key={index}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300"
              src={item}
              alt=""
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}

          {isHovered && (
            <div className="indicator flex flex-col items-center space-y-2 absolute bottom-4 right-4 z-10">
              <div className="flex gap-3">
                <Button variant="contained" color="secondary">
                  <Favorite sx={{ color: teal[500] }} />
                </Button>
                <Button variant="contained" color="secondary">
                  <ModeComment sx={{ color: teal[500] }} />
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>COCAYHOALA</h1>
            <p>Dầu gội thảo dược</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">100000 vnđ</span>
            <span className="thin-line-through text-gray-400">120000 vnđ</span>
            <span className="text-primary-color">17%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
