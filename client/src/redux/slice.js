import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchedProducts: [],
  topRatedProducts: [],
  filterProducts: [],
  categoryFilter: "",
  ratingFilter: null,
  priceFilter: [null, null],
  searchInput: null,
  cart: [],
  user: [],
  address: [],
  mode: "light",
};
export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.fetchedProducts = action.payload;
    },
    setTopRatedProducts: (state) => {
      state.topRatedProducts = state.fetchedProducts.filter(
        (product) => product.rating >= 4.8
      );
    },
    setCategory: (state, action) => {
      state.categoryFilter = action.payload;
    },
    setRating: (state, action) => {
      state.ratingFilter = action.payload;
    },
    setPrice: (state, action) => {
      action.payload.forEach((value, index) => {
        state.priceFilter[index] = action.payload[index];
      });
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setFilterProducts: (state, action) => {
      state.filterProducts = action.payload;
    },
    addToCart: (state, action) => {
      const indexOfProduct = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (indexOfProduct >= 0) {
        state.cart[indexOfProduct].quantity =
          state.cart[indexOfProduct].quantity + 1;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    deleteProductFromCArt: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseProductQunatity: (state, action) => {
      const indexOfProduct = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cart[indexOfProduct].quantity =
        state.cart[indexOfProduct].quantity + 1;
    },
    decreaseProductQunatity: (state, action) => {
      const indexOfProduct = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cart[indexOfProduct].quantity =
        state.cart[indexOfProduct].quantity === 1
          ? 1
          : state.cart[indexOfProduct].quantity - 1;
    },
    addUser: (state, action) => {
      console.log(state.user)
      console.log(action.payload);
      state.user = [...state.user, action.payload];
      // state.user=[...state.user,action.payload]
      // state.user=state.user.push(action.payload)
      console.log(state.user);

    },
    addAddress: (state, action) => {
      
      state.address = [...state.address, action.payload];
      console.log(state.address)
    },
    emptyCart: (state) => {
      state.cart = [];
    },
    clearFilters: (state) => {
      state.categoryFilter = "";
      state.searchInput = null;
      state.ratingFilter = null;
      state.priceFilter = [0, 2000];
      state.filterProducts = [];
    },
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const {
  setAllProducts,
  setTopRatedProducts,
  setCategory,
  setPrice,
  setRating,
  setFilterProducts,
  setSearchInput,
  addToCart,
  deleteProductFromCArt,
  increaseProductQunatity,
  decreaseProductQunatity,
  addUser,
  addAddress,
  emptyCart,
  clearFilters,
  setMode,
} = stateSlice.actions;
export default stateSlice.reducer;
