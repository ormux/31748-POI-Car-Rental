function deleteItem(car_id){
   console.log(car_id);
   cart_array = cart_array.filter(car => car.id != car_id);
   window.sessionStorage.setItem("cart", JSON.stringify(cart_array));
   document.getElementById(`${car_id}`).remove();
}
