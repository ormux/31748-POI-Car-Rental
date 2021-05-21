let validateDays = (items) => {
   $.each(items, function(index, item) {
      if(item.value.length == 0|| item.value <= 0) {
         alert("One or more rental day values are NOT VALID");
         return false;
      }
   });
   return true;
}

let validateEmail = (email) => {

//https://medium.com/swlh/how-to-validate-an-email-address-in-javascript-78d33f87f5c6
   let regexp = /\S+@\S+\.\S+/;

   if(regexp.test(email))
      return true;
   return false;
}
