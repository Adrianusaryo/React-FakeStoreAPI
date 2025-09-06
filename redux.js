// Reducer

import { legacy_createStore } from "redux";

const cartReducer = (
  state = {
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD TO CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Store

const store = legacy_createStore(cartReducer);
console.log("oncreate store : ", store.getState());

// Subscribe

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// Dispatch

const action1 = { type: "ADD TO CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1);
