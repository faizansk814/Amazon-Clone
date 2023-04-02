let cartdata = JSON.parse(localStorage.getItem("cart")) || [];
let userData = JSON.parse(localStorage.getItem("user-list")) || [];

let cardNum = document.getElementById("cardnum");
let month = document.getElementById("month");
let year = document.getElementById("year");
let cvv = document.getElementById("cvv")
let paymentBtn = document.getElementById("paymentmake");

let GSTAmt = document.getElementById("GSTAmt")
let itemCount = document.getElementById("item_no");
let totalAmount = document.getElementById("total");
let totalAMT = document.getElementById("ordertotal");

// itemCounter();
// ShowTotalAmt();
// subAmt();
// GST();

function itemCounter(){
    var items = cartdata.reduce(function(acc, data){
        return acc + data.quantity;
    },0);
    itemCount.innerText = items; 
}

function subAmt(){
    var amt = cartdata.reduce(function(acc,data){
        return acc + data.price*data.quantity;
    },0);
    totalAmount.innerText = `₹ ${amt}`;
}

function ShowTotalAmt(){
    var amt = cartdata.reduce(function(acc,data){
        return acc + data.price*data.quantity;
    },0);
    totalAMT.innerText = `₹ ${amt + ((amt*5)/100)} `; 
}
function GST(){
    var amt = cartdata.reduce(function(acc,data){
        return acc + data.price*data.quantity;
    },0);
    GSTAmt.innerText = "₹" + ((amt*5)/100); 
}

paymentBtn.addEventListener("click", ()=>{
    alert("Payment succesful")
    window.location.href="index.html"
})