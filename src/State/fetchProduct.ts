import axios from "axios";

const api = "http://localhost:4869/products";
export const fetchProducts = async () => {
  try {
    const response = await axios.get(api);
    console.log("response ", response);
  } catch (error) {
    console.log(error);
  }
};
