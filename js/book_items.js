let bookItems = () => {
   let email = document.getElementById('email').value;
   let msg_purchase_success = "Your cars have been booked and purchased";
   let msg_invalid_email    = "Your email address is NOT VALID";

   if(validateEmail(email)) {
      alert(msg_purchase_success);
      window.sessionStorage.clear();
      window.location.href="/index.html";
   } else {
      alert(msg_invalid_email);
   }
}
