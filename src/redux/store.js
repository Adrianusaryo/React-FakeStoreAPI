import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
  reducer: { cart: cartReducer },
});

// console.log("OnCreate Store : ", store.getState());

store.subscribe(() => {
  console.log("Store Change : ", store.getState());
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart.data));
});

export default store;
