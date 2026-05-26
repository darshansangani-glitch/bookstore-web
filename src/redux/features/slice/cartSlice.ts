import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cart: [
    {
      _id: "",
      author: "",
      book_name: "",
      category: "",
      src: "",
      orderType: "",
      rentPrice: 0,
      buyPrice: 0,
    },
  ],
  address_id: "",
};

const cartSlice = createSlice({
  name: "booksCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const findItemIndex = state.cart.findIndex(
        (cartItem) => cartItem._id === "",
      );
      if (findItemIndex >= 0) {
        state.cart.splice(findItemIndex, 1);
      }
      const itemId = action.payload._id;
      const index = state.cart.findIndex((item) => {
        if (item._id === itemId) {
          return 1;
        }
      });
      if (index >= 0) {
        toast.error("Item already Added");
      } else {
        state.cart.push(item);
        toast.success("Item added to cart");
      }
    },
    orderTypeChange: (state, action) => {
      const itemOrderType = action.payload.orderType;
      const itemId = action.payload._id;
      const index = state.cart.findIndex((item) => item._id === itemId);
      if (index < 0) return;
      if (itemOrderType === "Rent") {
        const filterRentBooks = state.cart.filter(
          (item) => item.orderType === "Rent",
        );
        if (filterRentBooks.length >= 2) {
          toast.error("You can only add 2 rent Books to the Cart");
          return;
        }
      }
      state.cart[index].orderType = itemOrderType;
    },
    addAddress: (state, action) => {
      const itemAddress = action.payload.address_id;
      state.address_id = itemAddress;
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const index = state.cart.findIndex((item) => item._id === itemId._id);
      if (index >= 0) {
        state.cart.splice(index, 1);
        toast.success("Item removed from cart");
      }
    },
  },
});

export const { addToCart, removeFromCart, orderTypeChange, addAddress } = cartSlice.actions;

export default cartSlice.reducer;
