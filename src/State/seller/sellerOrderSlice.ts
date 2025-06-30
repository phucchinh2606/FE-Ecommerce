import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderStatus } from "../../types/orderTypes";
import { api } from "../../config/Api";

interface SellerOrderState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: SellerOrderState = {
  orders: [],
  loading: false,
  error: null,
};

export const fetchSellerOrders = createAsyncThunk<Order[], string>(
  "sellerOrders/fetchSellerOrders",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/sellers/orders`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("fetch Seller Orders", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error", error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateOrderStatus = createAsyncThunk<
  Order,
  { orderId: string; orderStatus: OrderStatus; jwt: string }
>(
  "sellerOrders/updateOrderStatus",
  async ({ orderId, orderStatus, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.patch(
        `/api/sellers/orders/${orderId}/status/${orderStatus}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("updated Order Status", response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteOrder = createAsyncThunk<
  any,
  { orderId: number; jwt: string }
>("sellerOrders/deleteOrder", async ({ orderId, jwt }, { rejectWithValue }) => {
  try {
    const response = await api.delete(`/api/sellers/orders/${orderId}/delete`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

const sellerOrderSlice = createSlice({
  name: "sellerOrders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSellerOrders.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchSellerOrders.fulfilled,
      (state, action: PayloadAction<Order[]>) => {
        state.loading = false;
        state.orders = action.payload;
      }
    );
    builder.addCase(fetchSellerOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    //
    builder.addCase(updateOrderStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      updateOrderStatus.fulfilled,
      (state, action: PayloadAction<Order>) => {
        state.loading = false;
        const index = state.orders.findIndex(
          (order) => order.id === action.payload.id
        );
        if (index !== -1) {
          state.orders[index] = action.payload;
        }
      }
    );
    builder.addCase(updateOrderStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    //
    builder.addCase(deleteOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = state.orders.filter(
        (order) => order.id !== action.meta.arg.orderId
      );
    });
    builder.addCase(deleteOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});
export default sellerOrderSlice.reducer;
