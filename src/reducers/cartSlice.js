// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    date: "10-10-10",
    billFrom: "OPD",
    term: 1,
    payer: "Affan Habib",
    billNo: "452154785",
    referredBy: "Dr. Kabir hossain",
    agent: "Popular hospital",
    finalPrice: 0,
    finalDiscount: 0,
    advance: 0,
    customerId: 62,
    facilityId: 76,
    patientId: 82,
    sponsorBy: "string",
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
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
