import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Wishlist, WishListState } from "../../types/wishListTypes";
import { api } from "../../config/Api";

const initialState: WishListState = {
  wishlist: null,
  loading: false,
  error: null,
};

export const getWishlistByUserId = createAsyncThunk(
  "wishlist/getWishlistByUserId",
  async (_, { rejectWithValue }) => {
    try {
      const jwt = localStorage.getItem("jwt");
      if (!jwt) {
        return rejectWithValue("Vui lòng đăng nhập để xem danh sách yêu thích");
      }

      const response = await api.get(`api/wishlists`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      return response.data;
    } catch (error: any) {
      console.log("error ", error);
      if (error.response?.status === 401) {
        // JWT token hết hạn hoặc không hợp lệ
        localStorage.removeItem("jwt");
        return rejectWithValue(
          "Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại"
        );
      }
      return rejectWithValue(
        error.response?.data.message || "failed to fetch wishlist"
      );
    }
  }
);

export const addProductToWishlist = createAsyncThunk(
  "wishlist/addProductToWishlist",
  async ({ productId }: { productId: number }, { rejectWithValue }) => {
    try {
      const jwt = localStorage.getItem("jwt");
      if (!jwt) {
        return rejectWithValue(
          "Vui lòng đăng nhập để thêm sản phẩm vào danh sách yêu thích"
        );
      }

      const response = await api.post(
        `api/wishlists/add-product/${productId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("add product ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error);
      if (error.response?.status === 401) {
        // JWT token hết hạn hoặc không hợp lệ
        localStorage.removeItem("jwt");
        return rejectWithValue(
          "Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại"
        );
      }
      return rejectWithValue(
        error.response?.data.message || "failed to add product to wishlist"
      );
    }
  }
);

//slice
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    resetWishlistState: (state) => {
      state.wishlist = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWishlistByUserId.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getWishlistByUserId.fulfilled,
      (state, action: PayloadAction<Wishlist>) => {
        state.wishlist = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(
      getWishlistByUserId.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
    //add product to wishlist
    builder.addCase(addProductToWishlist.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      addProductToWishlist.fulfilled,
      (state, action: PayloadAction<Wishlist>) => {
        state.wishlist = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(
      addProductToWishlist.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { resetWishlistState } = wishlistSlice.actions;
export default wishlistSlice.reducer;
