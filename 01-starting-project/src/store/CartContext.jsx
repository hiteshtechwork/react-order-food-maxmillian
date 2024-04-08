import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});
function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (existingCartItemIndex > -1) {
    }
  }

  if (action.type === "REMOVE_ITEM") {
    //..update the state to remove a meal item
  }

  return state;
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });
  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
