// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      quantity: 0,
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: "https://th.bing.com/th/id/OIP.nLi2A0Beu5RPL7TTAaH2mQHaHa?rs=1&pid=ImgDetMain",
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
