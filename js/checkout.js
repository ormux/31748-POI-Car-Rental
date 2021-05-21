let checkout = () => {
   let msg_cart_empty = "Your rental cart does not have any items";

   if(cart_array.length <= 0) {
      alert(msg_cart_empty);
      window.location.href="index.html";
   } 
   else {
      let items = document.getElementsByClassName('items');
      let total = 0;
      let validation_result = validateDays(items);
      if(validation_result == true) {
         total = calculateTotal(items);
         window.sessionStorage.setItem("total", total);
         window.location=href="checkout.html";
      }
   }
}
