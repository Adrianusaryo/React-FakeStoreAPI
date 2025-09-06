import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// Action
const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

// Reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// Store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

console.log("ONCREATE STORE : ", store.getState());

// Subscribe untuk nge-log perubahan store
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// Dispatch action
const action1 = addToCart({ id: 1, qty: 20 });
store.dispatch(action1);
store.dispatch(login());
