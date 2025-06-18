import React from "react";

const CategoryGrid = () => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className="col-span-3 row-span-12 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md border border-primary-color"
          src="https://product.hstatic.net/200000551679/product/combo-02_fa642b7cd824494188153a119abe1f6a_large.jpg"
          alt="Dầu gội"
        />
      </div>
      <div className="col-span-2 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md border border-primary-color"
          src="https://product.hstatic.net/200000551679/product/z6653848075239_9a95b4e48a4fd36ee07942b86e737d5f_f1f911f8b0ee49cd9b9c441844cecc92_large.jpg"
          alt="Gel rửa mặt"
        />
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md border border-primary-color"
          src="https://product.hstatic.net/200000551679/product/untitled_604ac462e28b4c079599b27ac5ec2ea1_large.png"
          alt="Phấn nước kiềm dầu"
        />
      </div>
      <div className="col-span-3 row-span-12 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md border border-primary-color"
          src="https://product.hstatic.net/200000551679/product/untitled-14-04_983c718850964c41ae21687355ca0fcb_large.jpg"
          alt="Kem nền"
        />
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md border border-primary-color"
          src="https://product.hstatic.net/200000551679/product/vn-11134207-7ras8-m0jtgthql0gf08_a65b4cfee2ba4fb59775c95507cfb038_large.jpg"
          alt="sữa tắm"
        />
      </div>
      <div className="col-span-2 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md border border-primary-color"
          src="https://product.hstatic.net/200000551679/product/main_02-2-600x600_252b4e12c0a74808b52e4b1d0cbaacae_large.jpg"
          alt="Nước hoa hồng"
        />
      </div>
    </div>
  );
};

export default CategoryGrid;
