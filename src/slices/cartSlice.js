import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existedItem = state.cartItems.find((x) => x._id === item._id);

      if (existedItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existedItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      //   state.cartItems = action.payload;
    },
    removeFromCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
