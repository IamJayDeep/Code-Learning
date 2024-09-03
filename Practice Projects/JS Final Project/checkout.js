function saveCart() {
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
}