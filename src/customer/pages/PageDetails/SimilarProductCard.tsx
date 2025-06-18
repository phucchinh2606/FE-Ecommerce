import React from "react";

const SimilarProductCard = () => {
  return (
    <div>
      <div className="group px-4 relative overflow-hidden">
        <div className="card relative overflow-hidden h-[300px] w-full">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300"
            src="https://product.hstatic.net/200000551679/product/untitled-18-03_c09c3678763c43d9a084db046347a723_large.jpg"
            alt=""
          />
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
    </div>
  );
};

export default SimilarProductCard;
