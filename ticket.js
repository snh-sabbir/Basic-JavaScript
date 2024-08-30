var priceTicket = 800;
var age = 11;

if (age <= 10) {
    priceTicket = "Free Ticket.";
} else if (age > 10 && age < 60) {
    priceTicket = priceTicket * 50 / 100;
} else if (age >= 60) {
    priceTicket = priceTicket * 15 / 100;
}
else{
    priceTicket = priceTicket;
}

console.log(priceTicket)