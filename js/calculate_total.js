let calculateTotal = (items) => {
   let total = 0; 
   $.each(items, function(index, item) {

      //id=item-id split string get id
      let car_id = item.id.split('-')[1];
      let car = cart_array.find( (car) => car.id == car_id );

      // (number of days) * (price per day)
      total += parseInt(item.value) * parseInt(car.price_per_day);
   });
   return total;
}
