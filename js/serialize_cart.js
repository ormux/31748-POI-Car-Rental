let serializeCart = (cart_array) => {
   cart_str_json = JSON.stringify(cart_array);
   window.sessionStorage.setItem("cart", cart_str_json);
   window.location.href="cart.html";
}
