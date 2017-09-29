// Business logic goes here
function Pizza(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
}

Pizza.prototype.fullDisplay = function() {
  return "You ordered a " + this.size + " pizza, with" + this.sauce + ", and these toppings: " + this.toppings;
}

Pizza.prototype.calculateCost = function() {
  var sizeCost;
  var sauceCost = 2;
  var toppingsMeat = 0;
  var toppingsVeg = 0;
  var toppingsOther = 0;
  if (this.size === "small") {
    sizeCost = 5;
  } else if (this.size === "medium") {
    sizeCost = 7;
  } else if (this.size === "large") {
    sizeCost = 10;
  }
  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] === "pepperoni" || "sausage" || "ham" || "bacon") {
      toppingsMeat +=1.25;
    } else {
      toppingsMeat = 0;
    }
    if (this.toppings[i] === "bell peppers" || "mushrooms" || "onion" || "artichoke" || "olives") {
      toppingsVeg +=1;
    } else {
      toppingsVeg = 0;
    }
    if (this.toppings[i] === "sardines" || "garlic" || "pineapple" ) {
      toppingsOther +=0.5;
    } else {
      toppingsOther = 0;
    }
  } return sizeCost + sauceCost + toppingsMeat + toppingsVeg + toppingsOther;
}



// UI logic goes here
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
   event.preventDefault();
   var name = $("#name").val();
   var size = $("#pizzaSize").val();
   var sauce = $("#pizzaSauce").val();
   var toppings = $("input:checkbox[name=pizzaToppings]:checked").map(function(){
     return $(this).val();
   }).get();
   var pizzaItem = new Pizza(size, sauce, toppings);
   var pizzaDisplay = pizzaItem.fullDisplay();
   var pizzaCost = pizzaItem.calculateCost();
   $(".order").show();
   $(".displayName").text(name);
   $(".result").text(pizzaDisplay);
   $(".cost").text(pizzaCost);

  });
});
