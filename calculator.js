var principal = prompt("Please enter the principal loan amount(Starting Amount): ",0);
var interest = prompt("Please enter the interest rate on your loan: ", 0);
var time = prompt("How many years are on the loan?");
var n = time * 12;
var r = (interest/100) / 12;
var d = ((1+r)*n-1) / (r*(1+r)*n);
var payment = principal / d;
console.log("Your monthly payment is $" + payment.toFixed(2));