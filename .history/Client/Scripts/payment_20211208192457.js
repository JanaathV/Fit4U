"use strict";
function confirmPayment() {

    let fname = document.getElementById("inputName");
    let lname = document.getElementById("inputLName");
    let address = document.getElementById("inputAddress");
    let city = document.getElementById("inputCity");
    let province = document.getElementById("inputProvince");
    let pcode = document.getElementById("inputPostalCode");
    let cardnum = document.getElementById("inputCardNumber");
    let expdate = document.getElementById("inputExpiry");
    let cvv = document.getElementById("inputSecurity");

    let text;

    if (fname = null){
        text = "Input cannot be empty";
    } else{
        alert("Your order has been placed! Please check your e-mail for confirmation.");
    
    }
    
}
//# sourceMappingURL=payment.js.map