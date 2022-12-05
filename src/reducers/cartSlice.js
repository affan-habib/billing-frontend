// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    discount: 0,
    advance: 0,
    orderDetailList: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.orderDetailList.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantityOrdered++;
      } else {
        state.orderDetailList.push({ ...action.payload, quantityOrdered: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.orderDetailList.find(
        (item) => item.id === action.payload
      );
      item.quantityOrdered++;
    },
    decrementQuantity: (state, action) => {
      const item = state.orderDetailList.find(
        (item) => item.id === action.payload
      );
      if (item.quantityOrdered === 1) {
        item.quantityOrdered = 1;
      } else {
        item.quantityOrdered--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.orderDetailList.filter(
        (item) => item.id !== action.payload
      );
      state.orderDetailList = removeItem;
    },
    calculateTotal: (state, action) => {
      state[`${action.payload.field}`] = action.payload.value;
    },
    clearCart: (state) => {
      state.orderDetailList = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  calculateTotal,
  clearCart,
} = cartSlice.actions;
