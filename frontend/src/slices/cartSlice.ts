import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")!)
  : {
      items: [],
      shippingAddress: {},
      paymentMethod: "PayPal",
      totalQuantity: 0,
    };

const cartSlice = createSlice({
  name: "cart",
  reducerPath: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      if (!existingItem) {
        state.items.push({
          _id: newItem._id,
          price: newItem.price,
          name: newItem.name,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
          image: newItem.image,
          countInStock: newItem.countInStock,
        });
      } else {
        existingItem.quantity = newItem.quantity;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * newItem.quantity;
      }

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      const _id = action.payload;

      state.items = state.items.filter((item) => item._id !== _id);

      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    clearCartItems: (state) => {
      state.items = [];
      updateCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
} = cartSlice.actions; // ✅ Correct export
export default cartSlice.reducer;
