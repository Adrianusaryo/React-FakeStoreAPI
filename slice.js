import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("ONCREATE STORE : ", store.getState());

// Subscribe untuk nge-log perubahan store
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
