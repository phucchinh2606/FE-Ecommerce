import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../../data/sizes/color";
import { useSearchParams } from "react-router-dom";
import { teal } from "@mui/material/colors";
import { price } from "../../../data/sizes/price";
import { discount } from "../../../data/sizes/discount";

const FilterSection = () => {
  const [expandColor, setExpandColor] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleToogleColor = () => {
    setExpandColor(!expandColor);
  };

  const updateFilterParam = (e: any) => {
    const { value, name } = e.target;
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };
  const clearAllFilter = () => {
    searchParams.forEach((value: any, key: any) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams);
  };
  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
        <p className="text-lg font-semibold">Filters</p>
        <Button
          onClick={clearAllFilter}
          size="small"
          className="text-teal-600 cursor-pointer font-semibold"
        >
          Clear all
        </Button>
      </div>
      <Divider />
      <div className="px-9 space-y-6">
        {/* <section>
          <FormControl>
            <FormLabel className="text-2xl font-semibold" id="color">
              Color
            </FormLabel>
            <RadioGroup
              onChange={updateFilterParam}
              aria-labelledby="color"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {colors.slice(0, expandColor ? colors.length : 5).map((item) => (
                <FormControlLabel
                  value={item.name}
                  control={<Radio />}
                  label={
                    <div className="flex items-center gap-3">
                      <p>{item.name}</p>
                      <p
                        style={{ backgroundColor: item.hex }}
                        className={`h-5 w-5 rounded-full ${
                          item.name === "white" ? "border" : ""
                        }`}
                      ></p>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              onClick={handleToogleColor}
              className="text-primary-color cursor-pointer hover:text-teal-900 flex items-center"
            >
              {expandColor ? "Hide" : `+${colors.length - 5} more`}
            </button>
          </div>
        </section>
        <Divider /> */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                p: "14px",
                color: teal[600],
              }}
              className="text-2xl font-semibold"
              id="price"
            >
              Price
            </FormLabel>
            <RadioGroup
              onChange={updateFilterParam}
              aria-labelledby="price"
              defaultValue=""
              name="price"
            >
              {price.map((item, index) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>
        <Divider />
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                p: "14px",
                color: teal[600],
              }}
              className="text-2xl font-semibold"
              id="discount"
            >
              Discount
            </FormLabel>
            <RadioGroup
              onChange={updateFilterParam}
              aria-labelledby="discount"
              defaultValue=""
              name="discount"
            >
              {discount.map((item, index) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>
      </div>
    </div>
  );
};

export default FilterSection;
