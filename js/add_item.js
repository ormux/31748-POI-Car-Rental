let addItem = (car_id) => {

   // check if car exist in JSON file
   let car_in_json  = cars_array.find( (car) => car.id == car_id);
   // check if car exist in the shopping cart
   let car_in_cart = cart_array.find( (car) => car.id == car_id);

   let msg_unavailable = `${car_in_json.brand} ${car_in_json.model} is unavailable, we apologise for hte inconvenience`;
   let msg_already_added = `${car_in_json.brand} ${car_in_json.model} is already inside your cart.`;
   let msg_added_success = `${car_in_json.brand} ${car_in_json.model} has been added to your cart`;

   if(car_in_cart) {
      alert(msg_already_added);
   } 
   else if(car_in_json.availability == "false") {
      alert(msg_unavailable);
   } 
   else {
      cart_array.push(car_in_json);
      alert(msg_added_success);
   }
   return true;
}
