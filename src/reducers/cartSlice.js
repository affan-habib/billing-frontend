// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.itemList.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantityOrdered++;
      } else {
        state.itemList.push({ ...action.payload, quantityOrdered: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.itemList.find(
        (item) => item.id === action.payload
      );
      item.quantityOrdered++;
    },
    decrementQuantity: (state, action) => {
      const item = state.itemList.find(
        (item) => item.id === action.payload
      );
      if (item.quantityOrdered === 1) {
        item.quantityOrdered = 1;
      } else {
        item.quantityOrdered--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.itemList.filter(
        (item) => item.id !== action.payload
      );
      state.itemList = removeItem;
    },
    setField: (state, action) => {
      state[`${action.payload.field}`] = action.payload.value;
    },
    clearCart: (state) => {
      state.itemList = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  setField,
  clearCart,
} = cartSlice.actions;
