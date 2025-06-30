import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Product } from "../../types/ProductTypes";

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId: any, { rejectWithValue }) => {
    try {
      const response = await api.get(`/products/${productId}`);
      const data = response.data;
      console.log("data: ", data);
      return data;
    } catch (error: any) {
      console.log("error ", error);
      rejectWithValue(error.message);
    }
  }
);

export const searchProduct = createAsyncThunk(
  "products/searchProduct",
  async (query, { rejectWithValue }) => {
    try {
      const response = await api.get(`/products/search`, {
        params: {
          query,
        },
      });
      const data = response.data;
      console.log("search product data: ", data);
      return data;
    } catch (error: any) {
      console.log("error ", error);
      rejectWithValue(error.message);
    }
  }
);

export const fetchAllProducts = createAsyncThunk<any, any>(
  "products/fetchAllProducts",
  async (params, { rejectWithValue }) => {
    try {
      console.log("Sending request with params:", params);
      const response = await api.get(`/products`, {
        params: {
          ...params,
          pageNumber: params.pageNumber || 0,
        },
      });
      const data = response.data;
      console.log("All product data: ", data);
      console.log("Response structure:", {
        hasContent: !!data.content,
        isArray: Array.isArray(data),
        keys: Object.keys(data),
        contentLength: data.content?.length,
        totalElements: data.totalElements,
        totalPages: data.totalPages,
      });
      return data;
    } catch (error: any) {
      console.log("API Error:", error);
      console.log("Error response:", error.response?.data);
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch products"
      );
    }
  }
);

interface ProductState {
  product: Product | null;
  products: Product[];
  totalPages: number;
  loading: boolean;
  error: string | null | undefined | any;
  searchProduct: Product[];
}

const initialState: ProductState = {
  product: null,
  products: [],
  totalPages: 1,
  loading: false,
  error: null,
  searchProduct: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      // Handle both Page object and direct array response
      if (action.payload && action.payload.content) {
        state.products = action.payload.content;
        state.totalPages = action.payload.totalPages || 1;
      } else if (Array.isArray(action.payload)) {
        state.products = action.payload;
        state.totalPages = 1;
      } else {
        state.products = [];
        state.totalPages = 1;
      }
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //
    builder.addCase(searchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.searchProduct = action.payload;
    });
    builder.addCase(searchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
