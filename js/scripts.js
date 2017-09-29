// Business logic goes here
function Pizza(size, sauce, toppings) {
  this.sauce = sauce;
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.fullDisplay = function() {
  return ", You ordered a " + this.size + " pizza, with" + this.sauce + ", and these toppings: " + this.toppings;
}

Pizza.prototype.calculateCost = function() {

}



// UI logic goes here
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
   event.preventDefault();
   var name = $("#name").val();
   var size = $("#pizzaSize").val();
   var sauce = $("#pizzaSauce").val();
   var pizzaItem = new Pizza(movie, time, age);
   var pizzaDisplay = pizzaItem.fullDisplay();
   $(".result").text(name + pizzaDisplay);
   $(".cost").text();

  });
});
