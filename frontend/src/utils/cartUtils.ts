export const updateCart = (state: any) => {

  //calculate total quantity
  state.totalQuantity = state.items.reduce((total, item) => Number(total) + Number(item.quantity), 0);

  //calculate items price
  state.itemsPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);

  //calculate shipping price
  state.shippingPrice = state.itemsPrice > 1000 ? 0 : 100;

  //calculate tax price
  state.taxPrice = Number((0.15 * state.itemsPrice).toFixed(2));

  //calculate total price
  state.totalPrice = state.itemsPrice + state.taxPrice + state.shippingPrice;


  localStorage.setItem("cart", JSON.stringify(state));

  return state;
}