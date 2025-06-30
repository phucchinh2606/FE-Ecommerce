import React, { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchAllProducts } from "../../../State/customer/ProductSlice";
import { useParams, useSearchParams } from "react-router-dom";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();
  const { product } = useAppSelector((store) => store);

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    const priceParam = searchParams.get("price");
    const color = searchParams.get("color");
    const discountParam = searchParams.get("discount");

    let minPrice, maxPrice, minDiscount;

    // Xử lý price filter
    if (priceParam) {
      if (priceParam.includes(" - ")) {
        // Format: "50000 - 100000"
        const [min, max] = priceParam.split(" - ");
        minPrice = Number(min);
        maxPrice = Number(max);
      } else if (priceParam === "50000") {
        // Dưới 50k
        minPrice = 0;
        maxPrice = 50000;
      } else if (priceParam === "300000") {
        // Trên 300k
        minPrice = 300000;
        maxPrice = undefined;
      }
    }

    // Xử lý discount filter
    if (discountParam) {
      minDiscount = Number(discountParam);
    }

    const pageNumber = page - 1;

    // Chỉ gửi các tham số có giá trị
    const newFilter: any = {
      pageNumber,
    };

    if (color && color.trim() !== "") {
      newFilter.color = color;
    }

    if (minPrice !== undefined) {
      newFilter.minPrice = minPrice;
    }

    if (maxPrice !== undefined) {
      newFilter.maxPrice = maxPrice;
    }

    if (minDiscount !== undefined) {
      newFilter.minDiscount = minDiscount;
    }

    console.log("Filter params:", newFilter);
    console.log(
      "Current searchParams:",
      Object.fromEntries(searchParams.entries())
    );
    dispatch(fetchAllProducts(newFilter));
  }, [category, searchParams, dispatch, page]);

  // Load tất cả sản phẩm khi component mount lần đầu
  useEffect(() => {
    if (product.products.length === 0 && !product.loading) {
      console.log("Loading all products on mount");
      dispatch(fetchAllProducts({ pageNumber: 0 }));
    }
  }, []);

  // Debug: Log current state
  console.log("Current products:", product.products.length);
  console.log("Loading:", product.loading);
  console.log("Error:", product.error);

  return (
    <div className="-z-10 mt-10">
      <div>
        <h1 className="text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2">
          Women Items
        </h1>
      </div>
      <div className="lg:flex">
        <section className="filter_section hidden lg:block w-[20%]">
          <FilterSection />
        </section>
        <div className="w-full lg:w-[80%] space-y-5">
          <div className="flex justify-between items-center px-9 h-[40px]">
            <div className="relative w-[50%]">
              {!isLarge && (
                <IconButton>
                  <FilterAlt />
                </IconButton>
              )}
              {!isLarge && (
                <Box>
                  <FilterSection />
                </Box>
              )}
            </div>
            <FormControl size="small" sx={{ width: "200px" }}>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort"
                onChange={handleSortChange}
              >
                <MenuItem value={"Price_low"}>Low to High</MenuItem>
                <MenuItem value={"Price_high"}>High to Low</MenuItem>
                {/* <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </div>
          <Divider />

          {/* Loading state */}
          {product.loading && (
            <div className="flex justify-center py-10">
              <p>Loading products...</p>
            </div>
          )}

          {/* Error state */}
          {product.error && (
            <div className="flex justify-center py-10">
              <p className="text-red-500">Error: {product.error}</p>
            </div>
          )}

          {/* Products section */}
          <section className="products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
            {product.products.length > 0
              ? product.products.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))
              : !product.loading && (
                  <div className="col-span-full text-center py-10">
                    <p>No products found with current filters</p>
                  </div>
                )}
          </section>

          <div className="flex justify-center py-10">
            <Pagination
              onChange={(e, value) => handlePageChange(value)}
              count={product.totalPages || 1}
              variant="outlined"
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
